$(document).ready(function(){
  var click_count=0;
  var first_guess=0;
  var second_guess=0;
  var first_card=0;//these are variables that will compare the numbers
  var card_array = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10"];
  
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  var shuffle2 = shuffle(card_array);
for(i in shuffle2){//this is the numbers that will appear on each card
    $('#card_holder').append('<div class="card"><p>'+shuffle2[i]+'</p></div>');
  }
  
  $("div.card"). click(function(){
    var mynum=0;
    var firstcard,secondcard;
    $(this).find('p').css("opacity","1");
    if(!onfirstclick){
      //compare cards
    }else{
    firstcard=$(this).find('p').html
  }
    
  });
});
