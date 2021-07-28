const header = document.querySelector(`header`);
const TABLET_WIDTH = 768;

const createBubble = () => {
  const bubble = document.createElement(`span`);
  bubble.setAttribute(`class`, `header__bubble`)

  let bubbleSize = Math.random() * 50;

  bubble.style.width = `${bubbleSize}px`;
  bubble.style.height = `${bubbleSize}px`;
  bubble.style.left = `${Math.random() * document.documentElement.clientWidth - 50}px`;

  header.appendChild(bubble);

  setTimeout(() => { bubble.remove() }, 4000);
  bubble.addEventListener(`click`, () => {
    bubble.remove();
  })
};


if (document.documentElement.clientWidth >= TABLET_WIDTH) {
  setInterval(createBubble, 400);
}
