$(document).ready(function() {
  $("#tweet_form").on("submit", function(event){
    event.preventDefault();

    $(".tweet_form_elements").prop("disabled", true);
    $(".container").append("<h4 class='wait-msg'>Tweeting, please wait...</h4>");

    console.log($("#tweet-box").val());
    // var data = $("#tweet-box").val();
    var data = {
      "tweet_text": $("#tweet-box").val()
    }
    $.post("/", data, function(response) {
      $(".tweet_form_elements").prop("disabled", false);
      $(".wait-msg").remove();
      $(".container").append("<h4 class='success-msg'>Tweet sent successfully!</h4>");
    });
  });
});
