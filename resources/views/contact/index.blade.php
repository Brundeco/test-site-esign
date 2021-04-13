@extends('layouts.app')

@php
$title = 'Contact';
$menuItem = 'contact';
$dataPage = 'contact';
$breadcrumbs = [
['label' => $title, 'url' => '#'],
];
@endphp

@section('content')
<div class="section">
  <div class="container">
    <h1>{{ $title }}</h1>

    <div class="grid">
      <div class="grid__item medium--one-third large--one-third">
        <div class="contact">
          <ul class="contact__list">
            <li class="contact__link"> <a href="">info@view.design</a> </li>
            <li class="contact__link"> <a href="">+32492818218</a> </li>
            <li class="contact__title">Showroom op afspraak</li>
            <li class="contact__link"> <a href="">Grote Steenweg 1, 9809 De Pinte</a> </li>
          </ul>
        </div>
      </div>
      <div class="grid__item medium--two-thirds large--two-thirds">

        <div class="input-group">
          <label for="name">
            Name
            <span class="required" aria-hidden="true">*</span>
          </label>
          <input type="text" id="name" name="name" autocomplete="name" required>

        </div>
        <div class="input-group">
          <label for="email">
            email
            <span class="required" aria-hidden="true">*</span>
          </label>
          <input type="email" id="email" name="email" autocomplete="email" required>

        </div>
        <div class="input-group">
          <label for="phone">
            Phone
            <span class="required" aria-hidden="true">*</span>
          </label>
          <input type="number" id="phone" name="phone" required>
        </div>

        <div class="input-group">
          <label for="message">
            Jouw bericht
            <span class="required" aria-hidden="true">*</span>
          </label>
          <textarea name="message" id="message" required></textarea>
        </div>

        <div class="input-group">
          <div class="grid">
            <div class="grid__item whole">
              <input type="checkbox" id="privacy_1" name="privacy" value="1">
              <label for="privacy_1">
                I agree my data will be processed in
              </label>
            </div>
          </div>
        </div>

        <button class="button">Verzenden</button>
      </div>
    </div>
  </div>
</div>
@endsection