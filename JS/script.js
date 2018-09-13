$(document).ready(function(){

    //Rotate toggle button on click
    $("#toggle-button").click(function() {
        if ($(this).css("transform") == 'none') {
            $(this).css("transform", "rotate(180deg)");
        } else {
            $(this).css("transform", "");
        }
    })

    //page sliding to form section
    $("#toggle-button").click(function(){
        if ($(".profile-description").css("display") == "none") {
            $(".profile-description").css("display", "unset");
        } else {
            $(".profile-description").css("display", "none");
        }
    });

});