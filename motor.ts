/*******************************************************************************
 * Functions for MOTION:BIT servos and motor drivers.
 *
 * Company: Cytron Technologies Sdn Bhd
 * Website: http://www.cytron.io
 * Email:   support@cytron.io
 *******************************************************************************/

// I2C slave address for PCA9685.
const PCA9685_I2C_ADDRESS = 0x40;

// PCA9685 Register address.
const REG_ADD_MODE1 = 0x00;
const REG_ADD_LED0_ON_L = 0x06;
const REG_ADD_ALL_LED_ON_L = 0xFA;
const REG_ADD_ALL_LED_OFF_L = 0xFC;
const REG_ADD_PRESCALE = 0xFE;



// Motor channel.
// The value equals to the output channel of PCA9685 (For MA).
enum MotorChannel {
    M1 = 4,
    M2 = 6,
    M3 = 10,
    M4 = 8,

    //% block="all"
    All = 1000,
};

// Motor direction.
enum MotorDirection {
    //% block="forward"
    Forward = 0,

    //% block="backward"
    Backward = 1
};

// Servo Channel.
// The value equals to the output channel of PCA9685.
enum ServoChannel {
    S1 = 0,
    S2 = 1,
    S3 = 2,
    S4 = 3,
    S5 = 15,
    S6 = 14,
    S7 = 13,
    S8 = 12,

    //% block="all"
    All = 1000,
};



/**
 * Blocks for MOTION:BIT.
 */
//% weight=10 color=#ff8000 icon="\uf085" block="MOTION:BIT"
//% groups=['DC Motors', 'Servos', 'RGB LED']
namespace motionbit {
    // Initialize the PCA9685 with frequency 50Hz.
    initPCA9685(50);



    /**
     * Brake the motor
     * @param motor Motor channel. eg: Motor.M1, Motor.M2
     */
    //% group="DC Motors"
    //% weight=20
    //% blockGap=8
    //% blockId=motionbit_brake_motor
    //% block="brake motor %motor"
    export function brakeMotor(motor: MotorChannel): void {
        if (motor == MotorChannel.All) {
            setPWM(MotorChannel.M1, 0);
            setPWM(MotorChannel.M1 + 1, 0);
            setPWM(MotorChannel.M2, 0);
            setPWM(MotorChannel.M2 + 1, 0);
            setPWM(MotorChannel.M3, 0);
            setPWM(MotorChannel.M3 + 1, 0);
            setPWM(MotorChannel.M4, 0);
            setPWM(MotorChannel.M4 + 1, 0);
        } else {
            setPWM(motor, 0);
            setPWM(motor + 1, 0);
        }
    }


    /**
     * Run the motor forward or backward (Speed = 0-255).
     * @param motor Motor channel.
     * @param direction Motor direction.
     * @param speed Motor speed (0-255). eg: 128
     */
    //% group="DC Motors"
    //% weight=19
    //% blockGap=40
    //% blockId=motionbit_run_motor
    //% block="run motor %motor %direction at speed %speed"
    //% speed.min=0 speed.max=255
    export function runMotor(motor: MotorChannel, direction: MotorDirection, speed: number): void {
        speed = Math.constrain(speed, 0, 255);
        speed = Math.map(speed, 0, 255, 0, 4095);

        if (direction == MotorDirection.Forward) {
            if (motor == MotorChannel.All) {
                setPWM(MotorChannel.M1, speed);
                setPWM(MotorChannel.M1 + 1, 0);
                setPWM(MotorChannel.M2, speed);
                setPWM(MotorChannel.M2 + 1, 0);
                setPWM(MotorChannel.M3, speed);
                setPWM(MotorChannel.M3 + 1, 0);
                setPWM(MotorChannel.M4, speed);
                setPWM(MotorChannel.M4 + 1, 0);
            } else {
                setPWM(motor, speed);
                setPWM(motor + 1, 0);
            }
        }
        else{
            if (motor == MotorChannel.All) {
                setPWM(MotorChannel.M1, 0);
                setPWM(MotorChannel.M1 + 1, speed);
                setPWM(MotorChannel.M2, 0);
                setPWM(MotorChannel.M2 + 1, speed);
                setPWM(MotorChannel.M3, 0);
                setPWM(MotorChannel.M3 + 1, speed);
                setPWM(MotorChannel.M4, 0);
                setPWM(MotorChannel.M4 + 1, speed);
            } else {
                setPWM(motor, 0);
                setPWM(motor + 1, speed);
            }
        }
    }


