@extends('layouts.app')

@php
$title = 'Minimalistic window';
$menuItem = 'minimalistic-window';
// $description = 'description';
// $bodyClass = 'body-class';
@endphp

@section('content')

<div class="section">
  <div class="container">
    <div class="grid">
      <div class="grid__item medium--one-whole">
        <h2>Less frame more view</h2>
      </div>
      <div class="grid__item medium--one-half large--two-quarter">
        {{-- <p>Met jarenlange ervaring en meer dan een paar 100 succesvolle projecten over heel België is VIEW uw ideale
          partner voor minimalistische design ramen. Met een van de fijnste raamprofielen op de markt bieden wij
          architecturale oplossingen voor uw renovatie- of nieuwbouwproject en zoeken we graag nieuwe grenzen voor uw
          wooncomfort op. Wil u ook een ongehinderd buitenzicht?</p> --}}
        <a href="minimalistic-windows.html" class="button">Bekijk onze ramen</a>
      </div>
    </div>
  </div>
</div>

@endsection