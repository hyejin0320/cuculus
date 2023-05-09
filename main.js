$(document).ready(function() {
    initMouse();
});

//마우스 커서, 스크롤 이벤트
function initMouse(){
  let commonSet = {passive: true, capture: true};
  let mouseCursor = document.querySelector(".mouse_circle");
  let eventEle = document.querySelectorAll(".cursor_event_element");
  let title1 = document.querySelector(".title1");
  let cursorSize = 1;
  let cursorMaxSize = 3;
  let spacebarCnt = 0;
    
  window.addEventListener("wheel", scroll, commonSet);
  window.addEventListener("mousemove", cursor, commonSet);
  window.addEventListener("keydown", showBtn, commonSet);
  eventEle.forEach((ele)=>{
    ele.addEventListener("mouseenter", mouseEnterEle, commonSet);
    ele.addEventListener("mouseleave", mouseLeaveEle, commonSet);
  });
  title1.addEventListener("mouseenter", title1Enter, commonSet);
  title1.addEventListener("mouseleave", title1Leave, commonSet);

  function cursor(e){
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY + "px";
  }

  function scroll(e){
    console.log('?')

    if (e.deltaY < 0) {
      if(cursorSize != cursorMaxSize){
        cursorSize += 1;
      }
    }else{
      if(cursorSize != 1){
        cursorSize -= 1;
      }
    }

    mouseCursor.style.scale = cursorSize;
  }

  function mouseEnterEle(e){
    mouseCursor.classList.add("mouse_circle_hover");
  }

  function mouseLeaveEle(e){
    mouseCursor.classList.remove("mouse_circle_hover");
  }

  function title1Enter(e){
    title1.classList.add("title1_hover");
  }

  function title1Leave(e){
    title1.classList.remove("title1_hover");
  }

  function showBtn(e){
    if(e.keyCode == 32){
      spacebarCnt++;
      if(spacebarCnt == 5){
        $('.hide').removeClass('hide');
      }
    }
  }
}