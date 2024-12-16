import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';

dotenv.config();

// Initialize the express app
const app = express();

// Initialize the database connection
connectDB();

// Middleware setup
app.use(cors()); // CORS configuration
app.use(express.json()); // Middleware to parse incoming JSON requests

// Routes
app.use('/api/auth', authRoutes); // Use the authentication routes

// Base route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Something went wrong!',
  });
});

// Export the app
export default app;
