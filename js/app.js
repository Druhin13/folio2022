//hide award tags
//comment them out if awarded
//document.querySelector(".aww").style.display = "none";
document.querySelector(".cssda").style.display = "none";


//codesandbox test.js

// //add some js before body tag if the user is on desktop
// if ($(window).width() > 1024) {
// 	new cursoreffects.emojiCursor({
// 		emoji: ["🔥"]
// 	});
// }

//add a piece of code only if the user is on desktop and the user is hovering over the section id something, and remove that piece of code if the user hovers out of the section ; set the piece of code inside a variable so that it can be removed later
if ($(window).width() > 1024) {
	let something =
		'<script>new cursoreffects.emojiCursor({emoji:["\uD83D\uDD25"]});</script>';
	$("#something").hover(
		function () {
			$("body").append(something);
		},
		function () {
			$("script").last().remove();
			//remove the last canvas
			$("canvas").last().remove();
		}
	);
}
/**
 *
 *
 *
 */

//go fullscreeen when F or f if pressed or go off fullscreen when F is pressed again while in fullscreen
document.addEventListener("keydown", function (e) {
	if (e.keyCode == 70) {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	}
});

/**
 *
 *
 *
 */

const CS2locoScroll1 = new LocomotiveScroll({
	el: document.querySelector(".loco-test1"),
	smooth: true,
	multiplier: 0.6
});

//update CS2locoScroll1
CS2locoScroll1.start();

//run c_scrollbar function every 0.5 seconds and set it to a variable
var c_scrollbar_interval = setInterval(c_scrollbar, 500);

//set display none to .c-scrollbar repeatedly
function c_scrollbar() {
	//check the number of elements with class c-scrollbar and give them a id
	$(".c-scrollbar").each(function (index) {
		$(this).attr("id", "c-scrollbar" + index);
		$(this)[0].style.mixBlendMode = "difference";
		//console.log("set to difference");
	});

	//set a to the height of the child element of the first element with class c-scrollbar
	var a = $("#c-scrollbar0").children().height();
	//console.log("a = " + a);
	//set b to the height of the child element of the second element with class c-scrollbar
	var b = $("#c-scrollbar1").children().height();
	//console.log("b = " + b);

	//check which is smaller, a or b and hide the corresponding element with class c-scrollbar
	if (a < b) {
		$("#c-scrollbar0").hide();
		//console.log("a is smaller");
		//stop the interval
		if (a == 0) {
			clearInterval(c_scrollbar_interval);
		}
	} else {
		$("#c-scrollbar1").hide();
		//console.log("b is smaller");
		//stop the interval
		if (b == 0) {
			clearInterval(c_scrollbar_interval);
		}
	}
}

/**
 *
 *
 *
 *
 *
 */

//check if local storage preview is set or not
if (localStorage.getItem("preview")) {
	//if preview is set to off, then set the elements with class cs-preview to hidden
	if (localStorage.getItem("preview") == "off") {
		$(".cs-preview").css("display", "none");
		//set text of preview-hide to show preview
		$("#preview-hide-text").text("Show Previews");
	} else {
		//set it to flex
		$(".cs-preview").css("display", "flex");
		//set text of preview-hide to hide preview
		$("#preview-hide-text").text("Hide Previews");
	}
} else {
	//set local storage with the key "preview" and value "on"
	localStorage.setItem("preview", "on");
}

//when the user clicks on #preview-hide
$("#preview-hide").click(function () {
	//check if local storage preview value
	if (localStorage.getItem("preview") == "on") {
		//if it is on, then set it to off
		localStorage.setItem("preview", "off");
		//set the elements with class cs-preview to hidden
		$(".cs-preview").css("display", "none");
		//set text of preview-hide to show preview
		$("#preview-hide-text").text("Show Previews");
	} else {
		//set it to on
		localStorage.setItem("preview", "on");
		//set it to flex
		$(".cs-preview").css("display", "flex");
		//set text of preview-hide to hide preview
		$("#preview-hide-text").text("Hide Previews");
	}
});

/**
 *
 *
 *
 *
 *
 */
//if ids cs1 or cs2 or cs3 or cs4 or cs5 or cs6 or cs7 is clicked
$("#cs1, #cs2, #cs3, #cs4, #cs5, #cs6, #cs7").click(function () {
	//store the text of preview-hide-text in a global variable and change the text of preview-hide-text to blank
	$("#preview-hide-text").text("");
	$(".c-scrollbar_thumb").css("background-color", "transparent");
});

//if cs1 is clicked
$("#cs1, #cs1mobile").click(function () {
	$(".skillsunion-cs").css("display", "block");
	$(".vtf-cs").css("display", "none");
	$(".mausumi-cs").css("display", "none");
	$(".nowiverse-cs").css("display", "none");
	$(".vocal-cs").css("display", "none");
	$(".greenfox-cs").css("display", "none");
	$(".allbodies-cs").css("display", "none");
	//add in class to the loco-test1
	$(".loco-test1").addClass("in");
	$(".trigger3").click();
	setTimeout(() => {
		CS2locoScroll1.update();
	}, 500);
});

$("#cs2, #cs2mobile").click(function () {
	$(".skillsunion-cs").css("display", "none");
	$(".vtf-cs").css("display", "block");
	$(".mausumi-cs").css("display", "none");
	$(".nowiverse-cs").css("display", "none");
	$(".vocal-cs").css("display", "none");
	$(".greenfox-cs").css("display", "none");
	$(".allbodies-cs").css("display", "none");
	//add in class to the loco-test1
	$(".loco-test1").addClass("in");
	$(".trigger3").click();
	setTimeout(() => {
		CS2locoScroll1.update();
	}, 500);
});

$("#cs3, #cs3mobile").click(function () {
	$(".skillsunion-cs").css("display", "none");
	$(".vtf-cs").css("display", "none");
	$(".mausumi-cs").css("display", "block");
	$(".nowiverse-cs").css("display", "none");
	$(".vocal-cs").css("display", "none");
	$(".greenfox-cs").css("display", "none");
	$(".allbodies-cs").css("display", "none");
	//add in class to the loco-test1
	$(".loco-test1").addClass("in");
	$(".trigger3").click();
	setTimeout(() => {
		CS2locoScroll1.update();
	}, 500);
});

$("#cs4, #cs4mobile").click(function () {
	$(".skillsunion-cs").css("display", "none");
	$(".vtf-cs").css("display", "none");
	$(".mausumi-cs").css("display", "none");
	$(".nowiverse-cs").css("display", "block");
	$(".vocal-cs").css("display", "none");
	$(".greenfox-cs").css("display", "none");
	$(".allbodies-cs").css("display", "none");
	//add in class to the loco-test1
	$(".loco-test1").addClass("in");
	$(".trigger3").click();
	setTimeout(() => {
		CS2locoScroll1.update();
	}, 500);
});

$("#cs5, #cs5mobile").click(function () {
	$(".skillsunion-cs").css("display", "none");
	$(".vtf-cs").css("display", "none");
	$(".mausumi-cs").css("display", "none");
	$(".nowiverse-cs").css("display", "none");
	$(".vocal-cs").css("display", "block");
	$(".greenfox-cs").css("display", "none");
	$(".allbodies-cs").css("display", "none");
	//add in class to the loco-test1
	$(".loco-test1").addClass("in");
	$(".trigger3").click();
	setTimeout(() => {
		CS2locoScroll1.update();
	}, 500);
});

$("#cs6, #cs6mobile").click(function () {
	$(".skillsunion-cs").css("display", "none");
	$(".vtf-cs").css("display", "none");
	$(".mausumi-cs").css("display", "none");
	$(".nowiverse-cs").css("display", "none");
	$(".vocal-cs").css("display", "none");
	$(".greenfox-cs").css("display", "block");
	$(".allbodies-cs").css("display", "none");
	//add in class to the loco-test1
	$(".loco-test1").addClass("in");
	$(".trigger3").click();
	setTimeout(() => {
		CS2locoScroll1.update();
	}, 500);
});

$("#cs7, #cs7mobile").click(function () {
	$(".skillsunion-cs").css("display", "none");
	$(".vtf-cs").css("display", "none");
	$(".mausumi-cs").css("display", "none");
	$(".nowiverse-cs").css("display", "none");
	$(".vocal-cs").css("display", "none");
	$(".greenfox-cs").css("display", "none");
	$(".allbodies-cs").css("display", "block");
	//add in class to the loco-test1
	$(".loco-test1").addClass("in");
	$(".trigger3").click();
	setTimeout(() => {
		CS2locoScroll1.update();
	}, 500);
});

/*
/
/
/
/
*/

$("#disable-hover").click(function () {
	$(".c-scrollbar_thumb").css("background-color", "#d2d2d2");
	$("#disable-hover").css("display", "none");
	$("#cs-all-test").remove();
	$("#project-header-test").remove();
	$("#blur-all").css("height", "0vh");
	if (localStorage.getItem("preview") == "on") {
		$("#preview-hide-text").text("Hide Previews");
	} else {
		$("#preview-hide-text").text("Show Previews");
	}
	//go to the top of loco-test1
	CS2locoScroll1.scrollTo(0, {
		duration: 0
	});

	$(".loco-test1").removeClass("in");
	$(".trigger4").click();

	setTimeout(() => {
		locoScroll.start();

		$(".skillsunion-cs").css("display", "hide");
		$(".vtf-cs").css("display", "hide");
		$(".mausumi-cs").css("display", "hide");
		$(".nowiverse-cs").css("display", "hide");
		$(".vocal-cs").css("display", "hide");
		$(".greenfox-cs").css("display", "hide");
		$(".allbodies-cs").css("display", "hide");
	}, 10);
});

$("#cs-close").click(function () {
	$(".c-scrollbar_thumb").css("background-color", "#d2d2d2");
	$("#disable-hover").css("display", "none");
	$("#cs-all-test").remove();
	$("#project-header-test").remove();
	$("#blur-all").css("height", "0vh");
	if (localStorage.getItem("preview") == "on") {
		$("#preview-hide-text").text("Hide Previews");
	} else {
		$("#preview-hide-text").text("Show Previews");
	}
	//go to the top of loco-test1
	CS2locoScroll1.scrollTo(0, {
		duration: 0
	});

	$(".loco-test1").removeClass("in");
	$(".trigger4").click();

	setTimeout(() => {
		locoScroll.start();

		$(".skillsunion-cs").css("display", "hide");
		$(".vtf-cs").css("display", "hide");
		$(".mausumi-cs").css("display", "hide");
		$(".nowiverse-cs").css("display", "hide");
		$(".vocal-cs").css("display", "hide");
		$(".greenfox-cs").css("display", "hide");
		$(".allbodies-cs").css("display", "hide");
	}, 10);
});

/*
/
/
/
/
*/

//check continuosly if .scroll-checker has the class visited in jquery
$(document).ready(function () {
	let scrollcheck = setInterval(scroll_checker, 10);

	function scroll_checker() {
		if ($(".scroll-checker").hasClass("visited")) {
			//locomotive scroll go to bottom of the page
			locoScroll.scrollTo("bottom", {
				duration: 250
			});

			//animate the 'Hire me already' text
			fadeUp19.play();

			//stop the interval
			clearInterval(scrollcheck);
		}
	}
});

// //set variable award_badges to 1
// var award_badges = true;
// //check if award_badges is 0, then hide the .award-badges
// if (award_badges == false) {
// 	$("#award-badges").hide();
// }

//check if div with class scroll-circle is clicked using jquery
$(".scroll-circle").click(function () {
	//get the id of the div that is clicked
	var id = this.id;
	//console.log(id);
	//extract the first part of the id before the hyphen
	var id = id.split("-")[0];
	//console.log(id);
	//add '2' to the id
	var id = id + "2";
	//console.log(id);
	let scrollid = document.querySelector("#" + id);
	//scroll to the id using locomotive scroll
	CS2locoScroll1.scrollTo(scrollid, {
		duration: 750
	});
});

