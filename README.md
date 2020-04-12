![ColdBlocks](https://user-images.githubusercontent.com/41678651/71070470-d75e8000-21a0-11ea-9a20-0853cdaa476b.jpg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4fec8e8a-53cb-401c-98e2-f96498406be5/deploy-status)](https://app.netlify.com/sites/colddash/deploys)

# Specification
ColdBlocks is a temperature guided route optimization algorithm which uses blockchain for secure transactions throughout the Cold Chain Network. ColdBlocks is based on the following technologies - 
* __IoT__
    Using temperature sensors and GPS sensors along with node MCU ESP8266 module to provide WiFi connectivity. The data from these sensors is sent directly to a remote server. 
* __Blockchain__
    Blockchain is used for __Quality Assurance__ of the product being transported in cold storage. Every package is associated with a __threshold temperature__, if the temperature in which the consignment is being transported overshoots the threshold temperature, then the status of the product is updated to __"0"__ which means it's tampered.
* __coldAR__
    __Status Check__ for customers by just scanning a qr-code.
* __Route Optimization__
    Route Optimization based on __CVRP__ is implemented using Python and op-2 algorithm. Google or-tools is used for the same using Gooogle Maps API and Google Directions API.
* __Progressive Web App__ using angularJS and reactJS for admin and other actors of the use case.
* __Android App__ for QR-Code scanning.



## Hardware Requirements
* nodeMCU ESP8266 Module for Wifi Connectivity
* DHT22 Temperature Sensor for gathering Temperature Data
* U-Blox Neo 6M for gathering GPS Data
* Breadboard, basic connection wires 
## Software Requirements
### &nbsp;&nbsp;&nbsp;&nbsp;1. Blockchain 
* Version Specifications
    * Hyperledger Composer v0.20.9
    * Hyperledger fabric v1.2
    * Docker version 19.03.1, build 74b1e89
    * npm version - 6.11.3
    * node version - 8.16.1
* CardName - admin@coldblocks
* BusinessNetwork - coldblocks
* Network Version - 1.0.9
* BNA file - coldblocks@1.0.9.bna
* Netword Card - networkadmin.card
### &nbsp;&nbsp;&nbsp;&nbsp;2. Back-End 
* nodeJS backend 
* twilio for __WhatsApp__ integration
* open-cage API for reverse mapping of coordinates into location
* ngrok for public url 
### &nbsp;&nbsp;&nbsp;&nbsp;3. Front-End Application 
* PWA using angularJS for admin-UI and reactJS for user-UI
### &nbsp;&nbsp;&nbsp;&nbsp;4. Route Optimization 
* Route optimization is done using an op-2 algorithm which is  implemented using Python
* The data is then hosted on a port in the machine using Flask
* Version Requirements
    * Python Version - v3.5.6
    * pip3 Version - v20.0.2 
    * Flask Version - v1.1.1
    * Google ortools

### &nbsp;&nbsp;&nbsp;&nbsp;5. AR for Status Check
* AR.js
* three.js

# Setup and Installation
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To download and setup - 
&nbsp;&nbsp;&nbsp;&nbsp; `git clone https://github.com/mojojojo20/ColdBlocks.git` <br/>
&nbsp;&nbsp;&nbsp;&nbsp; `cd ColdBlocks`

### &nbsp;&nbsp;&nbsp;&nbsp;1. composer-rest-server
* `cd coldblocks`
    * Use Hyperledger documentation for installation and setup of Hyperledger Composer and Fabric
    * `composer-rest-server -c admin@coldblocks -n never -u true -w true`

### &nbsp;&nbsp;&nbsp;&nbsp;2. node Backend
* `cd coldblocks-nodejs`
    * `npm install` (to install all packages)  
    * `npm run dev`
* Use ngrok to generate a remote server link

### &nbsp;&nbsp;&nbsp;&nbsp;3. angular front-end (UI for admin)
* `cd coldblocks-angular`
    * `npm install` (to install all packages)    
    * `npm start`

### &nbsp;&nbsp;&nbsp;&nbsp;4. react front-end (UI for Suppliers, Manufacturers, Distributors & Consumers)
* `cd coldblocks-react`
    * `npm install` (to install all packages)    
    * `npm start`
* Auth implemented using passport.js with mongo DB
    * Credentials (username,password) : (admin,admin), (S01,coldblocks), (C01,Coldblocks)
* To run mongoDB - 
    * `sudo mongod`
    * `mongo`
    * To create a new auth credential - 
        * `use MyDatabase;`
        * `db.userInfo.insert({'username':'username','password':'password'});`

### &nbsp;&nbsp;&nbsp;&nbsp;5. coldblocks-AR
* `git clone https://github.com/mojojojo20/ColdBlocks-AR.git`
* `cd coldblocks-AR`
* update ngrok link in coldAR __index.html__ file
    * use app to scan QR-code
    * __Ok__ means the product is of optimal quality and __Tampered__ means that the product is not of optimal quality.

### &nbsp;&nbsp;&nbsp;&nbsp;6. Hardware Code - 
* `cd coldblocks-hardware`
    * Update server link in Hardware Code with latest generated ngrok link for node back-end on port 4000
    * Compile and Upload sketch to nodeMCU ESP8266 module using Arduino IDE

### &nbsp;&nbsp;&nbsp;&nbsp;7. Route Optimization - 
* `cd coldblocks-route`
    * Requires __Google Maps API, Directions API__    
    * `python3 vrp.py`
    * `curl 127.0.0.1:5000\`
    * Path `/sendLocation` to POST Addresses and path `/` to GET Optimal Path

Icon Library - Remix Icons

:v: :fist: