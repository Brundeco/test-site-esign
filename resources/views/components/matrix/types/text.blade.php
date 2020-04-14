{{-- Some randomization to get some different output --}}
{{-- Usually supported markup: p, ul, ol, li, h2, h3, strong, em, a[href,target] --}}
@component('components.matrix.base', ['type' => 'text'])
  <div class="rte">
    {{-- 50% channce of showing this paragraph --}}
    @if (rand(0, 1))
      <p>CodeIgniter website sit magna Laravel SEO lorem. <strong>Dolore</strong> eiusmod adipiscing JavaScript consectetur eiusmod sed Laravel do. Ipsum ECMA adipiscing CSS3 online marketing 🕵️‍♂️ consectetur do et HTML5.</p>
    @endif

    {{-- 33% chance of showing this title --}}
    @if (!rand(0, 2))
      <h2>Business plan incididunt attractive website webshop 🤩</h2>
    @endif

    @if (!rand(0, 2))
      <p>ECMAScript Laravel webshop print Esign 😏 maintenance web design banners, business plan incididunt attractive website webshop. Lorem Esign JavaScript elit consectetur elit amet. HTML5 Ghent website et sed sed Ghent consectetur amet. Aliqua development CodeIgniter online marketing tempor jQuery JavaScript labore attractive website. Sit ECMAScript ECMAScript, webshop lorem sit sed et consectetur Stropkaai SEO do SEA et.</p>
    @endif

    {{-- 100% channce of showing this paragraph --}}
    <p>Labore JavaScript elit incididunt jQuery Esign jQuery PHP7 magna. Eiusmod SEA SEO adwords website, dolore consectetur sit adwords lorem attractive website. Elit ut Ghent Stropkaai 🤷🏼‍♂️ development et graphic design. Magna dolore sed aliqua et consectetur sed. <em>Adwords sit ecommerce dolor sed PHP7</em> business plan website SEA.</p>

    {{-- 25% chance of showing a list --}}
    @if (!rand(0, 3))
      {{-- 50-50% chance of showing as ordered/unordered --}}
      @php $listType = rand(0, 1) ? 'ul' : 'ol' @endphp
      <{!! $listType !!}>
        <li>Labore JavaScript elit incididunt jQuery Esign</li>
        <li>Eiusmod SEA SEO adwords website, dolore consectetur</li>
        <li>Ecommerce website lorem jQuery</li>
      </{!! $listType !!}>
    @endif

    @if (rand(0, 1))
      <p>Shopify et PHP7 sit ecommerce identity adwords web design. Ecommerce website lorem jQuery HTML5 CodeIgniter elit ecommerce Esign. Ecommerce print print Shopify banners Ghent social media, magna adipiscing sit <strong>ECMA print lorem</strong>. Ut do CSS3 business plan, ipsum business plan SEO ECMA Esign Laravel. SEO JavaScript Ghent HTML5 attractive website incididunt Shopify, SEA jQuery sit Stropkaai magna attractive website.</p>
    @endif

    @if (!rand(0, 2))
      <h2>🥺 Adipiscing JavaScript consectetur eiusmod sed Laravel</h2>
    @endif

    @if (rand(0, 1))
      <p>Et ECMA ECMA adipiscing, <em>adwords CSS3 et ECMAScript</em> CSS3 sed eiusmod😼. Incididunt web design Ghent sed ipsum CSS3 website, attractive website sed eiusmod ipsum et identity do. Ecommerce magna social media webshop <strong>tempor</strong>, HTML5 print amet adipiscing graphic design.</p>
    @endif

    @if (!rand(0, 2))
      <p>Social media incididunt adipiscing do website 🐰 SEA website Laravel. Consectetur ECMA sed identity SEA adwords dolore tempor Ghent. Ipsum graphic design et dolore et banners jQuery, Shopify dolor CSS3 maintenance. JQuery social media adipiscing webshop online marketing aliqua graphic design labore. Esign JavaScript attractive website dolore amet lorem banners, ipsum ECMAScript amet online marketing incididunt.</p>
    @endif
  </div>
@endcomponent
