input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo")
})
radio.onReceivedString(function (receivedString) {
    Shifra = receivedString
    basic.showString(Shifra)
    Shifra += 1
})
let Shifra = ""
radio.setGroup(144)
