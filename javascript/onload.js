$(document).ready(function() {
    $("body").on("contextmenu", function(e) {
        return false;
    });
    $("#foot").click(function () {
        window.location.href="index.html"
    })
});
