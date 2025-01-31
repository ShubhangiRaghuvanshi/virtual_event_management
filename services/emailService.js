
require('dotenv').config(); // Load environment variables from .env file

const nodemailer = require('nodemailer');

const sendRegistrationEmail = async (recipientEmail) => {
    try {
        // Generate a test account from Ethereal
        const testAccount = await nodemailer.createTestAccount();

        // Create a transporter using Ethereal SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // Generated Ethereal user
                pass: testAccount.pass, // Generated Ethereal password
            },
        });

        // Define the email options
        const mailOptions = {
            from: '"Virtual Events" <no-reply@virtualevents.com>', // Sender address
            to: recipientEmail, // Recipient email
            subject: 'Event Registration Confirmation', // Email subject
            text: 'Thank you for registering for the event!', // Plain text body
            html: '<p>Thank you for <b>registering</b> for the event!</p>', // HTML body
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Preview URL in the console
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Call the function with a test recipient email
sendRegistrationEmail('test@example.com');
module.exports={sendRegistrationEmail}