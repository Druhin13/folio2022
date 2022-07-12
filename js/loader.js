// Set the cursor ASAP to "Wait"
document.body.style.cursor='wait';

let customEase =
  "M0,0,C0.084,0.61,0.214,0.802,0.28,0.856,0.356,0.918,0.374,1,1,1";
let counter = {
  value: 0
};
let loaderDuration = 10;

// If not a first time visit in this tab
/*
if (sessionStorage.getItem("visited") !== null) {
  loaderDuration = 3.5;
  counter = {
    value: 48
  };
}
sessionStorage.setItem("visited", "true");
*/

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $("#load-percent").text(progress);
}
function endLoaderAnimation() {
  $(".trigger2").click();
  // When loading is finished, setting cursor back to default...
  window.onload=function(){document.body.style.cursor='default';}
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