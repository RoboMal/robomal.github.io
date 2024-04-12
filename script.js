const quizData = [
    {
        question: "What is the capital of Tennessee?",
        options: ["Paris", "Memphis", "Chattanooga", "Nashville"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is the least-dense?",
        options: ["Mercury", "Pluto", "Saturn", "Earth"],
        correctAnswer: "Mars"
    },
  
];

const quizContainer = document.getElementById('quiz-container');
const questionsContainer = document.getElementById('questions');

function displayQuestions() {
    quizData.forEach((questionObj, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p><strong>Question ${index + 1}:</strong> ${questionObj.question}</p>`;
        
        questionObj.options.forEach((option, optionIndex) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'button';
            optionInput.value = option;
            
            const optionDiv = document.createElement('div');
            optionDiv.appendChild(optionInput);
           
            questionDiv.appendChild(optionDiv);
        });

        questionsContainer.appendChild(questionDiv);
    });
}

displayQuestions();