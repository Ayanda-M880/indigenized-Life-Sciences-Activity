// Question array with associated badge images
const questions = [
    {
        question: "What is the traditional name of the medicinal plant used to treat colds?",
        answers: ["Aloe Vera", "African Ginger", "Willow Bark", "Baobab"],
        correctAnswer: 1,
        badge: "medicinal plant expect.png"  // Badge image file
    },
    {
        question: "Which indigenous practice helps sustain forests during harvesting?",
        answers: ["Clear-cutting", "Selective Harvesting", "Slash and Burn", "Crop Rotation"],
        correctAnswer: 1,
        badge: "sustainability champion.png"  // Badge image file
    },
    {
        question: "What method is used to restore degraded forest areas?",
        answers: ["Planting invasive species", "Using pesticides", "Afforestation", "Hunting"],
        correctAnswer: 2,
        badge: "restoration master.png"
    },
    {
        question: "What is the indigenous name for Baobab fruit?",
        answers: ["Marula", "Adansonia", "Moringa", "Ukanyezi"],
        correctAnswer: 1,
        badge: "indigenous knowledge keeper.png"
    },
    {
        question: "Which of these plants is used for wound healing?",
        answers: ["Aloe Vera", "Moringa", "Lavender", "African Potato"],
        correctAnswer: 0,
        badge: "healing expect.png"
    }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;
let earnedBadges = [];

// DOM Elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const badgeImgElement = document.getElementById("badgeImg");
const quizContainer = document.getElementById("quiz-container");
const redeemSection = document.getElementById("redeem-section");
const earnedBadgesElement = document.getElementById("earned-badges");

// Initialize the quiz
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Clear previous answers
    answersElement.innerHTML = "";
    
    // Display the answers
    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        li.appendChild(button);
        answersElement.appendChild(li);
    });
}

// Check if the answer is correct
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
        // Display the badge
        badgeImgElement.src = currentQuestion.badge;
        badgeImgElement.style.display = "block";
        earnedBadges.push(currentQuestion.badge);
    } else {
        feedbackElement.textContent = "Incorrect, try again.";
    }
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        feedbackElement.textContent = "";
        badgeImgElement.style.display = "none";  // Hide badge between questions
    } else {
        showResults();
    }
}

// Show final results and redeem section
function showResults() {
    quizContainer.style.display = "none";
    redeemSection.style.display = "block";
    displayEarnedBadges();
}

// Display earned badges in redeem section
function displayEarnedBadges() {
    earnedBadgesElement.innerHTML = "";
    earnedBadges.forEach(badge => {
        const img = document.createElement("img");
        img.src = badge;
        img.style.width = "100px";
        img.style.margin = "10px";
        earnedBadgesElement.appendChild(img);
    });
}

// Start the quiz (called from the Start button)
function startQuiz() {
    document.querySelector(".quiz-introduction").style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
}

// Redeem badges (example function)
function redeemBadges() {
    alert("You have successfully redeemed all your badges!");
    // Additional code for redemption logic can go here (e.g., saving or downloading images)
}
