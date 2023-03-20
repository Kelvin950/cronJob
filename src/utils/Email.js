// import sgMail from '@sendgrid/mail'
const sgMail =  require("@sendgrid/mail")

exports.sendEmail = async(data)=>{
console.log("ds")
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: `${data.to}`, // Change to your recipient
  from: `${data.from}`, // Change to your verified sender
  subject: `${data.title}`,
  
  html: `<p>${data.notes}</p>`,
};

await sgMail.send(msg)

} ;