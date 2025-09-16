"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmergencyNotification = exports.sendSMS = exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const twilio_1 = __importDefault(require("twilio"));
const emailTransporter = nodemailer_1.default.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});
const twilioClient = process.env.TWILIO_ACCOUNT_SID ?
    (0, twilio_1.default)(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN) :
    null;
const sendEmail = async (to, subject, text, html) => {
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
    }
    catch (error) {
        console.error('Email error:', error);
        return { success: false, error: error.message };
    }
};
exports.sendEmail = sendEmail;
const sendSMS = async (to, body) => {
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
    }
    catch (error) {
        console.error('SMS error:', error);
        return { success: false, error: error.message };
    }
};
exports.sendSMS = sendSMS;
const sendEmergencyNotification = async (user, alertData) => {
    const emailSubject = 'Emergency Alert - TourHelp';
    const emailBody = `
    Emergency alert triggered by ${user.name} (${user.email})

    Alert Type: ${alertData.type || 'Panic Button'}
    Location: ${alertData.address || 'Location unknown'}
    Time: ${new Date().toLocaleString()}

    Please respond immediately.
  `;
    const smsBody = `EMERGENCY: ${user.name} has triggered an alert. Location: ${alertData.address || 'Unknown'}. Time: ${new Date().toLocaleString()}`;
    if (user.emergencyContacts) {
        for (const contact of user.emergencyContacts) {
            await (0, exports.sendEmail)(contact.email, emailSubject, emailBody);
            if (contact.phone) {
                await (0, exports.sendSMS)(contact.phone, smsBody);
            }
        }
    }
    const adminEmails = process.env.ADMIN_EMAILS?.split(',') || [];
    for (const email of adminEmails) {
        await (0, exports.sendEmail)(email.trim(), emailSubject, emailBody);
    }
};
exports.sendEmergencyNotification = sendEmergencyNotification;
//# sourceMappingURL=notifications.js.map