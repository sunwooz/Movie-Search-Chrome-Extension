$(document).ready(function() {
  $("#search").click(function(e) {
    searchMovie();
  });

  $(document).keypress(function(e) {
    if(e.which == 13) {
      searchMovie();
    }
  });
});

function searchMovie() {
  url = "http://www.omdbapi.com/?t=";
  input = $("#input").val();
  input = input.replace(/\s/g, "+");
  url = url + input + "&y=&plot=short&r=json&tomatoes=true"

  $.ajax({
    dataType: "json",
    url: url,
  }).done(function(data) {
    console.log(data);
    $('#result').show();
    $('#poster').attr('src', data["Poster"]);
    $('#title').text(data["Title"]);
    $('#imdbRating').text(data["imdbRating"]);
    $('#tomatoMeter').text(data["tomatoMeter"]);
    $('#released').text(data["Released"]);
    $('#plot').text(data["Plot"]);
    $('#dvd').text(data["Dvd"]);
    $('#genre').text(data["Genre"]);
  });
}


// var url = "http://www.omdbapi.com/?t=man+of+steel&y=&plot=short&r=json"

