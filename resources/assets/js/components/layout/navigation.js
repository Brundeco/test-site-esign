import $ from 'jquery';
import { matchMobile } from '../../constants/defaults';

export default function () {
  const $nav = $('.main-nav__wrap');

  $('.main-nav__trigger').click((e) => {
    e.preventDefault();
    $(e.currentTarget).next('.main-nav__wrap').slideToggle('fast');
  });

  matchMobile.addListener((mediaQuery) => {
    if (mediaQuery.matches) {
      $nav.css('display', 'block');
    } else {
      $nav.css('display', 'none');
    }
  });
}
