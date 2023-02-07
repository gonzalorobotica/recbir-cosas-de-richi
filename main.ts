/**
 */
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString.substr(2, 3))
})
radio.setGroup(1)
basic.forever(function () {
	
})
