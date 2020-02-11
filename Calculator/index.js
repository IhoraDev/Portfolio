"use strict";

const element = document.querySelector(".container");

// create screen element for calculator
const screen = document.createElement("div");
      screen.id = "screen";
      screen.innerHTML = "0";
      
         element.append(screen);


const cleen = document.createElement("button");
      cleen.id = "cleen";
      cleen.innerHTML = "C";

      element.append(cleen);

const point = document.createElement("button");
point.id = "point";
point.innerHTML = "&bull;";

element.append(point);

const correct = document.createElement("button");
correct.id = "correct";
correct.innerHTML = "&lArr;";

element.append(correct);

const plus = document.createElement("button");
plus.id = "plus";
plus.onclick("plus");
plus.innerHTML = " + ";

element.append(plus);

const decrement = document.createElement("button");
decrement.id = "decrement";
decrement.innerHTML = " &ndash;";

element.append(decrement);

const mult = document.createElement("button");
mult.id = "mult";
mult.innerHTML = " &#10008;";

element.append(mult);

const divide = document.createElement("button");
divide.id = "divide";
divide.innerHTML = " / ";

element.append(divide);

// insert number button
const elements = [];
function createCalculatorElement() {

    for (let i = 0; i <= 9; i++) {
        let button = document.createElement("button");
            button.id = "number";
            button.value = [i];
            button.innerHTML = [i];

            elements.push(button);
    }
    return elements;
}
element.append(...createCalculatorElement());

const equal = document.createElement("button");
equal.id = "equal";
equal.innerHTML = " = ";

element.append(equal);

//*********************************************************

cleen.onclick = () => {
  screen.innerHTML = "0";
};

point.onclick = () => {
    if (screen.value !== 0){
        console.log(screen.value);
    screen.innerHTML = ".";
    } else  {
        alert("test");
    }
};

function calc(num) {
    elements.value =  elements.value + num;
}
// console.log(elements.value = 8);