!function($){$.fn.jQuerySimpleCounter=function(b){let a=$.extend({start:0,end:100,easing:"swing",duration:400,complete:""},b),c=$(this);$({count:a.start}).animate({count:a.end},{duration:a.duration,easing:a.easing,step:function(){let a=Math.ceil(this.count);c.text(a)},complete:a.complete})}}(jQuery);const locoScroll=new LocomotiveScroll({el:document.querySelector(".locomotive-scroll"),smooth:!0,multiplier:.35});locoScroll.stop();let timer=setInterval(remove,10);function remove(){$(".w-webflow-badge").remove()}setTimeout(()=>{$("#count").jQuerySimpleCounter({start:0,end:100,easing:"swing",duration:7e3}),document.getElementById("sketch").style.display="block"},2e3);let test_timer=setInterval(test,10);function test(){parseInt($("#count")[0].innerHTML)>8&&$("#zero").css("display","none"),"100"==$("#count")[0].innerHTML&&($(".w-webflow-badge").remove(),clearInterval(timer),clearInterval(test_timer),document.body.style.cursor="default",$("#canvas-div").css("pointer-events","none"),$(".trigger1").click(),setTimeout(()=>{locoScroll.update(),locoScroll.start(),$("head").append('<link rel="stylesheet" href="https://druh.in/folio2022/css/preview.css"/>')},1750))}const about=document.querySelector("#about"),work=document.querySelector("#work"),awards=document.querySelector("#awards"),testimonials=document.querySelector("#testimonials"),contact=document.querySelector("#contact");$("#about-link").click(function(){locoScroll.scrollTo(about)}),$("#work-link").click(function(){locoScroll.scrollTo(work)}),$("#awards-link").click(function(){locoScroll.scrollTo(awards)}),$("#testimonials-link").click(function(){locoScroll.scrollTo(testimonials)}),$("#contact-link").click(function(){locoScroll.scrollTo(contact)})