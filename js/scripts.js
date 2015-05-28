var countUp = function(bigInput, smallInput) {
  var bigNum = bigInput;
  var smallNum = smallInput;
  var countSteps = Math.floor(bigNum/smallNum);
  var total = 0;
  var emptyArr = [];
  for (var i = 0; i < countSteps; i ++) {
    total += smallNum;
    emptyArr.push(total);
  }
  return emptyArr.join(" ");
}


$(document).ready(function(){

  $("form#count").submit(function(event){
  var big = parseInt($("input#bigNum").val());
  var small = parseInt($("input#smallNum").val());
  var counter = countUp(big, small);

  $("#results").show();
  $(".result").text(counter);

  event.preventDefault();

  });
});
