/*
* See https://github.com/humaan/Modaal for more options
* */

esign.modal = function () {

    $('.modaal-trigger').modaal({
        type: 'inline',
        animation_speed: 200,
        fullscreen: false,

        // Add hashing
        before_open: function () {
            window.location.hash = this.$elem[0].hash;
        },
        before_close: function () {
            window.location.hash = '';
        }
    });

    $('.modaal-fullscreen-trigger').modaal({
        type: 'inline',
        animation_speed: 200,
        fullscreen: true,

        // Add hashing
        before_open: function () {
            window.location.hash = this.$elem[0].hash;
        },
        before_close: function () {
            window.location.hash = '';
        }
    });

    // Data-attributes overwrite js settings
    $('.modaal-data-trigger').modaal();

    // Open modal from hash
    var $modalTrigger = $('a[href="' +  window.location.hash + '"]').first();
    if ($modalTrigger.length) { $modalTrigger.trigger('click') }

};

