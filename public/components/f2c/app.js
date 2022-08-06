const f2c = document.getElementById("f2c")
const f2c_Form = document.querySelector("#f2cForm")

function F2C(F) {
  const number = document.getElementById("farenhiet").value
  const showData = document.getElementById("dataF")
  // (32°F − 32) × 5/9 = 0°C
  Number = parseInt(number)
  F = ((Number - 32) * 5) / 9
  showData.innerText = `${F.toFixed(2)}°C`
}

f2c_Form.onsubmit = (ev) => {
  ev.preventDefault()
  f2c.addEventListener("click", F2C)
}