/*
/
/
/
*/

//check if CS2locoScroll1 is scrolling down, then add class .scrolling-down to the text with id cs-heading, or if it is scrolling up, then remove the class .scrolling-down
CS2locoScroll1.on("scroll", (obj) => {
	if (obj.scroll.y > 0) {
		$("#cs-heading").addClass("scrolling-down");
	} else {
		$("#cs-heading").removeClass("scrolling-down");
	}
});

/*
/
/
/
*/

//$(".cs-preview").css("display", "none");
//$(".cs-preview").css("opacity", "0");

// case study hover

//sticky-project-header details
const cs_offset = ($("#sticky-project-header").height() + 1) * -1;

const cs1_target = document.querySelector("#cs1");
const cs2_target = document.querySelector("#cs2");
const cs3_target = document.querySelector("#cs3");
const cs4_target = document.querySelector("#cs4");
const cs5_target = document.querySelector("#cs5");
const cs6_target = document.querySelector("#cs6");
const cs7_target = document.querySelector("#cs7");
const cs8_target = document.querySelector("#cs8");
const cs9_target = document.querySelector("#cs9");
const cs10_target = document.querySelector("#cs10");
const cs11_target = document.querySelector("#cs11");
const cs12_target = document.querySelector("#cs12");
const cs13_target = document.querySelector("#cs13");

$("#sticky-project-header").css("z-index", 25);

let cs_hover = 0; //cs not hovering

// check if user hovers over the cs1 tab
$("#cs1")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs1").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs1_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs1").css("z-index") - 1); //z-index = 9
			cs_hover = 1; //cs hovering
		} else {
			$("#sticky-project-header").css("z-index", $("#cs1").css("z-index") - 1); //z-index = 9
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0;
			}, 0);
		}
	});

//
//
//
//
//
// check if user hovers over the cs2 tab
$("#cs2")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs2").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs2_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs2").css("z-index") - 1); //z-index = 10
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs2").css("z-index") - 1); //z-index = 10
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
		}
	});

//
//
//
//
//
// check if user hovers over the cs3 tab
$("#cs3")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs3").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs3_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs3").css("z-index") - 1); //z-index = 11
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs3").css("z-index") - 1); //z-index = 11
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
		}
	});

//
//
//
//
//
// check if user hovers over the cs4 tab
$("#cs4")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs4").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs4_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs4").css("z-index") - 1); //z-index = 12
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs4").css("z-index") - 1); //z-index = 12
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
		}
	});

//
//
//
//
//
// check if user hovers over the cs5 tab
$("#cs5")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs5").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs5_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs5").css("z-index") - 1); //z-index = 13
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs5").css("z-index") - 1); //z-index = 13
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
		}
	});

//
//
//
//
//
// check if user hovers over the cs6 tab
$("#cs6")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs6").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs6_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs6").css("z-index") - 1); //z-index = 14
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs6").css("z-index") - 1); //z-index = 14
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
		}
	});

//
//
//
//
//
// check if user hovers over the cs7 tab
$("#cs7")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs7").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs7_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs7").css("z-index") - 1); //z-index = 15
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			//$("#cs6").css("opacity", 0); //hide cs6
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs7").css("z-index") - 1); //z-index = 15
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 14
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 15
		}
	});

//
//
//
//
//
// check if user hovers over the cs8 tab
$("#cs8")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs8").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs8_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs8").css("z-index") - 1); //z-index = 16
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			//$("#cs6").css("opacity", 0); //hide cs6
			//$("#cs7").css("opacity", 0); //hide cs7
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs8").css("z-index") - 1); //z-index = 16
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 14
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 15
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 15
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 16
		}
	});

//
//
//
//
//
// check if user hovers over the cs9 tab
$("#cs9")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs9").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs9_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs9").css("z-index") - 1); //z-index = 17
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			//$("#cs6").css("opacity", 0); //hide cs6
			//$("#cs7").css("opacity", 0); //hide cs7
			//$("#cs8").css("opacity", 0); //hide cs8
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs9").css("z-index") - 1); //z-index = 17
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 14
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 15
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 16
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 15
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 16
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 17
		}
	});

//
//
//
//
//
// check if user hovers over the cs10 tab
$("#cs10")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs10").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs10_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs10").css("z-index") - 1); //z-index = 18
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			//$("#cs6").css("opacity", 0); //hide cs6
			//$("#cs7").css("opacity", 0); //hide cs7
			//$("#cs8").css("opacity", 0); //hide cs8
			//$("#cs9").css("opacity", 0); //hide cs9
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs10").css("z-index") - 1); //z-index = 18
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 14
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 15
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 16
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 17
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 15
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 16
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 17
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 18
		}
	});

//
//
//
//
//
// check if user hovers over the cs11 tab
$("#cs11")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs11").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs11_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs11").css("z-index") - 1); //z-index = 19
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			//$("#cs6").css("opacity", 0); //hide cs6
			//$("#cs7").css("opacity", 0); //hide cs7
			//$("#cs8").css("opacity", 0); //hide cs8
			//$("#cs9").css("opacity", 0); //hide cs9
			//$("#cs10").css("opacity", 0); //hide cs10
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs11").css("z-index") - 1); //z-index = 19
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 14
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 15
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 16
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 17
			$("#cs10").css("opacity", 1); // cs10 should be present
			$("#cs10").css("z-index", 0); //z-index = 18
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 15
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 16
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 17
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 18
			$("#cs10").css("opacity", 1); // cs10 should be present
			$("#cs10").css("z-index", 0); //z-index = 19
		}
	});

//
//
//
//
//
// check if user hovers over the cs12 tab
$("#cs12")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs12").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs12_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs12").css("z-index") - 1); //z-index = 20
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			//$("#cs6").css("opacity", 0); //hide cs6
			//$("#cs7").css("opacity", 0); //hide cs7
			//$("#cs8").css("opacity", 0); //hide cs8
			//$("#cs9").css("opacity", 0); //hide cs9
			//$("#cs10").css("opacity", 0); //hide cs10
			//$("#cs11").css("opacity", 0); //hide cs11
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs12").css("z-index") - 1); //z-index = 20
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 14
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 15
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 16
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 17
			$("#cs10").css("opacity", 1); // cs10 should be present
			$("#cs10").css("z-index", 0); //z-index = 18
			$("#cs11").css("opacity", 1); // cs11 should be present
			$("#cs11").css("z-index", 0); //z-index = 19
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 15
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 16
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 17
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 18
			$("#cs10").css("opacity", 1); // cs10 should be present
			$("#cs10").css("z-index", 0); //z-index = 19
			$("#cs11").css("opacity", 1); // cs11 should be present
			$("#cs11").css("z-index", 0); //z-index = 20
		}
	});

//
//
//
//
//
// check if user hovers over the cs13 tab
$("#cs13")
	.mouseenter(function () {
		//check if the element has the class cs-gone
		if ($("#cs13").hasClass("cs-gone") == true) {
			locoScroll.scrollTo(cs13_target, { offset: cs_offset, duration: 250 });
			$("#sticky-project-header").css("z-index", $("#cs13").css("z-index") - 1); //z-index = 21
			//hides all the cs tabs before this
			//$("#cs1").css("opacity", 0); //hide cs1
			//$("#cs2").css("opacity", 0); //hide cs2
			//$("#cs3").css("opacity", 0); //hide cs3
			//$("#cs4").css("opacity", 0); //hide cs4
			//$("#cs5").css("opacity", 0); //hide cs5
			//$("#cs6").css("opacity", 0); //hide cs6
			//$("#cs7").css("opacity", 0); //hide cs7
			//$("#cs8").css("opacity", 0); //hide cs8
			//$("#cs9").css("opacity", 0); //hide cs9
			//$("#cs10").css("opacity", 0); //hide cs10
			//$("#cs11").css("opacity", 0); //hide cs11
			//$("#cs12").css("opacity", 0); //hide cs12
			cs_hover = 1; //cs hovering
		} else {
			//$('.cs-preview').css("display", none);
			$("#sticky-project-header").css("z-index", $("#cs13").css("z-index") - 1); //z-index = 21
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 9
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 10
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 11
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 12
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 13
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 14
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 15
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 16
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 17
			$("#cs10").css("opacity", 1); // cs10 should be present
			$("#cs10").css("z-index", 0); //z-index = 18
			$("#cs11").css("opacity", 1); // cs11 should be present
			$("#cs11").css("z-index", 0); //z-index = 19
			$("#cs12").css("opacity", 1); // cs12 should be present
			$("#cs12").css("z-index", 0); //z-index = 20
			cs_hover = 1; //cs hovering
		}
	})

	.mouseleave(function () {
		if (cs_hover != 1) {
			//if not hovering
			setTimeout(() => {
				$("#sticky-project-header").css("z-index", 25); //z-index = 25
				cs_hover = 0; //not hovering
			}, 0);
			$("#cs1").css("opacity", 1); // cs1 should be present
			$("#cs1").css("z-index", 0); //z-index = 10
			$("#cs2").css("opacity", 1); // cs2 should be present
			$("#cs2").css("z-index", 0); //z-index = 11
			$("#cs3").css("opacity", 1); // cs3 should be present
			$("#cs3").css("z-index", 0); //z-index = 12
			$("#cs4").css("opacity", 1); // cs4 should be present
			$("#cs4").css("z-index", 0); //z-index = 13
			$("#cs5").css("opacity", 1); // cs5 should be present
			$("#cs5").css("z-index", 0); //z-index = 14
			$("#cs6").css("opacity", 1); // cs6 should be present
			$("#cs6").css("z-index", 0); //z-index = 15
			$("#cs7").css("opacity", 1); // cs7 should be present
			$("#cs7").css("z-index", 0); //z-index = 16
			$("#cs8").css("opacity", 1); // cs8 should be present
			$("#cs8").css("z-index", 0); //z-index = 17
			$("#cs9").css("opacity", 1); // cs9 should be present
			$("#cs9").css("z-index", 0); //z-index = 18
			$("#cs10").css("opacity", 1); // cs10 should be present
			$("#cs10").css("z-index", 0); //z-index = 19
			$("#cs11").css("opacity", 1); // cs11 should be present
			$("#cs11").css("z-index", 0); //z-index = 20
			$("#cs12").css("opacity", 1); // cs12 should be present
			$("#cs12").css("z-index", 0); //z-index = 21
		}
	});
//
//
//
//
//
//

// all

$("#cs-all-holder1")
	.mouseenter(function () { })
	.mouseleave(function () {
		setTimeout(() => {
			$("#sticky-project-header").css("z-index", 25);
			cs_hover = 0;
		}, 0);
		$("#cs1").css("opacity", 1);
		$("#cs2").css("opacity", 1);
		$("#cs3").css("opacity", 1);
		$("#cs4").css("opacity", 1);
		$("#cs5").css("opacity", 1);
		$("#cs6").css("opacity", 1);
		$("#cs7").css("opacity", 1);
		$("#cs8").css("opacity", 1);
		$("#cs9").css("opacity", 1);
		$("#cs10").css("opacity", 1);
		$("#cs11").css("opacity", 1);
		$("#cs12").css("opacity", 1);
		$("#cs13").css("opacity", 1);
	});

