//dynamically get the year and add to the footer

$(document).ready(function(){
  var currentYear = new Date().getFullYear();
  $("#year").html(currentyear);

  var bug_list = ["butterfly", "ladybug", "mosquito", "pincher", "mantis"];

  var random_bug_number = Math.floor(Math.random() * bug_list.length()) + 1;
  var author = bug_list[random_bug_number];
  $("#author").html(author);

  for (var i = 0; i < bug_list.length; i++) {
    $("#bug_display").append("<li>"+bug_list[i]+"</li>");

})
