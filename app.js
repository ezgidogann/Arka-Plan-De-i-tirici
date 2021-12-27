const body = document.querySelector("body");
const button = document.getElementById("button");
const colors = ["#34ebde", "#eb34e5", "#d9441e", "#211ed9", "#8868d9"]

button.addEventListener("click" , changeBackground);

function changeBackground(){
  const rondomNumber = Math.floor(Math.random()* colors.length);
  const selectedColor = colors[rondomNumber];
  body.style.backgroundColor = selectedColor;
}

