const express = require("express");
const fetch = require("cross-fetch");
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const porta = 5501;

let app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    res.header('Access-Control-Allow-Headers', '*')

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', '*');
        return res.status(200).send({});
    }

    next();
})

app.get("/name-list/:num", async (req ,res )=>{

    let url = `https://gerador-nomes.herokuapp.com/nomes/${req.params.num}`
    let resp = await fetch(url);

    let fistNameList= await resp.json();

    url = `https://gerador-nomes.herokuapp.com/apelidos/${req.params.num}`
    resp = await fetch(url);

    let FastNameList = await resp.json();



    const nomeCompleto = fistNameList.map((nome, index) => `${nome} ${FastNameList?.[index]}`)

    

    res.statusCode = 200
    res.json(nomeCompleto)


})

app.post("/send", (req, res) => {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    let mailOptions = {
        from: `${req.body.email}`,
        to: 'interior.contactus@gmail.com',
        cc:`${req.body.email}`,
        subject: `Contact Us Form`,    
        text: `Feedback: ${req.message}
        
        From: ${req.body.name}
        Email: ${req.body.email}
        Telefone: ${req.body.phone}
        `,
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log('error', err);
        } else {
            console.log('email sent');
        }
    });
});

app.listen(porta, '127.0.0.1', ()=>{

    console.log(` server rodando na porta ${porta}`);
    console.log(`http://localhost:${porta}/`)

})
