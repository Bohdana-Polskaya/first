"use strict";

const box = document.getElementById("box"),
  buttons = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";

buttons[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

// hearts.forEach((item) => {
//   item.style.backgroundColor = "blue";
// });

const div = document.createElement("div");
// const text = document.createTextNode('i will be here');
div.classList.add("black");

// wrapper.append(div);
wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);

// circles[1].remove();

// hearts[1].replaceWith(circles[1])
