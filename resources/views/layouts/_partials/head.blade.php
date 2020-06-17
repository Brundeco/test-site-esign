<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>{{ $siteTitle }}</title>
  <meta name="description" content="{{ $description }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Made by Esign -->
  <!-- Esign is @ http://www.esign.eu/ -->
  <!-- Esign contact: info@esign.eu -->

  {{-- <meta property="fb:app_id" content=""> --}}
  <meta property="og:title" content="{{ $siteTitle }}">
  <meta property="og:description" content="{{ $description }}" >
  <meta property="og:url" content="nl">
  {{-- TODO <meta property="og:image" content="${require(`../assets/images/share-image.jpg`)}"> --}}
  <meta property="og:site_name" content="Template">
  <meta property="og:type" content="website">
  {{-- <meta property="article:author" content=""> --}}

  {{-- <meta name="twitter:site" content="@"> --}}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ $siteTitle }}">
  <meta name="twitter:description" content="{{ $description }}">
  {{-- TODO <meta name="twitter:image" content="${require(`../../assets/images/share-image.jpg`)}"> --}}

  {{-- TODO <link rel="shortcut icon" href="${require(`../../assets/images/icons/favicon.ico`)}" type="image/x-icon"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="57x57" href="${require(`../../assets/images/icons/apple-icon-57x57.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="60x60" href="${require(`../../assets/images/icons/apple-icon-60x60.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="72x72" href="${require(`../../assets/images/icons/apple-icon-72x72.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="76x76" href="${require(`../../assets/images/icons/apple-icon-76x76.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="114x114" href="${require(`../../assets/images/icons/apple-icon-114x114.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="120x120" href="${require(`../../assets/images/icons/apple-icon-120x120.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="144x144" href="${require(`../../assets/images/icons/apple-icon-144x144.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="152x152" href="${require(`../../assets/images/icons/apple-icon-152x152.png`)}"> --}}
  {{-- TODO <link rel="apple-touch-icon" sizes="180x180" href="${require(`../../assets/images/icons/apple-icon-180x180.png`)}"> --}}
  {{-- TODO <link rel="icon" type="image/png" sizes="192x192"  href="${require(`../../assets/images/icons/android-icon-192x192.png`)}"> --}}
  {{-- TODO <link rel="icon" type="image/png" sizes="32x32" href="${require(`../../assets/images/icons/favicon-32x32.png`)}"> --}}
  {{-- TODO <link rel="icon" type="image/png" sizes="96x96" href="${require(`../../assets/images/icons/favicon-96x96.png`)}"> --}}
  {{-- TODO <link rel="icon" type="image/png" sizes="16x16" href="${require(`../../assets/images/icons/favicon-16x16.png`)}"> --}}

  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#ffffff">
  <meta name="msapplication-config" content="browserconfig.xml" />
  <meta name="msapplication-TileColor" content="#ffffff">
  {{-- TODO <meta name="msapplication-TileImage" content="${require(`../../assets/images/icons/ms-icon-144x144.png`)}"> --}}

  {{-- <link rel="dns-prefetch" href="//fonts.googleapis.com"> --}}
  {{-- <link rel="dns-prefetch" href="//use.typekit.net"> --}}
  <link rel="dns-prefetch" href="//google-analytics.com">
  <link rel="dns-prefetch" href="//www.google-analytics.com">
  <link rel="dns-prefetch" href="//www.google.com">{{-- (recaptcha) --}}
  {{-- <link rel="dns-prefetch" href="//ebugs.esign.eu"> --}}

  {{-- place typekit or google fonts css here --}}

  {{-- inline css: no flash --}}
  <style>
    .modal {
      visibility: hidden;
    }
  </style>
  {{-- frontend template font, remove when you don't need it --}}
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Poppins:500,600&display=swap" rel="stylesheet">
  {{-- not needed for webpack setup: --}}
  {{-- <link rel="stylesheet" href="../assets/css/style.css"> --}}


  {{-- google analytics --}}
  {{-- <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-xxxxxxxx-x', 'auto');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');
  </script> --}}
</head>
