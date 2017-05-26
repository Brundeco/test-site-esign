$(function() {
	$(document).on('keydown', function(e) {
	    var tag = e.target.tagName.toLowerCase();
	    
	    //console.log(e.which);
	        
	    if (tag != 'input' && tag != 'textarea') {
	    	// example show nav on keydown 'm'
	    	if(e.which === 77) {
	    		$('body').toggleClass('show-nav');
	    	}
	    	
	    }
	});
});