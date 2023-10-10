/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Oct 2023
 * This program plays rock paper scissors on the micro bit
*/

let rockpaperscissors: number = -1

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function() {
  rockpaperscissors = randint(0, 1)
  basic.clearScreen()

  // If random number is 0
  if (rockpaperscissors == 0) {
basic.showLeds(`
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .
`)
}

    // If random number is 1
    if (rockpaperscissors == 1) {
basic.showLeds(`
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #
`)
    }

    // If random number is 2
    if (rockpaperscissors == 2) {
basic.showIcon(IconNames.Scissors)
    }

  // pause and show you are ready again
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)
})