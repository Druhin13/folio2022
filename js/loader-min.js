!function($){$.fn.jQuerySimpleCounter=function(b){let a=$.extend({start:0,end:100,easing:"swing",duration:400,complete:""},b),c=$(this);$({count:a.start}).animate({count:a.end},{duration:a.duration,easing:a.easing,step:function(){let a=Math.ceil(this.count);c.text(a)},complete:a.complete})}}(jQuery);const locoScroll=new LocomotiveScroll({el:document.querySelector(".locomotive-scroll"),smooth:!0,multiplier:.75});locoScroll.stop();let timer=setInterval(remove,10);function remove(){$(".w-webflow-badge").remove()}setTimeout(()=>{var a=document.createElement("canvas");a.id="sketch",a.className="sketch",a.style.position="absolute",a.style.zIndex="100",a.style.backgroundColor="#ffffff00",a.style.marginLeft="52vw",document.body.insertBefore(a,document.body.firstChild);let b=document.getElementById("sketch"),c=b.getContext("2d");b.width=parent.offsetWidth,b.height=parent.offsetHeight,c.canvas.width=parent.offsetWidth,c.canvas.height=parent.offsetHeight;let f={x:0,y:0};function d(){c.canvas.width=window.innerWidth,c.canvas.height=window.innerHeight}function g(a){f.x=a.clientX-b.offsetLeft,f.y=a.clientY-b.offsetTop}function e(a){document.addEventListener("mousemove",h),g(a)}function h(a){c.beginPath(),c.lineWidth=1.15,c.lineCap="round",c.strokeStyle="#A4A4A4",c.moveTo(f.x,f.y),g(a),c.lineTo(f.x,f.y),c.stroke()}document.addEventListener("mouseover",e),window.addEventListener("resize",d),d(),$("#count").jQuerySimpleCounter({start:0,end:100,easing:"swing",duration:5e3})},2e3),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(b){function e(){if(i.length){var l,m,k,h=0,n=b.map(i,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(f=f||((k={height:d.innerHeight,width:d.innerWidth}).height||((l=c.compatMode)||!b.support.boxModel)&&(k={height:(m="CSS1Compat"===l?a:c.body).clientHeight,width:m.clientWidth}),k),g=g||{top:d.pageYOffset||a.scrollTop||c.body.scrollTop,left:d.pageXOffset||a.scrollLeft||c.body.scrollLeft};h<i.length;h++)if(b.contains(a,n[h][0])){var e=b(n[h]),o={height:e[0].offsetHeight,width:e[0].offsetWidth},j=e.offset(),p=e.data("inview");if(!g||!f)return;j.top+o.height>g.top&&j.top<g.top+f.height&&j.left+o.width>g.left&&j.left<g.left+f.width?p||e.data("inview",!0).trigger("inview",[!0]):p&&e.data("inview",!1).trigger("inview",[!1])}}}var f,g,h,i=[],c=document,d=window,a=c.documentElement;b.event.special.inview={add:function(a){i.push({data:a,$element:b(this),element:this}),!h&&i.length&&(h=setInterval(e,250))},remove:function(c){for(var a=0;a<i.length;a++){var b=i[a];if(b.element===this&&b.data.guid===c.guid){i.splice(a,1);break}}i.length||(clearInterval(h),h=null)}},b(d).bind("scroll resize scrollstop",function(){f=g=null}),!a.addEventListener&&a.attachEvent&&a.attachEvent("onfocusin",function(){g=null})});let test_timer=setInterval(test,10);function test(){parseInt($("#count")[0].innerHTML)>8&&$("#zero").css("display","none"),"100"==$("#count")[0].innerHTML&&($(".w-webflow-badge").remove(),clearInterval(timer),clearInterval(test_timer),document.body.style.cursor="default",$("#canvas-div").css("pointer-events","none"),$(".trigger1").click(),setTimeout(()=>{document.getElementById("sketch").style.display="none"},1e3),setTimeout(()=>{locoScroll.update(),locoScroll.start(),$("head").append('<link rel="stylesheet" href="https://druh.in/folio2022/css/preview.css"/>')},750))}const about=document.querySelector("#about"),work=document.querySelector("#work"),awards=document.querySelector("#awards"),testimonials=document.querySelector("#testimonials"),contact=document.querySelector("#contact-test");$("#about-link").click(function(){locoScroll.scrollTo(about)}),$("#work-link").click(function(){locoScroll.scrollTo(work)}),$("#awards-link").click(function(){locoScroll.scrollTo(awards)}),$("#testimonials-link").click(function(){locoScroll.scrollTo(testimonials)}),$("#contact-link").click(function(){locoScroll.scrollTo(contact)});let options={timeZone:"Europe/London",hour:"2-digit",minute:"2-digit"},formatter=new Intl.DateTimeFormat([],options),time_a=formatter.format(new Date),ctime=setInterval(timecalc,1e3);function timecalc(){let a=formatter.format(new Date);$("#time").text(a),a!=time_a&&(time_a=a,$(".circle").click())}const cs1=document.getElementById("cs1"),cs2=document.getElementById("cs2"),cs3=document.getElementById("cs3"),cs4=document.getElementById("cs4"),cs5=document.getElementById("cs5"),cs6=document.getElementById("cs6"),cs7=document.getElementById("cs7"),cs8=document.getElementById("cs8"),cs9=document.getElementById("cs9"),cs10=document.getElementById("cs10"),cs11=document.getElementById("cs11"),cs12=document.getElementById("cs12"),cs13=document.getElementById("cs13");cs1.addEventListener("click",()=>{let a=parseInt("cs1".slice(2)),b=9,d=Math.round(31.65+3.15*(13-a))+"%";$("#disable-hover").css("display","block");let c=b+a;$("#blur-up").css("z-index",c),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",d)},300)}),cs2.addEventListener("click",()=>{let a=parseInt("cs2".slice(2)),b=9,d=Math.round(31.65+3.15*(13-a))+"%";$("#disable-hover").css("display","block");let c=b+a;$("#blur-up").css("z-index",c),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",d)},300)}),cs3.addEventListener("click",()=>{let a=parseInt("cs3".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 10px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs4.addEventListener("click",()=>{let a=parseInt("cs4".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 10px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs5.addEventListener("click",()=>{let a=parseInt("cs5".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 10px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs6.addEventListener("click",()=>{let a=parseInt("cs6".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 15px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs7.addEventListener("click",()=>{let a=parseInt("cs7".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 15px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs8.addEventListener("click",()=>{let a=parseInt("cs8".slice(2)),b=9,d=Math.round(31.65+3.15*(13-a))+"%";$("#disable-hover").css("display","block");let c=b+a;$("#blur-up").css("z-index",c),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",d)},300)}),cs9.addEventListener("click",()=>{let a=parseInt("cs9".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 5px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs10.addEventListener("click",()=>{let a=parseInt("cs10".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 10px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs11.addEventListener("click",()=>{let a=parseInt("cs11".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 10px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs12.addEventListener("click",()=>{let a=parseInt("cs12".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 10px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)}),cs13.addEventListener("click",()=>{let a=parseInt("cs13".slice(2)),c=9,b=Math.round(31.65+3.15*(13-a))+"%";b="calc("+b+" - 15px)",$("#disable-hover").css("display","block");let d=c+a;$("#blur-up").css("z-index",d),setTimeout(()=>{locoScroll.stop(),$("#blur-up").css("height","100%"),$("#blur-down").css("height",b)},300)});const disable_cs=document.getElementById("disable-hover");disable_cs.addEventListener("click",()=>{$("#disable-hover").css("display","none"),$("#blur-up").css("height","0%"),$("#blur-down").css("height","0%"),setTimeout(()=>{locoScroll.start(),$("#blur-up").css("z-index","9")},300)});const CS2locoScroll=new LocomotiveScroll({el:document.querySelector(".vtf-cs-main"),smooth:!0,multiplier:.75});CS2locoScroll.start();let t,hoverTime=2e3;$("#cs1").is(":hover")?t=setTimeout("show_preview()",hoverTime):(clearTimeout(t),$(".cs1-close-trigger").click())