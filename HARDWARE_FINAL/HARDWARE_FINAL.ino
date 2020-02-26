#include <ESP8266WiFi.h>
#include <SimpleDHT.h> // for temperature

int pinDHT22 = 2;
SimpleDHT22 dht22(pinDHT22);

const char* ssid     = "Hello";         //WiFi SSID
const char* password = "123456789901";  //WiFi Password

const char* host = "af5b017e.ngrok.io"; //Server URL

void setup() {
   
  Serial.begin(74880);
  
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
   delay(500);
   Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}


void loop() {

float temperature = 0;
float humidity = 0;
int err = SimpleDHTErrSuccess;
  if ((err = dht22.read2(&temperature, &humidity, NULL)) != SimpleDHTErrSuccess) {          //Check for connection error
    Serial.print("Read DHT22 failed, err="); Serial.println(err);delay(2000);
    return;
  }
 Serial.print("connecting to ");
 Serial.println(host);

 // Use WiFiClient class to create TCP connections
 WiFiClient client;
 const int httpPort = 80;
 if (!client.connect(host, httpPort)) {
  Serial.println("connection failed");
  return;
 }

 // We now create a URI for the request
 String url = "/";

 Serial.print("Temperature: ");
 Serial.print((float)temperature); Serial.println(" *C, ");

 Serial.print("Requesting URL: ");
 Serial.println(url);
 String loc = "del";
 String id = "H103";
String data = ("Temperature=" + String(((float)temperature)) + "&packageID=" + id + "&Location=" + loc);

   Serial.print("Requesting POST: ");     // HTTP FORMAT
   // Send request to the server:
   client.println("POST /tempData HTTP/1.1");
   client.println("Host: af5b017e.ngrok.io");
   client.println("Accept: */*");
   client.println("Content-Type: application/x-www-form-urlencoded");
   client.print("Content-Length: ");
   client.println(data.length());
   client.println();
   client.print(data);
 // This will send the request to the server

 unsigned long timeout = millis();
 while (client.available() == 0) {
 if (millis() - timeout > 5000) {
  Serial.println(">>> Client Timeout !");
  client.stop();
  return;
 }
}

 // Read all the lines of the reply from server and print them to Serial
 while(client.available()){
  String line = client.readStringUntil('\r');
  Serial.print(line);
 }

 Serial.println();
 Serial.println("closing connection");
}
