import { display } from "./main.js"
import { toogleClockButton, tooglePlayButton } from "./utils.js"
import Sound from './sounds.js'

const sound = Sound()

export let timerTimeOut

export const countdown = function() {
  tooglePlayButton(0)
  toogleClockButton(0)
  
  timerTimeOut = setTimeout(() => {
    let minutes = Number(display.minutes.textContent)
    let seconds = Number(display.seconds.textContent)
  
    if (minutes <= 0 && seconds <= 0) {
      tooglePlayButton(1)
      toogleClockButton(1)
      sound.timeEnd()
      return
    }
    
    if (seconds <= 0) {
      seconds = 60
      display.minutes.textContent = String(minutes - 1).padStart(2, '0') 
    }
  
    display.seconds.textContent = String(seconds - 1).padStart(2, '0')
  
    countdown()
  }, 1000)
}