$("#sticky-project-header")
	.mouseenter(function () {
		setTimeout(() => {
			$("#sticky-project-header").css("z-index", 25);
			cs_hover = 0;
		}, 0);
		$("#cs1").css("opacity", 1);
		$("#cs2").css("opacity", 1);
		$("#cs3").css("opacity", 1);
		$("#cs4").css("opacity", 1);
		$("#cs5").css("opacity", 1);
		$("#cs6").css("opacity", 1);
		$("#cs7").css("opacity", 1);
		$("#cs8").css("opacity", 1);
		$("#cs9").css("opacity", 1);
		$("#cs10").css("opacity", 1);
		$("#cs11").css("opacity", 1);
		$("#cs12").css("opacity", 1);
		$("#cs13").css("opacity", 1);
	})
	.mouseleave(function () { });

/*
 *
 *
 *
 *
 *
 */

// //set locomotive scroll on for tablet and mobile
// if ($(window).width() < 1024) {
// 	//set locomotive scroll on
// 	locoScroll.destroy();
// 	locoScroll = null;
// 	locoScroll = new LocomotiveScroll({
// 		el: document.querySelector(".locomotive-scroll"),
// 		smooth: true,
// 		smoothMobile: true,
// 		getDirection: true,
// 		reloadOnContextChange: true,
// 		tablet: {
// 			smooth: true
// 		}
// 	});
// }

$("#cs1mobile").click(function () {
	$("#cs-heading").text("SkillsUnion");
	$("#cs-heading").css("color", $("#su1").css("color"));
	$("#cs-close").css("background-color", $("#su1").css("color"));
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//go to the top of .loco-test1 using vaniall javascript after 1 secs
	setTimeout(function () {
		document.querySelector(".loco-test1").scrollIntoView({
			behavior: "smooth"
		});
	}, 1);
});

$("#cs2mobile").click(function () {
	$("#cs-heading").text("Value Tech Foundation");
	$("#cs-heading").css("color", $("#vtf1").css("color"));
	$("#cs-close").css("background-color", $("#vtf1").css("background-color"));
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//go to the top of .loco-test1 using vaniall javascript after 1 secs
	setTimeout(function () {
		document.querySelector(".loco-test1").scrollIntoView({
			behavior: "smooth"
		});
	}, 1);
});

$("#cs3mobile").click(function () {
	$("#cs-heading").text("Mausumi");
	$("#cs-heading").css("color", $("#mau1").css("color"));
	$("#cs-close").css("background-color", $("#mau1").css("background-color"));
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//go to the top of .loco-test1 using vaniall javascript after 1 secs
	setTimeout(function () {
		document.querySelector(".loco-test1").scrollIntoView({
			behavior: "smooth"
		});
	}, 1);
});

$("#cs4mobile").click(function () {
	$("#cs-heading").text("Nowiverse Arena");
	$("#cs-heading").css("color", $("#nowi1").css("color"));
	$("#cs-close").css("background-color", $("#nowi1").css("background-color"));
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//go to the top of .loco-test1 using vaniall javascript after 1 secs
	setTimeout(function () {
		document.querySelector(".loco-test1").scrollIntoView({
			behavior: "smooth"
		});
	}, 1);
});

$("#cs5mobile").click(function () {
	$("#cs-heading").text("Vocal Media");
	$("#cs-heading").css("color", $("#vocal1").css("color"));
	$("#cs-close").css("background-color", $("#vocal1").css("background-color"));
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//go to the top of .loco-test1 using vaniall javascript after 1 secs
	setTimeout(function () {
		document.querySelector(".loco-test1").scrollIntoView({
			behavior: "smooth"
		});
	}, 1);
});

$("#cs6mobile").click(function () {
	$("#cs-heading").text("GreenFox");
	$("#cs-heading").css("color", $("#gf1").css("color"));
	$("#cs-close").css("background-color", $("#gf1").css("color"));
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//go to the top of .loco-test1 using vaniall javascript after 1 secs
	setTimeout(function () {
		document.querySelector(".loco-test1").scrollIntoView({
			behavior: "smooth"
		});
	}, 1);
});

$("#cs7mobile").click(function () {
	$("#cs-heading").text("All Bodies");
	$("#cs-heading").css("color", $("#ab1").css("color"));
	$("#cs-close").css("background-color", $("#ab1").css("background-color"));
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//go to the top of .loco-test1 using vaniall javascript after 1 secs
	setTimeout(function () {
		document.querySelector(".loco-test1").scrollIntoView({
			behavior: "smooth"
		});
	}, 1);
});



/*
 *
 *
 *
 */

//codesandbox anim.js

//make sure to remove .anim class from .landing-lottie
$(".landing-lottie").removeClass("anim");
//remove anim class from d1, r1, u1, h1, dot1, i1, n1
//$(".d1, .r1, .u1, .h1, .dot1, .i1, .n1").removeClass("anim");

/*
 *
 *
 *
 */

//check if any local storage is with random load is present
if (localStorage.getItem("randomload")) {
	//set randomload with a random number between 40 to 50
	randomload = Math.floor(Math.random() * 10) + 40;
	//set the randomload in browser storage
	localStorage.setItem("randomload", randomload);
} else {
	//store a random number between 10 to 20 in a variable
	randomload = Math.floor(Math.random() * 10) + 10;
	//set the randomload in browser storage
	localStorage.setItem("randomload", randomload);
}

//create a loading percentage text that animates from whatever% to 100% without decimal point within 1.5 secs and set it to the text of #load using anime.js
anime({
	targets: "#load",
	innerHTML: randomload,
	easing: "easeInOutExpo",
	duration: 3000,
	round: 1,
	//delay: 100,
	complete: function (anim) {
		setTimeout(function () {
			anime({
				targets: "#load",
				innerHTML: 100,
				easing: "easeInOutExpo",
				duration: 2000,
				round: 1,
				//once the animation is complete, click on loadtrigger
				complete: function (anim) {
					//go through the span elements within the div with id scroll-in1 and add id druhin+index to each span element
					$("#scroll-in1 span").each(function (index) {
						$(this).attr("id", "druhin" + (index + 1));
					});

					//add attribute data-scroll to ids druhin1, druhin2, druhin3, druhin4, druhin5, druhin6, druhin7
					$("#druhin1, #druhin2, #druhin3, #druhin4, #druhin5, #druhin6, #druhin7").attr("data-scroll", "true");

					//add attribute data-scroll-position to ids druhin1, druhin2, druhin3, druhin4, druhin5, druhin6, druhin7
					//$("#druhin1, #druhin2, #druhin3, #druhin4, #druhin5, #druhin6, #druhin7").attr("data-scroll-position", "top");

					$("#druhin1").attr("data-scroll-speed", "7");
				}
			});
		}, 500);
		setTimeout(function () {
			//menu navigation animation
			$(".trigger1").click();
			//hide the awards left tag (awwwards + cssda)
			$("#awards-trigger").click();
			//loading the case study preview gifs
			$("head").append(
				'<link rel="stylesheet" href="https://druh.in/folio2022/css/preview.css"/>'
			);
		}, 1750);
	}
});

/*
 *
 *
 *
 */

// Wrap every letter in a span
var textWrapper = document.querySelector(".tanim");
textWrapper.innerHTML = textWrapper.textContent.replace(
	/\S/g,
	"<span class='letter'>$&</span>"
);

//main DRUH.IN text animation
var f1 = anime.timeline({
	loop: false,
	autoplay: false
});

f1.add({
	targets: ".tanim .letter",
	translateY: [500, 0],
	translateZ: 0,
	opacity: [0, 1],
	easing: "easeOutExpo",
	duration: 1400,
	delay: (el, i) => 300 + 30 * i
});

/*
 *
 *
 *
 */

//repeatedly check what the text of #load is and print it in the console
let loadinterval = setInterval(function () {
	if ($("#load").text() == 100) {
		document.body.style.cursor = "default";
		$(".loadtrigger").click();
		setTimeout(function () {
			f1.play();
		}, 250);
		locoScroll.start();
		setTimeout(function () {
			$(".landing-lottie").addClass("anim");
		}, 500);

		clearInterval(loadinterval);
	}
}, 100);

/*
//text intro animation

.add({
	targets: ".tanim .letter",
	translateY: [100, 0],
	translateZ: 0,
	opacity: [0, 1],
	easing: "easeOutExpo",
	duration: 1400,
	delay: (el, i) => 300 + 30 * i
})

*/

/*
//text outro animation

.add({
	targets: ".tanim .letter",
	translateY: [0, -100],
	opacity: [1, 0],
	easing: "easeInExpo",
	duration: 1200,
	delay: (el, i) => 100 + 30 * i
})

*/

/*
 *
 *
 *
 *
 */

//animate the background color of a div landing-lottie with raial gradient as the user moves their mouse over the screen
$(document).mousemove(function (e) {
	let x = e.pageX;
	let y = e.pageY;
	$(".landing-lottie").css(
		"background",
		"radial-gradient(circle at " + x + "px " + y + "px, #373737, #131313)"
	);
});

/*
 *
 *
 *
 *
 */





// //jQuerySimpleCounter.js
// (function ($) {
//   $.fn.jQuerySimpleCounter = function (options) {
//     let settings = $.extend({
//       start: 0,
//       end: 100,
//       easing: 'swing',
//       duration: 400,
//       complete: ''
//     }, options);

//     const thisElement = $(this);

//     $({ count: settings.start }).animate({ count: settings.end }, {
//       duration: settings.duration,
//       easing: settings.easing,
//       step: function () {
//         let mathCount = Math.ceil(this.count);
//         thisElement.text(mathCount);
//       },
//       complete: settings.complete
//     });
//   };
// }(jQuery));

//locomotive initialization
const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".locomotive-scroll"),
	smooth: true,
	multiplier: 0.4,   //mine

	//seperator

	//el: document.querySelector('#js-scroll'),   //other
	//smooth: true,
	//reloadOnContextChange: true,   //other
	//lerp: 0.06, //other
	//smoothMobile: true   //other
});
locoScroll.stop();


// //removing the webflow badge
// let timer = setInterval(remove, 10);
// function remove() {
//   if ($(".w-webflow-badge")[0]) {
//     $(".w-webflow-badge").remove();
//   } else {
//     clearInterval(timer);
//   }
// }



// function webflow_remove() {
//   $(".w-webflow-badge").remove();
// }
// window.onload = webflow_remove;



/*
//hiding the 'something' section
$('#something').hide();
*/


