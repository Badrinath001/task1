// Quiz Data
const quizData = [
  {
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "jQuery",
    c: "CSS",
    d: "XML",
    correct: "c",
  },
  {
    question: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Advanced Programming Input",
    c: "Applied Protocol Interface",
    d: "Application Process Integration",
    correct: "a",
  }
];

const questionEl = document.getElementById('question');
const answersEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

function getSelected() {
  let answer;
  answersEls.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((el) => el.checked = false);
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.getElementById('quiz').innerHTML =
        `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>`;
    }
  }
});

// Joke API
document.getElementById("getJoke").addEventListener("click", async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  });
  const data = await res.json();
  document.getElementById("joke").innerText = data.joke;
});
