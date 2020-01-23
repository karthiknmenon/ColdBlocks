// twilio 
// sandbox - join flag-sharp
const accountSid = 'ACe72fa712ccadfebda35cfee9aeb3c9d4';
const authToken = '13b758715b01c14a7be78f911495c0d2';
const client = require('twilio')(accountSid, authToken);
// express and axios
const express = require('express');
const axios = require('axios');

const app = express();

// function to send messages via whatsapp
function sendWhatsapp() {
    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: 'Your package is at Delhi, temperature 25*C',
        to: 'whatsapp:+919586976787'
    }).then(message => console.log(message.sid));
}

// sendWhatsapp();

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

// API to print all consumers

app.get('/api', function(req, res) {
    
    
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                
            axios.get('http://localhost:3000/api/Consumer').then(function (response){
                console.log(response.data);
                jsonResponse = response.data;
                // res.send(jsonResponse);
                // var obj = jsonResponse['consumerID'];
                console.log(jsonResponse[0]['consumerID']);
                // res.send(jsonResponse[0]['consumerID']);
            }).then(function (response){
                // res.send(jsonResponse[0]['consumerID']);
                showID();
            }).catch(function (error) {
            console.log(error);
          });

          function showID(){
            //   for(var i=0;i<2;i++)
            //   {res.send(jsonResponse[2]['consumerID']);}
            // console.log(jsonResponse.length);
            var arr = new Array();
            for(var i=0;i<jsonResponse.length;i++){
                arr.push(jsonResponse[i]['consumerID'].replace(/\"/g, ""));
            }
            res.send(arr);
          }

            // var obj = JSON.parse(jsonResponse);
            // console.log(obj.consumerID);
            
});


app.listen(4000);