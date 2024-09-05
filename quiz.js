function startQuiz() {
    // Hide the introduction
    document.querySelector(".quiz-introduction").style.display = "none";
    
    // Show the quiz container and load the first question
    document.querySelector(".quiz-container").style.display = "block";
    loadQuestion();
}
// Questions array
const questions = [
    {
        question: "What is the traditional name of the medicinal plant used to treat colds?",
        answers: ["Aloe Vera", "African Ginger", "Willow Bark", "Baobab"],
        correctAnswer: 1,
        badge: "Medicinal Plant Expert"
    },
    {
        question: "Which indigenous practice helps sustain forests during harvesting?",
        answers: ["Clear-cutting", "Selective Harvesting", "Slash and Burn", "Crop Rotation"],
        correctAnswer: 1,
        badge: "Sustainability Champion"
    },
    {
        question: "What method is used to restore degraded forest areas?",
        answers: ["Planting invasive species", "Using pesticides", "Afforestation", "Hunting"],
        correctAnswer: 2,
        badge: "Restoration Master"
    },
    {
        question: "What is the indigenous name for Baobab fruit?",
        answers: ["Marula", "Adansonia", "Moringa", "Ukanyezi"],
        correctAnswer: 1,
        badge: "Indigenous Knowledge Keeper"
    },
    {
        question: "Which of these plants is used for wound healing?",
        answers: ["Aloe Vera", "Moringa", "Lavender", "African Potato"],
        correctAnswer: 0,
        badge: "Healing Expert"
    }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const badgeElement = document.getElementById("badge");
const nextBtn = document.getElementById("nextBtn");

// Initialize quiz
function loadQuestion() {
    // Reset feedback and badges
    feedbackElement.textContent = "";
    badgeElement.style.display = "none";
    
    // Load current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Clear previous answers
    answersElement.innerHTML = "";
    
    // Create answer buttons
    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        li.appendChild(button);
        answersElement.appendChild(li);
    });
}

// Check if selected answer is correct
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.className = "correct";
        score++;
        badgeElement.textContent = `Badge Unlocked: ${currentQuestion.badge}`;
        badgeElement.style.display = "block";
    } else {
        feedbackElement.textContent = "Incorrect, try again.";
        feedbackElement.className = "incorrect";
    }
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show final results
function showResults() {
    questionElement.textContent = `Quiz Complete! You scored ${score} out of ${questions.length}.`;
    answersElement.innerHTML = "";
    nextBtn.style.display = "none";
}

// Start quiz
loadQuestion();
