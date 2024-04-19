import Link from '../models/linkModels.js';
import generateShortCode from '../utils/generateShortcode.js';
import QRCode from 'qrcode';
import jwt from 'jsonwebtoken';

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET_CODE, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    
    // Attach user information to request object
    req.user = decoded; 
    next();
  });
};

// Shorten a long URL
export const shortenUrl = async (req, res) => {
  try {
    const { url, name } = req.body;
    const existingLink = await Link.findOne({ url, userId: req.user.userId });
    if (existingLink) {
      return res.status(400).json({ message: 'URL already shortened' });
    }
    const shortCode = generateShortCode();
    const shortLink = new Link({ url, name, shortCode, userId: req.user.userId });
    await shortLink.save();
    res.status(201).json({ message: 'URL shortened successfully', shortLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all existing short links for the logged in user
export const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find({ userId: req.user.userId });
    res.json(links);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete an existing short link
export const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    await Link.findOneAndDelete({ _id: id, userId: req.user.userId });
    res.json({ message: 'Link deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Redirect to original URL associated with the short code and increase link clicks
export const redirectShortLink = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const link = await Link.findOneAndUpdate(
      { shortCode },
      { $inc: { clicks: 1 } },
      { new: true }
    );
    if (!link) {
      return res.status(404).json({ message: 'Short link not found' });
    }
    res.redirect(308, link.url);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Generate QR code for a short link
export const generateQRCode = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const link = await Link.findOne({ shortCode });
    if (!link) {
      return res.status(404).json({ message: 'Short link not found' });
    }
    const qrCodeData = link.url;
    const qrCodeUrl = await QRCode.toDataURL(qrCodeData);
    res.json({ qrCodeUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
