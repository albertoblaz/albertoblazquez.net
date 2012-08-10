
(function ( $ ) {

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

		})();

	});


	/* Global Constants */

	// CSS Classes
	var ACTIVE = 'active';
	var COLORS = [ 'blue', 'violet', 'red', 'yellow', 'green' ];
	
	// Speeds
	var SCROLL_SPEED = 1000;
	var ITEMS_SPEED  = SCROLL_SPEED / 2;


	/* Global jQuery Objects */

	var squares  = $('#colors').find('.square');
	var links    = $('#menu').find('a');
	var oldItem  = links.first();


	/* Events Definition */

	var linksEvent = function( e ) {

		// Local jQuery vars
		var newItem   = $(this);
		var newPos    = newItem.prevAll().length;
		var target    = $( newItem.attr('href') );
		
		var className = ACTIVE;


		// Performing the animation to change the menu items styles and to highlight the selected one
		var oldPos = oldItem.prevAll().length;
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
		oldPos = newPos = className = newItem = target = null;
	};


	var squaresEvent = function( e ) {
		var pos  = $(this).prevAll().length;
		links.eq(pos).trigger('click');
	};


})( jQuery );