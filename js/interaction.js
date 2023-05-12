$(document).ready(function () {

    $("#feltmap").hide();

    $("#barchart").hide();

    $("#mapbuttons").hide();

    $("#sources").hide();

    $("#writeup").hide();

    $("#downfMap").hide();
    $("#downmMap").hide();
    $("#upmMap").hide();

    $("#togglesource").click(function () {
        $("#sources").toggle();
    });

    $("#togglewriteup").click(function () {
        $("#writeup").toggle();
    });

    $("#togglemap").click(function () {
        $("#feltmap").toggle();
        $("#mapbuttons").toggle();
        $("#barchart").hide();
    });

    $("#togglechart").click(function () {
        $("#barchart").toggle();
        $("#feltmap").hide();
        $("#mapbuttons").hide();
    });

    $("#downf").click(function () {
        $("#downfMap").toggle();
        $("#upfMap").hide();
        $("#upmMap").hide();
        $("#downmMap").hide();
    });

    $("#upf").click(function () {
        $("#upfMap").toggle();
        $("#downfMap").hide();
        $("#upmMap").hide();
        $("#downmMap").hide();
    });


    $("#upm").click(function () {
        $("#upmMap").toggle();
        $("#upfMap").hide();
        $("#downfMap").hide();
        $("#downmMap").hide();
    });

    $("#downm").click(function () {
        $("#downmMap").toggle();
        $("#upfMap").hide();
        $("#upmMap").hide();
        $("#downfMap").hide();
    });

});