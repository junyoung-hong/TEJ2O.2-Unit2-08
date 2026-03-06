/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Junyoung
 * Created on: Sep 2026
 * This program shows 7 colors.
*/
//Value
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

//clean up
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
//input
input.onButtonPressed(Button.A, function() {

    
    basic.clearScreen()
    basic.showString('Red')
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.clearScreen()
    basic.showString('Green')
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)    
    basic.clearScreen()
    basic.showString('Blue')
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P15, 0)  
    basic.clearScreen()
    basic.showString('Majent')
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0) 
    basic.clearScreen()
    basic.showString('Cyan')
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.clearScreen()
    basic.showString('Yellow')
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)  
    basic.clearScreen()
    basic.showString('White')
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.clearScreen()
    
//Come back to start    
    basic.showIcon(IconNames.Happy)
})

