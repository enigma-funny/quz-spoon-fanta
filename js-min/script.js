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