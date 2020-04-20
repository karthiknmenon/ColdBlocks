# coldAR

Demo using [AR.js](https://github.com/jeromeetienne/AR.js) to display 3D rotating text in Augmented Reality. AR enabled QR-Code scanner to check the status of the product.

![ColdBlocks](https://user-images.githubusercontent.com/41678651/71070470-d75e8000-21a0-11ea-9a20-0853cdaa476b.jpg)

# Specification
ColdBlocks is a decentralized record management system to store electronic transaction records giving priority to the __Quality Assurance (QA), security and real time data availability__. It aims to enhance the working of the current cold chain network.   
ColdBlocks is based on the following technologies - 
* __IoT__
    Using temperature sensors and GPS sensors along with node MCU ESP8266 module to provide WiFi connectivity. The data from these sensors is sent directly to a remote server. 
* __Blockchain__
    Blockchain is used for __Quality Assurance__ of the product being transported in cold storage. Every package is associated with a __threshold temperature__, if the temperature in which the consignment is being transported overshoots the threshold temperature, then the status of the product is updated to __"0"__ which means it's tampered.
* __coldAR__
    __Status Check__ for customers by just scanning a qr-code.
* __Route Optimization__
    Route Optimization based on __VRP__ is implemented using Python and Google or-tools, Gooogle Maps API and Google Directions API.
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
* Network Version - 1.1.1
* BNA file - coldblocks@1.1.1.bna
* Netword Card - networkadmin.card
### &nbsp;&nbsp;&nbsp;&nbsp;2. Back-End 
* nodeJS backend 
* twilio for __WhatsApp__ integration
* open-cage API for __reverse geo encoding__ of coordinates into location
* ngrok for public url 
### &nbsp;&nbsp;&nbsp;&nbsp;3. Front-End Application 
* PWA using angularJS for admin-UI and reactJS for user-UI
* react-google-maps for live mapping of package location on to maps
* Downloadable QR-Code for HolderChange event on admin's login
* Link : ```https://colddash.netlify.com```
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
    * Change __nodeURL__ in variables.jsx with the new server URL.
    * `npm start`
    * Basic Auth Credentials - 
        * __username__ : admin
        * __password__ : admin

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
    * Requires __Google Maps API, Directions API, Google or-tools__  
    * `python3 vrp.py`
    * `curl 127.0.0.1:5000\`
    * Path `/sendLocation` to POST Addresses and path `/` to GET Optimal Path


:v: :fist: