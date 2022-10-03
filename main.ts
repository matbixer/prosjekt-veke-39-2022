input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo")
})
radio.onReceivedString(function (receivedString) {
    Shifra = receivedString
    Bokstav_1 = Shifra.substr(0, 1)
    Bokstav_2 = Shifra.substr(1, 1)
    Bokstav_3 = Shifra.substr(2, 1)
    Bokstav_4 = Shifra.substr(3, 1)
    Bokstav_5 = Shifra.substr(4, 1)
    Bokstav_5 = 0
    basic.showString(Bokstav_5)
})
let Bokstav_5 = ""
let Bokstav_4 = ""
let Bokstav_3 = ""
let Bokstav_2 = ""
let Bokstav_1 = ""
let Shifra = ""
radio.setGroup(144)
