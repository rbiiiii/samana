var root = document.body,
	w = window.innerWidth,
	siteNavBtn = document.getElementById('site-nav-btn'),
	siteNavBtnIcon = document.getElementById('site-nav-btn__icon'),
	siteNavLinks = document.querySelectorAll('.site-nav__link'),
	siteNavLinksWithSubmenu = document.querySelectorAll('.site-nav__has-submenu'),
	zIndex = 1,
	resizeTimer;

siteNavBtn.addEventListener('click', function() {
	if (root.classList.contains('open')) {
		root.classList.remove('open');
		siteNavBtnIcon.innerHTML = '☰';
		setTabIndex(-1,siteNavLinks);
		this.setAttribute('aria-expanded', false);
	} else {
		root.classList.add('open');
		siteNavBtnIcon.innerHTML = '✕';
		setTabIndex(0,siteNavLinks);
		this.setAttribute('aria-expanded', true);
	}
})

function setTabIndex(index, array) {
	for (var i=0; i<array.length; i++) {
		array[i].setAttribute('tabindex', index);
	}
}

function toggleTabIndex(array, width) {
	if(window.innerWidth < width){
      setTabIndex(-1,array);
   }
   else{
       setTabIndex(0, array);
   }
}

function openSubMenu(item) {
	item.classList.add('open');
	item.setAttribute('aria-expanded', "true");
	item.setAttribute('tab-index', 0);
}

function closeSubMenu(item) {
	item.classList.remove('open');
	item.setAttribute('aria-expanded', "false");
	item.setAttribute('tab-index', 1);
}

siteNavLinksWithSubmenu.forEach(el => {
	el.querySelector('a').addEventListener("click", function(e){
		e.preventDefault();
		siteNavLinksWithSubmenu.forEach(item => closeSubMenu(item));
		if (el.classList.contains('open')) {
			closeSubMenu(el);
		} else {
			openSubMenu(el);
		}
	});
});

window.addEventListener("resize", function(){
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
   		toggleTabIndex(siteNavLinks, 980);
	}, 300);
});