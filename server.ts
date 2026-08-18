import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/lib/mongodb.js';
import { Enquiry } from './src/lib/models.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security Middlewares
  app.use(helmet({
    contentSecurityPolicy: false, // Vite needs this for dev
  }));
  app.use(cors());
  app.use(express.json());

  // Database Connection
  try {
    await connectDB();
  } catch (error) {
    console.error('[STARTUP] Failed to connect to MongoDB:', error);
    process.exit(1);
  }

  // API Routes
  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message, businessType, projectScope } = req.body;

    // Server-side validation
    if (!name || !email || !phone || !message || !businessType || !projectScope) {
      return res.status(400).json({ error: 'Missing required fields: name, email, phone, message, businessType, projectScope' });
    }

    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({ error: 'Name must be between 2 and 100 characters' });
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phone.match(phoneRegex) || phone.replace(/\D/g, '').length < 7) {
      return res.status(400).json({ error: 'Invalid phone number. Must contain at least 7 digits.' });
    }

    if (message.length < 10 || message.length > 5000) {
      return res.status(400).json({ error: 'Message must be between 10 and 5000 characters' });
    }

    if (businessType.length < 2 || businessType.length > 100) {
      return res.status(400).json({ error: 'Business type must be between 2 and 100 characters' });
    }

    if (projectScope.length < 2 || projectScope.length > 200) {
      return res.status(400).json({ error: 'Project scope must be between 2 and 200 characters' });
    }

    try {
      const enquiry = new Enquiry({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        businessIndustry: businessType.trim(),
        requiredSystem: projectScope.trim(),
        projectDetails: message.trim(),
        status: 'new',
        priority: 'medium',
        isRead: false,
        submittedAt: new Date(),
      });

      const savedEnquiry = await enquiry.save();

      console.log('[API] Enquiry stored:', {
        id: savedEnquiry._id,
        email: savedEnquiry.email,
        name: savedEnquiry.name,
      });

      res.json({
        success: true,
        enquiryId: savedEnquiry._id,
        message: 'Inquiry received and stored successfully.',
      });
    } catch (error) {
      console.error('[API] Error saving enquiry:', error instanceof Error ? error.message : String(error));
      res.status(500).json({ error: 'Failed to process inquiry. Please try again later.' });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SECURE_SERVER] running on http://localhost:${PORT}`);
  });
}

startServer();
