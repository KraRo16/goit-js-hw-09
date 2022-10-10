function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnColorStart = document.querySelector('button[data-start]');

const btnColorStop = document.querySelector('button[data-stop]');

let timerId = null;

btnColorStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.background = randomColor;
  }, 1000);
});

btnColorStop.addEventListener('click', () => {
  clearInterval(timerId);
});
