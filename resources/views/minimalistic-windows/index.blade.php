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
        <a href="minimalistic-windows.html" class="button">Bekijk onze ramen</a>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div class="container">
    
    <div class="grid accordion">
      <div class="grid__item one-whole">
       <div class="accordion__parent">
         <h4 class="h4">Elektrisch aangedreven schuiframen</h4>
         <span class="button-state">+</span>
       </div>
       <div class="accordion__hide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure voluptates repellendus doloribus aliquam, veritatis dolorem, a quis facere deleniti nisi aperiam quae accusantium repudiandae. Vitae aliquam assumenda laboriosam incidunt?</p>
         <ul>
           <li>Lorem</li>
           <li>Lorem</li>
           <li>Some Lorem</li>
           <li>More lorem</li>
           <li>Lorem finito</li>
         </ul>
         <a href="http://" rel="noopener noreferrer">Test het uit in onze showroom</a>
       </div>
      </div>
    </div>

    <div class="grid accordion">
      <div class="grid__item one-whole">
       <div class="accordion__parent">
         <h4 class="h4">Vliegenraam of muggenhor</h4>
         <span class="button-state">+</span>
       </div>
       <div class="accordion__hide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure voluptates repellendus doloribus aliquam, veritatis dolorem, a quis facere deleniti nisi aperiam quae accusantium repudiandae. Vitae aliquam assumenda laboriosam incidunt?</p>
         <ul>
           <li>Lorem</li>
           <li>Lorem</li>
           <li>Some Lorem</li>
           <li>More lorem</li>
           <li>Lorem finito</li>
         </ul>
         <a href="http://" rel="noopener noreferrer">Test het uit in onze showroom</a>
       </div>
      </div>
    </div>

    <div class="grid accordion">
      <div class="grid__item one-whole">
       <div class="accordion__parent">
         <h4 class="h4">Elektrisch slot</h4>
         <span class="button-state">+</span>
       </div>
       <div class="accordion__hide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure voluptates repellendus doloribus aliquam, veritatis dolorem, a quis facere deleniti nisi aperiam quae accusantium repudiandae. Vitae aliquam assumenda laboriosam incidunt?</p>
         <ul>
           <li>Lorem</li>
           <li>Lorem</li>
           <li>Some Lorem</li>
           <li>More lorem</li>
           <li>Lorem finito</li>
         </ul>
         <a href="http://" rel="noopener noreferrer">Test het uit in onze showroom</a>
       </div>
      </div>
    </div>

    <div class="grid accordion">
      <div class="grid__item one-whole">
       <div class="accordion__parent">
         <h4 class="h4">Een waaier aan kleuren</h4>
         <span class="button-state">+</span>
       </div>
       <div class="accordion__hide">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure voluptates repellendus doloribus aliquam, veritatis dolorem, a quis facere deleniti nisi aperiam quae accusantium repudiandae. Vitae aliquam assumenda laboriosam incidunt?</p>
         <ul>
           <li>Lorem</li>
           <li>Lorem</li>
           <li>Some Lorem</li>
           <li>More lorem</li>
           <li>Lorem finito</li>
         </ul>
         <a href="http://" rel="noopener noreferrer">Test het uit in onze showroom</a>
       </div>
      </div>
    </div>
  </div>
</div>

@endsection