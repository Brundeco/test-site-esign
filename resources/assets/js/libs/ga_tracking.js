/*
 * Google Analytics tracking
 *
 * Tracks:
 *		- mailto-links
 *		- external links
 *		- PDF and JPG links
 *		- links with class trackbtn and optionally data-title="Title to show in results"
 *
 *	@author Jonas De Smet
 *
 *	requires jQuery and Google Analytics async tracking
 */
$(function() {

	var external = [];
	var mails = [];
	var files = [];
	var trackbtns = [];
	var filetypes = ['pdf','jpg'];
	var links = $('a');
	var l_length = links.length;
	for (i=0;i<l_length;i++)
	{
		var $elem = $(links[i]);
		var href = $elem.attr('href');

		if (href !== undefined)
		{
			if ((href.match(/^https?\:/i)) && (!href.match(document.domain)))
			{
				external.push(links[i]);
			}
			else if (href.match(/^mailto\:/i))
			{
				mails.push(links[i]);
			}
			else if ($.inArray(href.split('.')[href.split('.').length - 1], filetypes) >= 0)
			{
				files.push(links[i]);
			}
			else if($elem.hasClass('tracking'))
			{
				trackbtns.push(links[i]);
			}
		}
	}

	$(external).on('click', function(){
		var link = $(this);
		var linktxt = (link.attr('title') !== '') ? link.attr('title') + ' [' + link.attr('href').replace(/^https?\:\/\//i, '') + ']' : link.attr('href').replace(/^https?\:\/\//i, '');
		ga('send', 'event', 'external', 'visit', linktxt);
	});

	$(mails).on('click', function(){
		var email = $(this);
		var emailtxt = email.attr('href').substring(7);
		ga('send', 'event', 'mailto', 'click', emailtxt);
	});

	$(files).on('click', function(){
		var file = $(this);
		var filehref = file.attr('href');
		var fileext = filehref.split('.')[filehref.split('.').length - 1];
		var filename = filehref.substring(filehref.lastIndexOf('/')+1);
		ga('send', 'event', 'download', fileext, filename);
	});

	$(trackbtns).on('click', function(){
		var link = $(this);
		var txt = (link.data('title') !== 'undefined') ? link.data('title') : link.attr('href').replace(/^https?\:\/\//i, '');
		ga('send', 'event', 'button', 'click', txt);
	});

});
