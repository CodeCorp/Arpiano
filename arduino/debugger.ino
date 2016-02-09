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
  Serial.println(a);
  Serial.println(b);
  Serial.println(c);
  Serial.println(d);
  Serial.println(e);
  Serial.println(f);
  Serial.println(g);
  Serial.println(h);

  Serial.println("Next Set");
  delay(1000);
}
