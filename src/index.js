import { choice, remove } from "./helpers";
import fruitsArr from "./foods";

const fruit = choice(fruitsArr);
console.log(`Id like one RANDOMFRUIT, please.`);
console.log(`Here you go ${fruit}`);
console.log("Delicous! May I have another?");
const remainingFruit = remove(fruitsArr, fruit);
console.log(`I'm sorry, we're all out. We have ${remainingFruit} left`);