    /**
     * Disable the servo.
     * @param servo Servo channel.
     */
    //% group="Servos"
    //% weight=18
    //% blockGap=8
    //% blockId=motionbit_disable_servo
    //% block="disable servo %servo"
    export function disableServo(servo: ServoChannel): void {
        if (servo == ServoChannel.All) {
            setServoPulseWidth(ServoChannel.S1, 0);
            setServoPulseWidth(ServoChannel.S2, 0);
            setServoPulseWidth(ServoChannel.S3, 0);
            setServoPulseWidth(ServoChannel.S4, 0);
            setServoPulseWidth(ServoChannel.S5, 0);
            setServoPulseWidth(ServoChannel.S6, 0);
            setServoPulseWidth(ServoChannel.S7, 0);
            setServoPulseWidth(ServoChannel.S8, 0);
        }
        else {
            setServoPulseWidth(servo, 0);
        }
    }


    /**
     * Set the position for servo (0-180 degrees).
     * @param servo Servo channel.
     * @param position Servo positon. eg: 90
     */
    //% group="Servos"
    //% weight=17
    //% blockGap=40
    //% blockId=motionbit_set_servo_position
    //% block="set servo %servo position to %position degrees"
    //% position.min=0 position.max=180
    export function setServoPosition(servo: ServoChannel, position: number): void {
        position = Math.constrain(position, 0, 180);
        let pulseWidth = position * 2000 / 180 + 500;
        if (servo == ServoChannel.All) {
            setServoPulseWidth(ServoChannel.S1, pulseWidth);
            setServoPulseWidth(ServoChannel.S2, pulseWidth);
            setServoPulseWidth(ServoChannel.S3, pulseWidth);
            setServoPulseWidth(ServoChannel.S4, pulseWidth);
            setServoPulseWidth(ServoChannel.S5, pulseWidth);
            setServoPulseWidth(ServoChannel.S6, pulseWidth);
            setServoPulseWidth(ServoChannel.S7, pulseWidth);
            setServoPulseWidth(ServoChannel.S8, pulseWidth);
        }
        else {
            setServoPulseWidth(servo, pulseWidth);
        }
    }



    /**
     * I2C write 8-bit data to the register of PCA9685.
     * @param register Register address.
     * @param data Data to write.
     */
    function i2cWrite(register: number, data: number): void {
        let buffer = pins.createBuffer(2);
        buffer[0] = register;
        buffer[1] = data;
        pins.i2cWriteBuffer(PCA9685_I2C_ADDRESS, buffer);
    }



    /**
     * I2C write 16-bit data to the register of PCA9685.
     * @param register Register address.
     * @param data Data to write.
     */
    function i2cWrite16(register: number, data: number): void {
        let buffer = pins.createBuffer(3);
        buffer[0] = register;
        buffer[1] = data & 0xff;
        buffer[2] = (data >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_I2C_ADDRESS, buffer);
    }



    /**
     * Initialize and reset the output of PCA9685.
     * @param freq PWM frequency.
     */
    function initPCA9685(freq: number): void {
        // Enable Register Auto-Increment and go to sleep.
        i2cWrite(REG_ADD_MODE1, 0x30);

        // Set the prescale.
        let prescale = (25000000 / (freq * 4096)) - 1;
        i2cWrite(REG_ADD_PRESCALE, prescale);

        // Turn off all outputs.
        i2cWrite16(REG_ADD_ALL_LED_ON_L, 0x0000);
        i2cWrite16(REG_ADD_ALL_LED_OFF_L, 0x1000);

        // Wake up.
        i2cWrite(REG_ADD_MODE1, 0x20);
        
        // Wait for oscillator to stabilize.
        control.waitMicros(5000);

        // Restart.
        i2cWrite(REG_ADD_MODE1, 0xA0);
    }



    /**
     * Set the PWM duty cycle of the motor driver.
     * @param channel PCA9685 output channel (0-15).
     * @param pwm PWM duty cycle (0-4095).
     */
    function setPWM(channel: number, pwm: number): void {
        // Make sure the channel is valid.
        if (channel < 0 || channel > 15) {
            return;
        }

        let regAdd = REG_ADD_LED0_ON_L + (channel * 4);

        // Always off.
        if (pwm == 0) {
            i2cWrite16(regAdd, 0x0000);
            i2cWrite16(regAdd + 2, 0x1000);
        }

        // Always on.
        else if (pwm == 4095) {
            i2cWrite16(regAdd, 0x1000);
            i2cWrite16(regAdd + 2, 0x0000);
        }

        // In between.
        else {
            i2cWrite16(regAdd, 0x0000);
            i2cWrite16(regAdd + 2, pwm);
        }
    }



    /**
     * Set the servo pulse width.
     * @param channel PCA9685 output channel (0-15).
     * @param pulseWidth Servo pulse width (0 or 500 - 2500us).
     */
    function setServoPulseWidth(channel: number, pulseWidth: number): void {
        // Freq = 50Hz, Period = 20,000 us
        let pwm = pulseWidth * 4096 / 20000;
        setPWM(channel, pwm);
    }
}
