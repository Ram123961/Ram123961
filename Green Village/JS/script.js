// hero //
document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const navBtns = document.querySelectorAll('.slider-nav-btn');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            let currentSlide = 0;
            let slideInterval;

            // Start automatic slideshow
            startSlideShow();

            // Navigation buttons click event
            navBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    currentSlide = parseInt(this.dataset.slide);
                    updateSlider();
                    resetInterval();
                });
            });

            // Next button click event
            nextBtn.addEventListener('click', function() {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlider();
                resetInterval();
            });

            // Previous button click event
            prevBtn.addEventListener('click', function() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlider();
                resetInterval();
            });

            // Update the slider to show the current slide
            function updateSlider() {
                slides.forEach(slide => slide.classList.remove('active'));
                navBtns.forEach(btn => btn.classList.remove('active'));
                
                slides[currentSlide].classList.add('active');
                navBtns[currentSlide].classList.add('active');
            }

            // Start automatic slideshow
            function startSlideShow() {
                slideInterval = setInterval(function() {
                    currentSlide = (currentSlide + 1) % slides.length;
                    updateSlider();
                }, 5000);
            }

            // Reset interval when manually navigating
            function resetInterval() {
                clearInterval(slideInterval);
                startSlideShow();
            }

            // Pause slideshow when user hovers over the slider
            const slider = document.querySelector('.hero-slider');
            slider.addEventListener('mouseenter', function() {
                clearInterval(slideInterval);
            });

            slider.addEventListener('mouseleave', function() {
                startSlideShow();
            });
        });

        // Our Project //
         
        filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// team //
console.log("Team section loaded.");

// scroll top  //


        