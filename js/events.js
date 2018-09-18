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
  $('input').on('keydown', function(key){
    if (key.which === 71) {
      alert('You Pressed "g"')
    }
  })
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();


});
