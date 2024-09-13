
$('.catalog-slick').slick({
  slidesToShow: 4,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});