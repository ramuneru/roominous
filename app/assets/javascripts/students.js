$(function(){
  //①マウスオーバー、マウスアウト
  $('.buttons').on("mouseover", ".button__student", function(){
    $(this).css({"background-color": "orange"});
  }).on("mouseout", ".button__student", function(){
    $(this).css({"background-color": "white"})
  }).on("mouseover", ".button__guest", function(){
    $(this).css({"background-color": "skyblue"});
  }).on("mouseout", ".button__guest", function(){
    $(this).css({"background-color": "white"})
  }).on("mouseover", ".button__etc", function(){
    $(this).css({"background-color": "pink"});
  }).on("mouseout", ".button__etc", function(){
    $(this).css({"background-color": "white"})
  })




});  
  
  
