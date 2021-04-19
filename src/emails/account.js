const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'david.hough1991@gmail.com',
    subject: 'Thanks for joining in!',
    text: `welcome to the app, ${name}. Let me know how you get along with the app.`,
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'david.hough1991@gmail.com',
    subject: 'Sorry to see you leave!',
    text: `Sorry you are leaving, ${name}. Let me know if there is anything i could of done to improve your stay`,
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
}
