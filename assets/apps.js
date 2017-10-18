$(document).ready(function() {


	

var topic = ["Egypt", "China", "Greece", "Russia", "Spain"];
var countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];



function renderButtons() {


	$("#buttons-view").empty();

	for (var i = 0; i < topic.length; i++){

		 var b = $("<button>");

		 b.addClass('btn btn-default shelf');
		 b.attr("data-name", topic[i]);
		 b.html(topic[i]);

		$("#buttons-view").append(b);

	}

}

renderButtons();

$("#add-country").on("click", function(event) {
	
	event.preventDefault();


	var newCountry = $("#countries-input").val();


//Was hoping code would detect if entry wasn't a country
/*for( i = 0; i < countries.length; i++){
   countriess = countries[i].toLowerCase();
    country = countriess.split(",");
  


	if (newCountry !== country) {
		alert("Not a country");
	}else {
		
*/	

	topic.push(newCountry);

	renderButtons();

});

$("#buttons-view").on("click", ".shelf", function(){
	$("#country-view").empty();
	var chosen = $(this).attr('data-name');
	//console.log(chosen);
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + chosen +"&limit=10&rating=g&api_key=dc6zaTOxFJmzC";
	
	$.ajax({
       url: queryUrl,
       method: "GET"
   }).done(function(response) {
   //	console.log(response);
   	
   	for (i = 0 ; i < response.data.length; i++){
   	//	console.log(response);
console.log(response.data[i].images['fixed_width_still'].url);
   	var images = $("<img>");
   	images.addClass('gif')
   images.attr('src', response.data[i].images.fixed_width_still.url);
   images.attr("data-still",response.data[i].images.fixed_width_still.url);
   images.attr('data-animate', response.data[i].images.preview_gif.url);
   images.attr('data-state', "still");
 
   $("#country-view").append(images);
}
});



// The code i would use if animate-state would work
 /*$(".gif").on("click", function(){
 	var  currentState = $(this).attr("data-state");
	
	if (currentState === "still") {
		
		$(this).attr("src", $(this).attr("data-animate"));
		
		$(this).attr("data-state", "animate");
	
	} else {
		
		$(this).attr("src", $(this).attr("data-still"));
		
		$(this).attr("data-state", "still");
	}
 
});
*/
});





renderButtons();

});