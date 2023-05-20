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

const questionNum = document.getElementById('question-number');
const question = document.getElementById('question');
const btns = document.querySelectorAll('.choice');
const nextBtn = document.getElementById('next-btn');
const redoBtn = document.getElementById('redo-btn');
const resultContent = document.getElementById('result-content');
let quizIndex = 1;
let correctIndex = 0;
let quizNum = 0;


const quizzes = [
  {
    question: '5 + 5 = ?',
    choices: ['10', '25', '12', '20'],
    answer: '10'    
  },  
  {
    question: '35 - 7 = ?',
    choices: ['30', '25', '18', '28'],
    answer: '28'    
  },  
  {
    question: '48 - 32 = ?',
    choices: ['20', '26', '16', '11'],
    answer: '16'    
  },  
  {
    question: '193 - 100 = ?',
    choices: ['93', '293', '193', '73'],
    answer: '93'    
  },  
  {
    question: '55 + 83 = ?',
    choices: ['122', '118', '138', '128'],
    answer: '138'    
  },  
  {
    question: '90 + 22 = ?',
    choices: ['108', '112', '122', '92'],
    answer: '112'    
  },  
  {
    question: '134 + 45 - 21 = ?',
    choices: ['200', '164', '158', '185'],
    answer: '158'    
  },  
  {
    question: '9417 - 4524 = ?',
    choices: ['4893', '4938', '4893', '4398'],
    answer: '4893'    
  },  
  {
    question: '100 - 31 - 26 = ?',
    choices: ['53', '64', '44', '43'],
    answer: '43'    
  },  
];

let len = quizzes.length - 1;

function quizSet() {
  questionNum.textContent = `${quizIndex}もんめ`; 
  let num = Math.floor(Math.random() * len);
  let j = quizzes[len];
  quizzes[len] = quizzes[num];
  quizzes[num] = j;
  question.textContent = quizzes[len].question;
  for(let i = 0; i < btns.length; i++){
    btns[i].textContent = quizzes[len].choices[i];
  }
}
function clickNone() {
  btns.forEach(otherBtn => {
    otherBtn.style.pointerEvents = 'none';
  })
}
function clickAuto() {
  btns.forEach(otherBtn => {
    otherBtn.style.pointerEvents = 'auto';
  })
}


quizSet();



btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.textContent === quizzes[len].answer){
      btn.classList.add('correct');
      clickNone();
      correctIndex++;
    }else{
      btn.classList.add('lose');
      clickNone();
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
    clickAuto();
  }else{
    quizNum++;
    quizIndex++;
    classRemove();
    nextBtn.classList.add('hidden');
    len--;
    quizSet();
    clickAuto();
  }
})

redoBtn.addEventListener('click', () => {
  quizNum = 0;
  quizIndex = 1;
  correctIndex = 0;
  len = quizzes.length - 1;
  overlay.classList.add('hidden');
  result.classList.add('hidden');
  nextBtn.classList.add('hidden');
  quizSet();
})






