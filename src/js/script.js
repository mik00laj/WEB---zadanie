const burgerBtn = document.querySelector('.nav-mobile__burger-btn')
const navMobile = document.querySelector('.nav-mobile__box')
const allNavLinks = document.querySelectorAll('.nav-mobile__item')
const bodyScroll = document.querySelector('body')

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile__box--active')
    bodyScroll.classList.toggle('body__srcoll')
    
	allNavLinks.forEach(link => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile__box--active')
		})
	})

	handleNavLinksAnimation()
}
const handleNavLinksAnimation = () => {
	let delayTime = 0
	allNavLinks.forEach(link => {
		link.classList.toggle('nav-links-animation')
		link.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}
burgerBtn.addEventListener('click', handleNav)
