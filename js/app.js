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
  multiplier: 0.35,
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

// creating the sketch cursor
setTimeout(() => {

  var new_canvas = document.createElement('canvas');
  new_canvas.id = "sketch";
  new_canvas.className = "sketch";
  new_canvas.style.position = "fixed";
  new_canvas.style.zIndex = "100";
  new_canvas.style.backgroundColor = "transparent";
  new_canvas.width = window.innerWidth;
  new_canvas.height = window.innerHeight;
  new_canvas.style.mixBlendMode = "exclusion";
  new_canvas.style.pointerEvents = "none";

  document.body.insertBefore(new_canvas, document.body.firstChild);

  const canvas = document.getElementById('sketch');
  const contextArea = canvas.getContext('2d');

  this.points = [];

  sketch.addEventListener('mousemove', e => {
    const object = {
      point: { x: e.offsetX, y: e.offsetY },
      timer: setTimeout(function () {
        this.points.shift();
      }, 250),
    };

    this.points.push(object);
  });

  function draw() {
    contextArea.clearRect(0, 0, canvas.width, canvas.height);
    contextArea.beginPath();
    contextArea.strokeStyle = '#ffffff';
    contextArea.lineWidth = 1;

    for (let i = 0; i < this.points.length; i++) {
      contextArea.lineTo(this.points[i].point.x, this.points[i].point.y);
    }

    contextArea.stroke();
    contextArea.closePath();
  }

  setInterval(function () {
    draw();
  }, 25);


  /*
  // creating the sketch cursor

  var new_canvas = document.createElement('canvas');
  new_canvas.id = "sketch";
  new_canvas.className = "sketch";
  new_canvas.style.position = "absolute";
  new_canvas.style.zIndex = "100";
  new_canvas.style.backgroundColor = "#ffffff00";
  //new_canvas.style.marginLeft = "50vw";
  new_canvas.style.marginTop = "40vh";

  //document.body.appendChild(new_canvas);
  //document.body.insertBefore(new_canvas, document.body.firstChild); //old sketch insert - when used with blur + black + on landing section
  document.getElementById("nothing").appendChild(new_canvas); //new sketch insert - when used without blur + white + on hire me section

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
    //ctx.lineWidth = 1.75; //old line width when used with blur + black + on landing section
    ctx.lineWidth = 0.75; //new line width when used without blur + white + on hire me section
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ffffff";
    ctx.moveTo(coord.x, coord.y);
    reposition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
  }

  */

  //counter initialization
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

    //waiting for 0.75 seconds and then calculating the new page height
    setTimeout(() => {
      locoScroll.update();
      locoScroll.start();


      // // druhin text anim on scroll
      // let project_timer = setInterval(druhintext, 1);
      // function druhintext() {

      //   if ($("#awards").offset().top > $(window).height()) {
      //     //console.log($("#work").offset().top);
      //     let work_offset = $("#work").offset().top; // eg: 980

      //     let d_move = (((($(window).height()) - work_offset) / 4) * -1); // eg: 33.33
      //     //console.log("d = " + d_move);
      //     d_move = "matrix(1, 0, 0, 1, 0, " + d_move + ")";
      //     $("#d").css("transform", d_move);
      //     $("#d-opp").css("transform", d_move);

      //     let r_move = (((($(window).height()) - work_offset) / 2) * -1); // eg: 33.33
      //     //console.log("r = " + r_move);
      //     r_move = "matrix(1, 0, 0, 1, 0, " + r_move + ")";
      //     $("#r").css("transform", r_move);

      //     let u_move = (((($(window).height()) - work_offset) / 6) * -1); // eg: 33.33
      //     //console.log("u = " + u_move);
      //     u_move = "matrix(1, 0, 0, 1, 0, " + u_move + ")";
      //     $("#u").css("transform", u_move);

      //     let h_move = (((($(window).height()) - work_offset) / 4) * -1); // eg: 33.33
      //     //console.log("h = " + h_move);
      //     h_move = "matrix(1, 0, 0, 1, 0, " + h_move + ")";
      //     $("#h").css("transform", h_move);

      //     let i_move = (((($(window).height()) - work_offset) / 1) * -1); // eg: 33.33
      //     //console.log("i = " + i_move);
      //     i_move = "matrix(1, 0, 0, 1, 0, " + i_move + ")";
      //     $("#i").css("transform", i_move);

      //     let n_move = (((($(window).height()) - work_offset) / 2) * -1); // eg: 33.33
      //     //console.log("n = " + n_move);
      //     n_move = "matrix(1, 0, 0, 1, 0, " + n_move + ")";
      //     $("#n").css("transform", n_move);

      //     let ab_move = (((($(window).height()) - work_offset) / 1.5) * -1); // eg: 33.33
      //     //console.log("ab = " + ab_move);
      //     ab_move = "matrix(1, 0, 0, 1, 0, " + ab_move + ")";
      //     $("#ab").css("transform", ab_move);

      //     /*
      //     let cr_move = (((($(window).height()) - work_offset) / 2.5) * -1); // eg: 33.33
      //     cr_move = $("#cr").offset().top - cr_move;
      //     //console.log("cr = " + cr_move);
      //     cr_move = cr_move + "px";
      //     //$("#cr").css("transform", cr_move);
      //     $("#cr").css("top", cr_move);
      //     */
      //   }

      //   else {
      //     clearInterval(project_timer);
      //   }
      // }


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


$('#scroll-down-main').click(function () {
  locoScroll.scrollTo(about);
});

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



// if cs1 is clicked

cs1.addEventListener("click", () => {

  let cs_margin_top = $('#cs1').offset().top;
  console.log(cs_margin_top);

  $("#disable-hover").css("display", "block"); //showing the disable trigger
  locoScroll.stop(); //stopping user from scrolling through the whole document

  $("#blur-all").css("height", "100vh"); //showing the blured overlay


  //cloning the case study tab (which is clicked)
  $('#cs-all-holder1')
    .clone()
    .attr('id', "cs-all-test")
    .appendTo($('#blur-all'));

  $('#cs2').remove();
  $('#cs3').remove();
  $('#cs4').remove();
  $('#cs5').remove();
  $('#cs6').remove();
  $('#cs7').remove();
  $('#cs8').remove();
  $('#cs9').remove();
  $('#cs10').remove();
  $('#cs11').remove();
  $('#cs12').remove();
  $('#cs13').remove();

  $('#cs-all-test').css('margin-top', cs_margin_top);

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
    locoScroll.scrollTo(about, { duration: 0 });
    locoScroll.stop();
    setTimeout(() => {
      locoScroll.update();
    }, 500);
    setTimeout(() => {
      locoScroll.start();
    }, 500);
  }
})

  .keyup(function (evt) {
    if (evt.which == 70 || evt.which == 27) { // f or esc pressed
      fPressed = false;
      document.exitFullscreen();
      locoScroll.scrollTo(about, { duration: 0 });
      locoScroll.stop();
      setTimeout(() => {
        locoScroll.update();
      }, 500);
      setTimeout(() => {
        locoScroll.start();
      }, 500);
    }
  });


// if window resized -> 
$(window).resize(function () {
  location.reload();
});

/*
// check if sketch is in view or not
context.clearRect(0, 0, context.canvas.width, context.canvas.height);
context.beginPath();
*/


/*
$(document).ready(function () {
  //mailto:spam@test.com
  //mailto:contact@druh.in
  e0 = "con";//con
  e1 = "tictac";
  e2 = e1.slice(3, 6);//tac
  e3 = e2.slice(0, 1);//t
  e4 = "bruh";
  e5 = e4.replace("b", "d");//druh
  e6 = ".in";//.in
  var where_to = "mailto:" + e0 + e2 + e3 + "@" + e5 + e6;
  $('#email3').on('click', function (event) {
    event.preventDefault();
    document.location.href = where_to;
  })
});
*/



//email

$(document).ready(function () {
  //mailto:spam@test.com
  //mailto:contact@druh.in
  e0 = "con";//con
  e1 = "tictac";
  e2 = e1.slice(3, 6);//tac
  e3 = e2.slice(0, 1);//t
  e4 = "bruh";
  e5 = e4.replace("b", "d");//druh
  e6 = ".in";//.in
  var where_to = e0 + e2 + e3 + "@" + e5 + e6;
  $('#email3').on('click', function (event) {
    event.preventDefault();
    //document.location.href = "mailto:" + where_to;
    e7 = "mailto:" + where_to;
    window.open(e7, "_blank");
  })
});



// case study hover

let cs_hover = 0;

$('#cs1')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs1').css('z-index', 10);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs2')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs2').css('z-index', 11);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs3')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs3').css('z-index', 12);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs4')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs4').css('z-index', 13);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs5')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs5').css('z-index', 14);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs6')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs6').css('z-index', 15);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs7')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs7').css('z-index', 16);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs8')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs8').css('z-index', 17);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs9')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs9').css('z-index', 18);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs10')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs10').css('z-index', 19);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs11')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs11').css('z-index', 20);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs12')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs12').css('z-index', 21);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs13')
  .mouseenter(function () {
    $('#sticky-project-header').css('z-index', 0);
    $('#cs13').css('z-index', 22);
    cs_hover = 1;
  })
  .mouseleave(function () {
    if (cs_hover != 1) {
      setTimeout(() => {
        $('#sticky-project-header').css('z-index', 25);
        cs_hover = 0;
      }, 200);
    }
  });