/*

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


// //counter initialization
// $('#count').jQuerySimpleCounter({
//   start: 0,
//   end: 100,
//   easing: 'swing',
//   duration: 5000, //set the duration of the loading animation (5000 - 7000 ~6000)
// });

//}, 2000);





// // jquery inview

// !function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function (a) { function i() { var b, c, d = { height: f.innerHeight, width: f.innerWidth }; return d.height || (b = e.compatMode, (b || !a.support.boxModel) && (c = "CSS1Compat" === b ? g : e.body, d = { height: c.clientHeight, width: c.clientWidth })), d } function j() { return { top: f.pageYOffset || g.scrollTop || e.body.scrollTop, left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft } } function k() { if (b.length) { var e = 0, f = a.map(b, function (a) { var b = a.data.selector, c = a.$element; return b ? c.find(b) : c }); for (c = c || i(), d = d || j(); e < b.length; e++)if (a.contains(g, f[e][0])) { var h = a(f[e]), k = { height: h[0].offsetHeight, width: h[0].offsetWidth }, l = h.offset(), m = h.data("inview"); if (!d || !c) return; l.top + k.height > d.top && l.top < d.top + c.height && l.left + k.width > d.left && l.left < d.left + c.width ? m || h.data("inview", !0).trigger("inview", [!0]) : m && h.data("inview", !1).trigger("inview", [!1]) } } } var c, d, h, b = [], e = document, f = window, g = e.documentElement; a.event.special.inview = { add: function (c) { b.push({ data: c, $element: a(this), element: this }), !h && b.length && (h = setInterval(k, 250)) }, remove: function (a) { for (var c = 0; c < b.length; c++) { var d = b[c]; if (d.element === this && d.data.guid === a.guid) { b.splice(c, 1); break } } b.length || (clearInterval(h), h = null) } }, a(f).bind("scroll resize scrollstop", function () { c = d = null }), !g.addEventListener && g.attachEvent && g.attachEvent("onfocusin", function () { d = null }) });






// //timer/checker initialization
// let test_timer = setInterval(test, 10);
// function test() {
//   if (parseInt($("#count")[0].innerHTML) > 8) {
//     $('#zero').css('display', 'none');
//   }

//   let progress_anim = setInterval(progress, 10);
//   function progress() {
//     let w = parseInt($("#count")[0].innerHTML) + "%"; //load counter value
//     $("#loader-line").css("width", w);
//   }

//   if ($("#count")[0].innerHTML == '100') {
//     //removing the badge
//     $(".w-webflow-badge").remove();
//     //turning off the continuous function run
//     //clearInterval(timer);
//     clearInterval(test_timer);
//     clearInterval(progress_anim);
//     $("#loader-line").css("width", "35vw");
//     //when loading is finished, setting cursor back to default...
//     document.body.style.cursor = 'default';
//     //setting the canvas pointer events to none, so that user cannot interact with the canvas once the loading animation is done
//     // $('#canvas-div').css('pointer-events', 'none');

//     //animate the trigger
//     $(".trigger1").click();


//     //waiting for 1 second, and then hiding the sketch canvas
//     // setTimeout(() => {
//     //   //hiding the sketch canvas
//     //   //document.getElementById("sketch").style.display = "none";
//     // }, 1000);

//     //waiting for 0.75 seconds and then calculating the new page height
//     setTimeout(() => {
//       locoScroll.update();
//       locoScroll.start();
//       document.body.style.cursor = 'default';

//       // // druhin text anim on scroll
//       // let project_timer = setInterval(druhintext, 1);
//       // function druhintext() {

//       //   if ($("#awards").offset().top > $(window).height()) {
//       //     //console.log($("#work").offset().top);
//       //     let work_offset = $("#work").offset().top; // eg: 980

//       //     let d_move = (((($(window).height()) - work_offset) / 4) * -1); // eg: 33.33
//       //     //console.log("d = " + d_move);
//       //     d_move = "matrix(1, 0, 0, 1, 0, " + d_move + ")";
//       //     $("#d").css("transform", d_move);
//       //     $("#d-opp").css("transform", d_move);

//       //     let r_move = (((($(window).height()) - work_offset) / 2) * -1); // eg: 33.33
//       //     //console.log("r = " + r_move);
//       //     r_move = "matrix(1, 0, 0, 1, 0, " + r_move + ")";
//       //     $("#r").css("transform", r_move);

//       //     let u_move = (((($(window).height()) - work_offset) / 6) * -1); // eg: 33.33
//       //     //console.log("u = " + u_move);
//       //     u_move = "matrix(1, 0, 0, 1, 0, " + u_move + ")";
//       //     $("#u").css("transform", u_move);

//       //     let h_move = (((($(window).height()) - work_offset) / 4) * -1); // eg: 33.33
//       //     //console.log("h = " + h_move);
//       //     h_move = "matrix(1, 0, 0, 1, 0, " + h_move + ")";
//       //     $("#h").css("transform", h_move);

//       //     let i_move = (((($(window).height()) - work_offset) / 1) * -1); // eg: 33.33
//       //     //console.log("i = " + i_move);
//       //     i_move = "matrix(1, 0, 0, 1, 0, " + i_move + ")";
//       //     $("#i").css("transform", i_move);

//       //     let n_move = (((($(window).height()) - work_offset) / 2) * -1); // eg: 33.33
//       //     //console.log("n = " + n_move);
//       //     n_move = "matrix(1, 0, 0, 1, 0, " + n_move + ")";
//       //     $("#n").css("transform", n_move);

//       //     let ab_move = (((($(window).height()) - work_offset) / 1.5) * -1); // eg: 33.33
//       //     //console.log("ab = " + ab_move);
//       //     ab_move = "matrix(1, 0, 0, 1, 0, " + ab_move + ")";
//       //     $("#ab").css("transform", ab_move);

//       //     /*
//       //     let cr_move = (((($(window).height()) - work_offset) / 2.5) * -1); // eg: 33.33
//       //     cr_move = $("#cr").offset().top - cr_move;
//       //     //console.log("cr = " + cr_move);
//       //     cr_move = cr_move + "px";
//       //     //$("#cr").css("transform", cr_move);
//       //     $("#cr").css("top", cr_move);
//       //     */
//       //   }

//       //   else {
//       //     clearInterval(project_timer);
//       //   }
//       // }


//       //loading the case study preview gifs
//       $('head').append('<link rel="stylesheet" href="https://druh.in/folio2022/css/preview.css"/>');
//     }, 750);
//   }
// }



//page link scroll trigger initialization
const about = document.querySelector('#landing-new');
const work = document.querySelector('#work');
const awards = document.querySelector('#awards');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact-test');


