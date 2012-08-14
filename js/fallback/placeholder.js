
(function ( $ ) {
	
	"use strict";

	/* Global Vars */
	var INPUTS = [ '#name', '#email', '#textarea' ],
		VALUES = [ 'Name...', 'Email...', 'Write the message here...' ];


	/* Events Definition */
	
	function inputSelected() {
		var that = $(this);

		for (var i=0; i < INPUTS.length; i++) {

			if ( that.attr('id') === INPUTS[i] && that.val() === VALUES[i] ) {
				that.val("");
				that = null;
				break;
			}
		}

	}


	function inputUnselected() {
		var that = $(this);

		for (var i=0; j < INPUTS.length; i++) {

			if ( that.attr('placeholder') === INPUTS[j] && that.val() === "" ) {
				that.val( VALUES[j] );
				that = null;
				break;
			}
		}
	}



	$(document).ready(function() {

		/* Each input must have its associate 'click' and 'blur' event */
		for (var i=0; i < INPUTS.length; i++) {
			$( INPUTS[i] )
				.val( VALUES[i] )						/* Setting the default value */
				.on('click', inputSelected)			/* If you do a 'click' the input text dissappear */
				.on('blur',  inputUnselected);		/* But if you do a click on every other place, it becomes visible again */
		}

	});


}( jQuery ));