const myForm = document.getElementById("myForm")
const label = document.getElementById("labelName")
const resetBtn = document.getElementById("resetBtn")
const NAME_KEY = "nameKey"
const SECOND_KEY = "secondKey"

let seconds = 0

const handleForm = function (e) {
  e.preventDefault()

  const inputText = document.getElementById("name")
  const name = inputText.value
  localStorage.setItem(NAME_KEY, name)

  label.innerText = name

  myForm.reset()
}

const handleResetBtn = function () {
  const name = localStorage.getItem(NAME_KEY)

  if (name) {
    localStorage.removeItem(NAME_KEY, name)

    label.innerText = "Inserisci un nuovo nome:"
  }
}

const handleTimer = function () {
  const counterText = document.getElementById("counterText")
  sessionStorage.setItem(SECOND_KEY, seconds)

  counterText.innerText = seconds
  seconds++
}

const handleStart = function () {
  const totalSeconds = sessionStorage.getItem(SECOND_KEY)

  if (totalSeconds) {
    seconds = totalSeconds
  } else {
    seconds = 0
  }

  setInterval(handleTimer, 1000)
  const name = localStorage.getItem(NAME_KEY)

  if (name) {
    label.innerText = name
  } else {
    label.innerText = "Inserisci un nuovo nome:"
  }
}

myForm.addEventListener("submit", handleForm)
resetBtn.addEventListener("click", handleResetBtn)
window.addEventListener("DOMContentLoaded", handleStart)
