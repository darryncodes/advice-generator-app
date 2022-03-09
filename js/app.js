const number = document.querySelector('.slip__number');
const quote = document.querySelector('.slip__quote');
const btn = document.querySelector('.btn');
const loader = document.querySelector('.loader');

async function fetchAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice', {
    cache: 'no-cache',
  });
  const advice = response.json();

  return advice;
}

async function handleClick() {
  const { slip } = await fetchAdvice();

  number.textContent = slip.id;
  quote.textContent = slip.advice;

  loader.classList.remove('hidden');
  btn.disabled = true;

  setTimeout(function () {
    loader.classList.add('hidden');
    btn.disabled = false;
  }, 2000);
}

btn.addEventListener('click', handleClick);
