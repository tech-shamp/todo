const c2f = document.getElementById("c2f")
const c2f_Form = document.querySelector("#c2fForm")

function C2F(C) {
  const number = document.getElementById("celcius").value
  const showData = document.getElementById("dataC")
  // (99°C × 9/5) + 32 = 210.2°F
  Number = parseInt(number)
  C = (Number * 9) / 5 + 32
  showData.innerText = `${C.toFixed(2)}°C`
}

c2f_Form.onsubmit = (e) => {
  e.preventDefault()
  c2f.addEventListener("click", C2F)
}