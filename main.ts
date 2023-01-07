touchbit.on(touchbit.TouchPad.b, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(6)
})
touchbit.on(touchbit.TouchPad.d, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(2)
})
touchbit.on(touchbit.TouchPad.right, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(3)
})
touchbit.on(touchbit.TouchPad.left, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(4)
})
touchbit.on(touchbit.TouchPad.c, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(7)
})
touchbit.on(touchbit.TouchPad.a, touchbit.TouchEvent.pressed, function () {
    radio.sendNumber(0)
})
radio.setGroup(100)
