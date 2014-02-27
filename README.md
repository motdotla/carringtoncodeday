# carringtoncodeday

Curriculum for Carrington CodeDay [@riversideio][http://twitter.com/riversideio].

## Usage

```
npm install
node arduino/led.js
node arduino/countdown.js
```

## Guide

### Requirements

* Purchase Arduino - [Mega 2560](http://arduino.cc/en/Main/ArduinoBoardMega2560#.Uw5lwvRdUU4)
* Install the [Arduino software](http://arduino.cc/en/Main/Software#.Uw5l3vRdUU4) on your computer.
* Plug in your Arduino or Arduino compatible microcontroller via USB
* Open the Arduino (software) IDE, select: File > Examples > Firmata > StandardFirmata
* Click the "Upload" button.
* Install Node.js - [http://nodejs.org/](http://nodejs.org)

### Writing the rocket launch sequence

We will call it `countdown.js`.

```
vim arduino/countdown.js
```

Paste the following.
```
var five    = require("johnny-five");
var board   = new five.Board();

board.on("ready", function() {
  // here is where our launch sequence code will go.
});
```
