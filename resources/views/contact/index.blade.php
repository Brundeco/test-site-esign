@extends('layouts/app')

@php
  $title = 'Contact';
  $menuItem = 'contact';
  $dataPage = 'contact';
@endphp

@section('content')
<div class="container">

  <div id="map" class="map"></div>

  <h1>Contact</h1>

  <div class="grid">
    <div class="grid__item medium--one-half">
      <h2>Adres</h2>
    </div>
    <div class="grid__item medium--one-half">
      <h2>Contacteer ons</h2>

      @include('_components/forms/contact')

    </div>
  </div>

</div>
@endsection
