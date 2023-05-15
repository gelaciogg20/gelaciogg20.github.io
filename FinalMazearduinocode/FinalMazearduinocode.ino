int analogVal;
int digitalVal;
String delimiter = "&";

//variable to hold incoming data
int incomingData;
void setup() {
pinMode(9, OUTPUT); 
pinMode(5, OUTPUT);
pinMode(6, OUTPUT); 
  Serial.begin(9600);



}

void loop() {  
  if(Serial.available() > 0){ // Checks whether data is comming from the serial port
    //if so, read the incoming data
    incomingData = Serial.read(); // Reads the data from the serial port
 }
 if (incomingData == '0') {
  digitalWrite(9, LOW); // Turn LED OFF
  digitalWrite(5,LOW);
  incomingData = 0;
  noTone(6);
 }
 else if (incomingData == '1') {
  digitalWrite(9, HIGH); //Turn LED ON
  digitalWrite(5, HIGH);
  tone(6, 440, 200);
//  delay(300);
//  noTone(6);
//  delay(300);

  incomingData = 0;
 } 
  
 

}
