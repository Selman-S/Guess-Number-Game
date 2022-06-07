
const difficulty= document.querySelectorAll('.difficulty');




difficulty.forEach(function (node,i) {

  node.addEventListener('click',(a)=>{
    if(i==0){
      
      a.target.parentNode.nextElementSibling.classList.add('disabled');

      a.target.parentNode.nextElementSibling.nextElementSibling.classList.add('disabled');

      a.target.parentNode.nextElementSibling.classList.remove('d-hover');

      a.target.parentNode.nextElementSibling.nextElementSibling.classList.remove('d-hover');

      a.target.parentNode.classList.remove('d-hover');

      document.getElementById("description").innerHTML = "Let's start";

      document.querySelector('.start').classList.add('s-hover');

      document.querySelector('.start').classList.remove('disabled');

      sessionStorage.setItem('diffic',10);

      document.querySelector('#intro').innerText = `Guess The Number (1 -  ${sessionStorage.getItem('diffic')})`
      document.querySelector('.start').disabled = false;
      a.target.parentNode.disabled =true; 
      a.target.parentNode.nextElementSibling.disabled =true; 
      a.target.parentNode.nextElementSibling.nextElementSibling.disabled =true;
      
    }if(i==1){
      a.target.parentNode.nextElementSibling.classList.add('disabled');
      a.target.parentNode.previousElementSibling.classList.add('disabled');
      a.target.parentNode.nextElementSibling.classList.remove('d-hover');
      a.target.parentNode.previousElementSibling.classList.remove('d-hover');

      a.target.parentNode.classList.remove('d-hover');

      document.getElementById("description").innerHTML = "Let's start";

      document.querySelector('.start').classList.add('s-hover');

      document.querySelector('.start').classList.remove('disabled');

      sessionStorage.setItem('diffic',100);

      document.querySelector('#intro').innerText = `Guess The Number (1 -  ${sessionStorage.getItem('diffic')})`
      document.querySelector('.start').disabled = false;
      a.target.parentNode.disabled =true;
      a.target.parentNode.nextElementSibling.disabled =true;
      a.target.parentNode.previousElementSibling.disabled =true;
      
      
      
      
      
     
    }if(i==2){
      a.target.parentNode.previousElementSibling.classList.add('disabled');
      a.target.parentNode.previousElementSibling.previousElementSibling.classList.add('disabled');
      a.target.parentNode.previousElementSibling.classList.remove('d-hover');
      a.target.parentNode.previousElementSibling.previousElementSibling.classList.remove('d-hover');

      a.target.parentNode.classList.remove('d-hover');

      document.getElementById("description").innerHTML = "Let's start";

      document.querySelector('.start').classList.add('s-hover');

      document.querySelector('.start').classList.remove('disabled');

      sessionStorage.setItem('diffic',1000);

      document.querySelector('#intro').innerText = `Guess The Number (1 -  ${sessionStorage.getItem('diffic')})`;
      document.querySelector('.start').disabled = false;
      a.target.parentNode.disabled =true;
      a.target.parentNode.previousElementSibling.previousElementSibling.disabled =true;
      a.target.parentNode.previousElementSibling.disabled =true;
    }
    
  })
  
  
  
})

const start = document.getElementById('start');


start.addEventListener('click', () =>{
  document.getElementById("intro-page").style.display="none";
  document.querySelector(".guess").max = "100";
  document.querySelector('#intro').innerText = `Guess The Number `
  document.querySelector("#between").innerText = `Please enter a number between 1 and ${sessionStorage.getItem('diffic')} `;


  
})



