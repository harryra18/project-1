// Game state variables
let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = [];
let correctCount = 0;
let selectedAnswer = null;

// DOM elements
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

// Stats elements
const currentQuestionStat = document.getElementById('current-question');
const correctCountStat = document.getElementById('correct-count');
const scoreStat = document.getElementById('score');

// Results elements
const resultsTitle = document.getElementById('results-title');
const finalScore = document.getElementById('final-score');
const passStatus = document.getElementById('pass-status');
const finalCorrect = document.getElementById('final-correct');

// Simple shuffle function
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize the quiz
function initQuiz() {
    currentQuestionIndex = 0;
    correctCount = 0;
    userAnswers = [];
    selectedAnswer = null;
    selectedQuestions = shuffleArray(quizQuestions).slice(0, 10);

    questionContainer.style.display = 'block';
    resultsContainer.style.display = 'none';

    loadQuestion();
    updateStats();
}

// Load current question
function loadQuestion() {
    const question = selectedQuestions[currentQuestionIndex];

    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of 10`;
    questionText.textContent = question.question;

    optionsContainer.innerHTML = '';
    selectedAnswer = null;
    submitBtn.disabled = true;

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.setAttribute('role', 'radio');
        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });

    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    feedback.style.display = 'none';
}

// Select an answer
function selectAnswer(index, button) {
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    button.classList.add('selected');
    selectedAnswer = index;
    submitBtn.disabled = false;
}

// Submit the answer
function submitAnswer() {
    if (selectedAnswer === null) return;

    const question = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;

    userAnswers.push({
        question: question.question,
        userChoice: question.options[selectedAnswer],
        correctAnswer: question.options[question.correct],
        correct: isCorrect
    });

    if (isCorrect) correctCount++;

    document.querySelectorAll('.option').forEach((option, index) => {
        option.disabled = true;
        if (index === question.correct) option.classList.add('correct');
        if (index === selectedAnswer && !isCorrect) option.classList.add('incorrect');
    });

    feedback.style.display = 'block';
    feedback.innerHTML = isCorrect
        ? '✅ Correct!'
        : `❌ Incorrect. Correct answer: ${question.options[question.correct]}`;

    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';

    updateStats();
}

// Go to next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Update stats
function updateStats() {
    currentQuestionStat.textContent = currentQuestionIndex + 1;
    correctCountStat.textContent = correctCount;

    let percentage = 0;
    if (userAnswers.length > 0) {
        percentage = Math.round((correctCount / userAnswers.length) * 100);
    }

    scoreStat.textContent = percentage + "%";
}

// Show results
function showResults() {
    questionContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    let percentage = Math.round((correctCount / 10) * 100);
    let passed = correctCount >= 6;

    resultsTitle.innerHTML = passed ? '🎉 Congratulations!' : '📚 Keep Studying!';
    finalScore.textContent = percentage + "%";
    finalCorrect.textContent = correctCount;
    passStatus.textContent = passed ? 'You Passed!' : 'You Need More Practice';
    passStatus.className = passed ? 'pass-status pass' : 'pass-status fail';

    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Restart quiz
function restartQuiz() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initQuiz();
}

// Setup event listeners
function setupEventListeners() {
    submitBtn.addEventListener('click', submitAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
}

// Start quiz
function startQuiz() {
    if (!quizQuestions || quizQuestions.length === 0) {
        alert('Quiz data not found!');
        return;
    }
    setupEventListeners();
    initQuiz();
}

// Load when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startQuiz);
} else {
    startQuiz();
}
