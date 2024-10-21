// This file is used to store all the configuration variables

// Require the dotenv library to load environment variables from a .env file
require('dotenv').config();

// Log environment variables to ensure they are loaded correctly
console.log('Environment Variables:');
console.log('PGUSER:', process.env.PGUSER);
console.log('PGHOST:', process.env.PGHOST);
console.log('PGDATABASE:', process.env.PGDATABASE);
console.log('PGPASSWORD:', process.env.PGPASSWORD);
console.log('PGPORT:', process.env.PGPORT);
console.log('PORT:', process.env.PORT);
console.log('EMAIL:', process.env.EMAIL);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);

// Assign PORT environment variable to a variable called PORT
const PORT = process.env.PORT;

// Exporting configuration variables
module.exports = {
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT,
    PORT,
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,

    // Email configuration
    emailConfig: {
        host: process.env.SMTP_HOST || 'smtp-mail.outlook.com', // e.g., smtp.gmail.com
        port: process.env.SMTP_PORT || 587, // Port 587 for TLS
        secure: false, // Use true for port 465
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false, // Change to true in production
        },
    },
};

