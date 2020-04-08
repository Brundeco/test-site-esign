@php $menuItem = $menuItem ?? null; @endphp
<ul class="{{ $nav }}__list">
  <li{!! $menuItem == 'home' ? ' class=active' : '' !!}>
    <a href="index.html" class="{{ $nav }}__link">Home</a>
  </li>
  <li{!! $menuItem == 'components' ? ' class=active' : '' !!}>
    <a href="components.html" class="{{ $nav }}__link">Components</a>
  </li>
  <li{!! $menuItem == 'news' ? ' class=active' : '' !!}>
    <a href="articles.html" class="{{ $nav }}__link">News</a>
  </li>
  <li{!! $menuItem == 'contact' ? ' class=active' : '' !!}>
    <a href="contact.html" class="{{ $nav }}__link">Contact</a>
  </li>
</ul>

