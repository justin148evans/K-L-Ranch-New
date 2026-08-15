
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg = document.querySelector('#form-message');
    if(msg){
      msg.textContent = 'This demo form is ready to be connected once you add the ranch email or phone number.';
    }
  });
}
