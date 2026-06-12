const photos = [
  'fotos/foto1.jpg','fotos/foto2.jpg','fotos/foto3.jpg','fotos/foto4.jpg','fotos/foto5.jpg','fotos/foto6.jpg','fotos/foto7.jpg'
];
let current = 0;
const slide = document.getElementById('slide');
const dotsBox = document.getElementById('dots');
photos.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => showPhoto(i);
  dotsBox.appendChild(dot);
});
function showPhoto(i){
  current = i;
  slide.style.opacity = 0;
  setTimeout(()=>{ slide.src = photos[current]; slide.style.opacity = 1; updateDots(); }, 250);
}
function updateDots(){ [...document.querySelectorAll('.dot')].forEach((d,i)=>d.classList.toggle('active', i===current)); }
setInterval(()=> showPhoto((current + 1) % photos.length), 5200);
slide.style.transition = 'opacity .35s ease';

const message = `Sei que essa nova fase não tem sido fácil. Talvez existam dias em que tudo pareça pesado, dias em que as incertezas e o cansaço tentem falar mais alto. Mas, olhando para tudo o que já vivemos, tenho a certeza de que também vamos superar esse momento.

Já passamos por tantas coisas juntos, e em cada uma delas encontrei em você o meu porto seguro. Independente das circunstâncias, dos desafios ou do tempo, você sempre foi a minha certeza.

Se existe algo de que nunca duvidei, foi do amor que sinto por você. E é por isso que continuo acreditando em nós, porque, para mim, qualquer lugar é o meu lugar, desde que seja o seu lugar.

Te amo daqui até a lua, ida e volta.

E, se for preciso, mil vezes mais.`;
const typeBox = document.getElementById('typewriter');
let typed = false;
function typeWriter(){
  if (typed) return; typed = true;
  let i = 0;
  const cursor = '<span class="cursor">&nbsp;</span>';
  const timer = setInterval(()=>{
    typeBox.innerHTML = message.slice(0, i).replace(/\n/g,'<br>') + cursor;
    i++;
    if(i > message.length){ clearInterval(timer); typeBox.innerHTML = message.replace(/\n/g,'<br>'); }
  }, 34);
}
const observer = new IntersectionObserver((entries)=> entries.forEach(e=>{ if(e.isIntersecting) typeWriter(); }), {threshold:.2});
observer.observe(document.getElementById('carta'));

function createHeart(){
  const h = document.createElement('div');
  h.className = 'heart'; h.textContent = Math.random() > .5 ? '❤️' : '♡';
  h.style.left = Math.random()*100 + 'vw';
  h.style.animationDuration = 7 + Math.random()*7 + 's';
  h.style.fontSize = 14 + Math.random()*22 + 'px';
  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 14000);
}
setInterval(createHeart, 900);
