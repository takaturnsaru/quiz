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
let n1 = 0
let n2 = 0
let n3 = 0
let n4 = 0
let rn1 = 0
let rn2 = 0
let rn3 = 0

function nSet() {
  n1 = Math.floor(Math.random() * 99);
  n2 = Math.floor(Math.random() * 99);
  n3 = Math.floor(Math.random() * 99);
  n4 = Math.floor(Math.random() * 99);
  rn1 = Math.floor(Math.random() * 9) + 1;
  rn2 = Math.floor(Math.random() * 9) + 1;
  rn3 = Math.floor(Math.random() * 9) + 1;
}


console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(rn1);
console.log(rn2);
console.log(rn3);


const quizzes = [
  {
    num: nSet(),
    question: `${n1} + ${n2} = ?`,
    choices: [n1 + n2, n1 + n2 + rn1, n1 + n2 + rn1 + rn2, n1 + n2 - rn3],
    answer: n1 + n2    
  },  
  {
    num: nSet(),
    question: `${n1} + ${n2} = ?`,
    choices: [n1 + n2 + rn1, n1 + n2, n1 + n2 + rn1 + rn2, n1 + n2 - rn3],
    answer: n1 + n2    
  },  
  {
    num: nSet(),
    question: `${n1} + ${n2} = ?`,
    choices: [n1 + n2 + rn1, n1 + n2 + rn1 + rn2, n1 + n2, n1 + n2 - rn3],
    answer: n1 + n2    
  },  
  {
    num: nSet(),
    question: `${n1} + ${n2} = ?`,
    choices: [n1 + n2 + rn1, n1 + n2 + rn1 + rn2, n1 + n2 + rn3, n1 + n2],
    answer: n1 + n2    
  },  
  {
    num: nSet(),
    question: `${n1} + ${n2} + ${n3} = ?`,
    choices: [n1 + n2 + n3 + rn1, n1 + n2 + n3 + rn1 + rn2, n1 + n2 + n3 + rn3, n1 + n2 + n3],
    answer: n1 + n2 + n3    
  },   
  {
    num: nSet(),
    question: `${n1} + ${n2} + ${n3} = ?`,
    choices: [n1 + n2 + n3, n1 + n2 + n3 + rn1, n1 + n2 + n3 + rn1 + rn2, n1 + n2 + n3 + rn3],
    answer: n1 + n2 + n3    
  },   
  {
    num: nSet(),
    question: `${n1} + ${n2} + ${n3} = ?`,
    choices: [n1 + n2 + n3 + rn1, n1 + n2 + n3, n1 + n2 + n3 + rn2, n1 + n2 + n3 + rn3],
    answer: n1 + n2 + n3    
  },   
  {
    num: nSet(),
    question: `${n1} + ${n2} + ${n3} = ?`,
    choices: [n1 + n2 + n3 + rn1, n1 + n2 + n3 + rn2, n1 + n2 + n3, n1 + n2 + n3 + rn3],
    answer: n1 + n2 + n3    
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
    if(btn.textContent == quizzes[len].answer){
      btn.classList.add('correct');
      clickNone();
      correctIndex++;
    }else{
      btn.classList.add('lose');
      clickNone();
    }
    console.log(btn.textContent);
    console.log(quizzes[len].answer);
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
    nSet();
    quizSet();
    clickAuto();
   console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    console.log(rn1);
    console.log(rn2);
    console.log(rn3);
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






