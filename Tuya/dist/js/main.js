
document.addEventListener("DOMContentLoaded", () => {
  activeLinks()
  inputsID()
  document.getElementById("changer") && printGraph()
  document.querySelector('#birthDate') && handleCalendar()    
  document.querySelector('#changeColor') && handleChangeColor()    
})


// event click delegation
document.addEventListener('click', e =>{
  e.target.matches('.togglePass') && handleShowPassword(e)
  e.target.matches('.loginHeader .menu') && toggleMenu()
  e.target.matches('.plegableMenu .overlay') && toggleMenu()
})

//-show active class link
const activeLinks = () => {
  let linksDocument = document.querySelectorAll('a')
  if(linksDocument){
    linksDocument.forEach(el => {
      if (location.pathname.includes(el.getAttribute('href'))) {
        el.classList.add('active')
      }
    })
  }
}

//-swich type password
const handleShowPassword = e =>{
  let inputStyle = e.target.parentElement
  let input = inputStyle.querySelector('input')
  let btn = inputStyle.querySelector('.togglePass')
  input.type === 'password' ?
    input.type = 'text'
    :
    input.type = 'password'
  btn.classList.toggle('show')
}


//canlendar constructor
const handleCalendar = ()=>{
  flatpickr("#birthDate", {
    dateFormat: "Y-m-d",
    maxDate: "today",
    locale: {
      firstDayOfWeek: 1, // Lunes como primer día de la semana
      weekdays: {
        shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        longhand: ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
      },
      months: {
        shorthand: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
        longhand: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
      }
    },
      yearDropdown: true,
      onChange: function(selectedDates, dateStr, instance) {
        instance.setDate(dateStr, false)
        let container =  instance.element.parentElement
        if(selectedDates.length === 0){
          container.classList.remove('active')
        }else{
          container.classList.add('active')
        }
      }
    })
}

// delete value into id inputs
const inputsID = ()=>{
  let codeInputs = document.querySelectorAll('#code input')
  if(codeInputs){
    codeInputs.forEach(function(input) {
      input.addEventListener('keyup', function(e) {
        if (e.keyCode == 8) {
          var prevInput = input.previousElementSibling
          if (prevInput) {
            prevInput.focus()
            prevInput.value = ''
          }}})})}
}

//toggle menu mobile
const toggleMenu = ()=>{
  let menu = document.querySelector('.plegableMenu')
  menu.classList.toggle('active')
}


//graph home
const printGraph = ()=>{
  const circle = document.querySelector("#progress")
  const changer = document.querySelector("#changer")
  const MetaTotal = document.getElementById("metaTotal").innerHTML
  const MetaActual = document.getElementById("metaActual").innerHTML
  let MetaTotalParse = parseInt(MetaTotal.replace(/[\$,.]/g, ''), 10)
  let MetaActualParse = parseInt(MetaActual.replace(/[\$,.]/g, ''), 10)
  const valueFinal = (MetaActualParse  * 100)/MetaTotalParse 
  changer.value = valueFinal
  
  function setProgress(percent, calc) {
    const offset = calc - (percent / 100) * calc
    
    circle.style.strokeDashoffset = offset
  }
  
  function updateProgress() {
    if (changer.value > 100 || changer.value < 0) {
      return
    }
    
    const radius = circle.r.baseVal.value
    const value = radius * 2 * Math.PI
    
    circle.style.strokeDasharray = `${value} ${value}`
    setProgress(changer.value, value)
  }
  
  changer.oninput = updateProgress
  updateProgress()
}


//change color login

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

var closeMenu = document.querySelector(".close-menu")
if(closeMenu){
  closeMenu.addEventListener("click", () =>{
    document.querySelector(".plegableMenu").classList.remove("active")
  })
}

// close header mobile

var cerrarMenu = document.querySelector(".nav-mobile ")
if(cerrarMenu){
  cerrarMenu.addEventListener("click", () =>{
    document.querySelector(".plegableMenu").classList.remove("active")
  })
}

//tooltip

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

