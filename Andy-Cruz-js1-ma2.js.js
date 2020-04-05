//QUESTION 1

const myFunctionExpression = function () {
  console.log("Andy Cruz");
};

myFunctionExpression();

//QUESTION 2
const myButton = document.querySelector("input.mybtn");

function clickMe() {
  console.log("I was clicked");
}

myButton.addEventListener("click", clickMe);

//QUESTION 3
var textInput = document.getElementById("firstName");

function thisWasPressed(event) {
  console.log(event.target.value);
}

textInput.addEventListener("keydown", thisWasPressed);

//QUESTION 4
var hoverButton = document.querySelector("button");
console.log(hoverButton);

for (let i = 0; i < hoverButton.length; i++) {
  hoverButton[i].addEventListener("mouseover", button);
}

//QUESTION 5

const hoverOver = document.querySelector("[data-animal='dog']");

hoverOver.addEventListener("mouseout", () => {
  hoverOver.classList.remove("hover");
  console.dir(hoverOver);
});

// Question 6

const list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", logAtri);
}

function logAtri(event) {
  console.log(event.target.dataset);
}

// Question 7

const animal = "Trond";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// Question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function (sheeps) {
  console.log(sheeps);
});

// Question 9

function hello() {
  console.dir("Hello");

  if (counter === 5) {
    clearInterval(intervalId);
  }

  counter++;
}

let counter = 0;

const intervalId = setInterval(hello, 500);

// Question 10

const updateText = document.querySelector(".container");

function updateDiv() {
  updateText.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
