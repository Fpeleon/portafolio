document.addEventListener('click', e =>{
  e.target.matches('.togglePass') && handleShowPassword(e)
  e.target.matches('.loginHeader .menu') && toggleMenu()
  e.target.matches('.plegableMenu .overlay') && toggleMenu()
})

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

// validate password

const validatePassword = () => {
  const password = document.getElementById('createPassword').value
  console.log(password.length)
  const conditions = {
    minlength: password.length >= 8,
    special: /[~!@#$%^&*_.+=?><]/.test(password),
    may: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password)
  }
  const secureSteps = document.querySelectorAll('.secureSteps li')
  secureSteps.forEach((step) => {
    const condition = step.classList[0]
    if (conditions[condition]) {
      step.classList.add('active')
    } else {
      step.classList.remove('active')
    }
  })
}

//toggle menu mobile
const toggleMenu = ()=>{
  let menu = document.querySelector('.plegableMenu')
  menu.classList.toggle('active')
}
// close header mobile

var cerrarMenu = document.querySelector(".nav-mobile ")
if(cerrarMenu){
  cerrarMenu.addEventListener("click", () =>{
    document.querySelector(".plegableMenu").classList.remove("active")
  })
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("changer") && printGraph();
});

//graph home
const printGraph = () => {
  const circle = document.querySelector("#progress");
  const changer = document.querySelector("#changer");
  const MetaTotal = document.getElementById("metaTotal").innerHTML;
  const MetaActual = document.getElementById("metaActual").innerHTML;
  let MetaTotalParse = parseInt(MetaTotal.replace(/[\$,.]/g, ""), 10);
  let MetaActualParse = parseInt(MetaActual.replace(/[\$,.]/g, ""), 10);
  const valueFinal = (MetaActualParse * 100) / MetaTotalParse;
  changer.value = valueFinal;

  console.log(MetaActual);
  function setProgress(percent, calc) {
    const offset = calc - (percent / 100) * calc;

    circle.style.strokeDashoffset = offset;
  }

  function updateProgress() {
    if (changer.value > 100 || changer.value < 0) {
      return;
    }

    const radius = circle.r.baseVal.value;
    const value = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${value} ${value}`;
    setProgress(changer.value, value);
  }

  changer.oninput = updateProgress;
  updateProgress();
};
