input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
})
let X = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    X = 0
    while (Math.round(100 / X * X) != Math.round(255 / input.lightLevel() * X)) {
        X += 0.01
    }
    basic.showString("" + Math.round(X) + "%")
})
basic.forever(function () {
    if (input.lightLevel() < 10) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        music.playMelody("A - - - - - - - ", 120)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
