const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//store question index and score
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

//fetch questions from QuizAPI
async function fetchQuestions() {
  const apiUrl =
    "https://quizapi.io/api/v1/questions?apiKey=m3mSU4vwZGgTdPuf3ECFr2jOvOKJGK7JivmaWGfV&difficulty=Easy&limit=5";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    //process the response to fit the structure expected by the quiz logic
    questions = data.map((item) => ({
      question: item.question,
      answers: [
        {
          text: item.answers.answer_a,
          correct: item.correct_answers.answer_a_correct === "true",
        },
        {
          text: item.answers.answer_b,
          correct: item.correct_answers.answer_b_correct === "true",
        },
        {
          text: item.answers.answer_c,
          correct: item.correct_answers.answer_c_correct === "true",
        },
        {
          text: item.answers.answer_d,
          correct: item.correct_answers.answer_d_correct === "true",
        },
      ].filter((answer) => answer.text !== null),
    }));

    startQuiz();
  } catch (error) {
    console.error("Error fetching questions:", error);
    questionElement.innerHTML =
      "Failed to load questions. Please try again later.";
  }
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

//reset the state
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

fetchQuestions();
