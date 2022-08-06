// const f2c = document.getElementById("f2c")
// const f2c_Form = document.querySelector("#f2cForm")

function F2C(F) {
  // const number = document.getElementById("farenhiet").value
  // const showData = document.getElementById("dataF")
  // (32°F − 32) × 5/9 = 0°C
  // Number = parseInt(number)
  const n = ((F - 32) * 5) / 9;
  // showData.innerText = `${F.toFixed(2)}°C`;
  console.log(n);
}

// f2c_Form.onsubmit = (e) => {
//   e.preventDefault();
//   f2c.addEventListener("click", F2C);
// };

export { F2C };
