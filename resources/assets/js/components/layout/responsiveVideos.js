import $ from 'jquery';

export default function () {
  $(`iframe[src*="youtube.com/embed"],
    iframe[src*="youtube-nocookie.com/embed"],
    iframe[src*="player.vimeo"]`)
    .wrap('<div class="video-container"></div>');
}
