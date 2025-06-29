import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced CORS configuration for mobile compatibility
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Secure email configuration using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'ersshekhar05@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'psig ogod jkos gjvd'
  },
  tls: {
    rejectUnauthorized: false // Only for development, remove in production
  }
});

// Enhanced contact form endpoint with mobile-friendly error handling
app.post('/send-contact-form', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    
    const { name, email, subject, message } = req.body;
    
    // Validate all fields
    if (!name || !email || !subject || !message) {
      console.warn('Missing fields in contact form');
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required',
        missingFields: {
          name: !name,
          email: !email,
          subject: !subject,
          message: !message
        }
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER || 'ersshekhar05@gmail.com'}>`,
      to: process.env.RECEIVING_EMAIL || email,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${subject}</td></tr>
            <tr><td style="padding: 8px;" colspan="2"><strong>Message:</strong></td></tr>
            <tr><td style="padding: 8px; background: #f9f9f9; border-radius: 5px;" colspan="2">${message.replace(/\n/g, '<br>')}</td></tr>
          </table>
        </div>
      `
    };

    // Send email with timeout handling
    const sendEmailPromise = transporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email sending timeout')), 10000)
    );

    const info = await Promise.race([sendEmailPromise, timeoutPromise]);
    
    console.log('Email sent successfully:', info.response);
    return res.json({ 
      success: true,
      message: 'Thank you! Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Enhanced thank you email endpoint
app.post('/send-thank-you', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false,
        message: 'Email address is required'
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'ersshekhar05@gmail.com',
      to: email,
      subject: 'Thank You for Contacting Us!',
      text: 'Thank you for reaching out. We appreciate your time and will get back to you soon!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #4CAF50;">Thank You!</h2>
          <p>Thank you for reaching out. We appreciate your time and will get back to you soon!</p>
          <p>Best regards,<br>Your Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return res.json({ 
      success: true,
      message: 'Thank you email sent successfully!'
    });
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Failed to send thank you email'
    });
  }
});

// Health check endpoint for mobile apps
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});