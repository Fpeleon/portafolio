"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.addEventListener("DOMContentLoaded", function () {
  activeLinks();
  inputsID();
  document.getElementById("changer") && printGraph();
  document.querySelector("#birthDate") && handleCalendar();
  document.querySelector("#changeColor") && handleChangeColor();
}); // event click delegation

document.addEventListener("click", function (e) {
  e.target.matches(".togglePass") && handleShowPassword(e);
  e.target.matches(".loginHeader .menu") && toggleMenu();
  e.target.matches(".plegableMenu .overlay") && toggleMenu();
}); //-show active class link

var activeLinks = function activeLinks() {
  var linksDocument = document.querySelectorAll("a");

  if (linksDocument) {
    linksDocument.forEach(function (el) {
      if (location.pathname.includes(el.getAttribute("href"))) {
        el.classList.add("active");
      }
    });
  }
}; //-swich type password


var handleShowPassword = function handleShowPassword(e) {
  var inputStyle = e.target.parentElement;
  var input = inputStyle.querySelector("input");
  var btn = inputStyle.querySelector(".togglePass");
  input.type === "password" ? input.type = "text" : input.type = "password";
  btn.classList.toggle("show");
}; //canlendar constructor


var handleCalendar = function handleCalendar() {
  flatpickr("#birthDate", {
    dateFormat: "Y-m-d",
    maxDate: "today",
    locale: {
      firstDayOfWeek: 1,
      // Lunes como primer día de la semana
      weekdays: {
        shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        longhand: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
      },
      months: {
        shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
      }
    },
    yearDropdown: true,
    onChange: function onChange(selectedDates, dateStr, instance) {
      instance.setDate(dateStr, false);
      var container = instance.element.parentElement;

      if (selectedDates.length === 0) {
        container.classList.remove("active");
      } else {
        container.classList.add("active");
      }
    }
  });
}; // delete value into id inputs


var inputsID = function inputsID() {
  var codeInputs = document.querySelectorAll("#code input");

  if (codeInputs) {
    codeInputs.forEach(function (input) {
      input.addEventListener("keyup", function (e) {
        if (e.keyCode == 8) {
          var prevInput = input.previousElementSibling;

          if (prevInput) {
            prevInput.focus();
            prevInput.value = "";
          }
        }
      });
    });
  }
}; //toggle menu mobile


var toggleMenu = function toggleMenu() {
  var menu = document.querySelector(".plegableMenu");
  menu.classList.toggle("active");
}; //graph home


var printGraph = function printGraph() {
  var circle = document.querySelector("#progress");
  var changer = document.querySelector("#changer");
  var MetaTotal = document.getElementById("metaTotal").innerHTML;
  var MetaActual = document.getElementById("metaActual").innerHTML;
  var MetaTotalParse = parseInt(MetaTotal.replace(/[\$,.]/g, ""), 10);
  var MetaActualParse = parseInt(MetaActual.replace(/[\$,.]/g, ""), 10);
  var valueFinal = MetaActualParse * 100 / MetaTotalParse;
  changer.value = valueFinal;
  console.log(MetaActual);

  function setProgress(percent, calc) {
    var offset = calc - percent / 100 * calc;
    circle.style.strokeDashoffset = offset;
  }

  function updateProgress() {
    if (changer.value > 100 || changer.value < 0) {
      return;
    }

    var radius = circle.r.baseVal.value;
    var value = radius * 2 * Math.PI;
    circle.style.strokeDasharray = "".concat(value, " ").concat(value);
    setProgress(changer.value, value);
  }

  changer.oninput = updateProgress;
  updateProgress();
}; //change color login
// const handleChangeColor = ()=>{
//   let section = document.querySelector('.loginSection')
//   function getTopRightColor() {
//     let canvas = document.createElement('canvas')
//     let context = canvas.getContext('2d')
//     let imagen = document.getElementById('changeColor')
//     canvas.width = imagen.width
//     canvas.height = imagen.height
//     context.drawImage(imagen, 0, 0)
//     let pixelData = context.getImageData(imagen.width - 1, 0, 1, 1).data
//     let colorHexadecimal = '#' + ('000000' + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6)
//     return colorHexadecimal
//   }
//   function rgbToHex(r, g, b) {
//     return ((r << 16) | (g << 8) | b).toString(16)
//   }
//   let color = getTopRightColor()
//   console.log(color)
//   section.style.background = color
// }
// close button


var closeMenu = document.querySelector(".close-menu");

if (closeMenu) {
  closeMenu.addEventListener("click", function () {
    document.querySelector(".plegableMenu").classList.remove("active");
  });
} // close header mobile


var cerrarMenu = document.querySelector(".nav-mobile ");

if (cerrarMenu) {
  cerrarMenu.addEventListener("click", function () {
    document.querySelector(".plegableMenu").classList.remove("active");
  });
} //tooltip


var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});