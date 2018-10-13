// the API information 
var apiKey = "4mth1euP7BKazZvxjk93SI1i15z91Spn";






// when the user clicks Create Button this function runs
$("#createButton").on("click", function(){
    var forms = $("#inlineFormInput").val().trim();
    var userSearch = forms;
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=" + apiKey + "&limit=1";
    //prevent page refresh
    event.preventDefault();
    
    console.log(forms)
    
    // the call to pull the giphy gif. files 
    $.ajax({
        url: queryUrl, 
        method: "GET"
    }).then(function(response){
        //saves the gif
        var results = response.data[0].images.fixed_height.url;
        console.log(results);
        var gifImage = $("<img id='gifImage'>");
        gifImage.attr("src", results)
        
        $("#gifGroup").append(gifImage);
        renderButtons();
    });
});
        
        
function renderButtons(){
    var a = $("<button>");
    a.addClass("btn btn-secondary");
    a.attr("type", "button");
    a.attr("data-name", $("#inlineFormInput").val().trim())
    a.text($("#inlineFormInput").val().trim())
    $("#buttonGroup").append(a)



}
        