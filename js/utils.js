import { display, button } from "./main.js"
import { timerTimeOut } from "./timer.js"
import Sound from './sounds.js'

const sound = Sound()

export const displayTime = function() {
  let time = prompt('Digite o tempo de foco (em minutos)')
  
  display.minutes.textContent = Number(time)
}

export const tooglePlayButton = function(value) {
  if (value == 0) {
    button.play.classList.add('hide')
    button.pause.classList.remove('hide')
  }
  else if (value == 1) {
    button.play.classList.remove('hide')
    button.pause.classList.add('hide')
  }
}

export const toogleClockButton = function(value) {
  if (value == 0) {
    button.clock.classList.add('hide')
    button.stop.classList.remove('hide')
  } 
  else if (value == 1) {
    button.clock.classList.remove('hide')
    button.stop.classList.add('hide')
  }
}

export const pauseCountdown = function() {
  clearTimeout(timerTimeOut)
  tooglePlayButton(1)
}

export const resetCountdown = function() {
  clearTimeout(timerTimeOut)
  toogleClockButton(1)
  tooglePlayButton(1)
  display.minutes.textContent = '25'
  display.seconds.textContent = '00'
}

export const bgAudioOn = function() {
  sound.bgAudioStart()
  button.soundOn.classList.remove('hide')
  button.soundOff.classList.add('hide')
}

export const bgAudioOff = function() {
  sound.bgAudioEnd()
  button.soundOn.classList.add('hide')
  button.soundOff.classList.remove('hide')
}