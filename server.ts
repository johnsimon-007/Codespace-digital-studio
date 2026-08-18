import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

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

  // API Routes
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Server-side validation (Security Action)
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Sanitize input logic would go here
    console.log('Secure lead received:', { name, email, message });

    // In a real app, you would send an email or store in DB here
    // using environment variables for credentials
    
    res.json({ success: true, message: 'Inquiry received securely.' });
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
