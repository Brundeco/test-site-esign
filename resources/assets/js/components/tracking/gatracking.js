import $ from 'jquery';

export default function () {
  const external = [];
  const mails = [];
  const files = [];
  const trackbtns = [];
  const filetypes = ['pdf', 'jpg'];
  const links = $('a');
  const lLength = links.length;
  for (let i = 0; i < lLength; i += 1) {
    const $elem = $(links[i]);
    const href = $elem.attr('href');

    if (href !== undefined) {
      if ((href.match(/^https?:/i)) && (!href.match(document.domain))) {
        external.push(links[i]);
      } else if (href.match(/^mailto:/i)) {
        mails.push(links[i]);
      } else if ($.inArray(href.split('.')[href.split('.').length - 1], filetypes) >= 0) {
        files.push(links[i]);
      } else if ($elem.hasClass('tracking')) {
        trackbtns.push(links[i]);
      }
    }
  }

  $(external).on('click', () => {
    const link = $(this);
    const linkTxt = link.attr('title') !== '' ? `${link.attr('title')} [${link.attr('href').replace(/^https?:\/\//i, '')} ]` : link.attr('href').replace(/^https?:\/\//i, '');
    ga('send', 'event', 'external', 'visit', linkTxt); // eslint-disable-line no-undef
  });

  $(mails).on('click', () => {
    const email = $(this);
    const emailTxt = email.attr('href').substring(7);
    ga('send', 'event', 'mailto', 'click', emailTxt); // eslint-disable-line no-undef
  });

  $(files).on('click', () => {
    const file = $(this);
    const fileHref = file.attr('href');
    const fileExt = fileHref.split('.')[fileHref.split('.').length - 1];
    const filename = fileHref.substring(fileHref.lastIndexOf('/') + 1);
    ga('send', 'event', 'download', fileExt, filename); // eslint-disable-line no-undef
  });

  $(trackbtns).on('click', () => {
    const link = $(this);
    const txt = (link.data('title') !== 'undefined') ? link.data('title') : link.attr('href').replace(/^https?:\/\//i, '');
    ga('send', 'event', 'button', 'click', txt); // eslint-disable-line no-undef
  });
}
