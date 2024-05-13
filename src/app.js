/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import "./assets/img/procrastination.png";

window.onload = function() {
  generateExcuse(); // Call the function to generate and display the excuse
};
function generateExcuse() {
  const who = [
    "My dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My fish",
    "My cat",
    "My imaginary friend",
    "God himself"
  ];
  const action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "stole",
    "set fire to",
    "spit on",
    "ripped"
  ];
  const what = [
    "my homework",
    "my phone",
    "the car",
    "my bike",
    "my scooter",
    "everything"
  ];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const randomWhoIndex = Math.floor(Math.random() * who.length);
  const randomActionIndex = Math.floor(Math.random() * action.length);
  const randomWhatIndex = Math.floor(Math.random() * what.length);
  const randomWhenIndex = Math.floor(Math.random() * when.length);
  const excuse = `<b>${who[randomWhoIndex]}</b> <b>${action[randomActionIndex]}</b> <b>${what[randomWhatIndex]}</b> ${when[randomWhenIndex]}.`;

  const excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
  return excuse;
}
