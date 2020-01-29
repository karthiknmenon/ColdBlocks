// twilio sandbox - join flag-sharp
const accountSid = 'ACe72fa712ccadfebda35cfee9aeb3c9d4';
const authToken = '13b758715b01c14a7be78f911495c0d2';
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
var url = require('url');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// URL to composer-rest-server
const restUrl = 'http://localhost:3000/';

// function to send messages via whatsapp
function sendWhatsapp(temp) {
    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: 'Your package is at Thrissur, temperature: ' + temp + '.',
        to: 'whatsapp:+919586976787'
    }).then(message => console.log(message.sid));
}
// API to print all consumers

app.get('/api', function (req, res) {


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Consumer').then(function (response) {
        jsonResponse = response.data;
        console.log(response.data);
        res.send(response.data);
        // console.log(jsonResponse[0]['consumerID']);
        // res.send(jsonResponse[0]['consumerID']);
    }).then(function (response) {
        // res.send(jsonResponse[0]['consumerID']);
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];
        // var JSONobj = new object();            

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['consumerID'];
            JSONobj[key].push(x);

        }
        // res.send(arrID);
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }

    // var obj = JSON.parse(jsonResponse);
    // console.log(obj.consumerID);

});
app.get('/', function (req, res) {
    res.send("Server");
})
app.get('/data', function (req, res) {
    res.send("Data");
    // res.send(JSON.stringify(req.body));
})
// read nodeMCU temperature data
app.post('/data', function (req, res) {
    // res.send(JSON.stringify(req.body));
    console.log(JSON.stringify(req.body));
    var temp = req.body.Temperature;
    // console.log("log temp: "+ temp);
    // if (temp > 25) {
    //     sendWhatsapp(temp);
    // }
    
    
    Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3000/api/TemperatureDrop",
    "body": JSON.stringify({
        "asset": "resource:org.coldblocks.mynetwork.TrasnitPackage#A101",
        "newTemperature": String(req.body.temperature),
        "newLocation": "thrissur"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
    
})

app.listen(4000);
