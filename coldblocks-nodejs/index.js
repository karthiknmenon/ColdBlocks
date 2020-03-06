// twilio sandbox - join flag-sharp
const accountSid = 'ACe72fa712ccadfebda35cfee9aeb3c9d4';
const authToken = '13b758715b01c14a7be78f911495c0d2';
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
var Request = require('request');
var crypto = require('crypto');
// var crypto = require('crypto');
var aes256 = require('aes256');
var QRCode = require('qrcode');
// for GPS coordinates
const opencage = require('opencage-api-client');
// to read .env file for API-Key
require('dotenv').config()
// open-cage API for reverse gen-encoding
opencage.geocode({
    q: '10.5545, 76.2247',
    language: 'fr'
}).then(data => {
    // console.log(JSON.stringify(data));
    if (data.status.code == 200) {
        if (data.results.length > 0) {
            var place = data.results[0];
            console.log(place.formatted);
            gpsLocation = place.formatted;
            // console.log(place.components.road);
            // console.log(place.annotations.timezone.name);
        }
    } else if (data.status.code == 402) {
        console.log('hit free-trial daily limit');
        console.log('become a customer: https://opencagedata.com/pricing');
    } else {
        // other possible response codes:
        // https://opencagedata.com/api#codes
        console.log('error', data.status.message);
    }
}).catch(error => {
    console.log('error', error.message);
});


QRCode.toString('http://aa306474.ngrok.io/HolderChange', {
    type: 'terminal'
}, function (err, url) {
    console.log(url)
});

// QRCode.toDataURL('https://www.google.com!', function (err, url) {
//     console.log(url)
//   });


// var key = 'my passphrase';
// var plaintext = 'my plaintext message';

// var encrypted = aes256.encrypt(key, plaintext);
// var decrypted = aes256.decrypt(key, encrypted);

// console.log(encrypted);
// console.log(decrypted);

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

app.get("/", (req, res) => {
    res.send("Server running");
})

// Admin to view all transactions

