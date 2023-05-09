$(document).ready(function() {
    initMouse();
});

//마우스 커서, 스크롤 이벤트
function initMouse(){
  let mouseCursor = document.querySelector(".mouse_circle");
  let cursorSize = 1;
  let cursorMaxSize = 3;
    
  window.addEventListener("wheel", scroll);
  window.addEventListener("mousemove", cursor);
  
  function cursor(e){
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
  }

  function scroll(e){

    if (e.deltaY > 0) {
      if(cursorSize != cursorMaxSize){
        cursorSize += 1;
      }
    }else{
      if(cursorSize != 1){
        cursorSize -= 1;
      }
    }

    mouseCursor.style.transform = scale(cursorSize);
  }
}