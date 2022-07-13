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


  // waiting for 2 seconds and then calculating the new page height
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



*/



//recreating the loading percentage animation in jquery
const duration = 9000; //miliseconds
let start = 0;
const break1 = 53;
const break2 = 87;
const break3 = 100;


let timer = setInterval(load1, (duration/3.0));
function load1() {
  if(start < break1)
  {
    if (start == 0) {
      $("#load-percent").text("00");
    }
    else if (start == 1) {
      $("#load-percent").text("01");
    }
    else if (start == 2) {
      $("#load-percent").text("02");
    }
    else if (start == 3) {
      $("#load-percent").text("03");
    }
    else if (start == 4) {
      $("#load-percent").text("04");
    }
    else if (start == 5) {
      $("#load-percent").text("05");
    }
    else if (start == 6) {
      $("#load-percent").text("06");
    }
    else if (start == 7) {
      $("#load-percent").text("07");
    }
    else if (start == 8) {
      $("#load-percent").text("08");
    }
    else if (start == 9) {
      $("#load-percent").text("09");
    }


    else
    {
      $("#load-percent").text(start);
      start = start + 1;
    }

  }
  else
  {

  }
}




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