$('#landing-scroll').click(function () {
	locoScroll.scrollTo(work);
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
	$("#time, #time-mobile").text(time_b);
	if (time_b != time_a) {
		time_a = time_b;
		$(".circle").click();
	}
}


// // cs details locomotive initializations

// const CS2locoScroll1 = new LocomotiveScroll({
//   el: document.querySelector(".loco-test"),
//   smooth: true,
//   multiplier: 0.325,
// });

// CS2locoScroll1.start();


//case study clicks

$('#cs1').click(function () {
	$('#cs-heading').text("SkillsUnion");
	$("#cs-heading").css("color", $("#su1").css("color"));
	$("#cs-close").css("background-color", $("#su1").css("color"));
	let header_margin_top = $('#sticky-project-header').offset().top;
	let cs_margin_top = (($('#cs-all-holder1').offset().top) + ($(window).height() * 0.028) + 1);
	let cs_height = $('#cs1').height() - ($(window).height() * 0.028);
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	locoScroll.stop(); //stopping user from scrolling through the whole document
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//cloning the project header
	$('#sticky-project-header')
		.clone()
		.attr('id', "project-header-test")
		.appendTo($('#blur-all'));
	$('#project-header-test').css('position', 'absolute');
	$('#project-header-test').css('top', header_margin_top);

	if (header_margin_top == 0) {
		$('#project-header-test').css('transform', '');
	}
	$('#project-header-test').css('filter', 'blur(0.015vw)');

	$('#project-header-test').css('background-color', 'transparent');
	$('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
	$('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
	$('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

	$('#project-header-t1').text("Website");
	$('#project-header-t2').text("Visual / Brand");
	$('#project-header-t3').text("Marketing");
	$('#project-header-t4').text("");
	$('#project-header-t5').text("");

	$('#project-header-year').text("2021 - 2022");

	$('#project-header-d1').text("UI Design");
	$('#project-header-d2').text("UX Design");
	$('#project-header-d3').text("Visual Direction");
	$('#project-header-d4').text("");

	//cloning the case study tab (which is clicked)
	$('#cs-all-holder1')
		.clone()
		.attr('id', "cs-all-test")
		.appendTo($('#blur-all'));

	//removing all the other cs tabs
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

	$('#cs1-preview').remove(); // remove the preview of the selected cs tab
	$('#cs1').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
	$('#cs1').find('.empty-space-case-study:eq(0)').css('height', ($('#cs1').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

	$('#cs-all-test').css('margin-top', cs_margin_top);
	$('#cs-all-test').css('height', cs_height);

	$('#cs1').css('width', "100vw");
	$('#cs1').css('margin-left', "-2vw");
	$('#cs1').css('padding-left', "2vw");
	$('#cs1').css('padding-right', "12vw");
});

$('#cs2').click(function () {
	$('#cs-heading').text("Value Tech Foundation");
	$("#cs-heading").css("color", $("#vtf1").css("color"));
	$("#cs-close").css("background-color", $("#vtf1").css("background-color"));
	let header_margin_top = $('#sticky-project-header').offset().top;
	let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height());
	let cs_height = $('#cs2').height() - ($(window).height() * 0.028);
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	locoScroll.stop(); //stopping user from scrolling through the whole document
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//cloning the project header
	$('#sticky-project-header')
		.clone()
		.attr('id', "project-header-test")
		.appendTo($('#blur-all'));
	$('#project-header-test').css('position', 'absolute');
	$('#project-header-test').css('top', header_margin_top);

	if (header_margin_top == 0) {
		$('#project-header-test').css('transform', '');
	}
	$('#project-header-test').css('filter', 'blur(0.015vw)');

	$('#project-header-test').css('background-color', 'transparent');
	$('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
	$('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
	$('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

	$('#project-header-t1').text("Website");
	$('#project-header-t2').text("Visual / Brand");
	$('#project-header-t3').text("Editorial");
	$('#project-header-t4').text("");
	$('#project-header-t5').text("");

	$('#project-header-year').text("2022");

	$('#project-header-d1').text("UI Design");
	$('#project-header-d2').text("Branding");
	$('#project-header-d3').text("Web Development");
	$('#project-header-d4').text("");

	//cloning the case study tab (which is clicked)
	$('#cs-all-holder1')
		.clone()
		.attr('id', "cs-all-test")
		.appendTo($('#blur-all'));

	//removing all the other cs tabs
	$('#cs1').remove();
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

	$('#cs2-preview').remove(); // remove the preview of the selected cs tab
	$('#cs2').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
	$('#cs2').find('.empty-space-case-study:eq(0)').css('height', ($('#cs2').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

	$('#cs-all-test').css('margin-top', cs_margin_top);
	$('#cs-all-test').css('height', cs_height);

	$('#cs2').css('width', "100vw");
	$('#cs2').css('margin-left', "-2vw");
	$('#cs2').css('padding-left', "2vw");
	$('#cs2').css('padding-right', "12vw");
});

$('#cs3').click(function () {
	$('#cs-heading').text("Mausumi")
	$("#cs-heading").css("color", $("#mau1").css("color"));
	$("#cs-close").css("background-color", $("#mau1").css("background-color"));
	let header_margin_top = $('#sticky-project-header').offset().top;
	let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() - + ($(window).height() * 0.028));
	let cs_height = $('#cs3').height() - ($(window).height() * 0.028);
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	locoScroll.stop(); //stopping user from scrolling through the whole document
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//cloning the project header
	$('#sticky-project-header')
		.clone()
		.attr('id', "project-header-test")
		.appendTo($('#blur-all'));
	$('#project-header-test').css('position', 'absolute');
	$('#project-header-test').css('top', header_margin_top);

	if (header_margin_top == 0) {
		$('#project-header-test').css('transform', '');
	}
	$('#project-header-test').css('filter', 'blur(0.015vw)');

	$('#project-header-test').css('background-color', 'transparent');
	$('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
	$('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
	$('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

	$('#project-header-t1').text("Website");
	$('#project-header-t2').text("Visual / Brand");
	$('#project-header-t3').text("Editorial");
	$('#project-header-t4').text("");
	$('#project-header-t5').text("");

	$('#project-header-year').text("2022");

	$('#project-header-d1').text("UI Design");
	$('#project-header-d2').text("Branding");
	$('#project-header-d3').text("Web Development");
	$('#project-header-d4').text("");

	//cloning the case study tab (which is clicked)
	$('#cs-all-holder1')
		.clone()
		.attr('id', "cs-all-test")
		.appendTo($('#blur-all'));

	//removing all the other cs tabs
	$('#cs1').remove();
	$('#cs2').remove();
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

	$('#cs3-preview').remove(); // remove the preview of the selected cs tab
	$('#cs3').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
	$('#cs3').find('.empty-space-case-study:eq(0)').css('height', ($('#cs3').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

	$('#cs-all-test').css('margin-top', cs_margin_top);
	$('#cs-all-test').css('height', cs_height);

	$('#cs3').css('width', "100vw");
	$('#cs3').css('margin-left', "-2vw");
	$('#cs3').css('padding-left', "2vw");
	$('#cs3').css('padding-right', "12vw");
});

$('#cs4').click(function () {
	$('#cs-heading').text("Nowiverse Arena");
	$("#cs-heading").css("color", $("#nowi1").css("color"));
	$("#cs-close").css("background-color", $("#nowi1").css("background-color"));
	let header_margin_top = $('#sticky-project-header').offset().top;
	let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() - ($(window).height() * 0.056));
	let cs_height = $('#cs4').height() - ($(window).height() * 0.028);
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	locoScroll.stop(); //stopping user from scrolling through the whole document
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//cloning the project header
	$('#sticky-project-header')
		.clone()
		.attr('id', "project-header-test")
		.appendTo($('#blur-all'));
	$('#project-header-test').css('position', 'absolute');
	$('#project-header-test').css('top', header_margin_top);

	if (header_margin_top == 0) {
		$('#project-header-test').css('transform', '');
	}
	$('#project-header-test').css('filter', 'blur(0.015vw)');

	$('#project-header-test').css('background-color', 'transparent');
	$('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
	$('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
	$('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

	$('#project-header-t1').text("Website");
	$('#project-header-t2').text("Visual / Brand");
	$('#project-header-t3').text("Editorial");
	$('#project-header-t4').text("");
	$('#project-header-t5').text("");

	$('#project-header-year').text("2022");

	$('#project-header-d1').text("UI Design");
	$('#project-header-d2').text("Branding");
	$('#project-header-d3').text("Web Development");
	$('#project-header-d4').text("");

	//cloning the case study tab (which is clicked)
	$('#cs-all-holder1')
		.clone()
		.attr('id', "cs-all-test")
		.appendTo($('#blur-all'));

	//removing all the other cs tabs
	$('#cs1').remove();
	$('#cs2').remove();
	$('#cs3').remove();
	$('#cs5').remove();
	$('#cs6').remove();
	$('#cs7').remove();
	$('#cs8').remove();
	$('#cs9').remove();
	$('#cs10').remove();
	$('#cs11').remove();
	$('#cs12').remove();
	$('#cs13').remove();

	$('#cs4-preview').remove(); // remove the preview of the selected cs tab
	$('#cs4').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
	$('#cs4').find('.empty-space-case-study:eq(0)').css('height', ($('#cs4').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

	$('#cs-all-test').css('margin-top', cs_margin_top);
	$('#cs-all-test').css('height', cs_height);

	$('#cs4').css('width', "100vw");
	$('#cs4').css('margin-left', "-2vw");
	$('#cs4').css('padding-left', "2vw");
	$('#cs4').css('padding-right', "12vw");
});

$('#cs5').click(function () {
	$('#cs-heading').text("Vocal Media");
	$("#cs-heading").css("color", $("#vocal1").css("color"));
	$("#cs-close").css("background-color", $("#vocal1").css("background-color"));
	let header_margin_top = $('#sticky-project-header').offset().top;
	let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() - ($(window).height() * 0.084));
	let cs_height = $('#cs5').height() - ($(window).height() * 0.028);
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	locoScroll.stop(); //stopping user from scrolling through the whole document
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//cloning the project header
	$('#sticky-project-header')
		.clone()
		.attr('id', "project-header-test")
		.appendTo($('#blur-all'));
	$('#project-header-test').css('position', 'absolute');
	$('#project-header-test').css('top', header_margin_top);

	if (header_margin_top == 0) {
		$('#project-header-test').css('transform', '');
	}
	$('#project-header-test').css('filter', 'blur(0.015vw)');

	$('#project-header-test').css('background-color', 'transparent');
	$('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
	$('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
	$('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

	$('#project-header-t1').text("Website");
	$('#project-header-t2').text("Visual / Brand");
	$('#project-header-t3').text("");
	$('#project-header-t4').text("");
	$('#project-header-t5').text("");

	$('#project-header-year').text("2021");

	$('#project-header-d1').text("Web Design");
	$('#project-header-d2').text("Branding");
	$('#project-header-d3').text("");
	$('#project-header-d4').text("");

	//cloning the case study tab (which is clicked)
	$('#cs-all-holder1')
		.clone()
		.attr('id', "cs-all-test")
		.appendTo($('#blur-all'));

	//removing all the other cs tabs
	$('#cs1').remove();
	$('#cs2').remove();
	$('#cs3').remove();
	$('#cs4').remove();
	$('#cs6').remove();
	$('#cs7').remove();
	$('#cs8').remove();
	$('#cs9').remove();
	$('#cs10').remove();
	$('#cs11').remove();
	$('#cs12').remove();
	$('#cs13').remove();

	$('#cs5-preview').remove(); // remove the preview of the selected cs tab
	$('#cs5').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
	$('#cs5').find('.empty-space-case-study:eq(0)').css('height', ($('#cs5').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

	$('#cs-all-test').css('margin-top', cs_margin_top);
	$('#cs-all-test').css('height', cs_height);

	$('#cs5').css('width', "100vw");
	$('#cs5').css('margin-left', "-2vw");
	$('#cs5').css('padding-left', "2vw");
	$('#cs5').css('padding-right', "12vw");
});

$('#cs6').click(function () {
	$('#cs-heading').text("GreenFox");
	//$("#cs-close").css("background-color", $("#gf1").css("background-color"));
	$("#cs-heading").css("color", $("#gf1").css("color"));
	$("#cs-close").css("background-color", $("#gf1").css("color"));
	let header_margin_top = $('#sticky-project-header').offset().top;
	let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() - ($(window).height() * 0.112));
	let cs_height = $('#cs6').height() - ($(window).height() * 0.028);
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	locoScroll.stop(); //stopping user from scrolling through the whole document
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//cloning the project header
	$('#sticky-project-header')
		.clone()
		.attr('id', "project-header-test")
		.appendTo($('#blur-all'));
	$('#project-header-test').css('position', 'absolute');
	$('#project-header-test').css('top', header_margin_top);

	if (header_margin_top == 0) {
		$('#project-header-test').css('transform', '');
	}
	$('#project-header-test').css('filter', 'blur(0.015vw)');

	$('#project-header-test').css('background-color', 'transparent');
	$('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
	$('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
	$('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

	$('#project-header-t1').text("Website");
	$('#project-header-t2').text("Visual / Brand");
	$('#project-header-t3').text("");
	$('#project-header-t4').text("");
	$('#project-header-t5').text("");

	$('#project-header-year').text("2021");

	$('#project-header-d1').text("Web Design");
	$('#project-header-d2').text("Branding");
	$('#project-header-d3').text("Marketing");
	$('#project-header-d4').text("");

	//cloning the case study tab (which is clicked)
	$('#cs-all-holder1')
		.clone()
		.attr('id', "cs-all-test")
		.appendTo($('#blur-all'));

	//removing all the other cs tabs
	$('#cs1').remove();
	$('#cs2').remove();
	$('#cs3').remove();
	$('#cs4').remove();
	$('#cs5').remove();
	$('#cs7').remove();
	$('#cs8').remove();
	$('#cs9').remove();
	$('#cs10').remove();
	$('#cs11').remove();
	$('#cs12').remove();
	$('#cs13').remove();

	$('#cs6-preview').remove(); // remove the preview of the selected cs tab
	$('#cs6').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
	$('#cs6').find('.empty-space-case-study:eq(0)').css('height', ($('#cs6').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

	$('#cs-all-test').css('margin-top', cs_margin_top);
	$('#cs-all-test').css('height', cs_height);

	$('#cs6').css('width', "100vw");
	$('#cs6').css('margin-left', "-2vw");
	$('#cs6').css('padding-left', "2vw");
	$('#cs6').css('padding-right', "12vw");
});

$('#cs7').click(function () {
	$('#cs-heading').text("All Bodies");
	$("#cs-heading").css("color", $("#ab1").css("color"));
	$("#cs-close").css("background-color", $("#ab1").css("background-color"));
	let header_margin_top = $('#sticky-project-header').offset().top;
	let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() + $('#cs6').height() - ($(window).height() * 0.14));
	let cs_height = $('#cs7').height() - ($(window).height() * 0.028);
	$("#disable-hover").css("display", "block"); //showing the disable trigger
	locoScroll.stop(); //stopping user from scrolling through the whole document
	$("#blur-all").css("height", "100vh"); //showing the blured overlay
	//cloning the project header
	$('#sticky-project-header')
		.clone()
		.attr('id', "project-header-test")
		.appendTo($('#blur-all'));
	$('#project-header-test').css('position', 'absolute');
	$('#project-header-test').css('top', header_margin_top);

	if (header_margin_top == 0) {
		$('#project-header-test').css('transform', '');
	}
	$('#project-header-test').css('filter', 'blur(0.015vw)');

	$('#project-header-test').css('background-color', 'transparent');
	$('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
	$('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
	$('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
	$('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

	$('#project-header-t1').text("Website");
	$('#project-header-t2').text("Visual / Brand");
	$('#project-header-t3').text("");
	$('#project-header-t4').text("");
	$('#project-header-t5').text("");

	$('#project-header-year').text("2021");

	$('#project-header-d1').text("Web Design");
	$('#project-header-d2').text("Branding");
	$('#project-header-d3').text("Marketing");
	$('#project-header-d4').text("");

	//cloning the case study tab (which is clicked)
	$('#cs-all-holder1')
		.clone()
		.attr('id', "cs-all-test")
		.appendTo($('#blur-all'));

	//removing all the other cs tabs
	$('#cs1').remove();
	$('#cs2').remove();
	$('#cs3').remove();
	$('#cs4').remove();
	$('#cs5').remove();
	$('#cs6').remove();
	$('#cs8').remove();
	$('#cs9').remove();
	$('#cs10').remove();
	$('#cs11').remove();
	$('#cs12').remove();
	$('#cs13').remove();

	$('#cs7-preview').remove(); // remove the preview of the selected cs tab
	$('#cs7').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
	$('#cs7').find('.empty-space-case-study:eq(0)').css('height', ($('#cs7').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

	$('#cs-all-test').css('margin-top', cs_margin_top);
	$('#cs-all-test').css('height', cs_height);

	$('#cs7').css('width', "100vw");
	$('#cs7').css('margin-left', "-2vw");
	$('#cs7').css('padding-left', "2vw");
	$('#cs7').css('padding-right', "12vw");
});

// $('#cs8').click(function () {
//   $('#cs-heading').text("Buzzoms");
//   $('#cs-close').css('background-color', '#d44a2e');
//   let header_margin_top = $('#sticky-project-header').offset().top;
//   let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() + $('#cs6').height() + $('#cs7').height() - ($(window).height() * 0.168));
//   let cs_height = $('#cs8').height() - ($(window).height() * 0.028);
//   $("#disable-hover").css("display", "block"); //showing the disable trigger
//   locoScroll.stop(); //stopping user from scrolling through the whole document
//   $("#blur-all").css("height", "100vh"); //showing the blured overlay
//   //cloning the project header
//   $('#sticky-project-header')
//     .clone()
//     .attr('id', "project-header-test")
//     .appendTo($('#blur-all'));
//   $('#project-header-test').css('position', 'absolute');
//   $('#project-header-test').css('top', header_margin_top);
//   if (header_margin_top == 0) {
//     $('#project-header-test').css('transform', '');
//   }
//   $('#project-header-test').css('filter', 'blur(0.015vw)');

//   $('#project-header-test').css('background-color', 'transparent');
//   $('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
//   $('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
//   $('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

//   $('#project-header-t1').text("Website");
//   $('#project-header-t2').text("Visual / Brand");
//   $('#project-header-t3').text("");
//   $('#project-header-t4').text("");
//   $('#project-header-t5').text("");

//   $('#project-header-year').text("2021");

//   $('#project-header-d1').text("Web Design");
//   $('#project-header-d2').text("Branding");
//   $('#project-header-d3').text("Marketing");
//   $('#project-header-d4').text("");

//   //cloning the case study tab (which is clicked)
//   $('#cs-all-holder1')
//     .clone()
//     .attr('id', "cs-all-test")
//     .appendTo($('#blur-all'));

//   //removing all the other cs tabs
//   $('#cs1').remove();
//   $('#cs2').remove();
//   $('#cs3').remove();
//   $('#cs4').remove();
//   $('#cs5').remove();
//   $('#cs6').remove();
//   $('#cs7').remove();
//   $('#cs9').remove();
//   $('#cs10').remove();
//   $('#cs11').remove();
//   $('#cs12').remove();
//   $('#cs13').remove();

//   $('#cs8-preview').remove(); // remove the preview of the selected cs tab
//   $('#cs8').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
//   $('#cs8').find('.empty-space-case-study:eq(0)').css('height', ($('#cs8').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

//   $('#cs-all-test').css('margin-top', cs_margin_top);
//   $('#cs-all-test').css('height', cs_height);

//   $('#cs8').css('width', "100vw");
//   $('#cs8').css('margin-left', "-2vw");
//   $('#cs8').css('padding-left', "2vw");
//   $('#cs8').css('padding-right', "12vw");
// });

// $('#cs9').click(function () {
//   $('#cs-close').css('background-color', '#d44a2e');
//   $('#cs-heading').text("FathomOptics");
//   let header_margin_top = $('#sticky-project-header').offset().top;
//   let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() + $('#cs6').height() + $('#cs7').height() + $('#cs8').height() - ($(window).height() * 0.196));
//   let cs_height = $('#cs9').height() - ($(window).height() * 0.028);
//   $("#disable-hover").css("display", "block"); //showing the disable trigger
//   locoScroll.stop(); //stopping user from scrolling through the whole document
//   $("#blur-all").css("height", "100vh"); //showing the blured overlay
//   //cloning the project header
//   $('#sticky-project-header')
//     .clone()
//     .attr('id', "project-header-test")
//     .appendTo($('#blur-all'));
//   $('#project-header-test').css('position', 'absolute');
//   $('#project-header-test').css('top', header_margin_top);
//   if (header_margin_top == 0) {
//     $('#project-header-test').css('transform', '');
//   }
//   $('#project-header-test').css('filter', 'blur(0.015vw)');

//   $('#project-header-test').css('background-color', 'transparent');
//   $('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
//   $('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
//   $('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

//   $('#project-header-t1').text("Website");
//   $('#project-header-t2').text("Visual / Brand");
//   $('#project-header-t3').text("");
//   $('#project-header-t4').text("");
//   $('#project-header-t5').text("");

//   $('#project-header-year').text("2021");

//   $('#project-header-d1').text("Web Design");
//   $('#project-header-d2').text("Branding");
//   $('#project-header-d3').text("Marketing");
//   $('#project-header-d4').text("");

//   //cloning the case study tab (which is clicked)
//   $('#cs-all-holder1')
//     .clone()
//     .attr('id', "cs-all-test")
//     .appendTo($('#blur-all'));

//   //removing all the other cs tabs
//   $('#cs1').remove();
//   $('#cs2').remove();
//   $('#cs3').remove();
//   $('#cs4').remove();
//   $('#cs5').remove();
//   $('#cs6').remove();
//   $('#cs7').remove();
//   $('#cs8').remove();
//   $('#cs10').remove();
//   $('#cs11').remove();
//   $('#cs12').remove();
//   $('#cs13').remove();

//   $('#cs9-preview').remove(); // remove the preview of the selected cs tab
//   $('#cs9').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
//   $('#cs9').find('.empty-space-case-study:eq(0)').css('height', ($('#cs9').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

//   $('#cs-all-test').css('margin-top', cs_margin_top);
//   $('#cs-all-test').css('height', cs_height);

//   $('#cs9').css('width', "100vw");
//   $('#cs9').css('margin-left', "-2vw");
//   $('#cs9').css('padding-left', "2vw");
//   $('#cs9').css('padding-right', "12vw");
// });

// $('#cs10').click(function () {
//   $('#cs-close').css('background-color', '#d44a2e');
//   $('#cs-heading').text("Constance");
//   let header_margin_top = $('#sticky-project-header').offset().top;
//   let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() + $('#cs6').height() + $('#cs7').height() + $('#cs8').height() + $('#cs9').height() - ($(window).height() * 0.224));
//   let cs_height = $('#cs10').height() - ($(window).height() * 0.028);
//   $("#disable-hover").css("display", "block"); //showing the disable trigger
//   locoScroll.stop(); //stopping user from scrolling through the whole document
//   $("#blur-all").css("height", "100vh"); //showing the blured overlay
//   //cloning the project header
//   $('#sticky-project-header')
//     .clone()
//     .attr('id', "project-header-test")
//     .appendTo($('#blur-all'));
//   $('#project-header-test').css('position', 'absolute');
//   $('#project-header-test').css('top', header_margin_top);
//   if (header_margin_top == 0) {
//     $('#project-header-test').css('transform', '');
//   }
//   $('#project-header-test').css('filter', 'blur(0.015vw)');

//   $('#project-header-test').css('background-color', 'transparent');
//   $('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
//   $('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
//   $('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

//   $('#project-header-t1').text("Website");
//   $('#project-header-t2').text("Visual / Brand");
//   $('#project-header-t3').text("");
//   $('#project-header-t4').text("");
//   $('#project-header-t5').text("");

//   $('#project-header-year').text("2021");

//   $('#project-header-d1').text("Web Design");
//   $('#project-header-d2').text("Branding");
//   $('#project-header-d3').text("Marketing");
//   $('#project-header-d4').text("");

//   //cloning the case study tab (which is clicked)
//   $('#cs-all-holder1')
//     .clone()
//     .attr('id', "cs-all-test")
//     .appendTo($('#blur-all'));

//   //removing all the other cs tabs
//   $('#cs1').remove();
//   $('#cs2').remove();
//   $('#cs3').remove();
//   $('#cs4').remove();
//   $('#cs5').remove();
//   $('#cs6').remove();
//   $('#cs7').remove();
//   $('#cs8').remove();
//   $('#cs9').remove();
//   $('#cs11').remove();
//   $('#cs12').remove();
//   $('#cs13').remove();

//   $('#cs10-preview').remove(); // remove the preview of the selected cs tab
//   $('#cs10').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
//   $('#cs10').find('.empty-space-case-study:eq(0)').css('height', ($('#cs10').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

//   $('#cs-all-test').css('margin-top', cs_margin_top);
//   $('#cs-all-test').css('height', cs_height);

//   $('#cs10').css('width', "100vw");
//   $('#cs10').css('margin-left', "-2vw");
//   $('#cs10').css('padding-left', "2vw");
//   $('#cs10').css('padding-right', "12vw");
// });

// $('#cs11').click(function () {
//   $('#cs-close').css('background-color', '#d44a2e');
//   $('#cs-heading').text("Stamurai");
//   let header_margin_top = $('#sticky-project-header').offset().top;
//   let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() + $('#cs6').height() + $('#cs7').height() + $('#cs8').height() + $('#cs9').height() + $('#cs10').height() - ($(window).height() * 0.252));
//   let cs_height = $('#cs11').height() - ($(window).height() * 0.028);
//   $("#disable-hover").css("display", "block"); //showing the disable trigger
//   locoScroll.stop(); //stopping user from scrolling through the whole document
//   $("#blur-all").css("height", "100vh"); //showing the blured overlay
//   //cloning the project header
//   $('#sticky-project-header')
//     .clone()
//     .attr('id', "project-header-test")
//     .appendTo($('#blur-all'));
//   $('#project-header-test').css('position', 'absolute');
//   $('#project-header-test').css('top', header_margin_top);
//   if (header_margin_top == 0) {
//     $('#project-header-test').css('transform', '');
//   }
//   $('#project-header-test').css('filter', 'blur(0.015vw)');

//   $('#project-header-test').css('background-color', 'transparent');
//   $('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
//   $('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
//   $('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

//   $('#project-header-t1').text("Website");
//   $('#project-header-t2').text("Visual / Brand");
//   $('#project-header-t3').text("");
//   $('#project-header-t4').text("");
//   $('#project-header-t5').text("");

//   $('#project-header-year').text("2021");

//   $('#project-header-d1').text("Web Design");
//   $('#project-header-d2').text("Branding");
//   $('#project-header-d3').text("Marketing");
//   $('#project-header-d4').text("");

//   //cloning the case study tab (which is clicked)
//   $('#cs-all-holder1')
//     .clone()
//     .attr('id', "cs-all-test")
//     .appendTo($('#blur-all'));

//   //removing all the other cs tabs
//   $('#cs1').remove();
//   $('#cs2').remove();
//   $('#cs3').remove();
//   $('#cs4').remove();
//   $('#cs5').remove();
//   $('#cs6').remove();
//   $('#cs7').remove();
//   $('#cs8').remove();
//   $('#cs9').remove();
//   $('#cs10').remove();
//   $('#cs12').remove();
//   $('#cs13').remove();

//   $('#cs11-preview').remove(); // remove the preview of the selected cs tab
//   $('#cs11').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
//   $('#cs11').find('.empty-space-case-study:eq(0)').css('height', ($('#cs11').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

//   $('#cs-all-test').css('margin-top', cs_margin_top);
//   $('#cs-all-test').css('height', cs_height);

//   $('#cs11').css('width', "100vw");
//   $('#cs11').css('margin-left', "-2vw");
//   $('#cs11').css('padding-left', "2vw");
//   $('#cs11').css('padding-right', "12vw");
// });

// $('#cs12').click(function () {
//   $('#cs-close').css('background-color', '#d44a2e');
//   $('#cs-heading').text("InsaneDeals");
//   let header_margin_top = $('#sticky-project-header').offset().top;
//   let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() + $('#cs6').height() + $('#cs7').height() + $('#cs8').height() + $('#cs9').height() + $('#cs10').height() + $('#cs11').height() - ($(window).height() * 0.28));
//   let cs_height = $('#cs12').height() - ($(window).height() * 0.028);
//   $("#disable-hover").css("display", "block"); //showing the disable trigger
//   locoScroll.stop(); //stopping user from scrolling through the whole document
//   $("#blur-all").css("height", "100vh"); //showing the blured overlay
//   //cloning the project header
//   $('#sticky-project-header')
//     .clone()
//     .attr('id', "project-header-test")
//     .appendTo($('#blur-all'));
//   $('#project-header-test').css('position', 'absolute');
//   $('#project-header-test').css('top', header_margin_top);
//   if (header_margin_top == 0) {
//     $('#project-header-test').css('transform', '');
//   }
//   $('#project-header-test').css('filter', 'blur(0.015vw)');

//   $('#project-header-test').css('background-color', 'transparent');
//   $('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
//   $('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
//   $('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

//   $('#project-header-t1').text("Website");
//   $('#project-header-t2').text("Visual / Brand");
//   $('#project-header-t3').text("");
//   $('#project-header-t4').text("");
//   $('#project-header-t5').text("");

//   $('#project-header-year').text("2021");

//   $('#project-header-d1').text("Web Design");
//   $('#project-header-d2').text("Branding");
//   $('#project-header-d3').text("Marketing");
//   $('#project-header-d4').text("");

//   //cloning the case study tab (which is clicked)
//   $('#cs-all-holder1')
//     .clone()
//     .attr('id', "cs-all-test")
//     .appendTo($('#blur-all'));

//   //removing all the other cs tabs
//   $('#cs1').remove();
//   $('#cs2').remove();
//   $('#cs3').remove();
//   $('#cs4').remove();
//   $('#cs5').remove();
//   $('#cs6').remove();
//   $('#cs7').remove();
//   $('#cs8').remove();
//   $('#cs9').remove();
//   $('#cs10').remove();
//   $('#cs11').remove();
//   $('#cs13').remove();

//   $('#cs12-preview').remove(); // remove the preview of the selected cs tab
//   $('#cs12').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
//   $('#cs12').find('.empty-space-case-study:eq(0)').css('height', ($('#cs12').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

//   $('#cs-all-test').css('margin-top', cs_margin_top);
//   $('#cs-all-test').css('height', cs_height);

//   $('#cs12').css('width', "100vw");
//   $('#cs12').css('margin-left', "-2vw");
//   $('#cs12').css('padding-left', "2vw");
//   $('#cs12').css('padding-right', "12vw");
// });

// $('#cs13').click(function () {
//   $('#cs-close').css('background-color', '#d44a2e');
//   $('#cs-heading').text("KeralaOnRoad");
//   let header_margin_top = $('#sticky-project-header').offset().top;
//   let cs_margin_top = (($('#cs-all-holder1').offset().top) + 1 + $('#cs1').height() + $('#cs2').height() + $('#cs3').height() + $('#cs4').height() + $('#cs5').height() + $('#cs6').height() + $('#cs7').height() + $('#cs8').height() + $('#cs9').height() + $('#cs10').height() + $('#cs11').height() + $('#cs12').height() - ($(window).height() * 0.308));
//   let cs_height = $('#cs13').height() - ($(window).height() * 0.028);
//   $("#disable-hover").css("display", "block"); //showing the disable trigger
//   locoScroll.stop(); //stopping user from scrolling through the whole document
//   $("#blur-all").css("height", "100vh"); //showing the blured overlay
//   //cloning the project header
//   $('#sticky-project-header')
//     .clone()
//     .attr('id', "project-header-test")
//     .appendTo($('#blur-all'));
//   $('#project-header-test').css('position', 'absolute');
//   $('#project-header-test').css('top', header_margin_top);
//   if (header_margin_top == 0) {
//     $('#project-header-test').css('transform', '');
//   }
//   $('#project-header-test').css('filter', 'blur(0.015vw)');

//   $('#project-header-test').css('background-color', 'transparent');
//   $('#project-header-test').find('.context-holder:eq(0)').css('background-color', 'transparent');
//   $('#project-header-test').find('.before-cs-top-space:eq(0)').remove();
//   $('#project-header-test').find('.context-holder:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').css('color', '#E2E2E2');
//   $('#project-header-test').find('.heading1:eq(0)').text("Project(s)");

//   $('#project-header-t1').text("Website");
//   $('#project-header-t2').text("Visual / Brand");
//   $('#project-header-t3').text("");
//   $('#project-header-t4').text("");
//   $('#project-header-t5').text("");

//   $('#project-header-year').text("2021");

//   $('#project-header-d1').text("Web Design");
//   $('#project-header-d2').text("Branding");
//   $('#project-header-d3').text("Marketing");
//   $('#project-header-d4').text("");

//   //cloning the case study tab (which is clicked)
//   $('#cs-all-holder1')
//     .clone()
//     .attr('id', "cs-all-test")
//     .appendTo($('#blur-all'));

//   //removing all the other cs tabs
//   $('#cs1').remove();
//   $('#cs2').remove();
//   $('#cs3').remove();
//   $('#cs4').remove();
//   $('#cs5').remove();
//   $('#cs6').remove();
//   $('#cs7').remove();
//   $('#cs8').remove();
//   $('#cs9').remove();
//   $('#cs10').remove();
//   $('#cs11').remove();
//   $('#cs12').remove();

//   $('#cs13-preview').remove(); // remove the preview of the selected cs tab
//   $('#cs13').find('.line-top:eq(0)').remove(); // remove the line top in the cs tab
//   $('#cs13').find('.empty-space-case-study:eq(0)').css('height', ($('#cs13').find('.empty-space-case-study:eq(0)').height() + 1)); // remove empty space below the cs tab

//   $('#cs-all-test').css('margin-top', cs_margin_top);
//   $('#cs-all-test').css('height', cs_height);

//   $('#cs13').css('width', "100vw");
//   $('#cs13').css('margin-left', "-2vw");
//   $('#cs13').css('padding-left', "2vw");
//   $('#cs13').css('padding-right', "12vw");
// });




//closing blur and disable overlay from the cs tabs

//const disable_cs = document.getElementById('disable-hover');






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



// // fullscreen mode

// let fPressed = false;
// $(window).keydown(function (evt) {
//   if (evt.which == 70) { // f pressed
//     fPressed = true;
//     document.documentElement.requestFullscreen();
//     locoScroll.scrollTo(about, { duration: 0 });
//     locoScroll.stop();
//     setTimeout(() => {
//       locoScroll.update();
//     }, 500);
//     setTimeout(() => {
//       locoScroll.start();
//     }, 500);
//   }
// })

//   .keyup(function (evt) {
//     if (evt.which == 70 || evt.which == 27) { // f or esc pressed
//       fPressed = false;
//       document.exitFullscreen();
//       locoScroll.scrollTo(about, { duration: 0 });
//       locoScroll.stop();
//       setTimeout(() => {
//         locoScroll.update();
//       }, 500);
//       setTimeout(() => {
//         locoScroll.start();
//       }, 500);
//     }
//   });




/**
*
*
*
*/

//while scrolling, if #testimonials or #contact-test has the attribute data-scroll-section-inview
locoScroll.on("scroll", (obj) => {
	//if #testimonials or #contact-test has the attribute data-scroll-section-inview
	if ($("#testimonials").attr("data-scroll-section-inview") || $("#contact-test").attr("data-scroll-section-inview")) {
		//set opacity of #projects to 0
		$("#projects").css("opacity", "0");
	} else {
		//set opacity of #projects to 1
		$("#projects").css("opacity", "1");
	}
});





/*

// if window resized -> 
$(window).resize(function () {
  location.reload();
});

*/



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
	$('#email3, #email4, #email5, #email6, #hire-me, #something').on('click', function (event) {
		event.preventDefault();
		//document.location.href = "mailto:" + where_to;
		e7 = "mailto:" + where_to;
		window.open(e7, "_blank");
	})

	// $('#email4').on('click', function (event) {
	//   event.preventDefault();
	//   //document.location.href = "mailto:" + where_to;
	//   e7 = "mailto:" + where_to;
	//   window.open(e7, "_blank");
	// })

	// $('#email5').on('click', function (event) {
	//   event.preventDefault();
	//   //document.location.href = "mailto:" + where_to;
	//   e7 = "mailto:" + where_to;
	//   window.open(e7, "_blank");
	// })

	// $('#hire-me').on('click', function (event) {
	//   event.preventDefault();
	//   //document.location.href = "mailto:" + where_to;
	//   e7 = "mailto:" + where_to;
	//   window.open(e7, "_blank");
	// })

	// $('#something').on('click', function (event) {
	//   event.preventDefault();
	//   //document.location.href = "mailto:" + where_to;
	//   e7 = "mailto:" + where_to;
	//   window.open(e7, "_blank");
	// })

});






//add codesandbox file here (once done)



// case study hover


// //sticky-project-header details
// const cs_offset = ($("#sticky-project-header").height() + 1) * -1;

// const cs1_target = document.querySelector('#cs1');
// const cs2_target = document.querySelector('#cs2');
// const cs3_target = document.querySelector('#cs3');
// const cs4_target = document.querySelector('#cs4');
// const cs5_target = document.querySelector('#cs5');
// const cs6_target = document.querySelector('#cs6');
// const cs7_target = document.querySelector('#cs7');
// const cs8_target = document.querySelector('#cs8');
// const cs9_target = document.querySelector('#cs9');
// const cs10_target = document.querySelector('#cs10');
// const cs11_target = document.querySelector('#cs11');
// const cs12_target = document.querySelector('#cs12');
// const cs13_target = document.querySelector('#cs13');

// $('#sticky-project-header').css('z-index', 25);

// let cs_hover = 0;



// // check if user hovers over the cs1 tab 

// $('#cs1')
//   .mouseenter(function () {
//     //check if the element has the class hidden
//     if ($('#cs1').hasClass("cs-gone") == true) {
//       locoScroll.scrollTo(cs1_target, { offset: cs_offset, duration: 250 });
//       $('#sticky-project-header').css('z-index', $('#cs1').css("z-index") - 0.5);
//       cs_hover = 1;
//     }
//     else {
//       $('.cs-gone').css('opacity', 0);
//       $('#sticky-project-header').css('z-index', $('#cs1').css("z-index") - 0.5);
//       cs_hover = 1;
//     }
//   })

//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });




// $('#cs2')
//   .mouseenter(function () {
//     //check if the element has the class hidden
//     if ($('#cs2').hasClass("cs-gone") == true) {
//       locoScroll.scrollTo(cs2_target, { offset: cs_offset, duration: 250 });
//       $('#sticky-project-header').css('z-index', $('#cs2').css("z-index") - 0.5);
//       //hides all the cs tabs before this
//       $('#cs1').css('opacity', 0);
//       cs_hover = 1;
//     }
//     else {
//       $('.cs-gone').css('opacity', 0);
//       $('#sticky-project-header').css('z-index', $('#cs2').css("z-index") - 0.5);
//       //$('#cs1').css('opacity', 1);
//       cs_hover = 1;
//     }
//   })

//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//       $('#cs1').css('opacity', 1);
//     }
//   });








// let cs_hover = 0;

// $('#cs1')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs1').css('z-index', 10);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs2')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs2').css('z-index', 11);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs3')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs3').css('z-index', 12);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs4')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs4').css('z-index', 13);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs5')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs5').css('z-index', 14);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs6')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs6').css('z-index', 15);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs7')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs7').css('z-index', 16);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs8')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs8').css('z-index', 17);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs9')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs9').css('z-index', 18);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs10')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs10').css('z-index', 19);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs11')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs11').css('z-index', 20);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs12')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs12').css('z-index', 21);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });


// $('#cs13')
//   .mouseenter(function () {
//     $('#sticky-project-header').css('z-index', 0);
//     $('#cs13').css('z-index', 22);
//     cs_hover = 1;
//   })
//   .mouseleave(function () {
//     if (cs_hover != 1) {
//       setTimeout(() => {
//         $('#sticky-project-header').css('z-index', 25);
//         cs_hover = 0;
//       }, 200);
//     }
//   });





// $('#cs-all-holder1')
//   .mouseenter(function () {
//   })
//   .mouseleave(function () {
//     setTimeout(() => {
//       $('#sticky-project-header').css('z-index', 25);
//       cs_hover = 0;
//     }, 200);
//     $('#cs1').css('opacity', 1);
//   });




// codesandbox file - till here






// //checks if the cs tabs has a hide class or not

// let timer_cs_hide_class = setInterval(check_cs_hide_class, 10);
// function check_cs_hide_class() {

//   if ($('#cs1').hasClass("hide") == true) {
//     $('#cs1').css('transition-duration', '0ms, 0ms');
//     $('#cs1').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs1').css('pointer-events', 'all');
//   }

//   if ($('#cs2').hasClass("hide") == true) {
//     $('#cs2').css('transition-duration', '0ms, 0ms');
//     $('#cs2').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs2').css('pointer-events', 'all');
//   }

//   if ($('#cs3').hasClass("hide") == true) {
//     $('#cs3').css('transition-duration', '0ms, 0ms');
//     $('#cs3').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs3').css('pointer-events', 'all');
//   }

//   if ($('#cs4').hasClass("hide") == true) {
//     $('#cs4').css('transition-duration', '0ms, 0ms');
//     $('#cs4').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs4').css('pointer-events', 'all');
//   }

//   if ($('#cs5').hasClass("hide") == true) {
//     $('#cs5').css('transition-duration', '0ms, 0ms');
//     $('#cs5').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs5').css('pointer-events', 'all');
//   }

//   if ($('#cs6').hasClass("hide") == true) {
//     $('#cs6').css('transition-duration', '0ms, 0ms');
//     $('#cs6').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs6').css('pointer-events', 'all');
//   }

//   if ($('#cs7').hasClass("hide") == true) {
//     $('#cs7').css('transition-duration', '0ms, 0ms');
//     $('#cs7').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs7').css('pointer-events', 'all');
//   }

//   if ($('#cs8').hasClass("hide") == true) {
//     $('#cs8').css('transition-duration', '0ms, 0ms');
//     $('#cs8').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs8').css('pointer-events', 'all');
//   }

//   if ($('#cs9').hasClass("hide") == true) {
//     $('#cs9').css('transition-duration', '0ms, 0ms');
//     $('#cs9').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs9').css('pointer-events', 'all');
//   }

//   if ($('#cs10').hasClass("hide") == true) {
//     $('#cs10').css('transition-duration', '0ms, 0ms');
//     $('#cs10').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs10').css('pointer-events', 'all');
//   }

//   if ($('#cs11').hasClass("hide") == true) {
//     $('#cs11').css('transition-duration', '0ms, 0ms');
//     $('#cs11').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs11').css('pointer-events', 'all');
//   }

//   if ($('#cs12').hasClass("hide") == true) {
//     $('#cs12').css('transition-duration', '0ms, 0ms');
//     $('#cs12').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs12').css('pointer-events', 'all');
//   }

//   if ($('#cs13').hasClass("hide") == true) {
//     $('#cs13').css('transition-duration', '0ms, 0ms');
//     $('#cs13').css('pointer-events', 'none');
//   }
//   else {
//     $('#cs13').css('pointer-events', 'all');
//   }
// }



//codesandbox anim2.js

// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {
	var wordWrap = tricksWord.item(i);
	wordWrap.innerHTML = wordWrap.innerHTML.replace(
		/(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
		'$1<span class="tricksword">$2</span>'
	);
}
var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {
	var letterWrap = tricksLetter.item(i);
	letterWrap.innerHTML = letterWrap.textContent.replace(
		/\S/g,
		"<span class='letter'>$&</span>"
	);
}

// Fade Up Animation
var fadeUp = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp.add({
	targets: ".fade-up .tricksword",
	translateY: [100, 0],
	translateZ: 0,
	opacity: [0, 1],
	rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 50 * i
});

var fadeUp2 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp2.add({
	targets: ".fade-up2 .tricksword",
	translateY: [125, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp3 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp3.add({
	targets: ".fade-up3 .tricksword",
	translateY: [100, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 40 * i
});

var fadeUp4 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp4.add({
	targets: ".fade-up4 .tricksword",
	translateY: [100, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 40 * i
});

var fadeUp5 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp5.add({
	targets: ".fade-up5 .tricksword",
	translateY: [100, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 40 * i
});

var fadeUp6 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp6.add({
	targets: ".fade-up6 .tricksword",
	translateY: [100, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 40 * i
});

var fadeUp7 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp7.add({
	targets: ".fade-up7 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp8 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp8.add({
	targets: ".fade-up8 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp9 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp9.add({
	targets: ".fade-up9 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp10 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp10.add({
	targets: ".fade-up10 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp11 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp11.add({
	targets: ".fade-up11 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp12 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp12.add({
	targets: ".fade-up12 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp13 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp13.add({
	targets: ".fade-up13 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp14 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp14.add({
	targets: ".fade-up14 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp15 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp15.add({
	targets: ".fade-up15 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

var fadeUp16 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp16.add({
	targets: ".fade-up16 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 50 * i
});

var fadeUp17 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp17.add({
	targets: ".fade-up17 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp18 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp18.add({
	targets: ".fade-up18 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 50 * i
});

var fadeUp19 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp19.add({
	targets: ".fade-up19 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [15, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 35 * i
});

var fadeUp20 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp20.add({
	targets: ".fade-up20 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 1000,
	delay: (el, i) => 100 * i
});

/*
 *
 *
 *
 *
 */

var fadeUp21 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp21.add({
	targets: ".fade-up21 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp22 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp22.add({
	targets: ".fade-up22 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp23 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp23.add({
	targets: ".fade-up23 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp24 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp24.add({
	targets: ".fade-up24 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp25 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp25.add({
	targets: ".fade-up25 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp26 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp26.add({
	targets: ".fade-up26 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp27 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp27.add({
	targets: ".fade-up27 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp28 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp28.add({
	targets: ".fade-up28 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp29 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp29.add({
	targets: ".fade-up29 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp30 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp30.add({
	targets: ".fade-up30 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp31 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp31.add({
	targets: ".fade-up31 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp32 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp32.add({
	targets: ".fade-up32 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp33 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp33.add({
	targets: ".fade-up33 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp34 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp34.add({
	targets: ".fade-up34 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp35 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp35.add({
	targets: ".fade-up35 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp36 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp36.add({
	targets: ".fade-up36 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

var fadeUp37 = anime.timeline({
	loop: false,
	autoplay: false
});

fadeUp37.add({
	targets: ".fade-up37 .tricksword",
	translateY: [200, 0],
	translateZ: 0,
	opacity: [0, 1],
	//rotateZ: [10, 0],
	easing: "easeOutExpo",
	duration: 750,
	delay: (el, i) => 50 * i
});

/*
 *
 *
 *
 *
 */

// Play animation when scrolled into view
$("#scroll-in1").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp.play();
	} else {
	}
});
$("#scroll-in2").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp2.play();
		fadeUp7.play();
		fadeUp8.play();
		fadeUp9.play();
	} else {
	}
});
$("#scroll-in3").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp3.play();
	} else {
	}
});
$("#scroll-in4").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp4.play();
	} else {
	}
});
$("#scroll-in5").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp5.play();
	} else {
	}
});
$("#scroll-in6").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp6.play();
	} else {
	}
});
$("#scroll-in7").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp7.play();
	} else {
	}
});
$("#scroll-in8").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp8.play();
	} else {
	}
});

$("#scroll-in10").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp10.play();
	} else {
	}
});
$("#scroll-in11").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp11.play();
	} else {
	}
});
$("#scroll-in12").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp12.play();
	} else {
	}
});
$("#scroll-in13").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp13.play();
	} else {
	}
});
$("#scroll-in14").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp14.play();
	} else {
	}
});
$("#scroll-in15").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp15.play();
	} else {
	}
});
$("#scroll-in16").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp16.play();
	} else {
	}
});

