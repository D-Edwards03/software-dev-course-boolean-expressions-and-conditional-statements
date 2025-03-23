/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true; //added item
const hasCompass = false; //added item

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log("The night is coming soon and you stumble across a cave");
const choice2 = readline.question("Do you enter the 'cave' or 'keep searching'? ");

if (choice2 === "cave") {
  if (hasTorch && hasSword) {
    console.log("You defended yourself from the beast, and made shelter.");
  } else if (hasTorch && !hasSword) {
    console.log("You bought time to flea from the beast and escape the cave.");
  } else if (!hasTorch && !hasSword) {
    console.log("Sorry, you didn't make it out the cave.");
  }
} else if (choice2 === "keep searching") {
  if (hasTorch && hasMap) {
    console.log("You continue your search for shelter.");
  } else if (!hasTorch && hasMap) {
    console.log("You continue to wander in the darkness of the forest.");
  } else if (hasMap || hasCompass) {
    console.log("You decided to wait for sunlight.");
  }
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/