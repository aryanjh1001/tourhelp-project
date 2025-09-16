import nodemailer from 'nodemailer';
import twilio from 'twilio';

// Email configuration
const emailTransporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// SMS configuration
const twilioClient = process.env.TWILIO_ACCOUNT_SID ? 
  twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN) : 
  null;

export const sendEmail = async (to: string, subject: string, text: string, html?: string) => {
  try {
    const info = await emailTransporter.sendMail({
      from: process.env.FROM_EMAIL || 'noreply@tourhelp.com',
      to,
      subject,
      text,
      html: html || text
    });

    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: error.message };
  }
};

export const sendSMS = async (to: string, body: string) => {
  if (!twilioClient) {
    console.log('SMS not configured, would send:', { to, body });
    return { success: true, message: 'SMS simulation' };
  }

  try {
    const message = await twilioClient.messages.create({
      body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to
    });

    console.log('SMS sent:', message.sid);
    return { success: true, sid: message.sid };
  } catch (error) {
    console.error('SMS error:', error);
    return { success: false, error: error.message };
  }
};

export const sendEmergencyNotification = async (user: any, alertData: any) => {
  const emailSubject = 'Emergency Alert - TourHelp';
  const emailBody = `
    Emergency alert triggered by ${user.name} (${user.email})

    Alert Type: ${alertData.type || 'Panic Button'}
    Location: ${alertData.address || 'Location unknown'}
    Time: ${new Date().toLocaleString()}

    Please respond immediately.
  `;

  const smsBody = `EMERGENCY: ${user.name} has triggered an alert. Location: ${alertData.address || 'Unknown'}. Time: ${new Date().toLocaleString()}`;

  // Send to emergency contacts if available
  if (user.emergencyContacts) {
    for (const contact of user.emergencyContacts) {
      await sendEmail(contact.email, emailSubject, emailBody);
      if (contact.phone) {
        await sendSMS(contact.phone, smsBody);
      }
    }
  }

  // Send to admin emails
  const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
  for (const email of adminEmails) {
    await sendEmail(email.trim(), emailSubject, emailBody);
  }
};