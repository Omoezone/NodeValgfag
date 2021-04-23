const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/send",(req,res) => {
    console.log(req.body.textField);
    subject = req.body.subject;
    const output = `
    <h1>Someone wants to contact you</h1>
    <h3>Contact informations:</h3>
    <pre>
    <ul>
        <il>Name: ${req.body.name}</il>
        <il>Email: ${req.body.email}</il>
        <il>Company: ${req.body.company}</il>
        <il>Subject: ${req.body.subject}</il>
    </ul>
    </pre>
    <h3>Message</h3>
    <p>${req.body.textField}</p>
    `;
    main();
    async function main() {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "imap.gmail.com", 
          port: 587,
          secure: false, 
          auth: {
            user: "williamnodekea@gmail.com", 
            pass: "Omoezone1221", 
          },
          tls:{
              rejectUnauthorized:false
          }
        });
      
        
        let info = await transporter.sendMail({
          from: '"NodeBot" <NodeBot@mail.com>', // sender address
          to: "williamnodekea@gmail.com", // list of receivers
          subject: subject, // Subject line
          text: "Hello world?", // plain text body
          html: output, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
    res.redirect("/")
})

module.exports = {
    router
}