app.get('/api/ListTransactions', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/system/historian').then(function (response) {
        jsonResponse = response.data;
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
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['consumerID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// Get Consumer Details by ID

app.get('/api/ListConsumerId', function (req, res) {

    var queryID = req.query.cID;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Consumer/' + queryID).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

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
        "url": restUrl + "api/Consumer",
        "body": JSON.stringify({
            "$class": "org.coldblocks.mynetwork.Consumer",
            "consumerID": String(req.body.cID),
            "consumerName": String(req.body.cName)
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.log("Success");
        console.dir(JSON.parse(body));
    });
})

//API for Distributors

// List all Distributors

app.get('/api/ListDistributors', function (req, res) {


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Distributor').then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['distributorID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// API to list Distributor by ID 

app.get('/api/ListDistributorsId', function (req, res) {

    var queryID = req.query.dID;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Distributor/' + queryID).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['distributorID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});


// API to create a new Distribtuor

app.post('/api/CreateDistribtuor', function (req, res) {
    Request.post({
        "headers": {
            "content-type": "application/json"
        },
        "url": restUrl + "api/Distributor",
        "body": JSON.stringify({
            "$class": "org.coldblocks.mynetwork.Distributor",
            "distributorID": String(req.body.dID),
            "distributorName": String(req.body.dName)
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.log("Success");
        console.dir(JSON.parse(body));
    });
})

// API for Manufacturer 

// List all Manufacturers

app.get('/api/ListManufacturers', function (req, res) {


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Manufacturer').then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['manufacturerID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// API to list Manufacturer by ID 

app.get('/api/ListManufacterersId', function (req, res) {

    var queryID = req.query.mID;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Manufacturer/' + queryID).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['manufacturerID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// API to create a new Manufacturer

app.post('/api/CreateManufacturer', function (req, res) {
    Request.post({
        "headers": {
            "content-type": "application/json"
        },
        "url": restUrl + "api/Manufacturer",
        "body": JSON.stringify({
            "$class": "org.coldblocks.mynetwork.Manufacturer",
            "manufacturerID": String(req.body.mID),
            "manufacturerName": String(req.body.mName)
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.log("Success");
        console.dir(JSON.parse(body));
    });
})

// API for Suppliers 

// List all Suppliers

app.get('/api/ListSuppliers', function (req, res) {


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Supplier').then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['supplierID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// API to list Supplier by ID 

app.get('/api/ListSuppliersId', function (req, res) {

    var queryID = req.query.sID;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/Supplier/' + queryID).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['supplierID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// API to create a new Supplier

app.post('/api/CreateSupplier', function (req, res) {
    Request.post({
        "headers": {
            "content-type": "application/json"
        },
        "url": restUrl + "api/Supplier",
        "body": JSON.stringify({
            "$class": "org.coldblocks.mynetwork.Supplier",
            "supplierID": String(req.body.sID),
            "supplierName": String(req.body.sName)
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.log("Success");
        console.dir(JSON.parse(body));
    });
})

// Named Queries

// API to fetch all packages 
app.get('/api/ListPackages', function (req, res) {


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/queries/AllPackages').then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['packageID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// Query Package wrt destination 

app.get('/api/ListPackagesByDestination', function (req, res) {

    var queryDestination = req.query.packageDestination;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/queries/PackageDestination?packageDestination=' + queryDestination).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['packageID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// Query Package wrt holder 

app.get('/api/ListPackagesByHolder', function (req, res) {

    var queryHolder = req.query.packageHolder;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/queries/packageHolder?packageHolder=' + queryHolder).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['packageID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// Query Package wrt packageID

app.get('/api/ListPackagesById', function (req, res) {

    var queryID = req.query.packageId;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/queries/PackageId?packageid=' + queryID).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['packageID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// Query Package wrt current Location 

app.get('/api/ListPackagesByLocation', function (req, res) {

    var queryLocation = req.query.packageLocation;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/queries/PackageLocation?packageLocation=' + queryLocation).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['packageID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// Query Package wrt current Status 

app.get('/api/ListPackagesByStatus', function (req, res) {

    var queryStatus = req.query.packageStatus;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/queries/PackageStatus?packageStatus=' + queryStatus).then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['packageID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});


// API for Transit Packages

app.get('/api/ListTransitPackages', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axios.get(restUrl + 'api/TransitPackage').then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        showID();
    }).catch(function (error) {
        console.log(error);
    });

    function showID() {
        var JSONobj = {};
        var key = 1;
        JSONobj[key] = [];

        for (var i = 0; i < jsonResponse.length; i++) {
            let x = jsonResponse[i]['packageID'];
            JSONobj[key].push(x);

        }
        JSON.stringify(JSONobj);
        console.log(JSONobj);
    }
});

// API to create a new Transit Package

app.post('/api/CreateTransitPackage', function (req, res) {
    Request.post({
        "headers": {
            "content-type": "application/json"
        },
        "url": restUrl + "api/TransitPackage",
        "body": JSON.stringify({
            "$class": "org.coldblocks.mynetwork.TransitPackage",
            "packageID": String(req.body.packageId),
            "location": String(req.body.packageLocation),
            "temperature": String(req.body.packageTemperature),
            "destination": String(req.body.packageDestination),
            "holder": String(req.body.packageHolder),
            "status": String(req.body.packageStatus)
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.log("Success");
        console.dir(JSON.parse(body));
    });
})



// read nodeMCU temperature data

app.post('/tempData', function (req, res) {
    // console.log(JSON.stringify(req.body));
    var temp = req.body.Temperature;
    console.log("Temperature: " + temp);
    var packageID = req.body.packageID;
    console.log("Package Id: " + packageID);
    // var gpsLocation = req.body.Location;
    console.log("Location: " + gpsLocation);
    // set threshold temperature
    if (temp > 25) {
        sendWhatsapp(temp, gpsLocation);
        // console.log(temp);

        // send API Post for TemperatureDrop Event
        Request.post({
            "headers": {
                "content-type": "application/json"
            },
            "url": restUrl + "api/TemperatureDrop",
            "body": JSON.stringify({
                "asset": "resource:org.coldblocks.mynetwork.TransitPackage#" + packageID,
                "newTemperature": String(req.body.Temperature),
                "newLocation": String(gpsLocation)
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
        });
    } else {
        // send API Post for TemperatureDrop Event
        Request.post({
            "headers": {
                "content-type": "application/json"
            },
            "url": restUrl + "api/TemperatureDrop",
            "body": JSON.stringify({
                "asset": "resource:org.coldblocks.mynetwork.TransitPackage#" + packageID,
                "newTemperature": String(req.body.Temperature),
                "newLocation": String(gpsLocation)
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
        });
    }
});

// Update values of package when tampered using PUT

// const options = {
//     url: 'http://localhost:3000/api/TransitPackage/A103',
//     method: 'PUT',
//     headers: {
//         'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         "$class": "org.coldblocks.mynetwork.TransitPackage",
//         "packageID": "A103",
//         "location": "asd",
//         "temperature": String(temp),
//         "destination": "mum",
//         "holder": "den",
//         "status": "0"
//     })
// };

// setTimeout(
//     Request(options, function (err, res, body) {
//         // let json = JSON.parse(body);
//         console.log("PUT method");
//     }), 3000);

// Print Temperature Drop events

app.get('/tempDrop', function (req, res) {
    axios.get(restUrl + 'api/TemperatureDrop').then(function (response) {
        jsonResponse = response.data;
        res.send(response.data);
    }).then(function (response) {
        console.log("success");
    }).catch(function (error) {
        console.log(error);
    });
})

app.post('/HolderChange', function (req, res) {
    // console.log(JSON.stringify(req.body));
    var oHolder = req.body.oldHolder;
    // var oHolder = "hyder";
    console.log("oldHolder: " + oHolder);
    var packageID = req.body.packageID;
    // var packageID = "H156";
    console.log("Package Id: " + packageID);
    var nHolder = req.body.newHolder;
    // var nHolder = "dsdsds";
    console.log("Location: " + nHolder);
    Request.post({
        "headers": {
            "content-type": "application/json"
        },
        "url": restUrl + "api/HolderChange",
        "body": JSON.stringify({
            "asset": "resource:org.coldblocks.mynetwork.TransitPackage#" + packageID,
            "oldHolder": String(oHolder),
            "newHolder": String(nHolder)
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
    });
});




app.listen(4000);