jQuery(document).ready(function() {
  
  var mouseX = 0;
  var mouseY = 0;
  var xPos = 0; 
  var yPos = 0;
  
  $(document).on('mousemove',function(e){
    console.log(e);
     mouseX = e.pageX;
     mouseY = e.pageY;
  });
  
    setInterval(function(){
      xPos += ((mouseX - xPos)/5);
      yPos += ((mouseY - yPos)/5);
      $("#circle").css({left: xPos +'px', top: yPos +'px'});
  },30);
  
  $('.button').on('mouseenter', function(){
    // a.stopPropagation();
     $("#circle").addClass('active');
     // $("#circle").append('<span class = "view">view more</span>');
    
    // console.log('inside the butoon');
  });
  
  $('.button').on('mouseleave', function(){
      $("#circle").removeClass('active');
  });
  
    $('img').on('mouseenter', function(){
    // a.stopPropagation();
     $("#circle").addClass('active show-view');
  });
    $('img').on('mouseleave', function(){
      $("#circle").removeClass('active show-view');
  });
});