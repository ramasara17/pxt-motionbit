/*******************************************************************************
 * Functions for MOTION:BIT - RGB LED.
 * These are the wrapper functions for the neopixel functions in neopixel.ts
 *
 * Company: Cytron Technologies Sdn Bhd
 * Website: http://www.cytron.io
 * Email:   support@cytron.io
 *******************************************************************************/

// Default pin.
const RGB_LED_PIN = DigitalPin.P8;

// Number of RGB LED.
const RGB_LED_LENGTH = 2;



namespace motionbit {
    // Colors array for each pixel.
    let colorsArray: number[] = [];
    for (let i = 0; i < RGB_LED_LENGTH; i++) {
        colorsArray.push(0);
    }

    // Create a Neo Pixel object for RGB LED.
    let rgbLed = motionbit.create(RGB_LED_PIN, RGB_LED_LENGTH, MotionBitRgbMode.RGB);
    rgbLed.clear();

    // Reduce the default brightness.
    rgbLed.setBrightness(25);



    /**
     * Turn off all RGB pixels.
     */
    //% group="RGB LED"
    //% weight=16
    //% blockGap=8
    //% blockId="motionbit_clear_all_rgb_pixels"
    //% block="clear all RGB pixels"
    export function clearAllRgbPixels(): void {
        for (let i = 0; i < RGB_LED_LENGTH; i++) {
            colorsArray[i] = 0;
        }

        rgbLed.clear();
        rgbLed.show();
        basic.pause(0);
    }


    /**
     * Set the brightness of the RGB pixels (0-255).
     * @param brightness Pixel brightness. eg: 25
     */
    //% group="RGB LED"
    //% weight=15
    //% blockGap=40
    //% blockId="motionbit_set_rgb_brightness"
    //% block="set RGB pixels brightness to %brightness"
    //% brightness.min=0 brightness.max=255
    export function setRgbBrightness(brightness: number): void {
        rgbLed.setBrightness(brightness);

        // Restore the original color.
        for (let i = 0; i < RGB_LED_LENGTH; i++) {
            rgbLed.setPixelColor(i, colorsArray[i]);
        }
        rgbLed.show();
        basic.pause(0);
    }


    /**
     * Show the same color on all RGB pixels. 
     * @param color RGB color of the pixel. eg: 0xff0000
     */
    //% group="RGB LED"
    //% weight=14
    //% blockGap=8
    //% blockId="motionbit_set_all_rgb_pixels_color"
    //% block="set all RGB pixels to %color"
    //% color.shadow="colorNumberPicker"
    export function setAllRgbPixelsColor(color: number): void {
        for (let i = 0; i < RGB_LED_LENGTH; i++) {
            colorsArray[i] = color;
        }
        rgbLed.showColor(color);
        basic.pause(0);
    }


    /**
     * Show color on individual RGB pixel.
     * @param pixel The pixel number we want to change the color.
     * @param color RGB color of the pixel. eg: 0xff0000
     */
    //% group="RGB LED"
    //% weight=13
    //% blockGap=40
    //% blockId="motionbit_set_rgb_pixel_color"
    //% block="set RGB pixel %pixel to %color"
    //% color.shadow="colorNumberPicker"
    //% pixel.min=0 pixel.max=1
    export function setRgbPixelColor(pixel: number, color: number): void {
        colorsArray[pixel] = color;
        rgbLed.setPixelColor(pixel, color);
        rgbLed.show();
        basic.pause(0);
    }



    /**
     * Return the RGB value of a known color.
    */
    //% group="RGB LED"
    //% weight=12
    //% blockGap=8
    //% blockId="motionbit_colors"
    //% block="%color"
    export function colors(color: MotionBitRgbColors): number {
        return color;
    }


    /**
     * Converts red, green, blue channels into a RGB color.
     * @param red Value of the red channel (0 - 255). eg: 255
     * @param green Value of the green channel (0 - 255). eg: 255
     * @param blue Value of the blue channel (0 - 255). eg: 255
     */
    //% group="RGB LED"
    //% weight=11
    //% blockGap=30
    //% blockId="motionbit_rgb_value"
    //% block="red %red green %green blue %blue"
    //% red.min=0 red.max=255
    //% green.min=0 green.max=255
    //% blue.min=0 blue.max=255
    export function rgb(red: number, green: number, blue: number): number {
        return ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF);
    }

}
