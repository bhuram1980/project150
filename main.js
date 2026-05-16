// Cursor
const dot = document.querySelector('.cur');
const ring = document.querySelector('.cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function tick(){
  rx+=(mx-rx)*0.1;ry+=(my-ry)*0.1;
  if(dot){dot.style.left=mx+'px';dot.style.top=my+'px'}
  if(ring){ring.style.left=rx+'px';ring.style.top=ry+'px'}
  requestAnimationFrame(tick);
})();

// Nav scroll
const nav=document.querySelector('.nav');
window.addEventListener('scroll',()=>{
  if(nav)nav.classList.toggle('scrolled',scrollY>30);
},{passive:true});

// Burger
const burger=document.querySelector('.nav-burger');
const links=document.querySelector('.nav-links');
if(burger&&links)burger.addEventListener('click',()=>links.classList.toggle('open'));

// Scroll reveal
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)}});
},{threshold:0.07,rootMargin:'0px 0px -30px 0px'});
reveals.forEach(el=>obs.observe(el));

// Parallax bg number
const bgNum=document.querySelector('.hero-bg-num');
if(bgNum){
  window.addEventListener('scroll',()=>{
    bgNum.style.transform=`translateY(${scrollY*0.15}px)`;
  },{passive:true});
}

// Number count-up on stat elements
function countUp(el,target,duration=1200){
  let start=0,startTime=null;
  function step(ts){
    if(!startTime)startTime=ts;
    const progress=Math.min((ts-startTime)/duration,1);
    const ease=1-Math.pow(1-progress,3);
    el.textContent=Math.floor(ease*target);
    if(progress<1)requestAnimationFrame(step);
    else el.textContent=target;
  }
  requestAnimationFrame(step);
}
const statNums=document.querySelectorAll('.hero-stat-num,.statbox-num,.gym-big-num');
const statObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const n=parseInt(e.target.textContent);
      if(!isNaN(n))countUp(e.target,n);
      statObs.unobserve(e.target);
    }
  });
},{threshold:0.5});
statNums.forEach(el=>statObs.observe(el));

// Image lightbox for recipe/infographic assets
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const zoomables = document.querySelectorAll('img[data-lightbox="true"]');

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (lightbox && lightboxImg) {
  zoomables.forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || 'Expanded image';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
