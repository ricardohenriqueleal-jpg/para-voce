const photos = [
  'fotos/foto1.jpg','fotos/foto2.jpg','fotos/foto3.jpg','fotos/foto4.jpg','fotos/foto5.jpg','fotos/foto6.jpg','fotos/foto7.jpg'
];

const message = `Sei que essa nova fase não tem sido fácil. Talvez existam dias em que tudo pareça pesado, dias em que as incertezas e o cansaço tentem falar mais alto. Mas, olhando para tudo o que já vivemos, tenho a certeza de que também vamos superar esse momento.

Já passamos por tantas coisas juntos, e em cada uma delas encontrei em você o meu porto seguro. Independente das circunstâncias, dos desafios ou do tempo, você sempre foi a minha certeza.

Se existe algo de que nunca duvidei, foi do amor que sinto por você. E é por isso que continuo acreditando em nós, porque, para mim, qualquer lugar é o meu lugar, desde que seja o seu lugar.

Te amo daqui até a lua, ida e volta.

E, se for preciso, mil vezes mais.`;

let index = 0;
let typingStarted = false;
const slide = document.getElementById('slide');
const counter = document.getElementById('counter');
const dots = document.getElementById('dots');
const content = document.getElementById('content');

photos.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Ir para foto ${i + 1}`);
  dot.addEventListener('click', () => showPhoto(i));
  dots.appendChild(dot);
});

function showPhoto(i){
  index = (i + photos.length) % photos.length;
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.src = photos[index];
    counter.textContent = `${index + 1} / ${photos.length}`;
    document.querySelectorAll('.dot').forEach((d, n) => d.classList.toggle('active', n === index));
    slide.style.opacity = 1;
  }, 220);
}

document.getElementById('prevBtn').addEventListener('click', () => showPhoto(index - 1));
document.getElementById('nextBtn').addEventListener('click', () => showPhoto(index + 1));
setInterval(() => showPhoto(index + 1), 5200);

document.getElementById('startBtn').addEventListener('click', () => {
  content.classList.remove('hidden');
  content.scrollIntoView({behavior:'smooth'});
  if(!typingStarted){ typingStarted = true; typeMessage(); }
});

function typeMessage(){
  const el = document.getElementById('typedText');
  let pos = 0;
  const timer = setInterval(() => {
    el.textContent = message.slice(0, pos++);
    if(pos > message.length) clearInterval(timer);
  }, 25);
}

function createHeart(){
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = Math.random() > .35 ? '♥' : '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (7 + Math.random() * 8) + 's';
  heart.style.fontSize = (12 + Math.random() * 22) + 'px';
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}
setInterval(createHeart, 550);
