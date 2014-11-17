$(document).ready(function(){
	$('#navigation').on('click','li', function(e){
		for(var i in e.currentTarget.parentNode.childNodes){
			if(e.currentTarget.parentNode.childNodes[i].nodeName='LI'){
				e.currentTarget.parentNode.childNodes[i].className="";
			}
		}
		e.currentTarget.className="active";
	});
});