"use strict";
/*
/// super einfache Variante ///
const greeting = ["hallo", "hello", "bonjour", "hola"];
const question = [
  "wie geht es dir ?",
  "how are u ?",
  "Comment ça se passe ?",
  "Cómo va",
];
const person = ["IceMan", "Maverick", "Goose", "Viper"];

console.log(
  `${greeting[Math.floor(Math.random() * 4)]} ${
    question[Math.floor(Math.random() * 4)]
  } ${person[Math.floor(Math.random() * 4)]}`
);


*/

const greetings = ["hallo", "hello", "bonjour", "hola"];
const questions = [
  "wie geht es dir ?",
  "how are u ?",
  "Comment ça se passe ?",
  "Cómo va",
];
const persons = ["IceMan", "Maverick", "Goose", "Viper"];
let combinedMessages = [];

const test = () => {
  combinedMessages.push(
    greetings[Math.floor(Math.random() * greetings.length)],
    questions[Math.floor(Math.random() * questions.length)],
    persons[Math.floor(Math.random() * persons.length)]
  );
  console.log(combinedMessages);
};

test();
