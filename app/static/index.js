let list = document.querySelectorAll('.nav-leftBanner li');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('hovered'));
    this.classList.add('hovered')
}
list.forEach((item)=>
item.addEventListener('mouseover',activeLink));

// MenuToggle
let toggle = document.querySelector('.toggle');
let nav_left = document.querySelector('.nav-leftBanner');
let main = document.querySelector('.main');

toggle.onclick = function(){
    nav_left.classList.toggle('active')
    main.classList.toggle('active')
}

// JquaryAJAX
$(function(){
  $('a').on('click',function(){
   console.log('good') 
   $.ajax({
    url:'/calculate'
    })
  })  
})

