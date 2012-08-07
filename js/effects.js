
$(document).on('ready', function() {

	var LUCID    = 'lucid';
	var HIDDEN   = 'hidden';
	var links    = $('.menu').find('a');
	var contents = $('.content');
		
	var linksEvent = function(e) {
		// Local jQuery vars
		var self = $(this);
		var num  = self.parent().prevAll().length;
		var lis  = links.parent();

		// Showing just the correct '.content' section and the associated menu link
		contents.addClass(HIDDEN ).eq(num).removeClass(HIDDEN);
		lis.addClass(LUCID).eq(num).removeClass(LUCID);
		
		// Preventing default event behaviour and 'Nullify' pattern
		e.preventDefault();
		self = num = lis = null;
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