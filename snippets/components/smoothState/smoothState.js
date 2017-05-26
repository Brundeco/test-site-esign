esign.smoothState = function() {


  // Init here.
  var $body = $('body'),
    $main = $('#main'),
    $site = $('html, body'),
    transition = 'fade',
    smoothState;


  //checken of sessionstorage available is als de scrollPos bijgehouden moet worden
  var sessionStorageIsEnabled = false;

  if(typeof sessionStorage === 'object') {

    try {
      sessionStorage.setItem('localStorage', 1);
      localStorage.removeItem('localStorage');
      sessionStorageIsEnabled = true;
    } catch (e) {
      Storage.prototype._setItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function () {
      };
      sessionStorageIsEnabled = false;
    }
  }



  smoothState = $main.smoothState({
    onBefore: function($anchor, $container) {
      //voor de pagina verlaten wordt, wordt er in de sessionstorage de huidige scrollpositie bijgehouden
      //met als key de scrollPos- + pathname van de pagina

      if (sessionStorageIsEnabled) {

        var locationParts = window.location.pathname.split('/');
        var pageName = locationParts[locationParts.length - 1];
        var currScrollPos = $(window).scrollTop();
        window.sessionStorage.setItem('scrollPos-' + pageName, currScrollPos);
      }



      var current = $('[data-viewport]').first().data('viewport'),
        target = $anchor.data('target');
      current = current ? current : 0;
      target = target ? target : 0;

      //als er een direction werd meegegeven zal deze in deze richting animeren
      //wordt gebruikt bij de css animaties

      var direction = $anchor.data('direction');

      if (direction === "left") {
        transition = 'moveleft';
      } else if (direction == "right") {
        transition = 'moveright';
      } else {
        transition = 'fade';
      }
    },

    onStart: {
      duration: 400,
      render: function (url, $container) {
        $main.attr('data-transition', transition);
        $main.addClass('is-exiting');
        $site.animate({scrollTop: 0});
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        $container.html($newContent);

        if (sessionStorageIsEnabled) {
          // check of er een scrollpositie is bijgehouden voor huidige pagina; zoja, scroll er naartoe

          var locationParts = window.location.pathname.split('/');
          var pageName = locationParts[locationParts.length - 1];
          var previousScrollPosition = parseInt(window.sessionStorage.getItem('scrollPos-' + pageName));

          if (previousScrollPosition) {
            //window.scrollTo(0, previousScrollPosition);
            $("html,body").animate({scrollTop: previousScrollPosition});
          }
        }

        //voor css animatie
        $container.removeClass('is-exiting');


      }
    }
  }).data('smoothState');

};