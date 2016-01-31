void setup() {
  Serial.begin(9600);
}

int i=1;
void loop() {
  Serial.println(i++);
  if(i==7){i=1;}
  delay(1000); // poll every 100ms
}