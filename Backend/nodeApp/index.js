import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors'; // Add this import
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for React frontend
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Email configuration (use environment variables in production)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ersshekhar05@gmail.com',
    pass: 'psig ogod jkos gjvd'
  }
});

// New endpoint for contact form submissions
app.post('/send-contact-form', (req, res) => {
  console.log('Received body:', req.body); // Add this line
  
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    console.log('Missing fields:', { name, email, subject, message }); // Add this
    return res.status(400).json({ 
      success: false,
      message: 'All fields are required' 
    });
  }

  const mailOptions = {
    from: '"Contact Form" <ersshekhar05@gmail.com>',
    to: email, // Your receiving email
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      You have a new contact form submission:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f4f4f4; padding: 10px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ 
        success: false,
        message: 'Error sending email',
        error: error.message 
      });
    }
    console.log('Email sent:', info.response);
    res.json({ 
      success: true,
      message: 'Thank you! Your message has been sent successfully!' 
    });
  });
});

// Keep your existing routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Thank You Email Sender</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
        button { 
          padding: 10px 20px; 
          font-size: 16px; 
          background-color: #4CAF50; 
          color: white; 
          border: none; 
          border-radius: 5px; 
          cursor: pointer;
        }
        button:hover { background-color: #45a049; }
        #message { margin-top: 20px; color: green; }
      </style>
    </head>
    <body>
      <h1>Send Thank You Email</h1>
      <button onclick="sendThankYou()">Send Thank You</button>
      <div id="message"></div>
      
      <script>
        function sendThankYou() {
          const messageDiv = document.getElementById('message');
          messageDiv.textContent = 'Sending email...';
          
          fetch('/send-thank-you', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .then(data => {
            messageDiv.textContent = data.message;
          })
          .catch(error => {
            messageDiv.textContent = 'Error sending email';
            console.error('Error:', error);
          });
        }
      </script>
    </body>
    </html>
  `);
});

app.post('/send-thank-you', (req, res) => {
  const {email} = req.body
  const mailOptions = {
    from: 'ersshekhar05@gmail.com',
    to: email,
    subject: 'Thank You!',
    text: 'Thank you for your time and consideration. We appreciate it!',
    html: '<b>Thank you for your time and consideration. We appreciate it!</b>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    res.json({ message: 'Thank you email sent successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});