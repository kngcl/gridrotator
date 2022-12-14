let grid = [1, 4, 7, 8, 9, 6, 3, 2]
const rotateButton = document.querySelector(".rotatebutton")
const antiRotateButton = document.querySelectorAll(".anti")
let button1 = document.getElementById("1")
let button2 = document.getElementById("2")
let button3 = document.getElementById("3")
let button4 = document.getElementById("4")
let button5 = document.getElementById("5")
let button6 = document.getElementById("6")
let button7 = document.getElementById("7")
let button8 = document.getElementById("8")
let button9 = document.getElementById("9")
let changedValue

rotateButton.addEventListener("click", function () {
  clockwise()
  paint()
})

for (let i of antiRotateButton) {
  i.addEventListener("click", function () {
    anticlockwise()
    paint()
  })
}
function clockwise() {
  changedValue = grid.shift()
  grid.push(changedValue)
}

function anticlockwise() {
  changedValue = grid.pop()
  console.log(changedValue)
  grid.unshift(changedValue)
}

function paint() {
  button1.innerHTML = grid[0]
  button2.innerHTML = grid[7]
  button3.innerHTML = grid[6]
  button4.innerHTML = grid[1]
  button6.innerHTML = grid[5]
  button7.innerHTML = grid[2]
  button8.innerHTML = grid[3]
  button9.innerHTML = grid[4]
}
