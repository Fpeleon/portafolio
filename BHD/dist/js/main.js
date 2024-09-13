



//click event delegation 
document.addEventListener('click', e => {
	e.target.matches('#toggleMenu') && toggleMenu()
	e.target.matches('button#closeMenu') && toggleMenu()
	e.target.matches('nav.slideMenu a') && toggleMenu()
	e.target.matches('button[data-tabCollapse]') && toogleCollapse(e)
	e.target.matches('.inputPass button') && inputPass(e)
	e.target.matches('.check label') && handleCheck(e)
})

// input checkbox
const handleCheck = btn => btn.target.classList.toggle('active')

// input password
const inputPass = btn => {
	btn.preventDefault()
	btn.target.classList.toggle('active')

	let input = btn.target.parentElement.children[0]

	input.type === 'password'
		?
		input.setAttribute('type', 'text')
		:
		input.setAttribute('type', 'password')
}

//show menu responsive
const toggleMenu = () => {
	let content = document.querySelector('nav.slideMenu ')
	content.classList.toggle('show')
}

//tabs collapse
const toogleCollapse = btn => {
	let collapse = btn.target.parentElement
	collapse.classList.toggle('show')





}
//-----------------------------------Slider-----------------------------------


$('.slideCards').slick({
	infinite: true,
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				dots: true,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 2000,
				infinite: true,
				centerPadding: '50px',
				centerMode: true
			}
		}
	]
});
$('.slideTours').slick({
	infinite: true,
	arrows: true,
});



//-----------------------------------Global scripts-----------------------------------

//-show active class link

window.addEventListener('DOMContentLoaded', () => {
	activeLinks()
})

const activeLinks = () => {
	let linksDocument = document.querySelectorAll('a')
	linksDocument.forEach(el => {
		if (location.pathname.includes(el.getAttribute('href'))) {
			el.classList.add('active')
		}
	})
}

//tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})
//- null drag img tags
document.addEventListener('dragstart', e => {
	e.target.tagName == 'IMG' && e.preventDefault()
})







//-observer header link ------------------------------------

let $sections = document.querySelectorAll('[data-observer]')

const activeHeader = (entry) => {
	let hashSection = entry.target.id
	let links = document.querySelectorAll('[data-links] a')
	Object.values(links).map(el => {
		el.classList.remove('active')
		if (el.hash.includes(hashSection)) {
			el.classList.add('active')
		}
	})
}

const callTransitions = entries => {
	entries.forEach(entry => {
		entry.isIntersecting && activeHeader(entry)
	})
}

let observer = new IntersectionObserver(callTransitions, { rootMargin: '-400px' })
$sections && $sections.forEach(el => observer.observe(el))
//---------------------------------------------------------------




//----------------datepicker today date-------------------

$(function () {
	var dateFormat = "mm/dd/yy",
		from = $("#from")
			.datepicker({
				defaultDate: "+1w",
				changeMonth: true,
				minDate: 0,
				numberOfMonths: 1,
				monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
				monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
				dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
				dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
				dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
			})
			.on("change", function () {
				to.datepicker("option", "minDate", getDate(this));
			}),
		to = $("#to").datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			minDate: 0,
			numberOfMonths: 1,
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
			dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
			dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
			dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
		})
			.on("change", function () {
				from.datepicker("option", "maxDate", getDate(this));
			});

	function getDate(element) {
		var date;
		try {
			date = $.datepicker.parseDate(dateFormat, element.value);
		} catch (error) {
			date = null;
		}

		return date;
	}
});