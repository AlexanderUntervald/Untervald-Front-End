let burger = document.getElementsByClassName('burger')[0];
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    let menu = document.getElementsByTagName('header')[0].getElementsByTagName('ul')[0];
    menu.classList.toggle('active');
});
$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.sliderArrows1'),
    nextArrow: $('.sliderArrows2'),
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
    }
  ],

});
