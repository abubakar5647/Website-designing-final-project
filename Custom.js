document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  let translateX = 0;
  const step =520; // Adjust the step value to match the card width
  const totalWidth = slider.scrollWidth;

  prevButton.addEventListener('click', function () {
    translateX += step;
    if (translateX > 0) {
      translateX = -(totalWidth - slider.offsetWidth);
    }
    slider.style.transform = `translateX(${translateX}px)`;
  });

  nextButton.addEventListener('click', function () {
    translateX -= step;
    if (Math.abs(translateX) >= totalWidth) {
      translateX = 0;
    }
    slider.style.transform = `translateX(${translateX}px)`;
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const secSlider = document.querySelector('.sec-slider');
  const secPrevButton = document.querySelector('.sec-prev-button');
  const secNextButton = document.querySelector('.sec-next-button');

  let translateX = 0;
  const step =720; // Adjust the step value to match the card width
  const secTotalWidth = secSlider.scrollWidth;

  secPrevButton.addEventListener('click', function () {
    translateX += step;
    if (translateX > 0) {
      translateX = -(secTotalWidth - secSlider.offsetWidth);
    }
    secSlider.style.transform = `translateX(${translateX}px)`;
  });

  secNextButton.addEventListener('click', function () {
    translateX -= step;
    if (Math.abs(translateX) >= secTotalWidth) {
      translateX = 0;
    }
    secSlider.style.transform = `translateX(${translateX}px)`;
  });
});

// back to top button

document.addEventListener("DOMContentLoaded", function () {
  var backToTopButtons = document.querySelectorAll(".back-to-top-button");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Use smooth scrolling for a smoother user experience
    });
  }

  function toggleButtonVisibility() {
    var scrollY = window.pageYOffset;

    backToTopButtons.forEach(function (button) {
      if (scrollY > 100) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  }

  window.addEventListener("scroll", toggleButtonVisibility);

  backToTopButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToTop();
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 0, 25, 3000);
 });
 
 
 


$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});




setTimeout(function(){
  $('#preloder').fadeToggle();
  }, 1500);





  // website preloder

  document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader after 1.5 seconds
    setTimeout(function () {
      var preloader = document.querySelector(".preloader");
      var mainContent = document.querySelector(".main-content");
  
      preloader.style.display = "none"; // Hide the preloader
      mainContent.style.display = "block"; // Display the main content
    }, 1500); // 1.5 seconds (1500 milliseconds) delay
  });



  var bars = document.querySelectorAll(".meter > span");
  console.clear();

  setInterval(function () {
    bars.forEach(function (bar) {
      var getWidth = parseFloat(bar.dataset.progress);

      for (var i = 0; i < getWidth; i++) {
        bar.style.width = i + "%";
      }
    });
  }, 500);

  // foam validation


  function receive(){
    var name =document.getElementById("username");
    var msg =document.getElementById("msg");
    var email =document.getElementById("email");
    var emailError =document.getElementById("email-msg");
    var subject= document.getElementById("subject");
    var subjectError= document.getElementById("subject-msg");
    var call= document.getElementById("call");
    var callError= document.getElementById("call-msg");
    var content= document.getElementById("Content");
    var contentError= document.getElementById("Content-msg");


    if(name.value==""){
      name.classList.add("invalid");
      msg.style.display="block";
  }else{
      name.classList.add("invalid2");
      msg.style.display="none";
  }

  if(email.value==""){
    email.classList.add("invalid");
    emailError.style.display="block";
  }else{
      email.classList.add("invalid2");
      emailError.style.display="none";
  }

  if(subject.value==""){
    subject.classList.add("invalid");
    subjectError.style.display="block";
  }else{
      subject.classList.add("invalid2");
      subjectError.style.display="none";
  }

  if(call.value==""){
    call.classList.add("invalid");
    callError.style.display="block";
  }else{
      call.classList.add("invalid2");
      callError.style.display="none";
  }

  if(content.value==""){
    content.classList.add("invalid");
    contentError.style.display="block";
  }else{
      content.classList.add("invalid2");
      contentError.style.display="none";
  }

  

  }