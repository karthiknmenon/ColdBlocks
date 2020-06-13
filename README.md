![ColdBlocks](https://user-images.githubusercontent.com/41678651/71070470-d75e8000-21a0-11ea-9a20-0853cdaa476b.jpg)

![](https://img.shields.io/github/issues/mojojojo20/ColdBlocks)  ![](https://img.shields.io/github/forks/mojojojo20/ColdBlocks)  ![](https://img.shields.io/github/stars/mojojojo20/ColdBlocks) ![](https://img.shields.io/github/license/mojojojo20/ColdBlocks)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4fec8e8a-53cb-401c-98e2-f96498406be5/deploy-status)](https://app.netlify.com/sites/colddash/deploys)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/10206602/SzzdCfxE)
<br />
:truck: :snowflake: :thermometer:
# Problem Statement 
Cold Chain Logistics company lack the an organised system for __Quality Assurance__ and __Tracking__ which provides __real time data availability__ and __end-to-end data transparency.__ End Consumers have no means of determining the __quality of the product during transportation__ and have to rely on expiry date mentioned on the product.

# Solution
__ColdBlocks__ is a product that enables secure transactions in a cold chain network using __blockchain__. It provides real time data availability and end to end transparency using __IoT__, the goal of the product is to allow the cold chain network to carefully check the status of the product during transportation and to maintain a secure log of transactions. It also allows the end consumers of the product to check if the product was transported in optimal temperature during transportation or not. 

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
    Route Optimization is based on __VRP__ is implemented using Python and Google or-tools, Gooogle Maps API and Google Directions API.
* __Progressive Web App__ using angularJS and reactJS for admin and other actors of the use case.
* __Android App__ for QR-Code scanning.
ColdBlocks was developed as part of our final year project during B.tech. 
###### Say __Hi__ to our contributors - 
###### &nbsp;&nbsp;&nbsp;&nbsp; [Karthik Menon](https://github.com/mojojojo20) :computer: :bug: :rocket:
###### &nbsp;&nbsp;&nbsp;&nbsp; [Denil John Titus](https://github.com/deniltitus) :book: :open_file_folder:
###### &nbsp;&nbsp;&nbsp;&nbsp; [Jim Thomas](https://github.com/jimthomas1997) :computer: :bar_chart:
###### &nbsp;&nbsp;&nbsp;&nbsp; [Kevin Thomas](https://github.com/iamkt23) :electric_plug: :book:

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
* PWA using angularJS for admin-UI and reactJS for both admin and authorised users
* react-google-maps for live mapping of package location on to maps
* Downloadable and Dynamic QR-Code generator for HolderChange event on admin's login
* Link : ```https://colddash.netlify.com```
### &nbsp;&nbsp;&nbsp;&nbsp;4. Route Optimization 
* is implemented using Python and __Google or-tools, Gooogle Maps API and Google Directions API__.
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
<br />
&nbsp;&nbsp;&nbsp;&nbsp; `git clone https://github.com/mojojojo20/ColdBlocks.git` <br/>
&nbsp;&nbsp;&nbsp;&nbsp; `cd ColdBlocks`

### &nbsp;&nbsp;&nbsp;&nbsp;1. composer-rest-server
* `cd coldblocks`
    * Use Hyperledger documentation for installation and setup of Hyperledger Composer and Fabric
    * Start the network and install the BNA.
    * Start the composer REST server using, `composer-rest-server -c admin@coldblocks -n never -u true -w true`
    * To clear test data in development environment, run `composer network reset -c admin@coldblocks`    

### &nbsp;&nbsp;&nbsp;&nbsp;2. node Backend
* `cd coldblocks-nodejs`
    * `npm install` (to install all packages)  
    * `npm run dev`
* Use ngrok to generate a remote server link
* Use the __generated ngrok URL as nodeURL__ in reactJS front-end and as the __HostURL__ in hardware code.

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
    * Credentials for all other users can be set through the admin login. All passwords are SHA256 encrypted.

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
    * Requires __Google Maps API, Directions API, Google or-tools, python3.7__  
    * `python3 vrp.py`
    * `curl 127.0.0.1:5000\`
    * Path `/sendLocation` to POST Addresses and path `/` to GET Optimal Path

> __Disclaimer__ Please Note that this is a research project. 