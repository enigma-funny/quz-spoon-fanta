
let processScroll = () => {
	let docElem = document.documentElement, 
		docBody = document.body,
		scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
    	scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
		scrollPercent = scrollTop / scrollBottom * 100 + '%';
		
	// console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
	
    document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent);	
}
document.addEventListener('scroll', processScroll);

function toggle_visibility(id) {
	var e = document.getElementById(id);
	e.style.display = ((e.style.display != 'none') ? 'none' : 'inline');
  }


// marquee tag scrp
  const h2 = document.getElementById("mrqtop");
  let insidemarqtext=`All the MCQ's are collected from internet so  it is advisible to verify it again | If any answer is incorrect  u can share it <code><a href="/mcqsubmitanswer.html" target="_blank" class="a1-class text-primary">👉click here</a></code>`
  let html = `<marquee direction="left" speed="normal" behavior="loop" scrollamount="6" >${insidemarqtext}</marquee>`;
  h2.insertAdjacentHTML("beforeend", html);
// marquee ends 



  let lsfrcls=["question-container2","shadow-sw","border","m-1"]
  const sidesectionn=document.getElementById("section-2-1");
  const ads1 = document.getElementById("adss1");
  const ads5 = document.getElementById("ads5");
  const ads13 = document.getElementById("ads13");
  const ads19 = document.getElementById("ads19");
  const ads25 = document.getElementById("ads25");

// const cusprt7 = document.getElementById("cusprt7");
// const cusprt11 = document.getElementById("cusprt11");
// const cusprt15 = document.getElementById("cusprt15");
// const cusprt23 = document.getElementById("cusprt23");

  

  let sidesectionnhtml=`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147271038808510"crossorigin="anonymous"></script><!-- quiz.qpkendra.com-sidebar-gads-1 --><ins class="adsbygoogle"style="display:block"data-ad-client="ca-pub-2147271038808510"data-ad-slot="2375000389"data-ad-format="auto"data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`
  sidesectionn.insertAdjacentHTML("beforeend", sidesectionnhtml);


//   ads1.classList.add(...lsfrcls);
//   let ads1html=`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147271038808510" crossorigin="anonymous"></script><!-- quiz.qpkendra.com(inside-mcq-after-Q1) --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2147271038808510" data-ad-slot="9931475989" data-ad-format="auto" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({});</script>`
//   ads1.insertAdjacentHTML("beforeend", ads1html);
  
  ads5.classList.add(...lsfrcls);
  let ads5html=`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147271038808510" crossorigin="anonymous"></script><!-- quiz.qpkendra.com(inside-mcq-after-Q5) --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2147271038808510" data-ad-slot="1956197983" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`
  ads5.insertAdjacentHTML("beforeend", ads5html);

//   ads13.classList.add(...lsfrcls);
//   let ads13html=`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147271038808510" crossorigin="anonymous"></script><!-- quiz.qpkendra.com(inside-mcq-after-Q13) --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2147271038808510" data-ad-slot="6386397588" data-ad-format="auto" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({});</script>`
//   ads13.insertAdjacentHTML("beforeend", ads13html);

  ads19.classList.add(...lsfrcls);
  let ads19html=`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147271038808510" crossorigin="anonymous"></script><!-- quiz.qpkendra.com(inside-mcq-after-Q19) --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2147271038808510" data-ad-slot="4909664383" data-ad-format="auto" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({});</script>`
  ads19.insertAdjacentHTML("beforeend", ads19html);

//   ads25.classList.add(...lsfrcls);
//   let ads25html=`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2147271038808510" crossorigin="anonymous"></script><!-- quiz.qpkendra.com(inside-mcq-after-Q25) --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2147271038808510" data-ad-slot="6109877989" data-ad-format="auto" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({});</script>`
//   ads25.insertAdjacentHTML("beforeend", ads25html);



