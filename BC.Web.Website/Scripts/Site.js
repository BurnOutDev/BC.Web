$('body').css('min-height', $(window).height() + 'px');
$('.main-row').css('min-height', $(window).height() - 90 -15 + 'px');

function changeText(jumbotron, header, text, button, ms) {
    var h1 = $(jumbotron).children('h1');
    var p = $(jumbotron).children('p')[0];
    var a = $(jumbotron).children('p').children('a');

    $(h1).fadeOut(ms, function () {
        $(this).text(header).fadeIn(ms);
    });
    $(p).fadeOut(ms, function () {
        $(this).text(text).fadeIn(ms);
    });
    $(a).fadeOut(ms, function () {
        $(this).html(button).fadeIn(ms);
    });
}

$("#next").click(function () {
    $('.main-row').animate({ scrollLeft: $(window).width() }, { duration: 500, queue: false });
    $('body').css("background-image", "url(../svg/bg/bg-invert.svg)");
    $('body').animate({
        'background-position-x': '-100%',
        'background-color': '#FFF'
    }, { duration: 500, queue: false });

    $('body').addClass('bg-color');
    return false;
});