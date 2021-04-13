@php
$siteTitle = "$title - Template";
$description = $description ?? null;
$dataPage = $dataPage ?? null;
$bodyClass = $bodyClass ?? null;
$googleTagManagerCode = 'GTM-xxxxxxx'; // 'GTM-xxxxxxx' or null
@endphp
<!doctype html>
<html class="no-js" lang="nl" data-page="{{ $dataPage }}">
@include('layouts._partials.head')

<body class="{{ $bodyClass }}">
  <a href="#main" class="skip-link">Skip to main content</a>

  <div class="page-wrap">
    @section('header')
    @include('components.base.header')
    @show

    <main id="main" class="main">
      @yield('content')
    </main>

    @section('footer')
    @include('components.base.footer')
    @show

    @include('components.base.cookie-notification')
    @include('components.base.browser-support')
    @include('components.nav.modal')
  </div>


  <div class="hide">
    {{--
      SVG Template:
      <svg class="icon icon-">
        <use xlink:href="#icon-"/>
      </svg>
    --}}
    @include('layouts._partials.svg-sprite')
  </div>

  {{-- Lazy loaded recaptcha source (see the form component) --}}
  <script id="script-recaptcha"
    data-src="https://www.google.com/recaptcha/api.js?hl=en&onload=onloadRecaptchaCallback&render=explicit" async defer
  ></script>

  @if ($dataPage == 'contact')
  <script src="https://maps.googleapis.com/maps/api/js?language=nl"></script>
  <script>
    var markerImg = '${require(`../../assets/images/marker.png`)}';
  </script>
  @endif

  {{-- Google Tag Manager (noscript) --}}
  @if ($googleTagManagerCode)
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ $googleTagManagerCode }}"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  @endif
</body>

</html>
