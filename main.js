$(document).ready(function() {

  //mouse move
  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
  });
    
  setInterval(function(e){
    console.log(e)
    xp += mouseX - xp
    yp += mouseY - yp
    $(".mouse_circle").css({left: xp +'px', top: yp +'px'});
  }, 20);
  //mouse move

  //mouse scroll

  //mouse scroll
});







//마우스 커서, 스크롤 이벤트
function initMouse(){
  let commonSet = {passive: true, capture: true};

  let $mouseCursor = $(".mouse_circle");
  // let TweenMax = new TweenMax();
  let eventEle = document.querySelectorAll(".cursor_event_element");
  let title1 = document.querySelector(".title1");
  let cursorSize = 50;
  let cursorMaxSize = cursorSize*4;
  let cursorMinSize = 50;
  let spacebarCnt = 0;

  // $('body').on('mousemove', cursor);
    
  window.addEventListener("wheel", scroll, commonSet);
  document.body.addEventListener('mousemove', cursor);

  function cursor(e){
    // mouseCursor.style.left = e.pageX + "px";
    // mouseCursor.style.top = e.pageY + "px";
    TweenMax.to($mouseCursor, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7
    })
  }

  function scroll(e){
    if (e.deltaY < 0) {
      if(cursorSize < cursorMaxSize){
        cursorSize += 50;
      }
    }else{
      if(cursorSize > cursorMinSize){
        cursorSize -= 50;
      }
    }

    console.log(cursorSize)


    mouseCursor.style.width = cursorSize+'px';
    mouseCursor.style.height = cursorSize+'px';
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

function initElement(){
  
}