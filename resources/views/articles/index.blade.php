@extends('layouts/app')

@php
  $title = 'Nieuws';
  $menuItem = 'news';
@endphp

@section('content')
<div class="container">

  <h1>News</h1>

  <ul class="articles-list">
    @for ($i = 0; $i < 3; $i++)
      @include('_components/articles/tile')
    @endfor
  </ul>

  <div class="pagination">
    <p>
      <span class="prev arrow"><a href="articles.html" class="pagination-pager">&laquo;</a></span>
      <a href="articles.html" class="pagination-pager">1</a>
      <span class="pagination-pager active">2</span>
      <a href="articles.html" class="pagination-pager">3</a>
      <span class="next arrow"><a href="articles.html" class="pagination-pager">&raquo;</a></span>
    </p>
  </div>

</div>
@endsection
