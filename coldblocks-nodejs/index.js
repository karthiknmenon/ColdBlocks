// twilio 
// sandbox - join flag-sharp
const accountSid = 'ACe72fa712ccadfebda35cfee9aeb3c9d4';
const authToken = '13b758715b01c14a7be78f911495c0d2';
const client = require('twilio')(accountSid, authToken);

// function to send messages via whatsapp
function sendWhatsapp() {
    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: 'Your package is at Delhi, temperature 25*C',
        to: 'whatsapp:+919586976787'
    }).then(message => console.log(message.sid));
}

// functon to send SMS
// function sendSMS() {
//     client.messages
//         .create({
//             body: 'Your package is at Delhi, temperature 25*C',
//             from: '+14155238886',
//             to: '+919586976787'
//         })
//         .then(message => console.log(message.sid));

// }
// sendSMS();