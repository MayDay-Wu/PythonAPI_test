let myDocument = document.documentElement;
let btn = document.getElementById('btn-fullScreen')

let isFullScreen = false
btn.addEventListener('click',()=>{
    if(isFullScreen == false){
        myDocument.requestFullscreen()
        // if(myDocument.requestFullscreen){
        //     myDocument.requestFullscreen()
        // }else if(myDocument.msRequestFullscreen){
        //     myDocument.msRequestFullscreen()
        // }else if(myDocument.mozRequestFullscreen){
        //     myDocument.mozRequestFullscreen()
        // }else if(myDocument.webkitRequestFullscreen){
        //     myDocument.webkitRequestFullscreen()
        // }
        isFullScreen = true
    }else{
        document.exitFullscreen()
        // if(document.exitFullscreen){
        // document.exitFullscreen()
        // }else if(document.msexitFullscreen){
        //     document.msexitFullscreen()
        // }else if(document.mozexitFullscreen){
        //     document.mozexitFullscreen()
        // }else if(document.webkitexitFullscreen){
        //     document.webkitexitFullscreen()
        // }
        isFullScreen = false
    }    
})