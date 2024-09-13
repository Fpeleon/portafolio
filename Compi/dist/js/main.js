document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('#cameraArea') && validateCamera()
})


const validateCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // El usuario permitió el acceso a la cámara
    video.srcObject = stream;
    cameraArea.style.display = 'block';
    imageArea.style.display = 'none';
    console.log('Se permitió el acceso a la cámara :)');
  } catch (error) {
    if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
      // El usuario denegó el acceso a la cámara
      const response = confirm('Para usar esta función, por favor permite el acceso a la cámara. ¿Deseas intentarlo de nuevo?');
      if (response) {
        await validateCamera();
      } else {
        alert('No se ha permitido el acceso a la cámara.');
      }
    } else {
      // // Ocurrió un error diferente
      // alert('Se produjo un error al acceder a la cámara: ' + error.message);
    }
  }
};


window.addEventListener('load', function () {
  // Inicializar los popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // show password
  var iconDiv = document.querySelectorAll('.campo .icon');
  
  iconDiv.forEach( e => {
    e.addEventListener('click', function() {
      var input = this.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        this.classList.add("active")
      } else {
        input.type = 'password';
        this.classList.remove("active")
      }
    });
  });

  
// Sliers swiper

  const carouselHome = new Swiper('.carousel-home', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }
  });
  const carouselnew = new Swiper('.carousel-news', {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    // initialSlide: 1,
    breakpoints: {
      "768": {
        spaceBetween: 20,
      }
    },
  });
  const catalogHome = new Swiper('.catalog-home', {
    loop: true,
    lazy: true,
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "992": {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      "1280": {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
  });

  const slideComment = new Swiper('.slideComment', {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
    }
  });

  var closeMenu = document.querySelector(".close-menu")
  if(closeMenu){
    closeMenu.addEventListener("click", () =>{
      document.querySelector(".navbar-collapse").classList.remove("show")
    })
  }
  
  window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (windowWidth <= 1024) {
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  });


// progressBar

const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  range.style.background = `linear-gradient(to right, #FF8080 ${newVal}%, #606060 ${newVal}%)`;
}

const btnFilterMobile = document.querySelector(".btn-filter")
const closeTitle = document.querySelector(".filter .title")
const filter = document.querySelector(".filter")
if(btnFilterMobile){
  if(window.innerWidth < 768){
    btnFilterMobile.addEventListener("click", ()=>{
      filter.classList.add("active")
    })
    closeTitle.addEventListener("click", ()=>{
      filter.classList.remove("active")
    })
  }

}

const collapseFilter = document.querySelectorAll(".collapse-filter")

collapseFilter.forEach(element => {
  element.addEventListener("click", () =>{
    element.classList.toggle('active')
  })
});

const collapseFilterDetalle = document.querySelectorAll(".collapse-filter-detalle")

collapseFilterDetalle.forEach(element => {
  element.addEventListener("click", () =>{
    element.classList.toggle('active')
  })
});

const itemActive = document.querySelectorAll('.nav-item')

itemActive.forEach( ( cadaItem , i )=>{
  itemActive[i].addEventListener('click', ()=>{

    itemActive.forEach( ( cadaItem, i)=>{
      itemActive[i].classList.remove('active')
    })

    itemActive[i].classList.add('active')
  })
});

const collapseFilterBlog = document.querySelectorAll(".collapse-filter-blog")

collapseFilterBlog.forEach(element => {
  element.addEventListener("click", () =>{
    element.classList.toggle('active')
  })
});

const collapseTyc = document.querySelectorAll(".collapse-tyc")

collapseTyc.forEach(element => {
  element.addEventListener("click", () =>{
    element.classList.toggle('active')
  })
});

// password 
if(document.getElementById('password1')){
  var barPass = document.getElementById('progress-paswword');
  var textProgres = document.querySelector('.text-progres');
  var passwordInput1 = document.getElementById('password1');
  // var passwordInput2 = document.getElementById('password2');
  
  // Agrega un evento de escucha de input a ambos campos de entrada
  passwordInput1.addEventListener('input', validarYCompararPasswords);
  // passwordInput2.addEventListener('input', validarYCompararPasswords);
  
  // Función para validar y comparar los valores de los campos de contraseña
  function validarYCompararPasswords() {
    var password1 = passwordInput1.value;
    // var password2 = passwordInput2.value;
  
    // Expresiones regulares para los requisitos
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    var numberRegex = /\d/;
  
    // Verifica si el password cumple con todos los requisitos
    var cumpleRequisitos = (
      lengthRegex.test(password1) &&
      uppercaseRegex.test(password1) &&
      lowercaseRegex.test(password1) &&
      specialCharRegex.test(password1) &&
      numberRegex.test(password1)
    );
  
    // Calcula la fortaleza del password
    var fortaleza = calcularFortaleza(password1);
  
    // Determina la seguridad del password en términos de mínimo, medio y máximo
    var seguridad;
    if (fortaleza < 50) {
      seguridad = 'minima';
      barPass.classList.remove("media")
      barPass.classList.remove("maxima")
      barPass.classList.add(seguridad)
      textProgres.innerHTML = "Minima"
    } else if (fortaleza < 90) {
      seguridad = 'media';
      barPass.classList.remove("minima")
      barPass.classList.remove("maxima")
      barPass.classList.add(seguridad)
      textProgres.innerHTML = "Media"
    } else{
      seguridad = 'maxima';
      barPass.classList.remove("minima")
      barPass.classList.remove("media")
      barPass.classList.add(seguridad)
      textProgres.innerHTML = "Excelente"
    }
  
    // Compara los valores de los campos de contraseña
    // var sonIguales = (password1 === password2);
  
    // Muestra el resultado de la validación, seguridad y comparación
    // console.log('Las contraseñas son iguales:', sonIguales);
  }
  
  // Función para calcular la fortaleza del password
  function calcularFortaleza(password) {
    // Verifica la presencia de diferentes tipos de caracteres
    var tieneMayuscula = /[A-Z]/.test(password);
    var tieneMinuscula = /[a-z]/.test(password);
    var tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var tieneNumero = /\d/.test(password);
  
    // Calcula la fortaleza en base a la presencia de los diferentes tipos de caracteres
    var contador = tieneMayuscula + tieneMinuscula + tieneCaracterEspecial + tieneNumero;
    var fortaleza = contador * 25;
  
    return fortaleza;
  }
}

}, false);

