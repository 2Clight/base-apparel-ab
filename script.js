const btn= document.getElementById('btn');
const email=document.querySelector('.email');
const errorMsg=document.querySelector('.error_msg');

const input=document.querySelector('.input');

btn.addEventListener('click', (e)=>{

 if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    errorMsg.textContent='Please enter a valid email';
    errorMsg.style.color="hsl(0, 93%, 68%)";
    email.style.borderColor="hsl(0, 93%, 68%)";
    e.preventDefault();
    input.style.setProperty('--display', 'block');
 }else{
    
    errorMsg.textContent='';
   
    input.style.setProperty('--display', 'none');
 }  
});
