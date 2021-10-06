document, addEventListener('DOMContentLoaded', () => {
	"use strict";
	// Sticky meny
	const navbar = document.querySelector(".header__top"),
		navbarHeight = window.getComputedStyle(navbar).height,
		sticky = navbar.offsetTop,
		nextBlock = document.querySelector(".header__center"),
		nextBlockMarginTop = window.getComputedStyle(nextBlock).marginTop;

	function stickyMenu() {
		if (window.pageYOffset > sticky) {
			navbar.classList.add("sticky");
			nextBlock.style.marginTop = +nextBlockMarginTop.slice(0, nextBlockMarginTop.length - 2) + +navbarHeight.slice(0, navbarHeight.length - 2) + "px";
		} else {
			navbar.classList.remove("sticky");
			nextBlock.style.marginTop = nextBlockMarginTop;
		}
	}

	window.addEventListener('scroll', stickyMenu);


	// Скрыть меню при клике вне меню
	let hamburger = document.querySelector('.icon-menu');
	let menu = document.querySelector('.menu__body');

	const toggleMenu = () => {
		body_lock(500);
		menu.classList.toggle('_active');
		hamburger.classList.toggle('_active');
	};

	hamburger.addEventListener('click', e => {
		e.stopPropagation();

	});

	document.addEventListener('click', e => {
		let target = e.target;
		let its_menu = target == menu || menu.contains(target);
		let its_hamburger = target == hamburger;
		let menu_is_active = menu.classList.contains('_active');

		if (!its_menu && !its_hamburger && menu_is_active) {
			toggleMenu();
		}
	});

	//Placeholder + text helper
	let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');

	inputs.forEach(input => {
		input.addEventListener('input', (e) => {
			if (input.value == '') {
				input.classList.remove('_filled');
			} else{
				input.classList.add('_filled');
			}
		});
	});
});