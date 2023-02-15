import { displayTime, pauseCountdown, resetCountdown, bgAudioOn, bgAudioOff } from "./utils.js"
import { countdown } from "./timer.js"
import Sound from './sounds.js'

const sound = Sound()

export const display = {
  minutes: document.querySelector('.minutes'),
  seconds: document.querySelector('.seconds')
}

export const button = {
  play: document.querySelector('.play'),
  pause: document.querySelector('.pause'),

  clock: document.querySelector('.select-minutes'),
  stop: document.querySelector('.stop'),

  soundOn: document.querySelector('.sound-on'),
  soundOff: document.querySelector('.sound-off')
}

button.play.addEventListener('click', () => {
  countdown()
  sound.pressButton()
})

button.pause.addEventListener('click', () => {
  pauseCountdown()
  sound.pressButton()
})

button.clock.addEventListener('click', () => {
  displayTime()
  sound.pressButton()
})

button.stop.addEventListener('click', () => {
  resetCountdown()
  sound.pressButton()
})

button.soundOn.addEventListener('click', () => {
  bgAudioOff()
  sound.pressButton()
})

button.soundOff.addEventListener('click', () => {
  bgAudioOn()
  sound.pressButton()
})