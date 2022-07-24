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
e0="con";//con
e1="tictac";
e2=e1.slice(3,6);//tac
e3=e2.substring(1);//t
e4="bruh";
e5=e4.replace("b","d");//druh
e6="in";//in
$("#email1").text(e0+e2+e3+"@"+e5+"."+e6);
$("#email2").text(e0+e2+e3+"@"+e5+"."+e6);
*/


//email

var _0x380c9c=_0x30c3;function _0x30c3(a,b){var c=_0x138f();return(_0x30c3=function(a,b){return c[a-=154]})(a,b)}!function(c,d){for(var a=_0x30c3,b=c();;)try{if(parseInt(a(164))/1*(-parseInt(a(173))/2)+ -parseInt(a(155))/3*(-parseInt(a(179))/4)+ -parseInt(a(163))/5*(-parseInt(a(168))/6)+parseInt(a(167))/7+parseInt(a(170))/8+parseInt(a(159))/9*(-parseInt(a(166))/10)+parseInt(a(183))/11*(-parseInt(a(156))/12)==662543)break;b.push(b.shift())}catch(e){b.push(b.shift())}}(_0x138f,662543);var _0x29d2b8=function(){var a=!0;return function(c,d){var b=a?function(){if(d){var a=d.apply(c,arguments);return d=null,a}}:function(){};return a=!1,b}}(),_0x2ae7ee=_0x29d2b8(this,function(){var a=_0x30c3;return _0x2ae7ee.toString()[a(175)](a(180))[a(165)]()[a(185)](_0x2ae7ee)[a(175)](a(180))});_0x2ae7ee();var _0x24d741=function(){var a=!0;return function(c,d){var b=a?function(){var a=_0x30c3;if(d){var b=d[a(171)](c,arguments);return d=null,b}}:function(){};return a=!1,b}}(),_0xbed1ef=_0x24d741(this,function(){var b,a=_0x30c3;try{b=Function(a(184)+a(162)+");")()}catch(i){b=window}for(var e=b[a(177)]=b.console||{},f=[a(157),a(181),a(161),a(176),a(160),a(174),"trace"],d=0;d<f.length;d++){var c=_0x24d741[a(185)].prototype[a(172)](_0x24d741),g=f[d],h=e[g]||c;c[a(182)]=_0x24d741.bind(_0x24d741),c[a(165)]=h[a(165)][a(172)](h),e[g]=c}});function _0x138f(){var a=["22dcUMQp","return (function() ","constructor","#email2","7230ZvLjcR","2448156hBkkXu","log","slice","16479qrIwnm","exception","info",'{}.constructor("return this")( )',"2173075qpxupF","209171raWuPK","toString","5860pYiAkw","54082LMqrCi","18VvWDTA","bruh","9647424rDJLHg","apply","bind","8vtXkUX","table","search","error","console","text","768nmJRfa","(((.+)+)+)+$","warn","__proto__"];return(_0x138f=function(){return a})()}_0xbed1ef(),e0="con",e3=(e2=(e1="tictac")[_0x380c9c(158)](3,6))[_0x380c9c(158)](0,1),e5=(e4=_0x380c9c(169)).replace("b","d"),e6="in",$("#email1").text(e0+e2+e3+"@"+e5+"."+e6),$(_0x380c9c(154))[_0x380c9c(178)](e0+e2+e3+"@"+e5+"."+e6)