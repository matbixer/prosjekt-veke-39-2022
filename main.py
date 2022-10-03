input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo")
})
radio.onReceivedString(function (receivedString) {
    Shifra = receivedString
    basic.showString(Shifra)
})
let Shifra = ""
radio.setGroup(144)
