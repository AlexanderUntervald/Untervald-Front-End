//function Summary(a, b) {
//    let c = a + b;
//    console.log(c);
//}
//Summary(2, 3);

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
