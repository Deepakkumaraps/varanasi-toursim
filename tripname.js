$(document).ready(function () {
    $("#knowmore1").click(function () {
        $("#completedaybox1").toggle(1000);
        $("#knowmore1").hide(1000);
        $("upone").show(1000);
    });

    $("#day1").click(function () {
        $("#dayone").toggle(1000);
    });
    $("#day2").click(function () {
        $("#daytwo").toggle(1000);
    });
    $("#day3").click(function () {
        $("#daythree").toggle(1000);
    });
    $("#day4").click(function () {
        $("#dayfour").toggle(1000);
    });
    $("#upone").click(function () {
        $(".completedaybox").hide(1000);
        $("upone").hide(1000);
        $("#knowmore1").show(1000);
        $("#dayone").hide(1000);
        $("#daytwo").hide(1000);
        $("#daythree").hide(1000);
        $("#dayfour").hide(1000);

    });
});

$(document).ready(function(){
    $("#knowmore2").click(function(){
        alert ("Package with all details comming soon");
    });
});

$(document).ready(function(){
    $("#knowmore3").click(function(){
        alert ("Package with all details comming soon");
    });
});

