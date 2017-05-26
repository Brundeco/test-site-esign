/**
 * Created by bart delrue on 23/05/17.
 */

(function () {
    'use strict';

    var startBtns = document.querySelectorAll('button[data-video-start]');
    var videoClickEvent = function (video, videoUrl) {
        console.log(video);
        video.innerHTML = "<iframe height='100%' width='100%'" +
            " src='" + videoUrl + "' " +
            " frameborder='0'" +
            " allowfullscreen></iframe>";
    };

    for (var v = startBtns.length; v > 0; v--) {
        startBtns[v - 1].addEventListener('click',
            function (e) {
                e.preventDefault();
                var videoURL = this.getAttribute('data-video');
                if (videoURL)
                    videoClickEvent(this.parentElement, videoURL)
            }
        );
    }
})();
