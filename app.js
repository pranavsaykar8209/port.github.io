$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    })

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // RESPONSIVE WEBSITE
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav')
        // let about = document.querySelector('.about')


    hamberger.addEventListener('click', function() {
        mobileNav.classList.add('open');
    });
    times.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });
    // about.addEventListener('click', function() {
    //     mobileNav.classList.remove('open');
    // });


    gsap.from("#main-nav", { duration: 1, y: -200, ease: "bounce" });
    // gsap.from('#main-nav', {duration: 3,x: '0%',opacity: 0})


})