@extends('layouts.app')

@php
$title = 'Home';
$menuItem = 'home';
// $description = 'description';
// $bodyClass = 'body-class';
@endphp

@section('content')

<div class="section">
  <div class="hero">
    <div class="hero__image">
      <picture class="visual visual--2x1">
        <source srcset="https://www.view.design/build/images/header.c9d03ca0.jpg" type="image/webp">
        <img src="https://www.view.design/build/images/header.c9d03ca0.jpg" alt="Example Image">
      </picture>
    </div>
    <div class="hero__content">
      <h1 class="hero__title">Less frame more view</h1>
      <h2 class="hero__subtitle">Subtitle</h2>
    </div>
  
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="grid">
      <div class="grid__item medium--one-half large--two-quarters">
        <h2>Less frame more view</h2>
      </div>
      <div class="grid__item medium--one-half large--two-quarter">
        <p>Met jarenlange ervaring en meer dan een paar 100 succesvolle projecten over heel België is VIEW uw ideale
          partner voor minimalistische design ramen. Met een van de fijnste raamprofielen op de markt bieden wij
          architecturale oplossingen voor uw renovatie- of nieuwbouwproject en zoeken we graag nieuwe grenzen voor uw
          wooncomfort op. Wil u ook een ongehinderd buitenzicht?</p>
        <a href="minimalistic-windows.html" class="button">Bekijk onze ramen</a>
      </div>
    </div>
  </div>
</div>


<div class="section">
  <div class="container">
    <div class="grid--justify-center">
      <h2>Recente realisaties</h2>
    </div>
  </div>

  <div class="container">
    <div class="grid">

      <div class="grid__item medium--one-half large--one-third">
        <div class="article">
          <picture class="visual visual--2x1">
            <source
              srcset="https://www.view.design/storage/realizations/image/18/renovatie-prachtige-herenwoning-te-brussel.jpg?t=1611407323"
              type="image/webp">
            <img
              src="https://www.view.design/storage/realizations/image/18/renovatie-prachtige-herenwoning-te-brussel.jpg?t=1611407323"
              alt="Example Image">
          </picture>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <a href="article-detail.html" class="button">
            BEKIJK PROJECT
            <span class="vh"> | Article Title</span>
          </a>
        </div>
      </div>

      <div class="grid__item medium--one-half large--one-third">
        <div class="article">
          <picture class="visual visual--2x1">
            <source
              srcset="https://www.view.design/storage/realizations/image/17/prachtige-renovatie-in-sint-genesius-rode.jpg?t=1608050058"
              type="image/webp">
            <img
              src="https://www.view.design/storage/realizations/image/17/prachtige-renovatie-in-sint-genesius-rode.jpg?t=1608050058"
              alt="Example Image">
          </picture>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <a href="article-detail.html" class="button">
            BEKIJK PROJECT
            <span class="vh"> | Article Title</span>
          </a>
        </div>
      </div>

      <div class="grid__item medium--one-half large--one-third">
        <div class="article">
          <picture class="visual visual--2x1">
            <source
              srcset="https://www.view.design/storage/realizations/image/4/prachtige-vakantiewoning-in-knokke.jpg?t=1608018351"
              type="image/webp">
            <img
              src="https://www.view.design/storage/realizations/image/4/prachtige-vakantiewoning-in-knokke.jpg?t=1608018351"
              alt="Example Image">
          </picture>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <a href="article-detail.html" class="button">
            BEKIJK PROJECT
            <span class="vh"> | Article Title</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    <div class="hero-image">
      <picture class="visual visual--2x1">
        <source srcset="https://www.view.design/build/images/header.c9d03ca0.jpg" type="image/webp">
        <img src="https://www.view.design/build/images/header.c9d03ca0.jpg" alt="Example Image">
      </picture>
    </div>
  </div>
</div>



<div class="section">
  <div class="container">
  </div>
  <div class="container">
    <div class="grid">

      <div class="grid__item medium--one-half large--one-third">
        <picture class="visual visual--2x1">
          <source srcset="https://www.view.design/build/images/sfeer-3.95dfc9e3.jpg" type="image/webp">
          <img src="https://www.view.design/build/images/sfeer-3.95dfc9e3.jpg" alt="Example Image">
        </picture>
      </div>

      <div class="grid__item medium--one-half large--one-third">
        <picture class="visual visual--2x1">
          <source srcset="https://www.view.design/build/images/sfeer-2.9f5426bf.jpg" type="image/webp">
          <img src="https://www.view.design/build/images/sfeer-2.9f5426bf.jpg" alt="Example Image">
        </picture>
      </div>

      <div class="grid__item medium--one-half large--one-third">
        <picture class="visual visual--2x1">
          <source srcset="https://www.view.design/build/images/sfeer-1.4b53232d.jpg" type="image/webp">
          <img src="https://www.view.design/build/images/sfeer-1.4b53232d.jpg" alt="Example Image">
        </picture>
      </div>
    </div>
  </div>
</div>




@endsection