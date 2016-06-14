$(document).ready(function() {
  $("form").submit(function(event) {

    var answers = [$("#question1").val(), $("#question2").val(), $("#question3").val(), $("#question4").val(), $("#question5").val()];
    var cloneArray = answers.slice(0,2);
    cloneArray = cloneArray.reverse();
    cloneArray = cloneArray.concat(answers.slice(2));
    console.log(cloneArray);
    removed = cloneArray.splice(3, 2);


    console.log(cloneArray);
    console.log(removed);
    event.preventDefault();
  });
});
