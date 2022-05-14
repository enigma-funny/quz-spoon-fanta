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
  let insidemarqtext=`All the MCQ's are collected from internet so  it is advisible to verify it again | If any answer is incorrect  u can share it <code><a href="http://google" class="a1-class text-primary">click here</a></code>`
  let html = `<marquee direction="left" speed="normal" behavior="loop" scrollamount="6" >${insidemarqtext}</marquee>`;
  h2.insertAdjacentHTML("beforeend", html);
// marquee ends 



  let lsfrcls=["p-3","question-container1","shadow-sw","border","m-2"]

  const ads1 = document.getElementById("adss1");
  const ads5 = document.getElementById("ads5");
  const ads13 = document.getElementById("ads13");
  const ads19 = document.getElementById("ads19");
  const ads25 = document.getElementById("ads25");

// const cusprt7 = document.getElementById("cusprt7");
// const cusprt11 = document.getElementById("cusprt11");
// const cusprt15 = document.getElementById("cusprt15");
// const cusprt23 = document.getElementById("cusprt23");

  
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



