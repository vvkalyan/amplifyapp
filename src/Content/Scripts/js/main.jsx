// $('.dateinput').datepicker({

//     uiLibrary: 'bootstrap4',

//     format: 'dd-M-yyyy',

//     autoclose: true

// });

document.querySelectorAll('form.tab-pane').forEach((item) => {
	item.addEventListener('submit', (e) => {
		e.preventDefault();
		var activeTab = document.querySelector('.nav .nav-link.active');
		var nextTab =
			activeTab.parentNode.nextElementSibling.querySelector('.nav-link');
		nextTab.classList.remove('disabled');
		if (nextTab.onclick) {
			nextTab.onclick();
		} else if (nextTab.click) {
			nextTab.click();
		}
	});
});

document.querySelectorAll('.nav .nav-link').forEach((item) => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		var tabID = e.target.getAttribute('aria-controls');
		var bgImageName = tabID.split('pills-')[1];
		var body = document.getElementsByTagName('body')[0];
		body.style.cssText =
			'background-image : url(../Content/img/bg_' + bgImageName + '.png);';
		var nextTab = document.querySelector('.nav .nav-link.active');
	});
});
