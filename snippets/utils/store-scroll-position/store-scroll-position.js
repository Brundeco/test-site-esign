
esign.storeScrollPosition = function (reset) {
	// only on overview page (optional)
	if($('body').hasClass('overview') && typeof sessionStorage === 'object') {
		// test if you can write to the sessionStorage object
		var sessionStorageIsEnabled = false;
		try {
	        sessionStorage.setItem('localStorage', 1);
	        localStorage.removeItem('localStorage');
	        sessionStorageIsEnabled = true;
	    } catch (e) {
	        Storage.prototype._setItem = Storage.prototype.setItem;
	        Storage.prototype.setItem = function() {};
	        sessionStorageIsEnabled = false;
	    }
		
		if (sessionStorageIsEnabled) {
			var $window = $(window);
			
			if(reset) {
				$window.scrollTop(0);
				sessionStorage.scrollTop = 0;
			}
			
			$window.scroll(function() {
				sessionStorage.scrollTop = $window.scrollTop();
			});
			
			// set scroll position on load
			if (sessionStorage.scrollTop != 'undefined'  && sessionStorage.page === window.location.pathname) {
				$window.scrollTop(sessionStorage.scrollTop);
			}
			
			sessionStorage.page = window.location.pathname;
		}
	}	
	
};