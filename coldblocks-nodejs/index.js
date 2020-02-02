// twilio sandbox - join flag-sharp
const accountSid = 'ACe72fa712ccadfebda35cfee9aeb3c9d4';
const authToken = '13b758715b01c14a7be78f911495c0d2';
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
var Request = require('request');
var crypto = require('crypto')

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// URL to composer-rest-server
const restUrl = 'http://localhost:3000/';

// function to send messages via whatsapp
function sendWhatsapp(temp, gpsLocation) {
    client.messages.create({
        from: 'whatsapp:+14155238886',
        body: 'Your package is at location: ' + gpsLocation + ' and at temperature: ' + temp + '.',
        to: 'whatsapp:+919586976787'
    }).then(message => console.log(message.sid));
}

app.get("/", (req, res) => {
    res.send("Server Running");
})
// Admin to view all transactions

app.get('/api/ListTransactions', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/system/historian').then(function (response) {
        jsonResponse = response.data;
        // console.log(response.data);
        // res.send(response.data);
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
            let x = jsonResponse[i]['transactionId'];
            let y = jsonResponse[i]['transactionTimestamp'];
            // var obj = JSON.parse(x+y);
            JSONobj[key].push(y);
            key = i;
        }
        JSON.stringify(JSONobj);
        // console.log(JSONobj);
        res.send(JSONobj)
    }
});

// All Consumer API's

// API to print all consumers

app.get('/api/ListConsumers', function (req, res) {


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Consumer').then(function (response) {
        jsonResponse = response.data;
        // console.log(response.data);
        res.send(response.data);
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
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});
// API to create a new consumer
app.post('/api/CreateConsumer', function (req, res) {
    Request.post({
        "headers": {
            "content-type": "application/json"
        },
        "url": restUrl + "api/CreateConsumer",
        "body": JSON.stringify({
            "$class": "org.coldblocks.mynetwork.Consumer",
            "consumerID": "C103",
            "consumerName": "Enfa"
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
    });
})
// read nodeMCU temperature data
app.post('/data', function (req, res) {
    console.log(JSON.stringify(req.body));
    var temp = req.body.Temperature;
    if (temp > 25) {
        sendWhatsapp(temp);
        console.log(temp);
        // send API Post for TemperatureDrop Event
        Request.post({
            "headers": {
                "content-type": "application/json"
            },
            "url": restUrl + "api/TemperatureDrop",
            "body": JSON.stringify({
                "asset": "resource:org.coldblocks.mynetwork.TransitPackage#A101",
                "newTemperature": String(temp),
                "newLocation": "thrissur"
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            console.dir(JSON.parse(body));
        });
    }
});

app.get('/temp', function (req, res) {
    axios.get(restUrl + 'api/TemperatureDrop').then(function (response) {
        jsonResponse = response.data;
        // console.log(response.data);
        res.send(response.data);
    }).then(function (response) {
        console.log("success");
        // res.send(jsonResponse[0]['consumerID']);
        // showID();
    }).catch(function (error) {
        console.log(error);
    });
})
app.listen(4000);