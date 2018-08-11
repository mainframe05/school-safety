var accountSid = 'AC40b9536120cf5084a615364f9debf79b'; // Your Account SID from www.twilio.com/console
var authToken = 'c6da6a13214341691fef55e5e81f1fb7'; // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

module.exports = function (app) {
    // POST route for sending a message.
    app.post("/api/alert", function (req, res) {
        console.log("alert", req.body);

        client.messages.create({
                body: 'message placeholder.',
                to: '+14075796570', // Text this number
                from: '+13213207928' // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));
    });
}