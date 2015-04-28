
// var app = {
//   server:,


var totalCalories = 0;

$(document).ready(function(){
  $(".entry").on("click", function(){
    var foodEntry = prompt('what have you eaten today?');
    var calories = parseInt(prompt('how many calories were in your ' + foodEntry + '?'));
    $("#table").append("<tr><td>"+foodEntry+"</td><td>"+calories+"</td></tr>");
    totalCalories+=calories;
    $("#total").html('Total Calories');
    $("#total").append("<br>" + totalCalories);
  });

  // $(".entry").on("click", function(){
  //   $("#inputBox").slideDown();
  //   var text = $("#inputBox").text();
  //   console.log(text);
  // });

  // $("#inputBox").keypress(function(e){
  //   if (e.which === 13){
  //     var feedEntry = e.slice(0,e.length);
  //   alert(e);
  // }
  // });
  //   var feedEntry = document.getElementById("inputBox");
  //   alert(feedEntry);
  // });
})



  // $.ajax({
  //   url: 'https:api.parse.com/1/whatev/whatev',
  //   type: 'GET',
  //   data: 'something'
  //})
  //.done(function(response){
    //done(response);
  //})   
    