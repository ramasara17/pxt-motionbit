// tests go here; this will not be compiled when this package is used as an extension.

// Run Motor 1 forward at 50% speed for 1 second.
motionbit.runMotor(MotorChannel.M1, MotorDirection.Forward, 128)
basic.pause(1000)
motionbit.brakeMotor(MotorChannel.M1)

// Run Motor 2 backward at 100% speed for 1 second.
motionbit.runMotor(MotorChannel.M2, MotorDirection.Backward, 255)
basic.pause(1000)
motionbit.brakeMotor(MotorChannel.M2)

// Run Motor 3 forward at 100% speed for 1 second.
motionbit.runMotor(MotorChannel.M3, MotorDirection.Forward, 255)
basic.pause(1000)
motionbit.brakeMotor(MotorChannel.M3)

// Run Motor 4 backward at 50% speed for 1 second.
motionbit.runMotor(MotorChannel.M4, MotorDirection.Backward, 128)
basic.pause(1000)
motionbit.brakeMotor(MotorChannel.M4)

// Run all motors forward at 50% speed for 1 second.
motionbit.runMotor(MotorChannel.All, MotorDirection.Forward, 128)
basic.pause(1000)
motionbit.brakeMotor(MotorChannel.All)



// Move Servo 1 to 0 degree.
motionbit.setServoPosition(ServoChannel.S1, 0)
basic.pause(1000)

// Move Servo 2 to 10 degree.
motionbit.setServoPosition(ServoChannel.S2, 10)
basic.pause(1000)

// Move Servo 3 to 20 degree.
motionbit.setServoPosition(ServoChannel.S3, 20)
basic.pause(1000)

// Move Servo 4 to 30 degree.
motionbit.setServoPosition(ServoChannel.S4, 30)
basic.pause(1000)

// Move Servo 5 to 40 degree.
motionbit.setServoPosition(ServoChannel.S5, 40)
basic.pause(1000)

// Move Servo 6 to 50 degree.
motionbit.setServoPosition(ServoChannel.S6, 50)
basic.pause(1000)

// Move Servo 7 to 60 degree.
motionbit.setServoPosition(ServoChannel.S7, 60)
basic.pause(1000)

// Move Servo 8 to 70 degree.
motionbit.setServoPosition(ServoChannel.S8, 70)
basic.pause(1000)

// Disable all servos.
motionbit.disableServo(ServoChannel.All)



// Show red color on all RGB pixels.
motionbit.setAllRgbPixelsColor(motionbit.rgb(255, 0, 0))
basic.pause(1000)

// Show different color on each RGB pixels.
motionbit.setRgbPixelColor(0, motionbit.colors(RgbColors.Red))
motionbit.setRgbPixelColor(1, motionbit.colors(RgbColors.Blue))
basic.pause(1000)

// Change the brightness to 100% and show rainbow color.
motionbit.setRgbBrightness(255)
basic.pause(1000)

// Clear all RGB pixels.
motionbit.clearAllRgbPixels()
