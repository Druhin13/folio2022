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
    multiplier: 1,
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
  
    var new_canvas = document.createElement('canvas');
    new_canvas.id = "sketch";
    new_canvas.className = "sketch";
    new_canvas.style.position = "absolute";
    new_canvas.style.zIndex = "100";
    new_canvas.style.backgroundColor = "#ffffff00";
    //new_canvas.style.pointerEvents = "none";
    new_canvas.style.marginLeft = "52vw";
  
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
      ctx.lineWidth = 1.15;
      ctx.lineCap = "round";
      ctx.strokeStyle = "#A4A4A4";
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
  
    if ($("#count")[0].innerHTML == '100') {
      //removing the badge
      $(".w-webflow-badge").remove();
      //turning off the continuous function run
      clearInterval(timer);
      clearInterval(test_timer);
      //when loading is finished, setting cursor back to default...
      document.body.style.cursor = 'default';
      //setting the canvas pointer events to none, so that user cannot interact with the canvas once the loading animation is done
      $('#canvas-div').css('pointer-events', 'none');
  
      //animate the trigger
      $(".trigger1").click();
  
  
      //waiting for 1 second, and then hiding the sketch canvas
      setTimeout(() => {
        //hiding the sketch canvas
        document.getElementById("sketch").style.display = "none";
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