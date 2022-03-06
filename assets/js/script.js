// code from sitepoint

function buildQuiz(){
     // create an output variable to HTML including questions and answer choices
     const output =[];
     myQuestions.forEach(
         (currentQuestion, questionNumber) => {
             const answers = [];
             for(letter in currentQuestion.answers){
                 answers.push(
                   `<label>
                     <input type="radio" name="question${questionNumber}" value="${letter}">
                     ${letter} :
                     ${currentQuestion.answers[letter]}
                   </label>`
                 );
               }
               // add questions,answers to the output
               output.push(
                   `<div class="question"> ${currentQuestion.question} </div>
                   <div class="answers"> ${answers.join('')} </div>`
               );
            }
        );
        //  combine output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }   


function showResults(){}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
// questions answers
const myQuestions = [
    {
        question: "Who was the vocalist of The Doors?",
        answers: {
            a: "Lemmy Killmister",
            b: "Ozzy Osbourne",
            c: "Jim Morrison"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these a Doors song?",
        answers: {
          a: "Peace Frog",
          b: "Warpigs",
          c: "Iron Horse"
        },
        correctAnswer: "a"
      },
      {
        question: "Which one is NOT a Doors album?",
        answers: {
          a: "Strange Days",
          b: "L.A.Woman",
          c: "Highway to Hell"
        },
        correctAnswer: "c"
      },
      {
        question: "How many studio albums they record?",
        answers: {
          a: "10",
          b: "9",
          c: "13"
        },
        correctAnswer: "b"
      },
      {
        question: "Who was the keyboardist of The Doors?",
        answers: {
          a: "Ray Manzarek",
          b: "John Lord",
          c: "Keith Emerson"
        },
        correctAnswer: "a"
      },
      {
        question: "Who was the drummer of The Doors?",
        answers: {
          a: "John Bonham",
          b: "Lars Urlich",
          c: "John Densmore"
        },
        correctAnswer: "c"
      },
      {
        question: "Who was the guitarist of The Doors?",
        answers: {
          a: "Carlos Santana",
          b: "Robby Krieger",
          c: "Angus Young"
        },
        correctAnswer: "b"
      },
      {
        question: "Where is Jim Morrison's grave?",
        answers: {
          a: "Budapest",
          b: "Dublin",
          c: "Paris"
        },
        correctAnswer: "c"
      },
      {
        question: "When Jim Morrison died?",
        answers: {
          a: "1971",
          b: "1972",
          c: "1969"
        },
        correctAnswer: "a"
      },
      {
        question: "When Ray Manzarek born?",
        answers: {
          a: "1939",
          b: "1941",
          c: "1945"
        },
        correctAnswer: "a"
      },
      {
        question: "Who was Jim Morrison girlfriend?",
        answers: {
          a: "Samantha Fox",
          b: "Pamela Anderson",
          c: "Pamela Courson"
        },
        correctAnswer: "c"
      },
      {
        question: "Which record company spotted the band?",
        answers: {
          a: "Elektra Records",
          b: "Columbia Records",
          c: "RCA Records"
        },
        correctAnswer: "a"
      },
      {
        question: "Which song was in the movie Forrest Gump?",
        answers: {
          a: "Moonlight Drive",
          b: "Hello, I Love You",
          c: "The End"
        },
        correctAnswer: "b"
      }
];
buildQuiz()

submitButton.addEventListener('click', showResults);