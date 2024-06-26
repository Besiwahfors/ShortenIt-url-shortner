import {Link,SupportTicket} from "../models/linkModels.js";
import generateShortCode from "../utils/generateShortcode.js";
import QRCode from "qrcode";

// Shorten a long URL
export const shortenUrl = async (req, res) => {
  try {
    const { longUrl, title, description } = req.body;
    const existingLink = await Link.findOne({
      longUrl,
      userId: req.user.userId,
    });
    if (existingLink) {
      return res.status(400).json({ message: "URL already shortened" });
    }
    const shortCode = generateShortCode();
    const shortLink = new Link({
      longUrl,
      title,
      description,
      shortCode,
      userId: req.user.userId,
    });
    await shortLink.save();
    res.status(201).json({ message: "URL shortened successfully", shortLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all existing short links for the logged in user
export const getAllLinks = async (req, res) => {
  try {
    const links = await Link.find({ userId: req.user.userId });
    res.json(
      links.map((link) => {
        return {
          _id: link._id,
          userId: link.userId,
          title: link.title,
          description: link.description,
          shortCode: link.shortCode,
          longUrl: link.longUrl,
          clicks: link.clicks,
          shortLink: `${req.protocol}://${req.headers.host}/links/${link.shortCode}`,
        };
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete an existing short link
export const deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    await Link.findOneAndDelete({ _id: id, userId: req.user.userId });
    res.json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single shortened link by shortCode
export const getShortLink = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const link = await Link.findOne({ shortCode });
    if (!link) {
      return res.status(404).json({ message: "Short link not found" });
    }
    res.json({
      _id: link._id,
      userId: link.userId,
      title: link.title,
      description: link.description,
      shortCode: link.shortCode,
      longUrl: link.longUrl,
      clicks: link.clicks,
      shortLink: `${req.protocol}://${req.headers.host}/links/${link.shortCode}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
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
      return res.status(404).json({ message: "Short link not found" });
    }
    res.redirect(308, link.longUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Generate QR code for a short link
export const generateQRCode = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const link = await Link.findOne({ shortCode });
    if (!link) {
      return res.status(404).json({ message: "Short link not found" });
    }
    const qrCodeData = link.longUrl;
    const qrCodeUrl = await QRCode.toDataURL(qrCodeData);
    res.json({ qrCodeUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller function to raise a new support ticket
export const raiseTicket = async (req, res) => {
  try {
    const { subject, description } = req.body;
    const ticket = new SupportTicket({ subject, description });
    await ticket.save();
    res.status(201).json({ message: "Ticket raised successfully", ticket });
  } catch (error) {
    console.error("Error raising support ticket:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
