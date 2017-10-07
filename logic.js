  var topics = ["lion king", "alladin", "cruella", "mickey mouse", "fantasia", "frozen", "snow white", "mulan", "donald duck"]



    function showTopics () {

  			$("#buttons").empty();

  			for (var n = 0; n < topics.length; n++) {
  				var newTopic = $("<button>").text(topics[n]).attr("buttons", topics[n]).addClass("buttonPretty btn btn-lg").appendTo("#buttons");
  			 
        }
  		}

    $(document).ready(function(){
        showTopics();
    });

 

  	$(document).on("click", ".buttonPretty", function() {

  		$("#mickey-mouse").empty();

      var walt = $(this).attr("buttons");
  		

  		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + walt + "&limit=10&api_key=Smkiq9kPJLMKPWWS6CXzTZ2w1lvvD3BU";

  		$.ajax({
  			url: queryURL,
  			method: "GET"
  		}).done(function(response) {
  			console.log(queryURL);
  			console.log(response);
  			var results = response.data;
  			for (var n = 0; n < results.length; n++) {
  				if (results[n].rating !== "r" && results[n].rating !== "pg-13") {
  					var disDiv = $("<div class='item'>");
  					var rating = results[n].rating;
  					var p = $("<p>").text("Rating: " + rating);
  					var disneyImage = $('<img class="images">');
  					disneyImage.attr("src", results[n].images.fixed_height.url);
            disneyImage.attr("data-animate", results[n].images.fixed_height.url);
            disneyImage.attr("data-still", results[n].images.fixed_height.url);
            disneyImage.attr("data-state", "still");
  					disDiv.append(p);
  					disDiv.append(disneyImage);
  					$("#mickey-mouse").prepend(disDiv);
  				}
  			}
  		});
    });

  $(document).on("click", ".images", function() {


      var state = $(this).attr("data-state");

  		if (state === "still") {
  			$(this).attr("src", $(this).attr("data-animate"));
  			$(this).attr("data-state", "animate");
  		} else {
  			$(this).attr("src", $(this).attr("data-still"));
  			$(this).attr("data-state", "still");
  		}
  });


  $(document).on("click", "#submit", function() {

    event.preventDefault();

    var input = $("#inputSuccess").val().trim();
    console.log(input)

    topics.push(input);
    console.log(topics)

    showTopics();
  });