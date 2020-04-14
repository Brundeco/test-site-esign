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

  @include('components.base.breadcrumbs')

  <h1>{{ $title }}</h1>

  {{-- No content fallback --}}
  <p>No articles have been written yet.</p>

  @include('components.articles.list')
  @include('components.nav.pagination')

</div>
@endsection
