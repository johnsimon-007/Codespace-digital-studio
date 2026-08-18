import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return mongoose.connection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      retryWrites: true,
      w: 'majority',
      maxPoolSize: 10,
    });

    isConnected = true;
    console.log('[DB] Connected to MongoDB');
    return mongoose.connection;
  } catch (error) {
    console.error('[DB] Connection failed:', error instanceof Error ? error.message : String(error));
    throw error;
  }
}

export function getDB() {
  if (!mongoose.connection || mongoose.connection.readyState === 0) {
    throw new Error('Database not connected. Call connectDB() first.');
  }
  return mongoose.connection;
}