// jsfileanchor
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
// lk /anchor.min.js
// AnchorJS - v4.3.1 - 2021-04-17
// https://www.bryanbraun.com/anchorjs/
// Copyright (c) 2021 Bryan Braun; Licensed MIT
//
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
!function(A,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():(A.AnchorJS=e(),A.anchors=new A.AnchorJS)}(this,function(){"use strict";return function(A){function d(A){A.icon=Object.prototype.hasOwnProperty.call(A,"icon")?A.icon:"",A.visible=Object.prototype.hasOwnProperty.call(A,"visible")?A.visible:"hover",A.placement=Object.prototype.hasOwnProperty.call(A,"placement")?A.placement:"right",A.ariaLabel=Object.prototype.hasOwnProperty.call(A,"ariaLabel")?A.ariaLabel:"Anchor",A.class=Object.prototype.hasOwnProperty.call(A,"class")?A.class:"",A.base=Object.prototype.hasOwnProperty.call(A,"base")?A.base:"",A.truncate=Object.prototype.hasOwnProperty.call(A,"truncate")?Math.floor(A.truncate):64,A.titleText=Object.prototype.hasOwnProperty.call(A,"titleText")?A.titleText:""}function w(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new TypeError("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}this.options=A||{},this.elements=[],d(this.options),this.isTouchDevice=function(){return Boolean("ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var e,t,o,i,n,s,a,c,r,l,h,u,p=[];if(d(this.options),"touch"===(l=this.options.visible)&&(l=this.isTouchDevice()?"always":"hover"),0===(e=w(A=A||"h2, h3, h4, h5, h6")).length)return this;for(null===document.head.querySelector("style.anchorjs")&&((u=document.createElement("style")).className="anchorjs",u.appendChild(document.createTextNode("")),void 0===(A=document.head.querySelector('[rel="stylesheet"],style'))?document.head.appendChild(u):document.head.insertBefore(u,A),u.sheet.insertRule(".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",u.sheet.cssRules.length),u.sheet.insertRule(":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}",u.sheet.cssRules.length),u.sheet.insertRule("[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}",u.sheet.cssRules.length),u.sheet.insertRule('@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}',u.sheet.cssRules.length)),u=document.querySelectorAll("[id]"),t=[].map.call(u,function(A){return A.id}),i=0;i<e.length;i++)if(this.hasAnchorJSLink(e[i]))p.push(i);else{if(e[i].hasAttribute("id"))o=e[i].getAttribute("id");else if(e[i].hasAttribute("data-anchor-id"))o=e[i].getAttribute("data-anchor-id");else{for(c=a=this.urlify(e[i].textContent),s=0;n=t.indexOf(c=void 0!==n?a+"-"+s:c),s+=1,-1!==n;);n=void 0,t.push(c),e[i].setAttribute("id",c),o=c}(r=document.createElement("a")).className="anchorjs-link "+this.options.class,r.setAttribute("aria-label",this.options.ariaLabel),r.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(r.title=this.options.titleText),h=document.querySelector("base")?window.location.pathname+window.location.search:"",h=this.options.base||h,r.href=h+"#"+o,"always"===l&&(r.style.opacity="1"),""===this.options.icon&&(r.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(r.style.lineHeight="inherit")),"left"===this.options.placement?(r.style.position="absolute",r.style.marginLeft="-1em",r.style.paddingRight=".5em",e[i].insertBefore(r,e[i].firstChild)):(r.style.paddingLeft=".375em",e[i].appendChild(r))}for(i=0;i<p.length;i++)e.splice(p[i]-i,1);return this.elements=this.elements.concat(e),this},this.remove=function(A){for(var e,t,o=w(A),i=0;i<o.length;i++)(t=o[i].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(o[i]))&&this.elements.splice(e,1),o[i].removeChild(t));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){var e=document.createElement("textarea");return e.innerHTML=A,A=e.value,this.options.truncate||d(this.options),A.trim().replace(/'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&-1<(" "+A.firstChild.className+" ").indexOf(" anchorjs-link "),A=A.lastChild&&-1<(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ");return e||A||!1}}});
// @license-end



anchors.options={
  visible:'always',
  placement:'right',
  icon:'#'
};
anchors.add('.main-question-content')