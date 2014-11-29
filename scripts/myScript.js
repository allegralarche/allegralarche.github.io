function navClick(name) {
    hideAll();
    if(name==="about") {
        $("#about").show();
    }
    if(name==="course") {
        $("#course").show();
    }
    if(name==="experience") {
        $("#experience").show();
    }
    if(name==="contact") {
        $("#contact").show();
    }
}

function hideAll() {
    $("#about").hide();
    $("#course").hide();
    $("#experience").hide();
    $("#contact").hide();
}

$(document).ready(function() {
    navClick("about");
})
