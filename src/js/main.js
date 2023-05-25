const navBox = document.querySelector(".nav-mobile__box")
const navBtn = document.querySelector(".burger-icon")
const allNavItems = document.querySelectorAll(".nav-mobile__box-links")
const footerYear = document.querySelector(".footer__date--year")
const navActiveDesktop = document.querySelector(".nav-desktop")
const navActiveMobile = document.querySelector(".nav-mobile")

const showNavBox = () => {
	navBox.classList.toggle("nav-mobile__box--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			navBox.classList.remove("nav-mobile__box--active")
		})
	})
}

const scroll = () => {
	if (window.scrollY > 0) {
		navActiveDesktop.classList.add("navActiveDesktop")
		navActiveMobile.classList.add("navActiveMobile")
	} else {
		navActiveDesktop.classList.remove("navActiveDesktop")
		navActiveMobile.classList.add("navActiveMobile")
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBtn.addEventListener("click", showNavBox)
window.addEventListener("scroll", scroll)
