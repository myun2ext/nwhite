$(function(){
  $(".open-hovered-container").hover(function(){
    $(this).find(".container").show(200);
  }, function(){
    $(this).find(".container").hide(200);
  });
});