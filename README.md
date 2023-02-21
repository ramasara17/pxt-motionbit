# MOTION:BIT Extension for Microsoft MakeCode

This code provides the driver for [**MOTION:BIT** - Simplifying motion control with micro:bit](https://www.cytron.io/p-motionbit).

**MOTION:BIT** aims at simplifying robots & motion control projects making with micro:bit. With the built-in 4-channel DC motor driver, 8x servo control onboard Li-Ion batttery or external power input terminal, students can build projects with mechanical movements right away. The GPIO breakout ports with LED status indicators on all its IO pins enable additional sensors and modules to be applied to any projects conveniently. MOTION:BIT works with **micro:bit V1 & V2**.

Read more about MOTION:BIT here: https://www.cytron.io/p-motionbit

![MOTION:BIT](https://raw.githubusercontent.com/CytronTechnologies/pxt-motionbit/master/icon.png)

## Adding the Extension in MakeCode Editor  
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project** and give your project a meaningful name
* click on **Extensions** under the gearwheel :gear: menu
* search for '**motionbit**' or "**https://github.com/cytrontechnologies/pxt-motionbit**" 
* click on the motionbit card to install the extension

## Examples
### DC Motors

Run Motor 1 forward at 50% speed when button A is pressed, brake the motor when button B is pressed.

```blocks
input.onButtonPressed(Button.A, function () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 127)
})
input.onButtonPressed(Button.B, function () {
    motionbit.brakeMotor(MotionBitMotorChannel.M1)
})
```

### Servos

Button A pressed - Rotate Servo 1 to 0 degree.
Button B pressed - Rotate Servo 1 to 180 degree.
Button A+B pressed - Disable Servo 1. No pulse is sent to Servo 1 and it can be rotated by hand.

```blocks
input.onButtonPressed(Button.A, function () {
    motionbit.setServoPosition(MotionBitServoChannel.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    motionbit.setServoPosition(MotionBitServoChannel.S1, 180)
})
input.onButtonPressed(Button.AB, function () {
    motionbit.disableServo(MotionBitServoChannel.S1)
})
```

### RGB LEDs

Clear all RGB pixels.

```blocks
motionbit.clearAllRgbPixels()
```

Change the RGB pixels brightness to maximum.

```blocks
motionbit.setRgbBrightness(255)
```

Show color green on all RGB pixels and change the color one by one to red.

```blocks
motionbit.setAllRgbPixelsColor(0x00ff00)
basic.pause(1000)
motionbit.setRgbPixelColor(0, 0xff0000)
basic.pause(500)
motionbit.setRgbPixelColor(1, 0xff0000)
```
  
## License  
MIT  
  
## Supported targets  
* for PXT/microbit  
  
  
  
> Open this page at [https://cytrontechnologies.github.io/pxt-motionbit/](https://cytrontechnologies.github.io/pxt-motionbit/)  
  
  
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>  
