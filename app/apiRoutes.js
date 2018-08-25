// var accountSid = ''; // Your Account SID from www.twilio.com/console
// var authToken = ''; // Your Auth Token from www.twilio.com/console

var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTHTOKEN; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

module.exports = function (app) {
    // POST route for sending a message.
    app.post("/api/alert", function (req, res) {
        console.log("alert", req.body.emergencyMsg);

        client.messages.create({
                body: req.body.emergencyMsg,
                to: '+14075796570', // Text this number
                from: '+13213207928' // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));
    });
}