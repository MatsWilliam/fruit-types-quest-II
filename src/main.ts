import { fruits } from "./fruits/fruits";
import "./styles.css";
import { getFruit, getColor } from "./fruits/utils";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log(getFruit("red Apple"));
console.log(getFruit("Mongo"));
console.log(getColor(fruits[3].name));
console.log(getColor("balle"));
