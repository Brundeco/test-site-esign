@php
  $siteTitle = "$title - Template";
  $description = $description ?? null;
  $dataPage = $dataPage ?? null;
  $bodyClass = $bodyClass ?? null;
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

    <main id="main" class="main main--fixed-navigation">

      @yield('content')

    </main>

    @section('footer')
      @include('components.base.footer')
    @show

    @include('components.base.cookie_notification')
    @include('components.nav.modal')
  </div>


  <div class="hide">
    {{--
      SVG Template:
      <svg class="icon icon-">
        <use xlink:href="#icon-"/>
      </svg>
    --}}
    @include('layouts._partials.svg_sprite')
  </div>

  @if ($dataPage == 'contact')
    <script src="https://maps.googleapis.com/maps/api/js?language=nl"></script>
    <script>
      var markerImg = '${require(`../../assets/images/marker.png`)}';
    </script>
  @endif
  {{-- <script src="../assets/js/app.js"></script> --}}
</body>
</html>
