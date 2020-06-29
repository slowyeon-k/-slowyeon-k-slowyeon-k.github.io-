
/************************************message**/
$(document).keydown(function () {
    var this_left = $(window).scrollLeft()
    console.log('this left' + this_left)
})
/**mark클릭하면 message창 열림**/
$('.wedgwood').click(function () {
    $('.wedgwood_message').fadeIn(500);
})
$('.adopt').click(function () {
    $('.adopt_message').fadeIn(500);
})
$('.bluebottle').click(function () {
    $('.bluebottle_message').fadeIn(500);
})
$('.moschino').click(function () {
    $('.moschino_message').fadeIn(500);
})
/**close 누르면 message창 닫힘**/
$('.close').click(function () {
    $('.message').fadeOut(500);
})
/************************************intro**/
$(document).ready(function () {
    $('.intro').fadeIn(1200);
})


$('.intro_btn').click(function () {
    $('.intro').fadeOut(1000);
    $('.blackout').fadeOut(1200);
    $('.keyboard').fadeIn(1500);
    $('.mouse').delay(6150).fadeIn(1500);
    $('.start').fadeIn(500).delay(3500).fadeOut(2000);
})





/**키보드 누르면 페이드아웃**/
$(document).keydown(function () {
    $('.keyboard').fadeOut(2000);
})
/**마우스 스크롤시 페이드아웃**/
$(window).on('scroll ', function () {
    $('.mouse').fadeOut(3000);
})
/************************************fixed**/
$('.project').click(function () {
    $('.project_cont').stop().slideToggle(500);
})
$('.contact').click(function () {
    $('.contact_cont').stop().slideToggle(500);
})


$('#menuicon').click(function () {
    if ($('#menuicon').is(":checked") == true) {
        console.log('체크된 상태');
        $('.menu_slid').animate({
            'right': '-10px'
        })
        $('.arrow').css({
            'opacity': '0'
        })
    }

    if ($('#menuicon').is(":checked") == false) {
        console.log('체크 안 된 상태');
        $('.menu_slid').animate({
            'right': '-400px'
        })
        $('.arrow').css({
            'opacity': '1'
        })
    }
})
/**화살표 클릭했을때&누르고 있을때**/
$('.arrow_right').click(function () {
    var this_left = $(window).scrollLeft()
    $(window).scrollLeft(this_left + 1000)
})
$('.arrow_left').click(function () {
    var this_left = $(window).scrollLeft()
    $(window).scrollLeft(this_left - 1000)
})
/******************************전체움직임**/
var this_left = $(window).scrollLeft()
move()
$(window).on('scroll ', function () {
    move()
})
$(window).on('mousewheel ', function () {
    //console.log('휠')
    //console.log(event.wheelDelta)
    delta = event.wheelDelta;
    this_left = $(window).scrollLeft()
    if (delta < 0) {
        $(window).scrollLeft(this_left + 50)
    } else {
        $(window).scrollLeft(this_left - 50)
    }
    this_left = $(window).scrollLeft()
    console.log('this_left' + this_left)
})

function move() {
    this_left = $(window).scrollLeft()
    /////////////////////////////////A
    $('.A_cont_top').css({
        left: -this_left * 0.5
    })
    $('.A_cont_bottom').css({
        left: -this_left * 0.55
    })
    /////////////////////////////////hint
    $('.appeal').css({
        left: -this_left * 0.58
    })
    /////////////////////////////////B

    $('.floor').css({
        left: -this_left * 0.6
    })

    $('.B>.B_cont').css({
        left: -this_left * 0.6
    })
    /////////////////////////////////C
    $('.C>.C_cont').css({
        left: -this_left * 0.7
    })
    $('.C').css({
        backgroundPositionX: -this_left * 0.7
    })
    /////////////////////////////////벽,벽인테리어
    $('.back_wall').css({
        backgroundPositionX: -this_left * 0.43
    })

    $('.D_cont').css({
        left: -this_left * 0.43
    })

    $('.mark').css({
        left: -this_left * 0.413
    })
}
