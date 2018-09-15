$(document).ready(function(){

    //Rotate toggle button on click
    $("#toggle-button").click(function(){
        if (window.matchMedia("(min-width: 768px)").matches) {
            $("#toggle-button").toggleClass("toggle-button-spin");
        } else if (window.matchMedia("(max-width: 768px)").matches)  {
            if ($("#toggle-button").css("transform") == "rotate(360deg)") {
            console.log("werk")
            //$("#toggle-button").css("transform", "rotate(90deg)");
            }
        } 
    });

    //page sliding to form section
    $("#toggle-button").click(function(){
        if ($(".profile-description").css("display") == "none") {
            $(".profile-description").css("display", "unset");
        } else {
            $(".profile-description").css("display", "none");
        }
    });

});