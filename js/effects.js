
$(document).on('ready', function() {

	/* Global jQuery Objects */

	var links    = $('#menu').find('.nav-item');
	var contents = $('#container').find('.content');


	/* Global Constants */

	var HIDDEN   = 'hidden';
	var ACTIVE   = 'active';
	var DARK     = 'dark';
	var COLORS   = [ 'blue', 'violet', 'red', 'yellow', 'green' ];
	var SPEED    = 1000;


	/* Animations */


	/* Events Definition */

	var linksEvent = function(e) {

		// Local jQuery vars
		var self   = $(this);
		var num    = self.prevAll().length;
		var link   = self.find('a').attr('href');
		var target = $(link);

		// Showing just the correct '.content' section and the associated menu link

		//$('body').stop().animate({ scrollTop : target.offset().top }, SPEED);
		//contents.hide();
		//target.show();
		$('body').stop().animate({ scrollTop : target.offset().top - 50 }, SPEED);
			/*
			$.proxy(function() {
				$('body').css({ scrollTop : this.offset().top });
			}, target)
			*/
		//);
		
		links.each(function(i) {
			var l = links.eq(i);
			if ( l.hasClass(ACTIVE) ) {
				l.animate({ width : '5em' }, SPEED/2);
			}

			l.removeClass(COLORS[i]).removeClass(ACTIVE).addClass(DARK);
		});

		self.animate({ width : '12em' }, SPEED/2);
		self.addClass(COLORS[num]).addClass(ACTIVE).removeClass(DARK);
		
		// Preventing default event behaviour and 'Nullify' pattern
		e.preventDefault();
		self = num = link = target = null;
	}
	/*
	var url      = new Object(window.location.href);
	var links    = $('.menu').find('a');
	var contents = $('.content');

	
	var linksEvent = function(e) {
		e.preventDefault();
		
		var self = $(this);
		var href = self.attr('href');
		var num  = self.parent().prevAll().length;
		
		if (href === '#home') {
			window.location.href = url;
		} else {
			window.location.href = url + href;
		}
		
		contents.addClass(HIDDEN);
		contents.eq(num).removeClass(HIDDEN);

		self = num = id = null;
	}
	*/
	
	links.on('click', linksEvent);

});