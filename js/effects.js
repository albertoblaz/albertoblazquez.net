
(function ( $ ) {
	
	"use strict";

	/* Global Constants */

	var ACTIVE = 'active',					// CSS Classes
		COLORS = [ 'blue', 'violet', 'red', 'yellow', 'green' ],
	
		SCROLL_SPEED = 1000,				// Speeds
		ITEMS_SPEED  = SCROLL_SPEED / 2;


	/* Global jQuery Objects */

	var squares = $('#colors').find('.square'),
		links   = $('#menu').find('a'),
		oldItem = links.first();


	/* Events Definition */

	function linksEvent( e ) {

		// Local jQuery vars
		var newItem   = $(this),
			oldPos    = oldItem.prevAll().length,
			newPos    = newItem.prevAll().length,
			target    = $( newItem.attr('href') ),
			className = ACTIVE;


		// Performing the animation to change the menu items styles and to highlight the selected one
		
		if ( oldPos !== newPos ) {
			className = COLORS[oldPos] + " " + ACTIVE;
		}

		oldItem.children().removeClass(className, ITEMS_SPEED);

		newItem.children()
			.addClass(COLORS[newPos])
			.addClass(ACTIVE, ITEMS_SPEED);


		// Updating the current active item
		oldItem = newItem;


		// Preventing default event behaviour and using 'Nullify' pattern
		e.preventDefault();
		newItem = oldPos = newPos = target = className = null;
	}


	function squaresEvent() {
		var pos = $(this).prevAll().length;
		links.eq(pos).trigger('click');
	}



	$(document).on('ready', function() {

		/* Event Assignments */
		links.on('click', linksEvent);
		squares.on('click', squaresEvent);


		/* Scrolling self-executed function */
		(function() {

		/*
			// Scroll initially if there's a hash (#something) in the url 
			$.localScroll.hash({
				duration : 1500,
				queue    : true,
				target   : '#container'
			});
		*/
		
			// The 'scrolling' effect
			$.localScroll({
				duration : 1000,
				hash     : false,
				queue    : true,
				target   : '#container'
			});

		}());

	});

}( jQuery ));