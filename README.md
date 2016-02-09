#Arpiano - The Walking Piano

[![game version](https://img.shields.io/badge/version-1.0-red.svg)](https://img.shields.io/badge/version-0.0-red.svg)
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

_Now use your feet to play your favorite tunes on the piano._


![Screenshot](http://oi67.tinypic.com/345bdx1.jpg "Screenshot during game play")

**Watch the video demonstration at https://youtu.be/PmhyThRg3DA**

##Requirements
- npm (latest)
- node (latest)
- Arduino Mega or Uno (As per requirement for number of piano keys)
- 1 M Ohm resistances (one for each key)
- conducting plates (two for each key)

##Installation

```bash
git clone https://github.com/CodeCorp/Arpiano.git
cd Arpiano
npm install
node app.js
```

##Circuit Diagram
![Screenshot](http://i65.tinypic.com/fp7x2.jpg "Circuit diagram for 1 piano key")

##Circuit Assembly

Connect as per the circuit diagram for 1 piano key.You can make as many keys as required as per your arduino board's analog pins (A0 - A15).Presently the application supports 7 piano keys but can be easily extended as per the requirements. Make sure that the distance between the conducting plates is small enough so that feet can touch both plates simultaneously.

##Tips
- Avoid taping the plates to the ground or letting tape touch the conducting surfaces.
- Don't charge your laptop while playing the keys as the cable can cause the arduino to feed random values because of earthing on some laptops.
- You can try experimenting with higher resistances and higher analog pin sensing limit (around 900) so that keys can even work with slippers.
- The web-app is best viewed in full screen on Google Chrome.


##Contributors
* Arnav Vijayakar ([@arnav-vijayakar](https://github.com/arnav-vijayakar))
* Ishant Gupta ([@ishant27](https://github.com/ishant27))
* Rohan Goel ([@rohangoel96](https://github.com/rohangoel96))
* Pulkit Agarwal ([@thepulkitagarwal](https://github.com/thepulkitagarwal))


##License
Arpiano is licensed under the [MIT License](https://github.com/CodeCorp/Arpiano/blob/master/LICENSE.md)
