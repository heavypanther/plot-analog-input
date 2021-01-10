basic.clearScreen()
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P2),
    1023
    )
})
