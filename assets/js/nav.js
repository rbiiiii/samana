var root = document.body,
	w = window.innerWidth,
	siteNavBtn = document.getElementById('site-nav-btn'),
	siteNavBtnIcon = document.getElementById('site-nav-btn__icon'),
	siteNavLinks = document.querySelectorAll('.site-nav__link'),
	resizeTimer;

siteNavBtn.addEventListener('click', function() {
	if (root.classList.contains('open')) {
		root.classList.remove('open');
		siteNavBtnIcon.innerHTML = '☰';
		setTabIndex(-1,siteNavLinks);
		this.setAttribute('aria-expanded', false);
	} else {
		root.classList.add('open');
		siteNavBtnIcon.innerHTML = 'X';
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

var menuItems = document.querySelectorAll('.site-nav__has-submenu');
Array.prototype.forEach.call(menuItems, function(el, i){
	el.addEventListener("mouseover", function(event){
		this.className = "site-nav__has-submenu open";
		clearTimeout(timer);
	});
	el.addEventListener("mouseout", function(event){
		timer = setTimeout(function(event){
			document.querySelector(".site-nav__has-submenu.open").className = "site-nav__has-submenu";
		}, 1000);
	});
});
Array.prototype.forEach.call(menuItems, function(el, i){
	el.querySelector('a').addEventListener("click",  function(event){
		if (this.parentNode.className == "site-nav__has-submenu") {
			this.parentNode.className = "site-nav__has-submenu open";
			this.setAttribute('aria-expanded', "true");
			this.setAttribute('tab-index', 0);
		} else {
			this.parentNode.className = "site-nav__has-submenu";
			this.setAttribute('aria-expanded', "false");
			this.setAttribute('tab-index', 1);
		}
		event.preventDefault();
		return false;
	});
});

window.addEventListener("resize", function(){
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
   		toggleTabIndex(siteNavLinks, 980);
	}, 300);
});