
(function ( $ ) {

    "use strict";

    /* Global Constants */

    var SCROLL_SPEED = 1000,                // Speeds
        ITEMS_SPEED  = SCROLL_SPEED / 2,

        TIMEOUT      = 10000,               // Timeout to hide again the email message delivery status

        ACTIVE  = 'active',                 // CSS Classes to provide styles in 'linksEvent'
        COLORS  = [ 'blue', 'violet', 'red', 'yellow', 'green' ],

        HIDDEN  = 'hidden',                 // CSS Classes to provide styles in 'sendEmailEvent'
        SUCCESS = 'success',
        FAILURE = 'failure',

        PHP_CONTACT = 'php/contact.php';    // PHP Script which recieves email messages


    /* Global jQuery Objects */

    var squares = $('#colors').find('.square'),
        links   = $('#menu').find('a'),
        oldItem = links.first();


    /* Events Definition */

    function linksEvent( e ) {

        // Preventing default event behaviour
        e.preventDefault();

        // Local jQuery vars
        var newItem   = $(this),
            oldPos    = oldItem.parent().index(),
            newPos    = newItem.parent().index(),
            target    = $( newItem.attr('href') ),
            className = ACTIVE;


        // Performing the animation to change the menu items styles and to highlight the selected one

        if ( oldPos !== newPos ) {
            className = COLORS[oldPos] + " " + ACTIVE;
        }

        oldItem.removeClass(className, ITEMS_SPEED);

        newItem.addClass(COLORS[newPos])
               .addClass(ACTIVE, ITEMS_SPEED);


        // Updating the current active item
        oldItem = newItem;

    }


    function squaresEvent() {
        var pos = $(this).index();
        links.eq(pos).trigger('click');
    }


    function sendEmailEvent() {

        // Local Vars
        var form = $('#form'),

            content = {
                email   : form.find('#email').val(),
                subject : form.find('#subject').val(),
                message : form.find('#message').val()
            };


        // AJAX Request using 'Post' method to send the message to the server
        $.post(PHP_CONTACT, content, function(success) {
            var output = $('#output');

            output.removeClass(HIDDEN);
            if ( success ) {
                output.addClass(SUCCESS).text("Email sent correctly!");
            } else {
                output.addClass(FAILURE).text("Email could not be delivered due to an error problem");
            }

            setTimeout(function() {
                output.addClass(HIDDEN);
                output = null;
            }, TIMEOUT);

        });

        form = content = null;
    }


    $(document).on('ready', function() {

        /* Event Assignments */
        links.on('click', linksEvent);
        squares.on('click', squaresEvent);
        $('#submit').on('click', sendEmailEvent);


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
