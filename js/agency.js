/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
    var endDate = "April 2, 2016 23:06:25";
    $('.lj-countdown .row').countdown({
        date: endDate,
        render: function(data) {
            $(this.el).html('<div><div><span>' + this.leadingZeros(data.days, 2) + '</span><span>d</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>h</span></div></div><div class="lj-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>m</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>s</span></div></div>');
        }
    });
});
