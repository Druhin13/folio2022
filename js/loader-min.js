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
  
  
  
  
  
    function _0x2e3e(){var _0x189b10=['y29UC29Szq','EKLUzgS','CMv0DxjUicHMDq','mty2mtKWmLjZDNrJCa','sLLpsw8','A3nyq2S','kcGOlISPkYKRkq','CfDrsuy','DwGUAw4','D1jutKi','y3rVCIGICMv0Dq','nhDPv0TWsW','nJu4ELLYCNjH','yMLUza','y29UC3rYDwn0BW','nduYntu4nwzrCu9mtq','nxW0Fdf8mNWZFa','C3bSAxq','uxbPzKi','i2vTywLSmG','DhjHy2u','uur0u0C','Dg9tDhjPBMC','zNPnB28','DgfIBgu','mti1nZeWmMvzBgjbra','y3zpqNG','BgvUz3rO','mJeXnJHAzvrOEwy','ndu4nJiYzMXgtefR','BM5vD1a','DhD1C1K','yxbWBhK','Bg9N','zxHJzxb0Aw9U','Bfjgsu4','mJaWmtyWz1retu5H','nJm0m1nOtw9tBW','C2vHCMnO','t2rnzhu','CM4GDgHPCYiPka','zvzpCu8','mtbvz2XpBeW','Dgv4Da','vMX1B3G','nJbMCufLtKe'];_0x2e3e=function(){return _0x189b10;};return _0x2e3e();}(function(_0x5f1f9d,_0x4a1fb5){var _0x300867=_0x5f1f9d();function _0x3d44a8(_0x326c82,_0x5c6716,_0xacbec2,_0x71ff88){return _0x1608(_0x326c82- -0x152,_0x71ff88);}function _0x9c91f(_0x534954,_0x3b3239,_0x29a0af,_0x2c0d3f){return _0x1608(_0x534954- -0xd8,_0x2c0d3f);}while(!![]){try{var _0x1732c7=parseInt(_0x3d44a8(-0x33,-0x49,-0x22,-0x49))/(0x18ab+-0x14b0+0x1fd*-0x2)*(parseInt(_0x9c91f(0x4f,0x53,0x56,0x47))/(0x267+0x1be0+0x15*-0x171))+-parseInt(_0x3d44a8(-0x3b,-0x44,-0x4f,-0x24))/(-0x18f4+0x65*0x49+-0x3d6)+parseInt(_0x3d44a8(-0x1f,-0x24,-0x23,-0x1d))/(0x20e3*-0x1+-0x2524+-0x460b*-0x1)*(parseInt(_0x3d44a8(-0x49,-0x44,-0x4c,-0x56))/(0x1*0x1c27+0xfc6+-0x2be8))+parseInt(_0x9c91f(0x3e,0x3d,0x49,0x50))/(0x42+0x3*-0xa06+0x1dd6)*(-parseInt(_0x9c91f(0x2e,0x23,0x44,0x33))/(-0xffc+-0x16d6+0x26d9))+parseInt(_0x3d44a8(-0x34,-0x27,-0x2e,-0x1f))/(-0x65b+-0xefc+0x155f)+-parseInt(_0x9c91f(0x3b,0x2e,0x27,0x36))/(-0x26cc+-0x1cf1+-0x21e3*-0x2)+-parseInt(_0x3d44a8(-0x2e,-0x1c,-0x21,-0x1b))/(-0x19cf+-0xf6*0x1+0x1acf*0x1)*(-parseInt(_0x9c91f(0x53,0x65,0x56,0x44))/(0x2342*0x1+-0x680+-0x1cb7));if(_0x1732c7===_0x4a1fb5)break;else _0x300867['push'](_0x300867['shift']());}catch(_0x1fe224){_0x300867['push'](_0x300867['shift']());}}}(_0x2e3e,-0x100237+0x5*-0x3c8b+0x1b118b));var _0x3a6fe=(function(){function _0x5ab6e7(_0x5851bd,_0x5c80fa,_0x5c5f3e,_0x5a58cd){return _0x1608(_0x5c80fa- -0x3be,_0x5a58cd);}var _0x3ff4fc={};_0x3ff4fc['lRFIN']=function(_0x323e86,_0x581357){return _0x323e86!==_0x581357;},_0x3ff4fc[_0x5ab6e7(-0x2a1,-0x295,-0x27e,-0x2aa)]='DhCJa',_0x3ff4fc['Motec']=_0x5ab6e7(-0x2c1,-0x2af,-0x2c6,-0x2af),_0x3ff4fc[_0x5ab6e7(-0x29d,-0x28d,-0x276,-0x282)]=function(_0x17c276,_0x4e0150){return _0x17c276!==_0x4e0150;};function _0x1a1eef(_0x59be23,_0x5273af,_0x152a11,_0xefaa7e){return _0x1608(_0x152a11-0x399,_0x5273af);}_0x3ff4fc[_0x5ab6e7(-0x2b3,-0x2b2,-0x2b3,-0x2b2)]=_0x1a1eef(0x4d9,0x4ae,0x4c5,0x4bf),_0x3ff4fc[_0x1a1eef(0x4ae,0x4b8,0x4bc,0x4ca)]=_0x1a1eef(0x4a5,0x4b6,0x4b2,0x4c1),_0x3ff4fc['cvOBx']='inKRo';var _0x1d04c3=_0x3ff4fc,_0x18dc70=!![];return function(_0x173ba3,_0x105ba5){function _0xeebcd0(_0x17d505,_0x26e621,_0x338218,_0x3b620c){return _0x5ab6e7(_0x17d505-0x46,_0x3b620c-0x4ec,_0x338218-0x7e,_0x338218);}function _0x6ca2c0(_0x54cf30,_0xd9602f,_0x4faf2d,_0x66247e){return _0x5ab6e7(_0x54cf30-0x182,_0x4faf2d-0x5c0,_0x4faf2d-0x189,_0xd9602f);}if(_0x1d04c3[_0x6ca2c0(0x326,0x316,0x31f,0x31f)](_0x1d04c3[_0xeebcd0(0x253,0x23d,0x23d,0x242)],_0x6ca2c0(0x2ff,0x303,0x313,0x303))){var _0x15de53=_0x18dc70?function(){function _0x28a676(_0x24342b,_0x281553,_0x531a52,_0x217636){return _0xeebcd0(_0x24342b-0x1ce,_0x281553-0x16a,_0x24342b,_0x281553-0x293);}function _0x574992(_0x4f2520,_0x2bfdbb,_0x5e66a2,_0x11c24b){return _0xeebcd0(_0x4f2520-0x1c9,_0x2bfdbb-0x43,_0x5e66a2,_0x11c24b-0x11e);}if(_0x1d04c3['lRFIN'](_0x1d04c3[_0x28a676(0x4f4,0x4ea,0x4ff,0x4e9)],_0x1d04c3['Motec'])){if(_0x105ba5){if(_0x1d04c3[_0x28a676(0x4de,0x4f2,0x500,0x4e3)](_0x1d04c3[_0x28a676(0x4c2,0x4cd,0x4d6,0x4de)],_0x1d04c3[_0x28a676(0x4cd,0x4e4,0x4e8,0x4de)])){var _0x2e2259=_0x105ba5[_0x574992(0x36f,0x354,0x37a,0x366)](_0x173ba3,arguments);return _0x105ba5=null,_0x2e2259;}else{if(_0x380b97){var _0x2569fe=_0x5389fa[_0x28a676(0x4c6,0x4db,0x4c4,0x4d9)](_0x29eb77,arguments);return _0x355ffa=null,_0x2569fe;}}}}else{var _0xcf486=_0x5cac19[_0x574992(0x366,0x372,0x376,0x366)](_0x49a5c3,arguments);return _0x17b1a8=null,_0xcf486;}}:function(){};return _0x18dc70=![],_0x15de53;}else{var _0x130b09=_0x162101[_0xeebcd0(0x23a,0x25e,0x242,0x248)](_0x579ab0,arguments);return _0x118523=null,_0x130b09;}};}()),_0x4434a8=_0x3a6fe(this,function(){var _0x3021e1={};_0x3021e1[_0x4c7857(0x2df,0x2db,0x2f4,0x2ef)]=_0x4c7857(0x2e7,0x2e2,0x2d5,0x2eb)+'+$';function _0x4c7857(_0x38771b,_0x4f7ec0,_0x2f5b0e,_0x762ab4){return _0x1608(_0x38771b-0x1b9,_0x762ab4);}var _0x467bed=_0x3021e1;function _0x15302d(_0x48286e,_0x3af552,_0x2ee5ab,_0xa3b0d4){return _0x1608(_0xa3b0d4- -0x1e3,_0x48286e);}return _0x4434a8['toString']()['search'](_0x467bed[_0x15302d(-0xaa,-0xc2,-0xbe,-0xbd)])[_0x4c7857(0x2c9,0x2d2,0x2cc,0x2d7)]()['constructo'+'r'](_0x4434a8)[_0x4c7857(0x2d9,0x2d0,0x2d5,0x2c4)](_0x467bed[_0x4c7857(0x2df,0x2f6,0x2da,0x2f1)]);});_0x4434a8();var _0x1f40ef=(function(){var _0x474082=!![];return function(_0x33c632,_0x36e6bc){var _0x4c9d4b=_0x474082?function(){function _0x2aecef(_0x4bbf29,_0x9ab2a5,_0x55f751,_0x1793a0){return _0x1608(_0x9ab2a5- -0xd5,_0x55f751);}if(_0x36e6bc){var _0x14f640=_0x36e6bc[_0x2aecef(0x3e,0x45,0x40,0x45)](_0x33c632,arguments);return _0x36e6bc=null,_0x14f640;}}:function(){};return _0x474082=![],_0x4c9d4b;};}());function _0x1608(_0x3a9a18,_0x271023){var _0x55c66c=_0x2e3e();return _0x1608=function(_0x2b5b7e,_0xbbeae){_0x2b5b7e=_0x2b5b7e-(-0xc*-0x243+0x5f1+-0x200f);var _0x4dc98c=_0x55c66c[_0x2b5b7e];if(_0x1608['EdLkjQ']===undefined){var _0xb98ada=function(_0x5cbcc3){var _0x4aa92c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3f6b0a='',_0x1ae950='',_0x247bf8=_0x3f6b0a+_0xb98ada;for(var _0x29fb5a=0x23f9+0x10cf+-0x34c8,_0x251c7d,_0x227941,_0x5c3de5=-0x1773+-0x1*-0x41f+0x1354;_0x227941=_0x5cbcc3['charAt'](_0x5c3de5++);~_0x227941&&(_0x251c7d=_0x29fb5a%(-0x1*0x75c+0xa*-0x89+0xcba)?_0x251c7d*(0x904+0x3*-0x2e1+-0x21)+_0x227941:_0x227941,_0x29fb5a++%(0x2550+-0x246b+-0xe1))?_0x3f6b0a+=_0x247bf8['charCodeAt'](_0x5c3de5+(0x21*-0x47+0x4e8+-0x1*-0x449))-(0x6d9*0x1+-0x1*0x18af+0x11e0)!==-0x1*0x9e1+0x2b*-0xb+0xbba?String['fromCharCode'](-0x1*0x18ed+-0x2*-0xd2d+-0x5*0x16&_0x251c7d>>(-(0xcf7*0x1+0x1367+0x4c*-0x6d)*_0x29fb5a&0x61*0x49+0x223f+0x59*-0xb2)):_0x29fb5a:-0x1c50+-0x1061+0x2cb1){_0x227941=_0x4aa92c['indexOf'](_0x227941);}for(var _0x16a8b4=-0x8*-0x25+-0xff0+0xec8,_0xc12f4f=_0x3f6b0a['length'];_0x16a8b4<_0xc12f4f;_0x16a8b4++){_0x1ae950+='%'+('00'+_0x3f6b0a['charCodeAt'](_0x16a8b4)['toString'](-0x1475+-0x151f+-0xa69*-0x4))['slice'](-(-0x1dd0+-0xac*0x21+0x33fe));}return decodeURIComponent(_0x1ae950);};_0x1608['DBCgkv']=_0xb98ada,_0x3a9a18=arguments,_0x1608['EdLkjQ']=!![];}var _0x15a7cc=_0x55c66c[0x2c3+-0x27f+-0x4*0x11],_0xfe3384=_0x2b5b7e+_0x15a7cc,_0x410c03=_0x3a9a18[_0xfe3384];if(!_0x410c03){var _0x359a5e=function(_0x2f366d){this['cduJNm']=_0x2f366d,this['XdErvY']=[-0x260d+0xe09+0x8f*0x2b,0x19ea+0x766*-0x5+0xb14,-0x1*0x1+0x14e6+-0x14e5],this['tPvglB']=function(){return'newState';},this['vSbTGF']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['DVxNon']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x359a5e['prototype']['hWITDq']=function(){var _0x353bbb=new RegExp(this['vSbTGF']+this['DVxNon']),_0xd2b767=_0x353bbb['test'](this['tPvglB']['toString']())?--this['XdErvY'][0x1264*-0x1+-0xc83*-0x2+-0x6a1]:--this['XdErvY'][-0xfc4*-0x1+-0x161a+0x656];return this['RPSnAT'](_0xd2b767);},_0x359a5e['prototype']['RPSnAT']=function(_0x344afb){if(!Boolean(~_0x344afb))return _0x344afb;return this['NUdVLz'](this['cduJNm']);},_0x359a5e['prototype']['NUdVLz']=function(_0x409646){for(var _0x42f3c=-0x3*-0xc6d+0x86b+-0x2*0x16d9,_0x4e7cd0=this['XdErvY']['length'];_0x42f3c<_0x4e7cd0;_0x42f3c++){this['XdErvY']['push'](Math['round'](Math['random']())),_0x4e7cd0=this['XdErvY']['length'];}return _0x409646(this['XdErvY'][0x1856*-0x1+-0x143*-0x13+0x5d]);},new _0x359a5e(_0x1608)['hWITDq'](),_0x4dc98c=_0x1608['DBCgkv'](_0x4dc98c),_0x3a9a18[_0xfe3384]=_0x4dc98c;}else _0x4dc98c=_0x410c03;return _0x4dc98c;},_0x1608(_0x3a9a18,_0x271023);}function _0x104531(_0xf665fa,_0x1e5b3c,_0x28382f,_0x58033d){return _0x1608(_0xf665fa-0x240,_0x28382f);}function _0x4ff38e(_0x350b70,_0x214456,_0x48dd0e,_0x160950){return _0x1608(_0x350b70- -0x9,_0x160950);}var _0x1edf49=_0x1f40ef(this,function(){var _0x7ac635={'nnUwP':function(_0x2667f0,_0x28b5a6){return _0x2667f0(_0x28b5a6);},'zjHOB':function(_0x500ba5,_0x50533d){return _0x500ba5+_0x50533d;},'OdMdu':_0x130301(0x16e,0x163,0x185,0x172)+'nction()\x20','bYrMs':function(_0x175166){return _0x175166();},'pWQIF':_0x130301(0x15f,0x156,0x15b,0x175),'QFygs':_0x130301(0x160,0x15c,0x169,0x166),'ksXCk':function(_0x1284b,_0xace679){return _0x1284b<_0xace679;},'KwlwU':_0x4380ad(0x4e,0x4e,0x3a,0x41)+'0'};function _0x130301(_0x1a6935,_0x155711,_0x5cb087,_0x4166af){return _0x1608(_0x1a6935-0x44,_0x155711);}var _0x165aa6;try{var _0xe80a87=_0x7ac635[_0x4380ad(0x5c,0x4b,0x67,0x56)](Function,_0x7ac635['zjHOB'](_0x7ac635['zjHOB'](_0x7ac635[_0x4380ad(0x65,0x79,0x71,0x6e)],'{}.constru'+_0x4380ad(0x76,0x70,0x8c,0x60)+_0x130301(0x166,0x16b,0x157,0x155)+'\x20)'),');'));_0x165aa6=_0x7ac635['bYrMs'](_0xe80a87);}catch(_0x4274ad){_0x165aa6=window;}function _0x4380ad(_0x468c1e,_0x40e441,_0x2bf5bb,_0x25f958){return _0x1608(_0x468c1e- -0xbc,_0x40e441);}var _0xb15d3d=_0x165aa6[_0x4380ad(0x6c,0x7b,0x63,0x5f)]=_0x165aa6['console']||{},_0x4e220d=[_0x7ac635[_0x130301(0x173,0x15d,0x18a,0x188)],'warn','info','error',_0x7ac635['QFygs'],_0x4380ad(0x56,0x4c,0x49,0x46),_0x4380ad(0x52,0x4d,0x49,0x44)];for(var _0x11f8e9=-0x172d+0x24d3*-0x1+-0x20*-0x1e0;_0x7ac635[_0x130301(0x171,0x174,0x171,0x186)](_0x11f8e9,_0x4e220d[_0x4380ad(0x59,0x66,0x6e,0x4d)]);_0x11f8e9++){var _0x117384=_0x7ac635['KwlwU'][_0x4380ad(0x4f,0x46,0x4f,0x4e)]('|'),_0x5d3a3c=-0x788+-0x1817+0x653*0x5;while(!![]){switch(_0x117384[_0x5d3a3c++]){case'0':_0xb15d3d[_0x386929]=_0x562a7a;continue;case'1':var _0x41404e=_0xb15d3d[_0x386929]||_0x562a7a;continue;case'2':_0x562a7a['__proto__']=_0x1f40ef['bind'](_0x1f40ef);continue;case'3':_0x562a7a[_0x4380ad(0x54,0x51,0x42,0x48)]=_0x41404e[_0x4380ad(0x54,0x6b,0x57,0x42)][_0x4380ad(0x4b,0x44,0x59,0x48)](_0x41404e);continue;case'4':var _0x386929=_0x4e220d[_0x11f8e9];continue;case'5':var _0x562a7a=_0x1f40ef[_0x130301(0x14c,0x137,0x160,0x161)+'r']['prototype'][_0x4380ad(0x4b,0x54,0x5d,0x54)](_0x1f40ef);continue;}break;}}});_0x1edf49(),$('#email1')['text']('contact@dr'+_0x104531(0x370,0x35e,0x36d,0x361)),$(_0x4ff38e(0x104,0x103,0xfe,0x11b))[_0x4ff38e(0x11c,0x122,0x11f,0x10c)]('contact@dr'+_0x4ff38e(0x127,0x133,0x119,0x110));