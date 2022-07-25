//jQuerySimpleCounter.js
(function ($) {
  $.fn.jQuerySimpleCounter = function (options) {
    let settings = $.extend({
      start: 0,
      end: 100,
      easing: 'swing',
      duration: 400,
      complete: ''
    }, options);

    const thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        let mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
}(jQuery));

//locomotive initialization
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  smooth: true,
  multiplier: 0.5,
});
locoScroll.stop();

let timer = setInterval(remove, 10);
function remove() {
  $(".w-webflow-badge").remove();
}



/*
//hiding the 'something' section
$('#something').hide();
*/


//counter initialization
setTimeout(() => {

  // creating the sketch cursor

  var new_canvas = document.createElement('canvas');
  new_canvas.id = "sketch";
  new_canvas.className = "sketch";
  new_canvas.style.position = "absolute";
  new_canvas.style.zIndex = "100";
  new_canvas.style.backgroundColor = "#ffffff00";
  //new_canvas.style.pointerEvents = "none";
  new_canvas.style.marginLeft = "50vw";
  new_canvas.style.marginTop = "-34vh";

  //document.body.appendChild(new_canvas);
  document.body.insertBefore(new_canvas, document.body.firstChild);

  const canvas = document.getElementById("sketch");
  const ctx = canvas.getContext("2d");

  //testing size
  canvas.width = parent.offsetWidth;
  canvas.height = parent.offsetHeight;
  ctx.canvas.width = parent.offsetWidth;
  ctx.canvas.height = parent.offsetHeight;

  let coord = { x: 0, y: 0 };

  document.addEventListener("mouseover", start);
  window.addEventListener("resize", resize);

  resize();

  function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }
  function reposition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
  }
  function start(event) {
    document.addEventListener("mousemove", draw);
    reposition(event);
  }
  function stop() {
    document.removeEventListener("mousemove", draw);
  }
  function draw(event) {
    ctx.beginPath();
    ctx.lineWidth = 1.75;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
  }


  $('#count').jQuerySimpleCounter({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 5000, //set the duration of the loading animation (5000 - 7000 ~6000)
  });

}, 2000);





// jquery inview

!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function (a) { function i() { var b, c, d = { height: f.innerHeight, width: f.innerWidth }; return d.height || (b = e.compatMode, (b || !a.support.boxModel) && (c = "CSS1Compat" === b ? g : e.body, d = { height: c.clientHeight, width: c.clientWidth })), d } function j() { return { top: f.pageYOffset || g.scrollTop || e.body.scrollTop, left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft } } function k() { if (b.length) { var e = 0, f = a.map(b, function (a) { var b = a.data.selector, c = a.$element; return b ? c.find(b) : c }); for (c = c || i(), d = d || j(); e < b.length; e++)if (a.contains(g, f[e][0])) { var h = a(f[e]), k = { height: h[0].offsetHeight, width: h[0].offsetWidth }, l = h.offset(), m = h.data("inview"); if (!d || !c) return; l.top + k.height > d.top && l.top < d.top + c.height && l.left + k.width > d.left && l.left < d.left + c.width ? m || h.data("inview", !0).trigger("inview", [!0]) : m && h.data("inview", !1).trigger("inview", [!1]) } } } var c, d, h, b = [], e = document, f = window, g = e.documentElement; a.event.special.inview = { add: function (c) { b.push({ data: c, $element: a(this), element: this }), !h && b.length && (h = setInterval(k, 250)) }, remove: function (a) { for (var c = 0; c < b.length; c++) { var d = b[c]; if (d.element === this && d.data.guid === a.guid) { b.splice(c, 1); break } } b.length || (clearInterval(h), h = null) } }, a(f).bind("scroll resize scrollstop", function () { c = d = null }), !g.addEventListener && g.attachEvent && g.attachEvent("onfocusin", function () { d = null }) });






//timer/checker initialization
let test_timer = setInterval(test, 10);
function test() {
  if (parseInt($("#count")[0].innerHTML) > 8) {
    $('#zero').css('display', 'none');
  }

  let progress_anim = setInterval(progress, 10);
  function progress() {
    let w = parseInt($("#count")[0].innerHTML) + "%"; //load counter value
    $("#loader-line").css("width", w);
  }

  if ($("#count")[0].innerHTML == '100') {
    //removing the badge
    $(".w-webflow-badge").remove();
    //turning off the continuous function run
    clearInterval(timer);
    clearInterval(test_timer);
    clearInterval(progress_anim);
    $("#loader-line").css("width", "35vw");
    //when loading is finished, setting cursor back to default...
    document.body.style.cursor = 'default';
    //setting the canvas pointer events to none, so that user cannot interact with the canvas once the loading animation is done
    $('#canvas-div').css('pointer-events', 'none');

    //animate the trigger
    $(".trigger1").click();


    //waiting for 1 second, and then hiding the sketch canvas
    setTimeout(() => {
      //hiding the sketch canvas
      //document.getElementById("sketch").style.display = "none";
    }, 1000);

    //waiting for 1.75 seconds and then calculating the new page height
    setTimeout(() => {
      locoScroll.update();
      locoScroll.start();

      //loading the case study preview gifs
      $('head').append('<link rel="stylesheet" href="https://druh.in/folio2022/css/preview.css"/>');
    }, 750);
  }
}



