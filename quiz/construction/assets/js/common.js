//fade-in//
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.fadeIn').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight) {
        $(this).addClass("fadeInOn");
      }
    });
  });
});

const question = document.getElementById('question');
const btns = document.querySelectorAll('.choice');
const nextBtn = document.getElementById('next-btn');
const redoBtn = document.getElementById('redo-btn');
const resultContent = document.getElementById('result-content');
let quizIndex = 0;
let correctIndex = 0;
let quizNum = 0;


const quizzes = [
  {
    question: 'Q1',
    choices: ['a', 'b', 'c', 'd'],
    answer: 'c'    
  },  
  {
    question: 'Q2',
    choices: ['d', 'e', 'f', 'g'],
    answer: 'e'    
  },  
  {
    question: 'Q3',
    choices: ['h', 'i', 'j', 'k'],
    answer: 'k'    
  },  
  {
    question: 'Q4',
    choices: ['l', 'm', 'n', 'o'],
    answer: 'n'    
  },  
  {
    question: 'Q5',
    choices: ['p', 'q', 'r', 's'],
    answer: 'q'    
  },  
  {
    question: 'Q6',
    choices: ['t', 'u', 'v', 'w'],
    answer: 'v'    
  },  
  {
    question: 'Q7',
    choices: ['x', 'y', 'z', '1'],
    answer: 'z'    
  },  
  {
    question: 'Q8',
    choices: ['2', '3', '4', '5'],
    answer: '3'    
  },  
  {
    question: 'Q9',
    choices: ['6', '7', '8', '9'],
    answer: '8'    
  },  
];

let len = quizzes.length - 1;

function quizSet() {
  let num = Math.floor(Math.random() * len);
  let j = quizzes[len];
  quizzes[len] = quizzes[num];
  quizzes[num] = j;
  question.textContent = quizzes[len].question;
  for(let i = 0; i < btns.length; i++){
    btns[i].textContent = quizzes[len].choices[i];
  }
}

quizSet();

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.textContent === quizzes[len].answer){
      btn.classList.add('correct');
      correctIndex++;
    }else{
      btn.classList.add('lose');
    }
    nextBtn.classList.remove('hidden');
  })
})

function classRemove() {
  btns.forEach(btn => {
    btn.classList.remove('correct');
    btn.classList.remove('lose');
  })
}





nextBtn.addEventListener('click', () => {
  if(quizNum === 4){
    overlay.classList.remove('hidden');
    result.classList.remove('hidden');
    resultContent.textContent = `5問中${correctIndex}問正解でした!!`
    classRemove();
  }else{
    quizNum++;
    classRemove();
    nextBtn.classList.add('hidden');
    len--;
    quizSet();
  }
})

redoBtn.addEventListener('click', () => {
  quizNum = 0;
  len = quizzes.length - 1;
  overlay.classList.add('hidden');
  result.classList.add('hidden');
  nextBtn.classList.add('hidden');
  quizSet();
})






