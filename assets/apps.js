$(document).ready(function() {

var topic = ["Turkey", "Vietnam", "Paraguay", "Canada", "Sweden", "Sudan", "Mongolia"];


function displayCountries() {

var country = $(this).attr("data-name");
var queryUrL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + topic;
console.log(queryUrl);

 $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {




});
    }



function renderButtons() {
	console.log("hello");

	$("#buttons-view").empty();

	for (var i = 0; i < topic.length; i++){

		 var b = $("<button>");

		 b.addClass('country');
		 b.attr("data-name", topic[i]);
		 b.html(topic[i]);

		$("#buttons-view").append(b);

	}

}
renderButtons();
});