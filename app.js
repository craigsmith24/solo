var totalCalories = 0;

$(document).ready(function(){
  $(".entry").on("click", function(){
    var foodEntry = prompt('what have you eaten today?');
    $("#foodName").html('Food Eaten');
    $("#foodName").append(foodEntry);
    var calories = parseInt(prompt('how many calories were in your ' + foodEntry + '?'));
    $("#foodCalories").html('Calories');
    $("#foodCalories").append(calories);
    totalCalories+=calories;
    $("#total").html('Total Calories');
    $("#total").append(totalCalories);
  });
})



  // $.ajax({
  //   url: 'https:api.parse.com/1/whatev/whatev',
  //   type: 'GET',
  //   data: 'something'
  //})
  //.done(function(response){
    //done(response);
  //})   
    