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
let quizzIndex = 0;

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
];

function quizSet() {
  question.textContent = quizzes[quizzIndex].question;
  for(let i = 0; i < btns.length; i++){
    btns[i].textContent = quizzes[quizzIndex].choices[i];
  }
}

quizSet();

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.textContent === quizzes[quizzIndex].answer){
      btn.classList.add('correct');
    }else{
      btn.classList.add('lose');
    }
    quizSet();
  })
})


