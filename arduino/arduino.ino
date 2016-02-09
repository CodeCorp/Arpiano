float sensitivity = 900.0;

boolean check0 = false;
boolean check1 = false;
boolean check2 = false;
boolean check3 = false;
boolean check4 = false;
boolean check5 = false;
boolean check6 = false;
boolean check7 = false;

void setup() {
Serial.begin(9600);
}

void loop() {


float a = analogRead(0);
float b = analogRead(1); 
float c = analogRead(2); 
float d = analogRead(3); 
float e = analogRead(4); 
float f = analogRead(5); 
float g = analogRead(6); 
float h = analogRead(7); 

 
if (a < sensitivity ) { 
if (!check0){
Serial.println("1");
check0 = !check0;

}
}

if (b < sensitivity) { 
if (!check1){
Serial.println("2");
check1 = !check1;

}
}

if (c < sensitivity ) { 
if (!check2){
Serial.println("3");
check2 = !check2;

}
}

if (d < sensitivity ) { 
if (!check3){
Serial.println("4");
check3 = !check3;

}
}

if (e < sensitivity ) { 
if (!check4){
Serial.println("5");
check4 = !check4;

}
}

if (f < sensitivity ) { 
     if (!check5){
Serial.println("6");
check5 = !check5;
}
}

if (g < sensitivity ) { 
     if (!check6){
Serial.println("7");
check6 = !check6;
}
}


if (h < sensitivity ) { 
     if (!check7){
Serial.println("8");
check7 = !check7;
}
}

if (a >sensitivity) {
if (check0){
check0 = !check0;
}
}

if (b >sensitivity) {
if (check1){
check1 = !check1;
}
}

if (c >sensitivity) {
if (check2){
check2 = !check2;
}
}

if (d >sensitivity) {
if (check3){
check3 = !check3;
}
}

if (e >sensitivity) {
if (check4){
check4 = !check4;
}
}

if (f >sensitivity) {
if (check5){
check5 = !check5;
}
}

if (g >sensitivity) {
if (check6){
check6 = !check6;
}
}

if (h >sensitivity) {
if (check7){
check7 = !check7;
}
}

delay(100);
}
