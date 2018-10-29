//smooth scroll
jQuery(document).ready(function ($) {
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 40
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

//navigation background
let nav = document.querySelector('nav');
let link = document.querySelectorAll('nav a');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY <= 650) {
        nav.style.backgroundColor = 'transparent';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '	#FFFFFF';
        };
    } else {
        nav.style.backgroundColor = '	rgb(0,0,0, .7)';
        nav.style.height = '110px';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '	#FFFFFF';
        };
    }
});