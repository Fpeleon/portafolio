//slides

$(".slideFooter").slick({
  arrows: false,
  dots: false,
  swipe: false,
  slidesToShow: 1,
});

$(".slickHome").slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

$(document).ready(function () {
  $("#toggleTexto").click(function () {
    $("#textoCompleto").collapse("toggle");
    // Ocultar el botón Leer más
    $(this).hide();
  });
  $("#toggleTexto2").click(function () {
    $("#textoCompleto2").collapse("toggle");
    // Ocultar el botón Leer más
    $(this).hide();
  });
});

// event click delegation

// document.addEventListener('click', e =>{
//   e.target.matches('.nextStep') && nextStepForm()
//   e.target.matches('.prevStep') && prevStepForm()
//   e.target.matches('#nav-one-tab') && switchBanner()
//   e.target.matches('#nav-two-tab') && switchBanner()
// })

//---
// const nextStepForm = ()=>{
//   const validate = true
//   //validar formulario//--
//     //----
//   //validar formulario//--
//   validate && $('.slideFooter').slick('slickNext')
//   changeHeaderForm()
// }

// const prevStepForm = ()=>{
//   $('.slideFooter').slick('slickPrev')
//   changeHeaderForm()
// }

const changeHeaderForm = () => {
  let items = document.querySelectorAll(".stepForm .step");
  items.forEach((el) => el.classList.toggle("active"));
};

const switchBanner = () => {
  let banners = document.querySelectorAll(".bannerswitch");
  if (banners) {
    banners.forEach((el) => el.classList.toggle("d-none"));
  }
};

// detect text footer hight
// $(".slideFooter").on("beforeChange", (a, b, current) => {
//   let text = document.querySelector("[data-footer]");
//   if (text) text.classList.toggle("footerText");
//   let container = document.querySelector(".stepForm");
//   if (container) {
//     if (current === 0) {
//       container.scrollTo(200, 0);
//     }
//     if (current === 1) {
//       container.scrollTo(0, 0);
//     }
//   }
// });

//initialize custom select

$(document).ready(function () {
  $(".selectStyle select").select2({
    dropdownCssClass: "dropSelect",
    minimumResultsForSearch: -1,
  });
});
