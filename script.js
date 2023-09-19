const start_pause = document.getElementById('start_pause')
const reset = document.getElementById('reset')
const milisecond = document.getElementById("milisecond")
const second = document.getElementById("second")
const minute = document.getElementById('minute')
const hour = document.getElementById('hour')
const list_of_flag = document.getElementById('list_of_flag')
const flag = document.getElementById('flag')
const flag_reset = document.getElementById('flag_reset')
const main = document.getElementById('main')

const colon = document.getElementsByClassName('colon')

var running = false
var intervalID
var ms = 0;
var sec = 0;
var min = 0;
var hr = 0;
var flg_count = 1
var flagresetshow = false

// ************* work when start or pause btn click ***************
start_pause.addEventListener('click', () => {
  running = !running
  running ? handleStart() : handlePause()
})

// ************* work when reset or flag btn click ***************
flag_reset.addEventListener('click', () => flagresetshow ? handleflags() : handlereset()
)

// ************* work when start btn click ***************
const handleStart = () => {
  flagresetshow = !flagresetshow
  // main.style.justifyContent = "start"
  flag_reset.style.display = "flex"
  flag_reset.innerHTML = '<i class="fa-solid fa-flag fa-2xl" style="color: #3881ff;"></i>'
  for (let ele of colon) ele.classList.add('blink')
  start_pause.innerHTML = `<i class="fa-solid fa-pause fa-2xl" style="color: #3881ff;"></i>`
  intervalID = setInterval(updatetime, 10)
  list_of_flag.style.display = "flex"
}

// ************* work when pause btn click ***************
const handlePause = () => {
  flagresetshow = !flagresetshow
  flag_reset.innerHTML = `<i class="fa-solid fa-stop fa-2xl" style="color: #3881ff;"></i>`
  for (let ele of colon) ele.classList.remove('blink')
  start_pause.innerHTML = `<i class="fa-solid fa-play fa-2xl" style="color: #3881ff;"></i>`
  clearInterval(intervalID)
}

// ************* Update time ***************
const updatetime = () => {
  ms++;
  if (ms === 100) {
    sec++;
    if (sec === 60) {
      min++
      if (min === 60) {
        hr++;
        min = 0
        hour.innerHTML = hr < 10 ? `0${hr}` : hr
      }
      sec = 0
      minute.innerHTML = min < 10 ? `0${min}` : min
    }
    ms = 0
    second.innerHTML = sec < 10 ? `0${sec}` : sec
  }
  milisecond.innerHTML = ms < 10 ? `0${ms}` : ms
}

// ************* work when reset btn click ***************
const handlereset = () => {
  main.style.justifyContent = "center"
  flag_reset.style.display = "none"
  list_of_flag.style.display = "none"
  list_of_flag.innerHTML = " "
  milisecond.innerHTML = "00"
  second.innerHTML = "00"
  minute.innerHTML = "00"
  hour.innerHTML = "00"
  ms = 0
  sec = 0
  min = 0
  hr = 0
  flg_count = 1
}

// ************* work when flag btn click ***************
const handleflags = () => {
  list_of_flag.innerHTML += `<li><span>${flg_count}.</span>  ${hour.innerHTML} : ${minute.innerHTML} : ${second.innerHTML} : ${milisecond.innerHTML}</li>`
  if (flg_count > 6) {
    list_of_flag.scrollTop = list_of_flag.scrollHeight
  }
  flg_count++
}
