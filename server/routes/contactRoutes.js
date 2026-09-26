const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();
const nodemailer = require('nodemailer');

// CONFIGURE NODEMAILER
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD   // App Password
  }
});

// POST - CONTACT FORM
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // SEND EMAIL
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_USERNAME,
      subject: 'New Contact Form Submission',
      text: `
You have a new contact message:

Name: ${name}
Email: ${email}

Message:
${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: 'Message received! Thank you for contacting me.'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET - ALL MESSAGES
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve messages' });
  }
});

// DELETE - MESSAGE BY ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedMessage = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }

    res.status(200).json({ message: 'Message deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Failed to delete message' });
  }
});

module.exports = router;
