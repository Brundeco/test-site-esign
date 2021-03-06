<div class="modal modal--fullscreen modal--fade js-modal mobile-nav" id="navigation" data-hide-hash="true" data-title="Navigation"  data-show-timeout="500" data-hide-timeout="500">
  <div class="container">
    <div class="mobile-nav__content">
      <div class="mobile-nav__main">
        @include('components.nav.main', ['nav' => 'mobile-nav'])
      </div>
      <div class="mobile-nav__footer">
        <ul class="social-icons">
          <li class="social-icons__item">
            <a href="#" class="social-icons__link" target="_blank">
              <svg class="icon icon-facebook">
                <use xlink:href="#icon-facebook" />
              </svg>
              <span class="vh">Volg ons op Facebook</span>
            </a>
          </li>
          <li class="social-icons__item">
            <a href="#" class="social-icons__link" target="_blank">
              <svg class="icon icon-twitter">
                <use xlink:href="#icon-twitter" />
              </svg>
              <span class="vh">Volg ons op Twitter</span>
            </a>
          </li>
          <li class="social-icons__item">
            <a href="#" class="social-icons__link" target="_blank">
              <svg class="icon icon-instagram">
                <use xlink:href="#icon-instagram" />
              </svg>
              <span class="vh">Volg ons op Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <button type="button" class="modal__close js-modal-close js-compensate-for-scrollbar">
    <svg class="icon icon-close">
      <use xlink:href="#icon-close"/>
    </svg>
  </button>
</div>