/*
 */

$("#scroll-in17").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp17.play();
	} else {
	}
});

$("#scroll-in18").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp18.play();
		fadeUp20.play();
	} else {
	}
});

/*
 *
 *
 *
 *
 */

$("#cs1").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp21.play();
	} else {
	}
});

$("#cs2").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp22.play();
	} else {
	}
});

$("#cs3").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp23.play();
	} else {
	}
});

$("#cs4").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp24.play();
	} else {
	}
});

$("#cs5").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp25.play();
	} else {
	}
});

$("#cs6").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp26.play();
	} else {
	}
});

$("#cs7").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp27.play();
	} else {
	}
});

$("#cs8").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp28.play();
	} else {
	}
});

$("#cs9").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp29.play();
	} else {
	}
});

$("#cs11").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp30.play();
	} else {
	}
});

$("#cs12").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp31.play();
	} else {
	}
});

$("#screenoff").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp32.play();
	} else {
	}
});

$("#mello").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp33.play();
	} else {
	}
});

$("#mausumi").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp34.play();
	} else {
	}
});

$("#nowiverse").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp35.play();
	} else {
	}
});

$("#webprompter").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp36.play();
	} else {
	}
});

$("#invoiced").on("inview", function (event, isInView) {
	if (isInView) {
		fadeUp37.play();
	} else {
	}
});

