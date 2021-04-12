@php $menuItem = $menuItem ?? null; @endphp
<ul class="{{ $nav }}__list">
  <li{!! $menuItem == 'home' ? ' class=active' : '' !!}>
    <a href="index.html" class="{{ $nav }}__link">Home</a>
  </li>
  <li{!! $menuItem == 'minimalistic windows' ? ' class=active' : '' !!}>
    <a href="minimalistic-windows.html" class="{{ $nav }}__link">Minimalistische ramen</a>
  </li>
  <li{!! $menuItem == 'inspiration' ? ' class=active' : '' !!}>
    <a href="inspiration.html" class="{{ $nav }}__link">Inspiratie</a>
  </li>
  <li{!! $menuItem == 'contact' ? ' class=active' : '' !!}>
    <a href="contact.html" class="{{ $nav }}__link">Contact</a>
  </li>
</ul>

