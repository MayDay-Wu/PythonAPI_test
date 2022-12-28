// let list = document.querySelectorAll('.nav-leftBanner li');
// function activeLink(){
//     list.forEach((item)=>
//     item.classList.remove('hovered'));
//     this.classList.add('hovered')
// }
// list.forEach((item)=>
// item.addEventListener('mouseover',activeLink));

// MenuToggle
let toggle = document.querySelector('.toggle');
let nav_left = document.querySelector('.nav-leftBanner');
let main = document.querySelector('.main');

toggle.onclick = function(){
    nav_left.classList.toggle('active');
    main.classList.toggle('active');
}



$(function(){
    $('li').on('click',function(e){
        e.preventDefault();  // 阻止鏈接跳轉
        var sId = $(this).data('id');
        console.log(sId)
        window.location.hash = sId;
        // loadInner(sId);
        
    })
    function loadInner(sId){
        var hrefArr = document.getElementsByClassName('left_a')
        var sId = window.location.hash;
        var pathn,i;
        switch(sId){
            case "#a": pathn = hrefArr[0] ;i = 0;break;
            case "#b": pathn = hrefArr[1]  ;i = 1;break;
            case "#c": pathn = hrefArr[2]  ;i = 2;break;
            case "#d": pathn = hrefArr[3]  ;i = 3;break;
            default : pathn = hrefArr[0]  ;i = 0;break;
        }
        $('#Main').load(pathn +' #mainPage');// 載入新內容,url地址與該地址下的選擇器之間要有空格,表示該url下的#container
        // $('li.current').removeClass('current');    
        // $(this).addClass('current'); 
        $('.leftList').eq(i).addClass('current').siblings().removeClass('current');
    }
    var sId = window.location.hash;
    loadInner(sId)
    window.addEventListener("popstate", e=> {
        var sId = window.location.hash;
        loadInner(sId)
    });
})



// JquaryAJAX
// $(function(){

// $('a').on('click',function(e){
//     console.log('good');
                    
//     e.preventDefault();  // 阻止鏈接跳轉
//     var url = this.href;  // 保存點擊的地址
//     console.log(url)
//     $('a.current').removeClass('current');    
//     $(this).addClass('current');                       

//     $('#mainPage').remove();                          
//     $('#Main').load(url + ' #mainPage').fadeIn('slow'); // 載入新內容,url地址與該地址下的選擇器之間要有空格,表示該url下的#container
// })  

//    $.ajax({
//     method:'get',
//     url:'/calculate',

//     })
//     .done(msg=>{
//         console.log(msg);
//     })
// })

