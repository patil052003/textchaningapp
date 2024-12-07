let slideImages =document.querySelectorAll('img')
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let dot=document.querySelectorAll('.dot');


let notes = document.querySelectorAll('.note');
const textareas = document.querySelectorAll('textarea');
let isDragging = false;
let offsetX, offsetY;

console.log('Dots:', dot);

var counter=0; 

next.addEventListener('click',slideNext);
function slideNext() { slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
      counter = (counter >= slideImages.length - 1) ? 0 : counter + 1; 
      slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';  
      updateDots();
     }
prev.addEventListener('click',slidePrev);    
function slidePrev() {
     slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
      counter = (counter <= 0) ? slideImages.length - 1 : counter - 1; 
      slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards'; 
      updateDots();
     } 


function updateDots() {
     dot.forEach((dot, index) => { dot.classList.toggle('active', index === counter);

      }); 
    } 
    dot.forEach((dot, index) => { dot.addEventListener('click', () => { 
         slideImages[counter].style.animation = (counter < index) ? 'next1 0.5s ease-in forwards' : 'prev1 0.5s ease-in forwards';
         counter = index;
          slideImages[counter].style.animation = (counter < index) ? 'next2 0.5s ease-in forwards' : 'prev2 0.5s ease-in forwards'; 
          updateDots(); 
        });
     });    

     notes.forEach(note => { note.addEventListener('mousedown', (event) => { 
          isDragging =   true;
          offsetX = event.clientX - note.offsetLeft;
           offsetY = event.clientY - note.offsetTop; 
           note.style.cursor = 'grabbing';
           }); 
           document.addEventListener('mousemove', (event) => { 
               if (isDragging) { note.style.left = `${event.clientX - offsetX}px`; 
               note.style.top = `${event.clientY - offsetY}px`; 
           } }); 
           document.addEventListener('mouseup', () => { 
               isDragging = false; note.style.cursor = 'move'; 

           });
 });  

 function f1(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           textarea.style.fontSize = value + "px";
   }); }

   function f2(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           if(textarea.style.fontWeight =="bold"){
               textarea.style.fontWeight ="normal";
               e.classList.remove("active");
           }
           else{
               textarea.style.fontWeight ="bold"; 
               e.classList.add("active");
           }
   }); }
   function f3(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           if(textarea.style.fontStyle =="italic"){
               textarea.style.fontStyle ="normal";
               e.classList.remove("active");
           }
           else{
               textarea.style.fontStyle ="italic"; 
               e.classList.add("active");
           }
   }); }
   function f4(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           if(textarea.style.textDecoration =="underline"){
               textarea.style.textDecoration ="normal";
               e.classList.remove("active");
           }
           else{
               textarea.style.textDecoration ="underline"; 
               e.classList.add("active");
           }
   }); }

   function f5(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           textarea.style.textAlign ="left";
   }); }

   function f6(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           textarea.style.textAlign =  "center";
   }); }

   function f7(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           textarea.style.textAlign = "right";
   }); }
   function f8(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           if(textarea.style.textTransform =="uppercase"){
               textarea.style.textDecoration ="none";
               e.classList.remove("active");
           }
           else{
               textarea.style.textTransform ="uppercase"; 
               e.classList.add("active");
           }
   }); }
   function f9(e) { 
     let value = e.value;
      textareas.forEach(textarea => {
           textarea.style.fontWeight ="normal";
           textarea.style.textAlign = "right";
           textarea.style.fontStyle ="normal";
           textarea.style.textTransform ="uppercase"; 
           textarea.value="";
   }); }
   function f10(e) {
      let value = e.value; 
      textareas.forEach(textarea => {
           textarea.style.color = value; 
          }); } 
          window.addEventListener("load", () => { 
               textareas.forEach(textarea => { textarea.value = ""; }

     ); });
     function changeFontFamily(e) { let value = e.value; textareas.forEach(textarea => { textarea.style.fontFamily = value; }); }