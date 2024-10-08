
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com', 
        pass: '' 
    }
});


const mailOptions = {
    from: 'email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'Hello world',
    text: 'this email is sent by node js'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ' + error);
    }
    console.log('Email sent: ' + info.response);
});
