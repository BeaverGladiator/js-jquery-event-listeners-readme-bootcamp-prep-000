//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
    return
  });
}

function frameIt() {
  $('img').on('load', function(){
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(e){
    
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();



});
