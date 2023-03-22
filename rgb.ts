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
    // Colors array for each pixel.\
    let extColorsArray: number[] = [];
    let colorsArray: number[] = [];
    for (let i = 0; i < RGB_LED_LENGTH; i++) {
        colorsArray.push(0);
    }

    // Create a Neo Pixel object for RGB LED.
    let extRgbLed: motionbit.Strip;
    let rgbLed = motionbit.create(RGB_LED_PIN, RGB_LED_LENGTH, MotionBitRgbMode.RGB);
    rgbLed.clear();

    let rgbBrightness = 25;

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
        rgbBrightness = brightness;

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



    /**
     * Set the length for external RGB pixels.
     * @param length Number of external RGB pixels. eg: 8
     */
    //% advanced=true
    //% group="External RGB LED"
    //% weight=30
    //% blockGap=40
    //% blockId="motionbit_init_ext_rgb"
    //% block="set external RGB pixels length to %length"
    export function initExternalRgb(length: number): void {
        if (length == 0) return;

        // Create the colors array.
        for (let i = 0; i < length; i++) {
            extColorsArray.push(0);
        }

        // Create a Neo Pixel object for RGB LED.
        extRgbLed = motionbit.create(RGB_LED_PIN, length + RGB_LED_LENGTH, MotionBitRgbMode.RGB);
        rgbLed = extRgbLed.range(0, RGB_LED_LENGTH);
        extRgbLed = extRgbLed.range(2, length);
        extRgbLed.clear();

        // Reduce the default brightness.
        extRgbLed.setBrightness(25);

        // Restore the original color and brightness for onboard RGB.
        rgbLed.setBrightness(rgbBrightness);
        for (let i = 0; i < RGB_LED_LENGTH; i++) {
            rgbLed.setPixelColor(i, colorsArray[i]);
        }
        rgbLed.show();
        basic.pause(0);

    }



    /**
     * Turn off all External RGB pixels.
     */
    //% advanced=true
    //% group="External RGB LED"
    //% weight=29
    //% blockGap=8
    //% blockId="motionbit_clear_all_ext_rgb_pixels"
    //% block="clear all external RGB pixels"
    export function clearAllExternalRgbPixels(): void {
        if (extRgbLed == null) return;

        for (let i = 0; i < extColorsArray.length; i++) {
            extColorsArray[i] = 0;
        }

        extRgbLed.clear();
        extRgbLed.show();
        basic.pause(0);
    }


    /**
     * Set the brightness of the external RGB pixels (0-255).
     * @param brightness Pixel brightness. eg: 25
     */
    //% advanced=true
    //% group="External RGB LED"
    //% weight=28
    //% blockGap=40
    //% blockId="motionbit_set_ext_rgb_brightness"
    //% block="set external RGB pixels brightness to %brightness"
    //% brightness.min=0 brightness.max=255
    export function setExternalRgbBrightness(brightness: number): void {
        if (extRgbLed == null) return;

        extRgbLed.setBrightness(brightness);

        // Restore the original color.
        for (let i = 0; i < extColorsArray.length; i++) {
            extRgbLed.setPixelColor(i, colorsArray[i]);
        }
        extRgbLed.show();
        basic.pause(0);
    }


    /**
     * Show the same color on all external RGB pixels. 
     * @param color RGB color of the pixel. eg: 0xff0000
     */
    //% advanced=true
    //% group="External RGB LED"
    //% weight=27
    //% blockGap=8
    //% blockId="motionbit_set_all_ext_rgb_pixels_color"
    //% block="set all external RGB pixels to %color"
    //% color.shadow="colorNumberPicker"
    export function setAllExternalRgbPixelsColor(color: number): void {
        if (extRgbLed == null) return;

        for (let i = 0; i < extColorsArray.length; i++) {
            extColorsArray[i] = color;
        }
        extRgbLed.showColor(color);
        basic.pause(0);
    }


    /**
     * Show color on individual external RGB pixels.
     * @param pixel The pixel number we want to change the color.
     * @param color RGB color of the pixel. eg: 0xff0000
     */
    //% advanced=true
    //% group="External RGB LED"
    //% weight=26
    //% blockGap=40
    //% blockId="motionbit_set_ext_rgb_pixel_color"
    //% block="set external RGB pixel %pixel to %color"
    //% color.shadow="colorNumberPicker"
    export function setExternalRgbPixelColor(pixel: number, color: number): void {
        if (extRgbLed == null) return;

        extColorsArray[pixel] = color;
        extRgbLed.setPixelColor(pixel, color);
        extRgbLed.show();
        basic.pause(0);
    }



    /**
     * Shift the color of external RGB pixels.
     * @param offset Number of pixels to shift. eg: 1
     */
    //% advanced=true
    //% group="External RGB LED"
    //% weight=25
    //% blockGap=8
    //% blockId="motionbit_shift_ext_rgb_pixels"
    //% block="shift external RGB pixels color by %offset"
    export function shiftExternalRgbPixels(offset: number): void {
        if (extRgbLed == null) return;

        // Do nothing if offset is 0.
        if (offset == 0) return;

        // Shift forward.
        else if (offset > 0) {
            while (offset-- > 0) {
                for (let i = extColorsArray.length - 1; i > 0; i--) {
                    extColorsArray[i] = extColorsArray[i - 1];
                }
                extColorsArray[0] = 0;
            }
        }

        // Shift backward.
        else {
            offset = -offset;
            while (offset-- > 0) {
                for (let i = 0; i < extColorsArray.length - 1; i++) {
                    extColorsArray[i] = extColorsArray[i + 1];
                }
                extColorsArray[extColorsArray.length - 1] = 0;
            }
        }


        // Show the new color.
        for (let i = 0; i < extColorsArray.length; i++) {
            extRgbLed.setPixelColor(i, extColorsArray[i]);
        }
        extRgbLed.show();
        basic.pause(0);
    }



    /**
     * Rotate the color of RGB pixels(-3 to 3).
     * @param offset Number of pixels to rotate. eg: 1
     */
    //% advanced=true
    //% weight=24
    //% blockGap=40
    //% blockId="motionbit_rotate_ext_rgb_pixels"
    //% block="rotate external RGB pixels color by %offset"
    export function rotateExternalRgbPixels(offset: number): void {
        if (extRgbLed == null) return;

        // Do nothing if offset is 0.
        if (offset == 0) return;

        // Rotate forward.
        else if (offset > 0) {
            while (offset-- > 0) {
                let lastLed = extColorsArray[extColorsArray.length - 1];
                for (let i = extColorsArray.length - 1; i > 0; i--) {
                    extColorsArray[i] = extColorsArray[i - 1];
                }
                extColorsArray[0] = lastLed;
            }
        }

        // Rotate backward.
        else {
            offset = -offset;
            while (offset-- > 0) {
                let lastLed = extColorsArray[0];
                for (let i = 0; i < extColorsArray.length - 1; i++) {
                    extColorsArray[i] = extColorsArray[i + 1];
                }
                extColorsArray[extColorsArray.length - 1] = lastLed;
            }
        }


        // Show the new color.
        for (let i = 0; i < extColorsArray.length; i++) {
            extRgbLed.setPixelColor(i, extColorsArray[i]);
        }
        extRgbLed.show();
        basic.pause(0);
    }

}
