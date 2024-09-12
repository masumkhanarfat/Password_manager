// Show Hide Password with icon
const toogle = document.querySelector('#toggle');
const password = document.querySelector('#input');

toggle.addEventListener('click', function(e)
{
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   
   this.classList.toggle('fa-eye-slash');
})



// reset popup box without animation
document.querySelector(".btn").addEventListener("click", function(){
   document.querySelector(".popUp").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function(){
   document.querySelector(".popUp").style.display = "none";
})