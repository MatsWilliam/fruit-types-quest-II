import { fruits } from "./fruits/fruits";
import "./styles.css";
import { getFruit, getColor, getIcon, getCategory, numberOfColoredFruits} from "./fruits/utils";

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log(getFruit("red Apple"));
console.log(getFruit("Mongo"));
console.log(getColor(fruits[3].name));
console.log(getColor("balle"));
console.log(getIcon("banana"));
console.log(getIcon("CP"));
console.log(getCategory("grape"));
console.log(getCategory("CP"));
console.log(numberOfColoredFruits("yellow"));
console.log(numberOfColoredFruits("lilaprickig"));

