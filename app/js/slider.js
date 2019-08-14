var backButton = document.querySelector('.slider__button--prev');
var forwardButton = document.querySelector('.slider__button--next');
var slides = document.getElementsByClassName("slider__item");
var dots = document.getElementsByClassName("slider__dot");




var slideIndex = 0;
showSlide(slideIndex);



function showSlide(n) {
    if (n > slides.length) {
        slideIndex = 1;
    } 
    else if (n < 0) {
        slideIndex = slides.length;
    }

    else {
        slideIndex = n;
    }
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideIndex].style.display = "block"; 
}



backButton.addEventListener('click', function() {
    if (slideIndex > 0) {
        slideIndex -= 1;
        dots[slideIndex+1].classList.remove('slider__dot--active');
    }
    else {
        slideIndex = slides.length-1;
        dots[0].classList.remove('slider__dot--active');
    }
    showSlide(slideIndex);
    dots[slideIndex].classList.add('slider__dot--active');
});

forwardButton.addEventListener('click', function() {
    if (slideIndex < slides.length-1) {
        slideIndex += 1;
        dots[slideIndex-1].classList.remove('slider__dot--active');
    }
    else {
        slideIndex = 0;
        dots[dots.length-1].classList.remove('slider__dot--active');
    }
    showSlide(slideIndex);
    dots[slideIndex].classList.add('slider__dot--active');
});


 for(var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", dotClickhandler(i));
 }

 function dotClickhandler(i) {
    return function() {
        showSlide(i);
        dots[i].classList.add('slider__dot--active');
        for (n = 0; n < dots.length; n++) {
            if ((n != i) && (dots[n].classList.contains('slider__dot--active'))) {
                dots[n].classList.remove('slider__dot--active');
            }
        }
    };
 }



 //The reason it works is because it creates a closure that holds the value of index that will be shown in the alert message. Each time through the loop creates another closure holding another value of index.
/*for (var i = 0; i < dots.length; i++) {
    (function(index) {
        dots[index].addEventListener('click', function() {
            console.log("you clicked button number " + index);
        })
    })(i);
}*/
