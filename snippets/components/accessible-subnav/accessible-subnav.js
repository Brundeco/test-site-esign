/* Sub nav accessible with tabs */
/* CSS
 *
.sub-nav {
  @media @tablet {
    &.cache { left: -999999px; }
  }
}

html.no-js {
  .sub-nav {
    @media @tablet {
      display: none;
      &:hover { display: block; }
    }
  }
}
 *
 */

$(function() {
  if(Response.band(767)) {
    $('.main-nav .sub-nav')
      .addClass('cache')
      .parent().bind('mouseover focusin', function() {

        $(this).find('ul').removeClass('cache');

      }).bind('mouseout focusout', function() {

        $(this).find('ul').addClass('cache');

      }).on('touchstart', function (e) {

      'use strict';
      var $this = $(this);
      if ($this.hasClass('hover')) {
        $this.removeClass('hover');
        return true;
      } else {
        e.preventDefault();

        $('.main-nav .sub-nav').addClass('cache');

        $this
          .addClass('hover')
          .find('ul').removeClass('cache');

        return false;
      }
    });
  }
});
