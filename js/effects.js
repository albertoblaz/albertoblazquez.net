
$(document).on('ready', function() {

	/* Global Constants */

	// CSS Classes
	var HIDDEN   = 'hidden';
	var ACTIVE   = 'active';
	var DARK     = 'dark';
	var COLORS   = [ 'blue', 'violet', 'red', 'yellow', 'green' ];
	
	// Speeds
	var SCROLL_SPEED = 1000;
	var ITEMS_SPEED  = SCROLL_SPEED / 2;


	/* Global jQuery Objects */

	var links       = $('#menu').find('.nav-item');
	var contents    = $('#container').find('.content');


	/* Animations */



	/* Events Definition */

	var linksEvent = function(e) {

		// Local jQuery vars
		var newItem   = $(this);
		var newPos    = newItem.prevAll().length;
		var target    = $( newItem.find('a').attr('href') );
		var className = "";


		// Performing the 'scroll' animation 
		$('body').stop().animate({ scrollTop : target.offset().top - 50 }, SCROLL_SPEED);
				

		// Performing the animation to change the menu items styles and to highlight the selected one
		var oldItem = links.siblings('.' + ACTIVE);
		var oldPos  = oldItem.prevAll().length;

		className = COLORS[oldPos] + " " + ACTIVE;
		oldItem.removeClass(className, ITEMS_SPEED, function() {
			return $(this).addClass(DARK);
		});

		className = COLORS[newPos] + " " + ACTIVE;
		newItem.addClass(className, ITEMS_SPEED, function() {
			return $(this).removeClass(DARK);
		});
	

		// Preventing default event behaviour and using 'Nullify' pattern
		e.preventDefault();
		oldPos = newPos = className = oldItem = newItem = target = null;
	}


	/* Event Assignments */

	links.on('click', linksEvent);

});