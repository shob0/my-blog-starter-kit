require("dotenv").config()

exports.handler = (event, _context, callback) => {
  const mailgun = require("mailgun-js")
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  })

  const email = {
    from: "Shobhit Singh <shobhitsingh6889@gmail.com>",
    to: `shobhit5@hotmail.com`,
    subject: "Someone Wants to connect with you",
    html: event.body,
  }

  mg.messages().send(email, (error, response) => {
    callback(error, {
      statusCode: 200,
      body: JSON.stringify(response),
    })
  })
}
