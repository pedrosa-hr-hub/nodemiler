const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
     host: "outlook.office365.com",
     port: "587",
     secure: false,
     auth:{
          user: "****@hotmail.com",     
          pass: "***"
     }
});

transporter.sendMail({
     from: "Pedro de Sá <****@hotmail.com>",
     to: "****@outlook.com",
     subject: "Esse é um teste",
     text: "Oi, eu acho que esse texto funcionou",
}).then(message =>{
     console.log(message);
}).catch(err =>{
     console.log(err);
});