//page link scroll trigger initialization
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const awards = document.querySelector('#awards');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact-test');


$('#about-link').click(function () {
  locoScroll.scrollTo(about);
});

$('#work-link').click(function () {
  locoScroll.scrollTo(work);
});

$('#awards-link').click(function () {
  locoScroll.scrollTo(awards);
});

$('#testimonials-link').click(function () {
  locoScroll.scrollTo(testimonials);
});

$('#contact-link').click(function () {
  locoScroll.scrollTo(contact);
});




/* testing on work section - case study tabs 

const h1 = document.querySelectorAll(".hashtag-txt");
const h2 = document.querySelectorAll(".hashtag-txt-hidden");

for (i = 0; i < h1.length; i++) {
nh1 = h1[i].textContent.replace("#", "");
h1[i].innerText = nh1;
}

for (j = 0; j < h2.length; j++) {
nh2 = h2[j].textContent.replace("#", "");
h2[j].innerText = nh2;
}

*/



/* time calc */

let options = {
  timeZone: 'Europe/London',
  //year: 'numeric',
  //month: 'numeric',
  //day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  //second: 'numeric',
},
  formatter = new Intl.DateTimeFormat([], options);

let time_a = formatter.format(new Date());

let ctime = setInterval(timecalc, 1000);
function timecalc() {
  let time_b = formatter.format(new Date());
  $("#time").text(time_b);
  if (time_b != time_a) {
    time_a = time_b;
    $(".circle").click();
  }
}



//case study clicks

const cs1 = document.getElementById('cs1')
const cs2 = document.getElementById('cs2')
const cs3 = document.getElementById('cs3')
const cs4 = document.getElementById('cs4')
const cs5 = document.getElementById('cs5')
const cs6 = document.getElementById('cs6')
const cs7 = document.getElementById('cs7')
const cs8 = document.getElementById('cs8')
const cs9 = document.getElementById('cs9')
const cs10 = document.getElementById('cs10')
const cs11 = document.getElementById('cs11')
const cs12 = document.getElementById('cs12')
const cs13 = document.getElementById('cs13')





