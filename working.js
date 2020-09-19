$(function() {
    $("button").on("click", function(event) {
        event.preventDefault();
        var date = $("#date").val();
        var age = 2020 - Number(date.slice(0, 4));
        var percentage = Math.ceil((100/69.6) * age);
        var remainingLife = 100 - percentage;
        $("h2").text(percentage + "%");
        $("#percentage-done").text("You are " + percentage +"% done with your life.");
        $("#percentage-remaining").text("So, make sure you enjoy your remaining " + remainingLife + "% life.");
    });
});