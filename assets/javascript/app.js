// the API information 
var apiKey = "4mth1euP7BKazZvxjk93SI1i15z91Spn";

// when the user clicks Create Button this function runs
$("#createButton").on("click", function () {
    event.preventDefault(); //prevents page refresh
    renderButtons();
});

//  once the user created button is clicked it generates a giphy at the bottom of the page 
$(document).on("click", ".btn-secondary", function () {
    var forms = $("#inlineFormInput").val().trim();
    var userSearch = forms;
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=" + apiKey + "&limit=1";
    
    // the call to pull the giphy gif. files 
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        //saves the gif
        var results = response.data[0].images.fixed_height.url;
        console.log(results);
        var gifImage = $("<img id='gifImage'>");
        gifImage.attr("src", results);
        $("#gifGroup").prepend(gifImage);
    });
});

function renderButtons() {
    var a = $("<button>");
    a.addClass("btn btn-secondary");
    a.attr("type", "button");
    a.attr("data-name", $("#inlineFormInput").val().trim());
    a.text($("#inlineFormInput").val().trim());
    $("#buttonGroup").append(a);
}