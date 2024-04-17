import User from '../models/userModels.js';
import bcrypt from 'bcryptjs';


// Register new user
export const register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Check if confirmPassword field matches password
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user instance
    const user = new User({ username, email, password: hashedPassword });

    // Save user to database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login existing user
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    // Store user in session 
    // req.session.user = user; 
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get user info for logged in user
export const getUserInfo = (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ user: req.session.user });
};

// Logout a logged in user
export const logout = (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logout successful' });
};
