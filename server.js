const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test email connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email configuration error:', error);
  } else {
    console.log('Email service is ready to take messages');
  }
});

// Email endpoint
app.post('/api/send-consultation', async (req, res) => {
  try {
    console.log("INSIDE SERVER - Form received!");
    const { fullName, gender, dob, phone, email, issue } = req.body;

    console.log('Received form data:', { fullName, gender, dob, phone, email, issue });
    console.log('Email user:', process.env.EMAIL_USER);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📋 New Consultation Form Submission from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              background-color: #f5f7fa;
              line-height: 1.6;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #3E517A 0%, #CC76A1 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              font-size: 28px;
              font-weight: 700;
              margin-bottom: 8px;
              letter-spacing: -0.5px;
            }
            .header p {
              font-size: 14px;
              opacity: 0.95;
              font-weight: 300;
            }
            .content {
              padding: 40px 30px;
            }
            .greeting {
              margin-bottom: 30px;
            }
            .greeting p {
              font-size: 16px;
              color: #333;
              margin-bottom: 5px;
            }
            .greeting strong {
              color: #CC76A1;
              font-weight: 700;
            }
            .details-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
              margin: 30px 0;
              background-color: #f8f9fa;
              padding: 25px;
              border-radius: 8px;
            }
            .detail-item {
              border-left: 3px solid #CC76A1;
              padding-left: 15px;
            }
            .detail-label {
              font-size: 12px;
              font-weight: 700;
              color: #999;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 6px;
            }
            .detail-value {
              font-size: 15px;
              color: #333;
              font-weight: 600;
            }
            .issue-section {
              margin-top: 30px;
              padding-top: 30px;
              border-top: 2px solid #e0e0e0;
            }
            .issue-label {
              font-size: 12px;
              font-weight: 700;
              color: #999;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 12px;
            }
            .issue-content {
              background-color: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              border-left: 3px solid #CC76A1;
              color: #333;
              font-size: 15px;
              line-height: 1.7;
            }
            .divider {
              height: 1px;
              background-color: #e0e0e0;
              margin: 30px 0;
            }
            .footer {
              background-color: #3E517A;
              color: white;
              padding: 25px 30px;
              text-align: center;
              font-size: 13px;
            }
            .footer p {
              margin-bottom: 8px;
            }
            .footer-link {
              color: #CC76A1;
              text-decoration: none;
              font-weight: 600;
            }
            .icon {
              display: inline-block;
              width: 24px;
              height: 24px;
              background: #CC76A1;
              color: white;
              border-radius: 50%;
              line-height: 24px;
              text-align: center;
              font-size: 14px;
              margin-right: 8px;
              font-weight: bold;
            }
            @media (max-width: 600px) {
              .details-grid {
                grid-template-columns: 1fr;
                gap: 15px;
              }
              .header h1 {
                font-size: 24px;
              }
              .container {
                border-radius: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <h1>📋 New Consultation Submission</h1>
              <p>Swarn Homoeopathy</p>
            </div>

            <!-- Content -->
            <div class="content">
              <div class="greeting">
                <p>Hello,</p>
                <p>You have received a new consultation form submission from <strong>${fullName}</strong>. Here are the details:</p>
              </div>

              <!-- Patient Details Grid -->
              <div class="details-grid">
                <div class="detail-item">
                  <div class="detail-label">👤 Full Name</div>
                  <div class="detail-value">${fullName}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">⚧ Gender</div>
                  <div class="detail-value">${gender}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">📅 Date of Birth</div>
                  <div class="detail-value">${dob}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-label">📞 Phone Number</div>
                  <div class="detail-value">${phone}</div>
                </div>
              </div>

              <!-- Email -->
              <div class="detail-item" style="border-left: 3px solid #CC76A1; padding-left: 15px; margin-bottom: 20px;">
                <div class="detail-label">📧 Email Address</div>
                <div class="detail-value">
                  <a href="mailto:${email}" style="color: #CC76A1; text-decoration: none;">${email}</a>
                </div>
              </div>

              <!-- Issue Section -->
              <div class="issue-section">
                <div class="issue-label">🏥 Patient's Issue</div>
                <div class="issue-content">
                  ${issue}
                </div>
              </div>

              <div class="divider"></div>

              <!-- Call to Action -->
              <div style="text-align: center; margin-top: 30px;">
                <p style="color: #666; font-size: 14px; margin-bottom: 15px;">Please review this submission and contact the patient at your earliest convenience.</p>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <p><strong>Swarn Homoeopathy</strong></p>
              <p>Natural & Health Solution</p>
              <p style="margin-top: 12px; opacity: 0.8;">This is an automated email from your consultation form system.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Ready to receive form submissions`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

