import mongoose from 'mongoose';

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
const MONGO_URI = `mongodb+srv://sudhirkulat:${process.env.DB_PASSWORD}@sudhircodeman.qfb6p.mongodb.net/my_todo`
  try {
    await mongoose.connect(MONGO_URI);
    // await mongoose.connect('mongodb://127.0.0.1:27017/my_todo');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};
