const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  smooth: true,
  multiplier: 0.35,
}); 
locoScroll.stop();

let timer = setInterval(remove, 10);
function remove() {
  $(".w-webflow-badge").remove();
}

/*
//hiding the rest of the sections except loader
$(".locomotive-scroll").css("display", "none");
*/

let customEase =
  "M0,0,C0.084,0.61,0.214,0.802,0.28,0.856,0.356,0.918,0.374,1,1,1";
let counter = {
  value: 0
};
//setting the total duration of the loading animation
let loaderDuration = 7;

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $("#load-percent").text(progress);
}


function endLoaderAnimation() {
  //triggering the loader hide animation
  $(".trigger2").click();
  //when loading is finished, setting cursor back to default...
  document.body.style.cursor='default';
  //setting the canvas pointer events to none, so that user cannot interact with the canvas once the loading animation is done
  $('#canvas-div').css('pointer-events','none');
  //removing the badge
  $(".w-webflow-badge").remove();
  //turning off the continuous function run
  clearTimeout(timer);


  // Wait 2 seconds then calculate the new page height
  setTimeout(() => {  
    locoScroll.update();
    locoScroll.start();
  }, 2000);

}

let tl = gsap.timeline({
  onComplete: endLoaderAnimation
});
tl.to(counter, {
  value: 100,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
});




//page link scroll triggers

const about = document.querySelector('#about');
const work = document.querySelector('#work');
const awards = document.querySelector('#awards');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');


$('#about-link').click(function() {
  locoScroll.scrollTo(about);
});

$('#work-link').click(function() {
  locoScroll.scrollTo(work);
});

$('#awards-link').click(function() {
  locoScroll.scrollTo(awards);
});

$('#testimonials-link').click(function() {
  locoScroll.scrollTo(testimonials);
});

$('#contact-link').click(function() {
  locoScroll.scrollTo(contact);
});