(function tooltip(classname){
	var ttips = document.getElementsByClassName(classname);
	
	if(!document.getElementById("ttipWrap")){
	    var ttipWrap = document.createElement("DIV");
	ttipWrap.id = "ttipWrap";
	document.body.appendChild(ttipWrap);
	}

	for (var i = ttips.length - 1; i >= 0; i--) {
		var existsAlready = ttips[i].getAttribute("data-ttip");
		if(  !existsAlready || existsAlready.length <= 0  ){ //added in v1.1
                     var data = ttips[i].getAttribute("title");
		     ttips[i].setAttribute("title","");
		     ttips[i].setAttribute("data-ttip",data);
                }

		ttips[i].onmouseover = ttipShow;
		ttips[i].onmouseout = ttipHide;

	}

	function ttipShow(e){
	    
		var ttipWrap = document.getElementById("ttipWrap"),
		ex = e.clientX,
		ey = e.clientY;
		ttipWrap.innerHTML = this.getAttribute("data-ttip");
		ttipWrap.style.top =  ey + 10 + "px";
		if( (ttipWrap.offsetWidth + ex) < window.innerWidth ){
		ttipWrap.style.left = ex + 10 +"px";  
		}else{
	    ttipWrap.style.left = window.innerWidth - ttipWrap.offsetWidth +"px";
		}
		
		ttipWrap.style.display = "block";
		this.onmousemove = ttipShow;


	}
	function ttipHide(){

		document.getElementById("ttipWrap").style.display = "none";

	}
})("tooltip");


