$(function() {
	
	/* Accordion
	 * uses .accordion-trigger as a[href="#id"], label[for="id"], div[data-href="#id"]
	 * 		.accordion-content as wrap
	 */
	$('.accordion-trigger').click(function(e) {
		e.preventDefault();
		
		var $this = $(this),
			$target = null;
		
		// get target
		if($this.is('a')) {
			$target = $($this.attr('href'));
		} else if ($this.is('label')) {
			$target = $('#' + $this.attr('for')).closest('.accordion-content');
		} else if($this.is('div')) {
			$target = $($this.data('href'));
		}
				
		// toggle target
		if($target !== null) {
			$this.toggleClass('active');
			$target.toggle('fast');
		}
		
	});
	
});