// Activa o desactiva el corazón de like en en muro
document.addEventListener('click', e => {
  e.target.matches('.boxLike button') && handleLike(e)
})

const handleLike = e => e.target.classList.toggle('like')


// Archivos de carga en el muro
let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("imagesContent");
let numOfFiles = document.getElementById("num-of-files");

function previewFiles() {

  for (i of fileInput.files) {
    let reader = new FileReader();
    let figure = document.createElement("figure");
    figure.setAttribute('id', i.name.split('.')[0])
    let figCap = document.createElement("figcaption");
    let btnClose = document.createElement("span");
    figCap.innerText = i.name;
    figure.classList.add('col-3')
    btnClose.classList.add('btn-close')
    btnClose.addEventListener('click', function handleClick(event) {
      const buttonClose = event.target.parentNode
      const elemenToRemove = document.getElementById(buttonClose.id)
      elemenToRemove.remove()
    });
    if (i.type === 'image/jpeg' || i.type === 'image/png' || i.type === 'image/jpg') {
      figure.appendChild(figCap);
      figure.appendChild(btnClose);
      reader.onload = () => {
        let img = document.createElement("img");
        img.classList.add('img-fluid')
        img.setAttribute("src", reader.result);
        figure.insertBefore(img, figCap);
      }
    }
    if (i.type === 'video/mp4') {
      console.log('esto es un video')
      figure.appendChild(figCap);
      reader.onload = () => {
        let video = document.createElement("video");
        video.classList.add('img-fluid')
        video.setAttribute("src", reader.result);
        /* video.setAttribute("controls", true); */
        figure.insertBefore(video, figCap);
      }
    }
    imageContainer.appendChild(figure);
    reader.readAsDataURL(i);
  }
}



document.addEventListener('change', e => {
  e.target.matches('#file-input') && previewFiles()
})


const selectFilter = e => e.target.classList.toggle('active')

// Preloader 

window.addEventListener('load', function () {
  let loaderPage = document.getElementById('preloader');
  if (loaderPage) {
    setTimeout(()=> {
      loaderPage.classList.add('d-none')
    },1500)
  }
})


// Cargar más para el para catálogo

// let loadMoreBtn = document.querySelector('#loadMore');
// let currentItem = 8;

// loadMoreBtn.onclick = () =>{
//   let boxes = [...document.querySelectorAll('.catalog-list .box-card')];
//   for (var i = currentItem; i < currentItem + 8 ; i++) {
//     boxes[i].style.display = 'block';
//   }
//   currentItem += 8;

//   if (currentItem >= boxes.length) {
//     loadMoreBtn.style.display = 'none';
//   }
// }



// Código de verificacion

const form = document.querySelector('form')
const inputs = form.querySelectorAll('.form-log-code .code-content input')
const KEYBOARDS = {
  backspace: 8,
  arrowLeft: 37,
  arrowRight: 39,
}

function handleInput(e) {
  const input = e.target
  const nextInput = input.nextElementSibling
  if (nextInput && input.value) {
    nextInput.focus()
    if (nextInput.value) {
      nextInput.select()
    }
  }
}

function handlePaste(e) {
  e.preventDefault()
  const paste = e.clipboardData.getData('text')
  if (inputs) {
    inputs.forEach((input, i) => {
      input.value = paste[i] || ''
    })
  }
}

function handleBackspace(e) { 
  const input = e.target
  if (input.value) {
    input.value = ''
    return
  }
  
  input.previousElementSibling.focus()
}

function handleArrowLeft(e) {
  const previousInput = e.target.previousElementSibling
  if (!previousInput) return
  previousInput.focus()
}

function handleArrowRight(e) {
  const nextInput = e.target.nextElementSibling
  if (!nextInput) return
  nextInput.focus()
}

form.addEventListener('input', handleInput)
if (inputs) {
  inputs[0].addEventListener('paste', handlePaste)
}

if (inputs) {
  inputs.forEach(input => {
    input.addEventListener('focus', e => {
      setTimeout(() => {
        e.target.select()
      }, 0)
    })
    
    input.addEventListener('keydown', e => {
      switch(e.keyCode) {
        case KEYBOARDS.backspace:
          handleBackspace(e)
          break
        case KEYBOARDS.arrowLeft:
          handleArrowLeft(e)
          break
        case KEYBOARDS.arrowRight:
          handleArrowRight(e)
          break
        default:  
      }
    })
  })
}

// Botón ir arriba

const goUp = arrow => {
  window.addEventListener('scroll', e => {
    window.scrollY > 300 ? arrow.classList.add('active') : arrow.classList.remove('active')
  })
}

window.addEventListener('DOMContentLoaded', () => {
  activeLinks()

  const $top = document.querySelector('.button-top')

  $top && goUp($top)

})


// Drag and drop upload img

"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

// Tooltips de bootstrap

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="mensaje"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.tooltip(tooltipTriggerEl)
})

// Expandir sidebar del dashboard

function changeSidebar() {
  let sidebar = document.querySelector('.lateralMenu');
  sidebar.classList.toggle('lateralMenu_collapsed');
}