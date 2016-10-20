// edit cacheSelectors function with IS_MOBILE const
esign.cacheSelectors = function () {
	esign.cache = {
		// const
		IS_MOBILE: esign.isMobile()
	};
};

esign.isMobile = function () {
	var deviceAgent = navigator.userAgent.toLowerCase(),
		isMobile = (deviceAgent.match(/(iphone|ipod|ipad)/) ||
					deviceAgent.match(/(android)/)  || 
					deviceAgent.match(/(iemobile)/) || 
					deviceAgent.match(/blackberry/i) || 
					deviceAgent.match(/bada/i)) ||
					(/OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent));
					
	if(isMobile) {
		$('html').addClass('mobile');
	} else {
		$('html').addClass('no-mobile');
	}
	
	return isMobile;
};