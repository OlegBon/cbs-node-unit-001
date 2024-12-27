import string from "./module-string/string.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
let str = prompt("Enter a string: ");

let result = string(str);

console.log(`Uppercase: ${result.uTxt}`);
console.log(`Lowercase: ${result.lTxt}`);