cs1.addEventListener("click", () => {
  let csv = parseInt(("cs1").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});


cs2.addEventListener("click", () => {
  let csv = parseInt(("cs2").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs3.addEventListener("click", () => {
  let csv = parseInt(("cs3").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 10px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs4.addEventListener("click", () => {
  let csv = parseInt(("cs4").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 10px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs5.addEventListener("click", () => {
  let csv = parseInt(("cs5").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 10px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs6.addEventListener("click", () => {
  let csv = parseInt(("cs6").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 15px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs7.addEventListener("click", () => {
  let csv = parseInt(("cs7").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 15px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs8.addEventListener("click", () => {
  let csv = parseInt(("cs8").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs9.addEventListener("click", () => {
  let csv = parseInt(("cs9").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 5px)";


  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs10.addEventListener("click", () => {
  let csv = parseInt(("cs10").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 10px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs11.addEventListener("click", () => {
  let csv = parseInt(("cs11").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 10px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs12.addEventListener("click", () => {
  let csv = parseInt(("cs12").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 10px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});

cs13.addEventListener("click", () => {
  let csv = parseInt(("cs13").slice(2)); //case study value / index of the selected case study
  let bz = 9 //base z-index
  let ns = 31.65; //last cs selected
  let per = 3.15; //per cs size
  let h = Math.round(ns + (per * (13 - csv))) + "%";
  h = "calc(" + h + " - 15px)";

  $("#disable-hover").css("display", "block");

  let z = bz + csv;
  $("#blur-up").css("z-index", z);

  setTimeout(() => {
    locoScroll.stop();

    //blur up
    $("#blur-up").css("height", "100%");


    //blur down
    $("#blur-down").css("height", h);

  }, 300);
});





//closing blur and disable overlay from the cs tabs

const disable_cs = document.getElementById('disable-hover');

disable_cs.addEventListener("click", () => {

  $("#disable-hover").css("display", "none");
  $("#blur-up").css("height", "0%");
  $("#blur-down").css("height", "0%");

  setTimeout(() => {
    locoScroll.start();

    //blur up
    $("#blur-up").css("z-index", "9");

    //blur down

  }, 300);
});





// cs details locomotive initializations

const CS2locoScroll = new LocomotiveScroll({
  el: document.querySelector(".vtf-cs-main"),
  smooth: true,
  multiplier: 0.75,
});
CS2locoScroll.start();



// if menu hold/pressed down

//let presshold = 0;

$('#menu').on('mousedown', function () {

  //  function dragdemo_show() {
  if ($("#menu").position().top == 0) { // checking if the nav menu is at the top of the viewport
    //console.log("at the top of the screen");
    setTimeout(() => {
      if ($('#clip-item1').hasClass("slip-reordering") == true) {
        $('.drag-demo-container').css("opacity", "100%");
        $('#menu-demo1').css("opacity", "0%");
        $('#menu-demo2').css("opacity", "75%");
        $('#menu').css("cursor", "grabbing");
        $('#menu').css("cursor", "-webkit-grabbing");
        $('.drag-anim').css("top", "35vh");
        $('.drag-anim').css("transform", "rotate(0deg)");
      }
    }, 500);

  }
  else {  // the nav menu is at the bottom of the viewport
    //console.log("at the bottom of the screen");
    setTimeout(() => {
      if ($('#clip-item1').hasClass("slip-reordering") == true) {
        $('.drag-demo-container').css("opacity", "100%");
        $('#menu-demo1').css("opacity", "75%");
        $('#menu-demo2').css("opacity", "0%");
        $('#menu').css("cursor", "grabbing");
        $('#menu').css("cursor", "-webkit-grabbing");
        $('.drag-anim').css("top", "-35vh");
        $('.drag-anim').css("transform", "rotate(180deg)");
      }
    }, 500);
  }
  //  }
}

).on('mouseup mouseleave', function () {

  $('.drag-demo-container').css("opacity", "0%");

  $('#menu-demo1').css("opacity", "0%");
  $('#menu-demo2').css("opacity", "0%");
  $('#menu').css("cursor", "grab");

  $('html').removeClass("has-scroll-scrolling");

  //  clearTimeout(presshold);
});



let scrolling = setInterval(checkifscrolling, 10);
function checkifscrolling() {
  if ($('html').hasClass("has-scroll-scrolling") == true) {
    $('.drag-demo-container').css("opacity", "0%");

    $('#menu-demo1').css("opacity", "0%");
    $('#menu-demo2').css("opacity", "0%");
    $('#menu').css("cursor", "grab");
  }
}



// fullscreen mode

let fPressed = false;
$(window).keydown(function (evt) {
  if (evt.which == 70) { // f pressed
    fPressed = true;
    document.documentElement.requestFullscreen();
    locoScroll.stop();
    setTimeout(() => {
      locoScroll.update();
      locoScroll.start();
    }, 500);
  }
})

  .keyup(function (evt) {
    if (evt.which == 70 || evt.which == 27) { // f or esc pressed
      fPressed = false;
      document.exitFullscreen();
      locoScroll.stop();
      setTimeout(() => {
        locoScroll.update();
        locoScroll.start();
      }, 500);
    }
  });


/*
// check if sketch is in view or not
context.clearRect(0, 0, context.canvas.width, context.canvas.height);
context.beginPath();
*/


/*
//mailto:spam@test.com
//mailto:contact@druh.in
e0="con";//con
e1="tictac";
e2=e1.slice(3,6);//tac
e3=e2.slice(0,1);//t
e4="bruh";
e5=e4.replace("b","d");//druh
e6=".in";//.in
$('#email3').on('click', function(){
    var href = $(this).attr('href');
    $(this).attr('href', href.replace('spam',e0+e2+e3));
  	$(this).attr('href', href.replace('test',e5));
  	$(this).attr('href', href.replace('.com',e6));
});
*/


//email

function _0x4b8a(_0x551cab,_0x3f0057){var _0x5e14bf=_0x31d5();return _0x4b8a=function(_0x1c89c8,_0x27cac8){_0x1c89c8=_0x1c89c8-0x8c;var _0x555901=_0x5e14bf[_0x1c89c8];return _0x555901;},_0x4b8a(_0x551cab,_0x3f0057);}var _0x56020a=_0x4b8a;(function(_0x394a0a,_0x136f09){var _0x2d6bfb=_0x4b8a,_0x4efaf3=_0x394a0a();while(!![]){try{var _0xabb348=parseInt(_0x2d6bfb(0x92))/0x1*(-parseInt(_0x2d6bfb(0xac))/0x2)+-parseInt(_0x2d6bfb(0x9a))/0x3*(-parseInt(_0x2d6bfb(0x8c))/0x4)+-parseInt(_0x2d6bfb(0x99))/0x5+parseInt(_0x2d6bfb(0x9d))/0x6+parseInt(_0x2d6bfb(0x8d))/0x7*(-parseInt(_0x2d6bfb(0xa9))/0x8)+-parseInt(_0x2d6bfb(0xa7))/0x9+-parseInt(_0x2d6bfb(0xa3))/0xa*(-parseInt(_0x2d6bfb(0xaa))/0xb);if(_0xabb348===_0x136f09)break;else _0x4efaf3['push'](_0x4efaf3['shift']());}catch(_0x52d284){_0x4efaf3['push'](_0x4efaf3['shift']());}}}(_0x31d5,0x8d8e8));var _0x53d579=(function(){var _0xff069f=!![];return function(_0x237841,_0x557475){var _0x5640f5=_0xff069f?function(){var _0x1f73fa=_0x4b8a;if(_0x557475){var _0xce0f5e=_0x557475[_0x1f73fa(0x90)](_0x237841,arguments);return _0x557475=null,_0xce0f5e;}}:function(){};return _0xff069f=![],_0x5640f5;};}()),_0x3379ef=_0x53d579(this,function(){var _0x4066cc=_0x4b8a;return _0x3379ef['toString']()[_0x4066cc(0x8f)](_0x4066cc(0xa0))[_0x4066cc(0xa2)]()[_0x4066cc(0xa5)](_0x3379ef)['search'](_0x4066cc(0xa0));});_0x3379ef();var _0x27cac8=(function(){var _0x2e1a93=!![];return function(_0x233931,_0x99c598){var _0x2ef8ec=_0x2e1a93?function(){var _0x529881=_0x4b8a;if(_0x99c598){var _0xb89779=_0x99c598[_0x529881(0x90)](_0x233931,arguments);return _0x99c598=null,_0xb89779;}}:function(){};return _0x2e1a93=![],_0x2ef8ec;};}()),_0x1c89c8=_0x27cac8(this,function(){var _0x45d33f=_0x4b8a,_0x3edca5=function(){var _0x1a6779=_0x4b8a,_0x31d5b1;try{_0x31d5b1=Function(_0x1a6779(0x9b)+_0x1a6779(0xa1)+');')();}catch(_0x2ab303){_0x31d5b1=window;}return _0x31d5b1;},_0xacdaec=_0x3edca5(),_0x520b92=_0xacdaec['console']=_0xacdaec['console']||{},_0x28b25b=[_0x45d33f(0x9c),_0x45d33f(0x9e),'info',_0x45d33f(0x9f),_0x45d33f(0xb0),_0x45d33f(0x96),_0x45d33f(0x94)];for(var _0x59dc91=0x0;_0x59dc91<_0x28b25b['length'];_0x59dc91++){var _0x2c0038=_0x27cac8[_0x45d33f(0xa5)][_0x45d33f(0xa6)][_0x45d33f(0xab)](_0x27cac8),_0x1fcf2f=_0x28b25b[_0x59dc91],_0x58ec90=_0x520b92[_0x1fcf2f]||_0x2c0038;_0x2c0038['__proto__']=_0x27cac8[_0x45d33f(0xab)](_0x27cac8),_0x2c0038[_0x45d33f(0xa2)]=_0x58ec90[_0x45d33f(0xa2)][_0x45d33f(0xab)](_0x58ec90),_0x520b92[_0x1fcf2f]=_0x2c0038;}});_0x1c89c8(),e0='con',e1=_0x56020a(0xaf),e2=e1[_0x56020a(0x93)](0x3,0x6),e3=e2[_0x56020a(0x93)](0x0,0x1),e4=_0x56020a(0x98),e5=e4[_0x56020a(0xa4)]('b','d'),e6=_0x56020a(0xae),$(_0x56020a(0x91))['on'](_0x56020a(0xad),function(){var _0x146858=_0x56020a,_0x515113=$(this)[_0x146858(0x97)]('href');$(this)[_0x146858(0x97)]('href',_0x515113['replace'](_0x146858(0x8e),e0+e2+e3)),$(this)[_0x146858(0x97)](_0x146858(0x95),_0x515113[_0x146858(0xa4)](_0x146858(0xa8),e5)),$(this)[_0x146858(0x97)]('href',_0x515113['replace']('.com',e6));});function _0x31d5(){var _0x70a748=['trace','href','table','attr','bruh','4631295haNGpB','8049iKAOHy','return\x20(function()\x20','log','6374868XqijIy','warn','error','(((.+)+)+)+$','{}.constructor(\x22return\x20this\x22)(\x20)','toString','340topMzu','replace','constructor','prototype','4835718JmbMxf','test','71976iEQuhH','687445IlbYgJ','bind','573310jnpwqF','click','.in','tictac','exception','276xKpGZA','588EOntRc','spam','search','apply','#email3','2QHWdPc','slice'];_0x31d5=function(){return _0x70a748;};return _0x31d5();}