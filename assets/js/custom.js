$(document).ready(function(){
	
			$('#menu-toggle').on('click',function(){
				$('#nav-bar').removeClass('toggled');
			});
			$('#close-menu').on('click',function(){
				$('#nav-bar').addClass('toggled');
			});
			

		$(".submenu, .level-dropdown").on('click', function() {
			event.stopPropagation();
			$(this).find(".submenu, .level-dropdown").removeClass('open');
			$(this).parents(".submenu, .level-dropdown").addClass('open');
			$(this).toggleClass('open');
		});


		//Search
		$('#search-trigger').on('click', function() {
			$('#search').addClass('active').find('.search').focus();
			return false;
		});

		$('#search').on('click', function() {
			$(this).find('.search').focus();
		});

		$('#close').on('click', function() {
			$('#search').removeClass('active');
		});

	
		//Side Cart 
		$(".side-cart-toggle").on('click', function(e) {
			e.preventDefault();
			$(".side-cart").addClass("side-cart-open");
		});

		$(".close-cart").on('click', function(e) {
			e.preventDefault();
			$(".side-cart").removeClass("side-cart-open");
		});


		    //Tabs
			jQuery('.tabs .tab-links a').on('click', function(e) {
				var currentAttrValue = jQuery(this).attr('href');
		
				// Show/Hide Tabs
				jQuery('.tabs ' + currentAttrValue).fadeIn(500).siblings().hide();
		
				// Change/remove current tab to active
				jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		
				e.preventDefault();
			});
	});