/*
 *
 *
 *
 *
 */

//check if user on desktop
if ($(window).width() > 1024) {
	// druhin text anim on scroll
	let project_timer = setInterval(druhintext, 1);
	function druhintext() {
		//if ($("#awards").offset().top > $(window).height()) {
		////console.log($("#work").offset().top);
		let work_offset = $("#work").offset().top; // eg: 980

		let d_move = (($(window).height() - work_offset) / 3) * 1; // eg: 33.33
		//console.log("d = " + d_move);
		d_move = "matrix(1, 0, 0, 1, 0, " + d_move + ")";
		$("#druhin1").css("transform", d_move);

		let r_move = (($(window).height() - work_offset) / 2) * 1; // eg: 33.33
		//console.log("r = " + r_move);
		r_move = "matrix(1, 0, 0, 1, 0, " + r_move + ")";
		$("#druhin3").css("transform", r_move);

		let u_move = (($(window).height() - work_offset) / 6) * 1; // eg: 33.33
		//console.log("u = " + u_move);
		u_move = "matrix(1, 0, 0, 1, 0, " + u_move + ")";
		//$("#druhin2").css("transform", u_move);

		let h_move = (($(window).height() - work_offset) / 4) * 1; // eg: 33.33
		//console.log("h = " + h_move);
		h_move = "matrix(1, 0, 0, 1, 0, " + h_move + ")";
		$("#druhin4").css("transform", h_move);
		$("#druhin2").css("transform", h_move);

		let i_move = (($(window).height() - work_offset) / 1) * 1; // eg: 33.33
		//console.log("i = " + i_move);
		i_move = "matrix(1, 0, 0, 1, 0, " + i_move + ")";
		$("#druhin5").css("transform", i_move);

		let n_move = (($(window).height() - work_offset) / 2) * 1; // eg: 33.33
		//console.log("n = " + n_move);
		n_move = "matrix(1, 0, 0, 1, 0, " + n_move + ")";
		$("#druhin6").css("transform", n_move);

		let ab_move = (($(window).height() - work_offset) / 1.5) * 1; // eg: 33.33
		//console.log("ab = " + ab_move);
		ab_move = "matrix(1, 0, 0, 1, 0, " + ab_move + ")";
		$("#druhin7").css("transform", ab_move);
	}
}

//if cs1mobile to cs7mobile is clicked
$(
	"#cs1mobile, #cs2mobile, #cs3mobile, #cs4mobile, #cs5mobile, #cs6mobile, #cs7mobile"
).click(function () {
	//stop user from scrolling in .mobile-wrapper

	//set the height of .mobile-wrapper to 100vh and overflow to hidden
	$(".mobile-wrapper").css("height", "100vh");
	$(".mobile-wrapper").css("overflow", "hidden");
});

//if cs-close is clicked
$("#cs-close").click(function () {
	//if its not on desktop
	if ($(window).width() < 1024) {
		//allow to scroll in .mobile-wrapper

		//set the height of .mobile-wrapper to auto and overflow to auto
		$(".mobile-wrapper").css("height", "auto");
		$(".mobile-wrapper").css("overflow", "auto");

		//scroll to work-mobile
		window.scrollTo({
			top: $("#work-mobile").offset().top
		});
	}
});
