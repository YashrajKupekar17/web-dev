// Importing the pageUpdate function from the quiz.js file
import { pageUpdate } from "./quiz.js";

// Getting references to various HTML elements
const htmlTopic = document.getElementById("html"); // Reference to the HTML topic element
const cssTopic = document.getElementById("css"); // Reference to the CSS topic element
const jsTopic = document.getElementById("javascript"); // Reference to the JavaScript topic element
const accessTopic = document.getElementById("accessibility"); // Reference to the Accessibility topic element
const modeSwitch = document.getElementById("mode-switch"); // Reference to the mode switch button element
const topicBtns = document.querySelectorAll(".answer-btn"); // Reference to all answer buttons
const toggleBox = document.getElementById("toggle-box"); // Reference to the toggle box element
const answerSection = document.getElementById("answer-section"); // Reference to the answer section element
const questionSection = document.getElementById("question-section"); // Reference to the question section element
const navbar = document.getElementById("navbar"); // Reference to the navbar element

// Functions

// Function to fetch quiz data from data.json file
async function quizData() {
  const response = await fetch("./data.json"); // Fetching the quiz data from data.json file
  const data = await response.json(); // Parsing the response as JSON
  let topics = data.quizzes; // Extracting the quizzes array from the data
  
  // Iterating through each topic in the quizzes array
  for (let topic of topics) {
    // Adding click event listeners to the HTML elements based on the topic title
    if (topic.title === "HTML") {
      htmlTopic.addEventListener("click", function () {
        pageUpdate(topic); // Calling the pageUpdate function with the selected topic
      });
    } else if (topic.title === "CSS") {
      cssTopic.addEventListener("click", function () {
        pageUpdate(topic); // Calling the pageUpdate function with the selected topic
      });
    } else if (topic.title === "JavaScript") {
      jsTopic.addEventListener("click", function () {
        pageUpdate(topic); // Calling the pageUpdate function with the selected topic
      });
    } else if (topic.title === "Accessibility") {
      accessTopic.addEventListener("click", function () {
        pageUpdate(topic); // Calling the pageUpdate function with the selected topic
      });
    }
  }
}

// Adding click event listener to the mode switch button
modeSwitch.addEventListener("click", function () {
  // Toggling CSS classes to switch between light and dark mode
  navbar.classList.toggle("dark-text"); // Toggling the "dark-text" class on the navbar element
  document.body.classList.toggle("dark-body"); // Toggling the "dark-body" class on the body element
  questionSection.classList.toggle("dark-text"); // Toggling the "dark-text" class on the question section element
  answerSection.classList.toggle("dark-box-body"); // Toggling the "dark-box-body" class on the answer section element
  topicBtns.forEach((btn) => {
    btn.classList.toggle("dark-box"); // Toggling the "dark-box" class on each answer button
  });
  toggleBox.classList.toggle("toggle"); // Toggling the "toggle" class on the toggle box element
  document.body.classList.toggle("dark-img"); // Toggling the "dark-img" class on the body element
});

// Calling the quizData function to fetch and handle quiz data
quizData();
