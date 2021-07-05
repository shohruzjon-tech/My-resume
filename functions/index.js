const functions = require('firebase-functions');
const nodemailer = require('nodemailer');


const cors = require('cors')({origin:true});


let transporter = nodemailer.createTransport({
  host: 'http://localhost:3000',
  port:3000,
  secure: true, 
  auth: {
    user: 'abdivakilov1981@gmail.com',
    pass: '@Shoh2001@',
  },
});


exports.sendEmail = functions.https.onRequest((req, res) => {
 
  console.log(
    'from sendEmail function. The request object is:',
    JSON.stringify(req.body)
  );

 
  cors(req, res, () => {
    
    const email = req.body.data.email;
    const name = req.body.data.name;
    const message = req.body.data.message;


    const mailOptions = {
      from: email,
      to: `abdivakilov1981@gmail.com`,
      subject: 'Your reume visited: ',
      text: `${name} says: ${message}`,
    };


    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send({
          data: {
            status: 500,
            message: error.toString(),
          },
        });
      }

      return res.status(200).send({
        data: {
          status: 200,
          message: 'sent',
        },
      });
    });
  });
});