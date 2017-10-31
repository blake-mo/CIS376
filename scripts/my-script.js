$(function(){
  $('#console-box').append('console is ready...');
  
  $('.month-items').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
      
      console.log("works");
; 
  });
  
});