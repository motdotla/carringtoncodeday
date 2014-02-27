# carringtoncodeday

Curriculum for Carrington CodeDay [@riversideio](http://twitter.com/riversideio).

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

### Writing the led.js strobing code

Introduce them gently by writing a simple strobing programming. We are going to make an LED flash.

We will call it `led.js`.

```
vim arduino/led.js
```

Paste the following.

```javascript
var five    = require("johnny-five");
var board   = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  (new five.Led(13)).strobe(2500);
});
```

Put an LED in pin 13 of the Arduino board with its ground leg going into GND pin.

Now, let's run the script from the command line.

```
npm install
node arduino/led.js
```

### Writing the rocket launch sequence

We will call it `countdown.js`.

```
vim arduino/countdown.js
```

Paste the following.

```javascript
var five    = require("johnny-five");
var board   = new five.Board();

board.on("ready", function() {
  // here is where our launch sequence code will go.
});
```

Cool, now we are watching the board. Let's add debugging. Change to this:

```javascript
...
var board   = new five.Board({
  debug: true
});
...
```

Next, let's write the countdown code. This should decrement a 'count' by 1 every 1 second - just like they do at Houston Control with the space shuttle.

We will use `setInterval` along with `clearInterval` to maket his work in JavaScript.

```javascript
var countDown = function(callback){
  var count = 10;
  var counter = setInterval(function() {
    console.log(count);

    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
      callback("LIFT OFF!");
    }
  }, 1000);
}

```

Let's break down this code. We are creating a a function called `countDown`. Inside that function is a count, and a counter. The count begins by setting it to a value of `10`. The counter then runs a bit of code every `1000` milliseconds. 1,000 milliseconds is 1 second.

Inside the counter you can see that we are logging out the count using console.log. And the following line decrements the value. Then finally, when the count is 0 or less, we stop the interval running by using clearInterval. Lastly, we log out "LIFT OFF!".

Good job, we've written a counter. Before, that we wrote the basics of setting up our board. Now, let's combine the two.

```
// timer countdown
var countDown = function(callback){
  var count = 10;
  var counter = setInterval(function() {
    console.log(count);

    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
      callback("LIFT OFF!");
    }
  }, 1000);
}

//// board control
var five    = require("johnny-five");
var board   = new five.Board({
  debug: true
});

board.on("ready", function() {
  var led = new five.Led({
    pin: 13
  });

  led.off();

  countDown(function(resp) {
    console.log(resp);
    led.on();
  });
});
```

Now, after the 10 seconds are over, we turn on the led. That led is simulating our launch of the rocket at this time.
