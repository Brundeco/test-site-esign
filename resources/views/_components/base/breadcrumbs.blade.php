@php
  $breadcrumbs = $breadcrumbs ?? [];
  $breadcrumbs = [
    ['label' => 'Home', 'url' => 'index.html'],
    ...$breadcrumbs,
  ];
@endphp

<ol>
  @foreach ($breadcrumbs as $i => $breadcrumb)
    <li>
      @if ($i < count($breadcrumbs) - 1)
        <a href="{{ $breadcrumb['url'] }}">
      @endif
      {{ $breadcrumb['label'] }}
      @if ($i < count($breadcrumbs) - 1)
        </a>
      @endif
    </li>
  @endforeach
</ol>
