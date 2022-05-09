let menuBtn = $(".menu-btn");
    let menu = $(".menu");
    let bg1 = $("#bg1");
    menuBtn.onclick = function () {
        if (menu.check) {
            menu.check=false;
            menu.style.width = "0px";
            menu.style.minWidth = "0px";
            menuBtn.src="./images/menu.png";
            bg1.style.filter="brightness(100%)";
        } else {
            menu.check = true;
            menu.style.width = "36%";
            menu.style.minWidth = "300px";
            menuBtn.src="./images/close.png";
            bg1.style.filter="brightness(60%)";
        }
    }
    
    
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].num=i;
        menu.children[i].onclick=goTo;
        
    }

    function $(id) {
        return document.querySelector(id);
    }

    let videoBtn = $(".video-btn");
    let video = $("#video");
    let colseVideo = $(".colse-video");
    
    videoBtn.onclick=function(){
        // videoBtn.innerHTML="<video style='width: 1500px;height: 930px;align:center;' src='../vedio/Allestimento Malkovich.mov' controls></video><div id='videoCloseBtn'><img width='100%' src='../newimg/close.png'></div>";
        video.style.display="block";
        colseVideo.style.display="block";
        video.play();
        colseVideo.onclick = function(){
            video.pause();
            colseVideo.style.display="none";
            video.style.display = "none";
            return false;
        }
    };

    let sections=document.querySelectorAll("body>div");

    function goTo(){
        let sectionTop = sections[this.num].offsetTop+sections[this.num].offsetHeight;
        // let speed = parseInt(sectionTop / 200);
        // let thisTop = 0;
        
        // let time = setInterval(()=>{
        //     if(thisTop>sectionTop-speed){
                    window.scrollTo(0,sectionTop)
        //         clearInterval(time);
        //     }else{
        //         window.scrollTo(0,thisTop+=speed)
        //     }
        // },2)
    }