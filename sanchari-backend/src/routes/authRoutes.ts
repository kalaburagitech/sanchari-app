import express from 'express';
import { register, login } from '../controllers/authController';

const router = express.Router();

// Route to register
router.post('/register', async (req, res) => {
  try {
    await register(req, res);  // Ensure proper function call here
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to login
router.post('/login', async (req, res) => {
  try {
    await login(req, res);  // Ensure proper function call here
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
