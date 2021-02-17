<header class="page-header js-header">

  <div class="container">
    <div class="page-header__content">
      <a href="index.html" class="page-header__logo">
        <img src="../../assets/images/logo.svg" alt="" width="150" />
      </a>

      <button class="main-nav-trigger js-modal-trigger js-compensate-for-scrollbar" data-modal-id="navigation">
        <svg class="icon icon-menu">
          <use xlink:href="#icon-menu"/>
        </svg>
        <span class="vh">Menu</span>
      </button>

      <nav class="main-nav">
        @include('components.nav.main', ['nav' => 'main-nav'])
      </nav>
    </div>
  </div>

</header>

<div class="js-header-push" aria-hidden="true"></div>
