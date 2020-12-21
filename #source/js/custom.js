
$(document).ready(function () {

	$('.menu-link').on('click', function (e) {
		$('.menu-link').removeClass('active');
		$(this).addClass('active');
	});

	// =====================SCROLL-TO-TOP==========================================================================================================================================================================================================================================================

	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$('#pageup').fadeIn();
		} else {
			$('#pageup').fadeOut();
		}
	});


	// ================MENU-and-BURGER=============================================================================================================================================================================================================================================================

	$('.burger').on('click', function () {
		$('.menu-list').addClass('open');
	});

	$('.menu-link').on('click', function () {
		if ($('.menu-list').hasClass('open')) {
			$('.menu-list').removeClass('open');
		}
	});
	$('.close').on('click', function () {
		$('.menu-list').removeClass('open');
	});

	//====================TABS====================================================================================================================================================================================================================================================================

	let tabs = document.querySelectorAll("._tabs");
	for (let index = 0; index < tabs.length; index++) {
		let tab = tabs[index];
		let tabs_items = tab.querySelectorAll("._tabs-item");
		let tabs_blocks = tab.querySelectorAll("._tabs-block");
		for (let index = 0; index < tabs_items.length; index++) {
			let tabs_item = tabs_items[index];
			tabs_item.addEventListener("click", function (e) {
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('_active');
					tabs_blocks[index].classList.remove('_active');
				}
				tabs_item.classList.add('_active');
				tabs_blocks[index].classList.add('_active');
				e.preventDefault();
			});
		}
	}

	//====================IBG=====================================================================================================================================================================================================================================================================

	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

});
