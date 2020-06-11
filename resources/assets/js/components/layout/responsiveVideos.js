export default function() {
  const videos = document.querySelectorAll(
    `iframe[src*="youtube.com/embed"],
    iframe[src*="youtube-nocookie.com/embed"],
    iframe[src*="player.vimeo"]`,
  );

  [...videos].forEach(video => {
    const container = document.createElement('div');
    container.classList.add('visual', 'visual--16x9');
    video.parentNode.insertBefore(container, video);
    container.appendChild(video);
  });
}