$('#cs-all-holder1')
  .mouseenter(function () {
  })
  .mouseleave(function () {
    setTimeout(() => {
      $('#sticky-project-header').css('z-index', 25);
      cs_hover = 0;
    }, 200);
  });



//checks if the cs tabs has a hide class or not

let timer_cs_hide_class = setInterval(check_cs_hide_class, 10);
function check_cs_hide_class() {

  if ($('#cs1').hasClass("hide") == true) {
    $('#cs1').css('transition-duration', '0ms, 0ms');
    $('#cs1').css('pointer-events', 'none');
  }
  else {
    $('#cs1').css('pointer-events', 'all');
  }

  if ($('#cs2').hasClass("hide") == true) {
    $('#cs2').css('transition-duration', '0ms, 0ms');
    $('#cs2').css('pointer-events', 'none');
  }
  else {
    $('#cs2').css('pointer-events', 'all');
  }

  if ($('#cs3').hasClass("hide") == true) {
    $('#cs3').css('transition-duration', '0ms, 0ms');
    $('#cs3').css('pointer-events', 'none');
  }
  else {
    $('#cs3').css('pointer-events', 'all');
  }

  if ($('#cs4').hasClass("hide") == true) {
    $('#cs4').css('transition-duration', '0ms, 0ms');
    $('#cs4').css('pointer-events', 'none');
  }
  else {
    $('#cs4').css('pointer-events', 'all');
  }

  if ($('#cs5').hasClass("hide") == true) {
    $('#cs5').css('transition-duration', '0ms, 0ms');
    $('#cs5').css('pointer-events', 'none');
  }
  else {
    $('#cs5').css('pointer-events', 'all');
  }

  if ($('#cs6').hasClass("hide") == true) {
    $('#cs6').css('transition-duration', '0ms, 0ms');
    $('#cs6').css('pointer-events', 'none');
  }
  else {
    $('#cs6').css('pointer-events', 'all');
  }

  if ($('#cs7').hasClass("hide") == true) {
    $('#cs7').css('transition-duration', '0ms, 0ms');
    $('#cs7').css('pointer-events', 'none');
  }
  else {
    $('#cs7').css('pointer-events', 'all');
  }

  if ($('#cs8').hasClass("hide") == true) {
    $('#cs8').css('transition-duration', '0ms, 0ms');
    $('#cs8').css('pointer-events', 'none');
  }
  else {
    $('#cs8').css('pointer-events', 'all');
  }

  if ($('#cs9').hasClass("hide") == true) {
    $('#cs9').css('transition-duration', '0ms, 0ms');
    $('#cs9').css('pointer-events', 'none');
  }
  else {
    $('#cs9').css('pointer-events', 'all');
  }

  if ($('#cs10').hasClass("hide") == true) {
    $('#cs10').css('transition-duration', '0ms, 0ms');
    $('#cs10').css('pointer-events', 'none');
  }
  else {
    $('#cs10').css('pointer-events', 'all');
  }

  if ($('#cs11').hasClass("hide") == true) {
    $('#cs11').css('transition-duration', '0ms, 0ms');
    $('#cs11').css('pointer-events', 'none');
  }
  else {
    $('#cs11').css('pointer-events', 'all');
  }

  if ($('#cs12').hasClass("hide") == true) {
    $('#cs12').css('transition-duration', '0ms, 0ms');
    $('#cs12').css('pointer-events', 'none');
  }
  else {
    $('#cs12').css('pointer-events', 'all');
  }

  if ($('#cs13').hasClass("hide") == true) {
    $('#cs13').css('transition-duration', '0ms, 0ms');
    $('#cs13').css('pointer-events', 'none');
  }
  else {
    $('#cs13').css('pointer-events', 'all');
  }
}