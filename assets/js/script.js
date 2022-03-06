// code from sitepoint

function buildQuiz(){}

function showResults(){}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz()

submitButton.addEventListener('click', showResults);