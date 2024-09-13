

const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

window.addEventListener('DOMContentLoaded',()=>{
	$heroHome && animationHero()
})

//selector
let $heroHome = document.querySelector('.bannerHome')
//action

const animationHero = ()=>{
	tl.to('.bannerHome',{"clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: .6, delay: .4})
	tl.to('.bannerHome .info h2',{opacity: 1, y: 0, duration: 1})
	tl.to('.bannerHome .info a',{opacity: 1, y: 0, duration: .4},'-=.6')
	tl.to('.slideCards .item',{opacity: 1, y: 0, stagger: .25},'-=.6')
}

window.addEventListener('resize',()=>{
	animationHero()	
})


