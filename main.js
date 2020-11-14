$(document).ready(() => {
    var countDownDate = new Date("April 8, 2021 06:10:00 PM GMT-07:00").getTime();
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        $("#timer").html(hours + "h "
            + minutes + "m " + seconds + "s ");

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $(".content").hide();
            $(".thegraphics").hide();
            window.location.href = 'https://asudsc.com';
            // $(".video").show();
            // $(".video").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/s5RC0XaYQT4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        }
    }, 1000);
});
