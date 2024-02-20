"use strict"

const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
      answer: 'Jupiter',
    },
    {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      answer: 'France',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
      answer: 'Mount Everest',
    },
    {
      question: 'Which is the largest ocean on Earth?',
      options: [
        'Pacific Ocean',
        'Indian Ocean',
        'Atlantic Ocean',
        'Arctic Ocean',
      ],
      answer: 'Pacific Ocean',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      answer: 'Au',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest species of shark?',
      options: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
    },
    {
      question: 'Which animal is known as the King of the Jungle?',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
    },
  ];

const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submit');
const retryBtn = document.getElementById('retry');
const showAnswerBtn = document.getElementById('showAnswer');

let currentQuiz = 0;

function start(){
    startBtn.classList.toggle('hide')
    submitBtn.classList.toggle('hide');
    update(currentQuiz)
}

function update(currentQuiz){
    for (let i = -1; i < currentQuiz; i++){
        quiz.innerText = quizData[currentQuiz].question
        for (let i = 0; i < quizData[currentQuiz].options.length; i++){
            quiz.innerHTML += ` <br />
                <input type="radio" name="option" value="${quizData[currentQuiz].options[i]}"> <label>${quizData[currentQuiz].options[i]}</label>
            `;
        }
    }
}

function submit(){
    const options = document.getElementsByName('option');
    let selectedOption = null;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }
    
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    if (selectedOption === quizData[currentQuiz].answer){
        if (currentQuiz === quizData.length - 1){
            quiz.innerHTML = '';
            result.innerText = `You win! Your total score: ${currentQuiz}`;
            submitBtn.classList.toggle('hide');
        } else {
            currentQuiz += 1;
            update(currentQuiz);
            result.innerText = `Your score: ${currentQuiz}`;
        }
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = true;
        }
        submitBtn.classList.toggle('hide');
        retryBtn.classList.toggle('hide');
        showAnswerBtn.classList.toggle('hide');
        result.innerText = '';
    }
}

function retry(){
    currentQuiz = 0;
    update(currentQuiz)
    submitBtn.classList.remove('hide');
    retryBtn.classList.add('hide');
    showAnswerBtn.classList.add('hide');
}

function showAnswer(){
    quiz.innerHTML = `The answer is ${quizData[currentQuiz].answer}`;
    result.innerText = '';
    showAnswerBtn.classList.add('hide');
}