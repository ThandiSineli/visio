$(document).ready(function(){
    let currentIndex = 0;
    const slides = $('.slide-item');
    const indicators = $('.indicator');
    
    function displaySlide(index) {
        slides.css('transform', `translateX(-${index * 100}%)`);
        indicators.removeClass('active');
        indicators.eq(index).addClass('active');
    }
    
    $('.next-btn').click(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        displaySlide(currentIndex);
    });
    
    indicators.click(function() {
        currentIndex = $(this).index();
        displaySlide(currentIndex);
    });
    
    displaySlide(currentIndex);
});$(document).ready(function(){
    let currentIndex = 0;
    const slides = $('.slide-item');
    const indicators = $('.indicator');
    
    function displaySlide(index) {
        slides.css('transform', `translateX(-${index * 100}%)`);
        indicators.removeClass('active');
        indicators.eq(index).addClass('active');
    }
    
    $('.next-btn').click(function() {
        currentIndex = (currentIndex + 1) % slides.length;
        displaySlide(currentIndex);
    });
    
    indicators.click(function() {
        currentIndex = $(this).index();
        displaySlide(currentIndex);
    });
    
    displaySlide(currentIndex);
});
