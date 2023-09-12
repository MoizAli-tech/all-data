const nodemailer = require("nodemailer");

async function mailer(name,email,id){

    const account = await nodemailer.createTestAccount();

    
    const transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'nicolette0@ethereal.email',
            pass: 'Bj5BGcaGPaENqZwdqf'
        }
    });

    // console.log(transport)

//    transport.sendMail({
//         from:`<${account.user}>`,
//         to: `<amoiz.3149@gmail.comm>`,
//         subject:`verify your email`,
//         text:"hello"
//         // html:`please click here to <a href="http://127.0.0.1:5000/verify?id=${id}" verify </a>your email `
//     },(error,info)=>{
//         if(error){
//             console.log(`error while sending mail`,error)
//         }else{
//             console.log("email has been sent",info)
//         }
//     }
//     )

    let info = await transport.sendMail({
        from:"'moiz' <nicolette0@ethereal.email>",
        to:`${email}`,
        subject:"verify your email",
        html:` hello ${name} please click to <a href="http://localhost:5000/verify/${id}">verify </a> your email`
    })

}

module.exports = mailer;