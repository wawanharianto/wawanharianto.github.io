//event pada saat link klick
$(".page-scroll").on("click", function (e) {
    // console.log("OK");
    //Ambil isi href
    var href = $(this).attr("href");

    // ambil elemen terkait
    var elemenx = $(href);
    // scrollpindah
    $("html, body").animate({
        scrollTop: elemenx.offset().top - 50

    }, 1250, "easeInOutExpo");
});












// EFFECT PARALLAX
$(window).on('load', function () {
    $('.pKiri').addClass('pShow');
    $('.pKanan').addClass('pShow');
});

$(window).scroll(function () {

    var wScroll = $(this).scrollTop();
    // console.log(wScroll);

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });



    // Effect Portfolio

    if (wScroll > $('.portfolio').offset().top - 200) {

        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * i// gunakan gmbr 1 nunggu(i + 1) jika i langsung mucul sesuai dengan array
            );
        });
        // $('.portfolio .img-thumbnail').addClass('muncul');
    }

});











