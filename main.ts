input.onButtonPressed(Button.A, function () {
    basic.showNumber(millilitres)
    millilitres += -1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(millilitres)
    millilitres += -2
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(millilitres)
    millilitres += -5
})
let millilitres = 0
millilitres = 20
basic.forever(function () {
    if (millilitres < 0) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (millilitres < 2) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("turn on the kettle ")
    }
})
