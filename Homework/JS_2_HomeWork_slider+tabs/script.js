$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    prevArrow: $('.arrow1'),
    nextArrow: $('.arrow2')
});


let tabs = $('.tab');
let content = $('.content');
for (let i = 0; i < tabs.length; i++) {
    $(tabs[i]).on('click', function () {
        $('.tab.active').removeClass('active');
        $(tabs[i]).addClass('active');
        $('.content.active').hide();
        $('.content.active').removeClass('active');
        $(content[i]).show();
        $(content[i]).addClass('active');
    });
}
$('.plus').on('click', function () {
    let inp = $(this).parent().find('input');
    let current_val = inp.val();
    let next_val = parseInt(current_val) + 1;
    inp.val(next_val);
});
$('.minus').on('click', function () {
    let inp = $(this).parent().find('input');
    let current_val = inp.val();
    let next_val = parseInt(current_val) - 1;
    if (next_val > 0) {
        inp.val(next_val);
    }
});
