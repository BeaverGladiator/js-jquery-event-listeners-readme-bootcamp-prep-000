//define functions here

$(document).ready(function(){

// call functions here

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


});
