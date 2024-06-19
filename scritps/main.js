const adviceIdSpanEl = document.getElementById('js-advice-id');
const adviceSpanEl = document.getElementById('js-advice');
const diceButtonEl = document.getElementById('js-dice-button');

function getAdvice() {
  fetch('https://api.adviceslip.com/advice').then((response) => {
    return response.json();
  }).then((advice) => {
    adviceIdSpanEl.innerHTML = advice.slip.id;
    adviceSpanEl.innerHTML = advice.slip.advice;
  });
}

diceButtonEl.addEventListener('click', () => {
  getAdvice();  
});
