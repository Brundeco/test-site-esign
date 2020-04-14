@extends('layouts.app')

@php
  $title = 'Nieuws detail';
  $menuItem = 'news';
  $breadcrumbs = [
      ['label' => 'Nieuws', 'url' => 'articles.html'],
      ['label' => 'Lorem ipsum', 'url' => '#'],
  ];
@endphp

@section('content')
<article>
  <div class="container container--small">

    @include('components.base.breadcrumbs')

    <div class="article-detail">
      <header class="article-detail__header">
        <h1>Lorem ipsum</h1>
        {{-- If you need a different date format, check out https://www.php.net/manual/en/function.date.php --}}
        <time datetime="{{ date('Y-m-d') }}">{{ date('d/m/Y') }}</time>
      </header>

      {{-- Simple blog article consisting of a single image and a rich text field --}}
      {{--
      <div class="article-detail__image">
        <img src="https://dummyimage.com/600x400/01EDA5/1730a5" alt="Lorem ipsum" />
      </div>

      <div class="article-detail__body">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
        <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      </div>
      --}}
    </div>
  </div>

  {{-- Block based blog --}}
  @include('components.matrix.list')
</article>

@endsection
