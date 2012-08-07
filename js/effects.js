
$(document).on('ready', function(){

	var LUCID    = 'lucid';
	var HIDDEN   = 'hidden';
	var links    = $('.menu').find('a');
	var contents = $('.content');
		
	var linksEvent = function() {
		var self = $(this);
		var num  = self.parent().prevAll().length;
		
		contents.addClass(HIDDEN );
		contents.eq(num).removeClass(HIDDEN);

		links.addClass(LUCID);
		links.eq(num).removeClass(LUCID);
		
		self = num = null;
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