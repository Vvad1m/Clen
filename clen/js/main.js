$(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="./images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button " class="slick-btn slick-next"> <img src="./images/arrow-right.svg" alt=""></button>',
    });
});
 
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})