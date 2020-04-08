@extends('layouts.app')

@php
  $title = 'Nieuws';
  $menuItem = 'news';
  $breadcrumbs = [
      ['label' => $title, 'url' => '#'],
  ];
@endphp

@section('content')
<div class="container">

  @include('_components.base.breadcrumbs')

  <h1>{{ $title }}</h1>

  {{-- No content fallback --}}
  <p>No articles have been written yet.</p>

  @include('_components.articles.list')
  @include('_components.nav.pagination')

</div>
@endsection
