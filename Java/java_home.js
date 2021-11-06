var mybutton = document.getElementById ("mybt");
var navbardemo = document.getElementById ("navbar");
	window.onscroll = function(){scrollFunction()};
	function scrollFunction(){
	  if(document.body.scrollTop>200 || document.documentElement.scrollTop > 200){
		mybutton.style.display = "block";
		navbardemo.style.display = "block";
	  }else{
		mybutton.style.display = "none";
		navbardemo.style.display = "none";
	  }
	}

	function topFunction(){
		document.body.scroll=0;
		document.documentElement.scrollTop=0;
	}