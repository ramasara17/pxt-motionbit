// tests go here; this will not be compiled when this package is used as an extension.

// Run Motor 1 forward at 50% speed for 1 second.
motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 128)
basic.pause(1000)
motionbit.brakeMotor(MotionBitMotorChannel.M1)

// Run Motor 2 backward at 100% speed for 1 second.
motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Backward, 255)
basic.pause(1000)
motionbit.brakeMotor(MotionBitMotorChannel.M2)

// Run Motor 3 forward at 100% speed for 1 second.
motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
basic.pause(1000)
motionbit.brakeMotor(MotionBitMotorChannel.M3)

// Run Motor 4 backward at 50% speed for 1 second.
motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Backward, 128)
basic.pause(1000)
motionbit.brakeMotor(MotionBitMotorChannel.M4)

// Run all motors forward at 50% speed for 1 second.
motionbit.runMotor(MotionBitMotorChannel.All, MotionBitMotorDirection.Forward, 128)
basic.pause(1000)
motionbit.brakeMotor(MotionBitMotorChannel.All)



// Move Servo 1 to 0 degree.
motionbit.setServoPosition(MotionBitServoChannel.S1, 0)
basic.pause(1000)

// Move Servo 2 to 10 degree.
motionbit.setServoPosition(MotionBitServoChannel.S2, 10)
basic.pause(1000)

// Move Servo 3 to 20 degree.
motionbit.setServoPosition(MotionBitServoChannel.S3, 20)
basic.pause(1000)

// Move Servo 4 to 30 degree.
motionbit.setServoPosition(MotionBitServoChannel.S4, 30)
basic.pause(1000)

// Move Servo 5 to 40 degree.
motionbit.setServoPosition(MotionBitServoChannel.S5, 40)
basic.pause(1000)

// Move Servo 6 to 50 degree.
motionbit.setServoPosition(MotionBitServoChannel.S6, 50)
basic.pause(1000)

// Move Servo 7 to 60 degree.
motionbit.setServoPosition(MotionBitServoChannel.S7, 60)
basic.pause(1000)

// Move Servo 8 to 70 degree.
motionbit.setServoPosition(MotionBitServoChannel.S8, 70)
basic.pause(1000)

// Disable all servos.
motionbit.disableServo(MotionBitServoChannel.All)



// Show red color on all RGB pixels.
motionbit.setAllRgbPixelsColor(motionbit.rgb(255, 0, 0))
basic.pause(1000)

// Show different color on each RGB pixels.
motionbit.setRgbPixelColor(0, motionbit.colors(MotionBitRgbColors.Red))
motionbit.setRgbPixelColor(1, motionbit.colors(MotionBitRgbColors.Blue))
basic.pause(1000)

// Change the brightness to 100% and show rainbow color.
motionbit.setRgbBrightness(255)
basic.pause(1000)

// Clear all RGB pixels.
motionbit.clearAllRgbPixels()
