/*
* See https://github.com/humaan/Modaal for more options
* */

esign.modal = function () {
    // Centered modal
    $('.modaal-button').modaal({
        type: 'inline',
        animation_speed: 200,
        fullscreen: false
    });

    // Fullscreen modal
    $('.modaal-fullscreen-button').modaal({
        type: 'inline',
        animation_speed: 200,
        fullscreen: true
    });
};

