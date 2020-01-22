// twilio 
// sandbox - join flag-sharp
const accountSid = 'ACe72fa712ccadfebda35cfee9aeb3c9d4';
const authToken = '13b758715b01c14a7be78f911495c0d2';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
     from: 'whatsapp:+14155238886',
     body: 'Hello World',
     to: 'whatsapp:+919586976787'
   }).then(message => console.log(message.sid));