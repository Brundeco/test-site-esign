@extends('layouts.app')

@php
$title = 'Components';
$menuItem = 'components';
$dataPage = 'components';
$breadcrumbs = [
['label' => $title, 'url' => '#'],
];
@endphp

@section('content')
<div class="section">
  <div class="container">

    <ol>
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>Components</li>
    </ol>

    <h1>{{ $title }}</h1>

    <h2>Visual</h2>

    <div class="grid">
      <div class="grid__item one-whole">
        <picture class="visual visual--original">
          <source srcset="https://via.placeholder.com/800x400.jpg" type="image/webp">
          <img src="https://via.placeholder.com/800x600.jpg" alt="">
        </picture>
        <p>Ratio: Original</p>
      </div>
      <div class="grid__item medium--one-third">
        <picture class="visual">
          <source srcset="https://via.placeholder.com/800x600.jpg" type="image/webp">
          <img src="https://via.placeholder.com/800x600.jpg" alt="">
        </picture>
        <p>Ratio: 1:1</p>
      </div>
      <div class="grid__item medium--one-third">
        <picture class="visual visual--2x1">
          <source srcset="https://via.placeholder.com/800x600.jpg" type="image/webp">
          <img src="https://via.placeholder.com/800x600.jpg" alt="">
        </picture>
        <p>Ratio: 2:1</p>
      </div>
      <div class="grid__item medium--one-third">
        <picture class="visual visual--3x4">
          <source srcset="https://via.placeholder.com/800x600.jpg" type="image/webp">
          <img src="https://via.placeholder.com/800x600.jpg" alt="">
        </picture>
        <p>Ratio: 3:4</p>
      </div>
      <div class="grid__item medium--one-third">
        <picture class="visual visual--16x9">
          <source srcset="https://via.placeholder.com/800x600.jpg" type="image/webp">
          <img src="https://via.placeholder.com/800x600.jpg" alt="">
        </picture>
        <p>Ratio: 16:9</p>
      </div>
    </div>

    <hr>

    <h2>Grid</h2>

    <h3>Halfs</h3>
    <div class="grid">
      <div class="grid__item medium--one-half">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nullam eget mi eleifend,
          sagittis magna ut, malesuada nunc. Cras in odio metus.</p>
      </div>
      <div class="grid__item medium--one-half">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
      </div>
      <div class="grid__item medium--one-half">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nullam eget mi eleifend,
          sagittis magna ut, malesuada nunc. Cras in odio metus.</p>
      </div>
      <div class="grid__item medium--one-half">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
      </div>
    </div>

    <h3>Thirds</h3>
    <div class="grid">
      <div class="grid__item medium--one-third">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nullam eget mi eleifend.
        </p>
      </div>
      <div class="grid__item medium--one-third">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div class="grid__item medium--one-third">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    </div>

    <h3>Quaters</h3>
    <div class="grid">
      <div class="grid__item medium--one-half large--one-quarter">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
      <div class="grid__item medium--one-half large--one-quarter">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
      <div class="grid__item medium--one-half large--one-quarter">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
      <div class="grid__item medium--one-half large--one-quarter">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
    </div>

    <h3>Fifths</h3>
    <div class="grid">
      <div class="grid__item medium--one-third large--one-fifth">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
      <div class="grid__item medium--one-third large--one-fifth">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
      <div class="grid__item medium--one-third large--one-fifth">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
      <div class="grid__item medium--one-third large--one-fifth">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
      <div class="grid__item medium--one-third large--one-fifth">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
          dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
      </div>
    </div>

    @foreach (['start', 'center', 'end', 'between', 'around'] as $justifyType)
    <h3>Justify {{ $justifyType }}</h3>
    <div class="grid grid--justify-{{ $justifyType }}">
      <div class="grid__item medium--one-fifth">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nullam eget mi eleifend,
          sagittis magna ut, malesuada nunc. Cras in odio metus.</p>
      </div>
      <div class="grid__item medium--one-fifth">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
      </div>
    </div>
    @endforeach

    @foreach (['start', 'center', 'end'] as $alignType)
    <h3>Align {{ $alignType }}</h3>
    <div class="grid grid--align-{{ $alignType }}">
      <div class="grid__item medium--one-third">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nullam eget mi eleifend,
          sagittis magna ut, malesuada nunc. Cras in odio metus.</p>
      </div>
      <div class="grid__item medium--one-third">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
      </div>
      <div class="grid__item medium--one-third">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
      </div>
    </div>
    @endforeach

    <h3>Grid ul</h3>
    <ul class="grid">
      <li class="grid__item medium--one-half">
        <div class="box">
          <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
            dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
        </div>
      </li>
      <li class="grid__item medium--one-half">
        <div class="box">
          <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Etiam eu erat pulvinar,
            dignissim ante non, fringilla nisl. Aliquam vitae lorem eget velit elementum volutpat sit amet vel ex.</p>
        </div>
      </li>
    </ul>

    <hr />


    @foreach (['0', 'half', '2'] as $gridGutter)
    <h3>Grid Gutter {{ $gridGutter }}</h3>
    <div class="grid grid--gutter-{{ $gridGutter }}">
      <div class="grid__item medium--one-half">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nullam eget mi eleifend,
          sagittis magna ut, malesuada nunc. Cras in odio metus.</p>
      </div>
      <div class="grid__item medium--one-half">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
      </div>
      <div class="grid__item medium--one-half">
        <p><a href="index.html">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit. Nullam eget mi eleifend,
          sagittis magna ut, malesuada nunc. Cras in odio metus.</p>
      </div>
      <div class="grid__item medium--one-half">
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut orci orci,
          fringilla
          at ex vel, efficitur pulvinar nibh.</p>
      </div>
    </div>
    <hr>
    @endforeach

    <hr />
    <h2>Device helpers</h2>

    <h3>Visibility</h3>
    <ul>
      <li>.show</li>
      <li>.hide</li>
      <li>.breakpoint + --show</li>
      <li>.breakpoint + --hide</li>
    </ul>

    <h3>Text alignment</h3>
    <ul>
      <li>.text-left</li>
      <li>.text-center</li>
      <li>.text-right</li>
      <li>.breakpoint + --text-left</li>
      <li>.breakpoint + --text-center</li>
      <li>.breakpoint + --text-right</li>
    </ul>

    <h3>Floats</h3>
    <ul>
      <li>.left</li>
      <li>.right</li>
      <li>.breakpoint + --left</li>
      <li>.breakpoint + --right</li>
    </ul>

    <hr />

    <h2>Typography</h2>

    <h1>Heading 1 (unique on page)</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <p>
      The <strong>Pythagorean theorem</strong> is often expressed as the following equation:<br />
      <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
    </p>

    <p>Almost every developer's favorite <em>molecule</em> is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>,
      also
      known as "caffeine".</p>

    <p><a href="#">Normal link</a> - <a href="#" class="tdn">Not underlined link</a></p>

    <blockquote>
      <p>Eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
        delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue
        nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
      <cite>The author of the quote</cite>
    </blockquote>

    <ul>
      <li>
        Unordered list item 1

        <ul>
          <li>Unordered list item 1.1</li>
          <li>Unordered list item 1.2</li>
          <li>Unordered list item 1.3</li>
        </ul>
      </li>
      <li>Unordered list item 2</li>
      <li>Unordered list item 3</li>
    </ul>

    <ol>
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
      <li>Ordered list item 3</li>
    </ol>

    <ul class="unstyled">
      <li>Unstyled list item 1</li>
      <li>Unstyled list item 2</li>
      <li>Unstyled list item 3</li>
    </ul>

    <ul class="lined-list">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>

    <dl>
      <dt>Dt item 1</dt>
      <dd>Dd item 1</dd>
      <dt>Dt item 2</dt>
      <dd>Dd item 2</dd>
    </dl>

    <ul class="social-icons">
      <li class="social-icons__item">
        <a href="#" class="social-icons__link" target="_blank">
          <svg class="icon icon-facebook">
            <use xlink:href="#icon-facebook" />
          </svg>
          <span class="vh">Volg ons op Facebook</span>
        </a>
      </li>
      <li class="social-icons__item">
        <a href="#" class="social-icons__link" target="_blank">
          <svg class="icon icon-twitter">
            <use xlink:href="#icon-twitter" />
          </svg>
          <span class="vh">Volg ons op Twitter</span>
        </a>
      </li>
      <li class="social-icons__item">
        <a href="#" class="social-icons__link" target="_blank">
          <svg class="icon icon-instagram">
            <use xlink:href="#icon-instagram" />
          </svg>
          <span class="vh">Volg ons op Instagram</span>
        </a>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>Title 1</th>
          <th>Title 2</th>
          <th>Title 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Item 1</td>
          <td>Item 2</td>
          <td>Item 3</td>
        </tr>
        <tr>
          <td>Item 1</td>
          <td>Item 2</td>
          <td>Item 3</td>
        </tr>
        <tr>
          <td>Item 1</td>
          <td>Item 2</td>
          <td>Item 3</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <h2>Buttons</h2>

    <div class="grid">
      <div class="grid__item">
        <div class="button-group">
          <a href="#" class="button">Link</a>
          <button class="button">
            <span>Action</span>
            <svg class="icon icon-instagram">
              <use xlink:href="#icon-instagram"></use>
            </svg>
          </button>
          <input type="submit" value="Verzenden" class="button" />
        </div>
      </div>
      <div class="grid__item">
        <div class="button-group">
          <a href="#" class="button button--secondary">Link</a>
          <button class="button button--secondary">Action</button>
          <input type="submit" value="Verzenden" class="button button--secondary" />
        </div>
      </div>
      <div class="grid__item">
        <div class="button-group button-group--right">
          <a href="#" class="button">Link</a>
          <button class="button">Action</button>
          <input type="submit" value="Verzenden" class="button" />
        </div>
      </div>
      <div class="grid__item">
        <div class="button-group button-group--center button-group--gutter-0">
          <a href="#" class="button">Link</a>
          <button class="button">Action</button>
          <input type="submit" value="Verzenden" class="button" />
        </div>
      </div>
      <div class="grid__item">
        <div class="button-group">
          <a href="#" class="button" data-gtm-track>Tracked Link</a>
          <button class="button" data-gtm-track>Tracked Action</button>
          <a href="#" class="button" data-gtm-track download>Tracked Download</a>
        </div>
      </div>
    </div>

    <hr />

    <h2>Forms</h2>

    <div class="grid">
      <div class="grid__item medium--one-half">
        <form id="form-contact" action="#" method="post" class="validate">

          <div class="note note--error">
            <ul>
              <li>Naam is verplicht</li>
              <li>Geldig emailadres is verplicht</li>
            </ul>
          </div>

          <div class="note note--success">
            <p>Het contactformulier werd succesvol verstuurd. Wij proberen dit zo snel mogelijk te behandelen.</p>
          </div>

          <div class="input-group">
            <label for="name">Naam <span class="required">*</span></label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="input-group">
            <label for="email">E-mail <span class="required">*</span></label>
            <input type="email" name="email" id="email" required />
          </div>
          <div class="input-group">
            <label for="phone">Telefoon</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div class="input-group">
            <label for="select">Onderwerp</label>
            <select id="select" name="select">
              <option value="">Selecteer onderwerp</option>
              <option value="Optie 1">Optie 1</option>
              <option value="Optie 2">Optie 2</option>
            </select>
          </div>
          <div class="input-group">
            <label for="message">Bericht <span class="required">*</span></label>
            <textarea name="message" id="message" required></textarea>
          </div>

          <fieldset>
            <legend>Kies een optie <span class="required">*</span></legend>
            <div class="input-group input-group--horizontal">
              <div class="radio">
                <input type="radio" id="radio-1" name="radio" value="1" required />
                <label for="radio-1">Optie 1</label>
              </div>
              <div class="radio">
                <input type="radio" id="radio-2" name="radio" value="1" required />
                <label for="radio-2">Optie 2</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Kies een optie</legend>
            <div class="input-group">
              <div class="radio">
                <input type="radio" id="radio-3" name="radio" value="1" required />
                <label for="radio-3">Optie 1</label>
              </div>
              <div class="radio">
                <input type="radio" id="radio-4" name="radio" value="1" required />
                <label for="radio-4">Optie 2</label>
              </div>
            </div>
          </fieldset>

          <div class="input-group">
            <div class="checkbox">
              <input type="checkbox" id="privacy" name="privacy" value="1" required />
              <label for="privacy">I agree my data will be processed in accordance with the <a
                  href="privacy.html">privacy
                  policy</a>. <span class="required">*</span></label>
            </div>
          </div>

          <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-size="invisible"></div>

          <div class="button-group">
            <input type="submit" value="Verzenden" class="button" />
          </div>
        </form>

      </div>
    </div>

    <hr />

    <h3>Modals</h3>
    <div class="button-group">
      <button type="button" class="button js-modal-trigger" data-modal-id="modal-1">Alert modal</button>
      <button type="button" class="button js-modal-trigger" data-modal-id="modal-2">Fullscreen modal</button>
      <button type="button" class="button js-modal-trigger" data-modal-id="modal-3">Windowed modal</button>
      <button type="button" class="button js-modal-trigger" data-modal-id="custom-modal">Custom modal</button>
    </div>
    <div class="modal js-modal" id="modal-1" data-title="Alert 1" data-alert="true" data-background-scroll="true">
      <div class="container">
        <div class="h3">Alert 1</div>
        <p>You can keep scrolling in background with data-background-scroll="true"</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input type="text" placeholder="input" />
        <input type="text" placeholder="input" />
        <button type="button" class="button js-modal-trigger" data-modal-id="modal-2">Fullscreen modal</button>
      </div>
      <button type="button" class="modal__close js-modal-close">
        <svg class="icon icon-close">
          <use xlink:href="#icon-close" />
        </svg>
      </button>
    </div>

    <div class="modal modal--fullscreen modal--fade js-modal" id="modal-2" data-title="Fullscreen modal"
      data-show-timeout="500" data-hide-timeout="500">
      <div class="container">
        <div class="h3">Fullscreen modal</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button type="button" class="button js-modal-trigger" data-modal-id="modal-3">Windowed modal</button>
      </div>
      <button type="button" class="modal__close js-modal-close js-compensate-for-scrollbar">
        <svg class="icon icon-close">
          <use xlink:href="#icon-close" />
        </svg>
      </button>
    </div>

    <div class="modal modal--fade js-modal" id="modal-3" data-title="Windowed modal" data-hide-hash="true"
      data-show-timeout="500" data-hide-timeout="500">
      <div class="container">
        <div class="h3">Windowed modal</div>
        <p>
          Don't show the hash for this modal with "data-hide-hash=true".
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="button-group">
          <button type="button" class="button js-modal-trigger" data-modal-id="modal-1">Alert modal</button>
          <button type="button" class="button js-modal-trigger" data-modal-id="modal-2">Fullscreen modal</button>
          <button type="button" class="button js-modal-close">Close modal here</button>
        </div>
      </div>
      <button type="button" class="modal__close js-modal-close">
        <svg class="icon icon-close">
          <use xlink:href="#icon-close" />
        </svg>
      </button>
    </div>

    <div class="modal js-specific-modal-name" id="custom-modal" data-title="Custom modal initialized in Components.js">
      <div class="container">
        <div class="h3">Custom modal initialized in Components.js</div>
        <button type="button" class="button js-modal-trigger" data-modal-id="modal-2">Fullscreen modal</button>
      </div>
      <button type="button" class="modal__close js-modal-close">
        <svg class="icon icon-close">
          <use xlink:href="#icon-close" />
        </svg>
      </button>
    </div>

    <hr />

  </div>

  <div class="container container--small">
    <div class="matrix">
      <div class="matrix__block matrix__block--text">
        <div class="rte">
          <h2>Matrix</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.
          </p>
        </div>
      </div>

      {{-- options: matrix__block--left; matrix__block--right; matrix__block--pop-out --}}
      <div class="matrix__block matrix__block--image matrix__block--pop-out matrix__block--left">
        <figure>
          <picture>
            <img src="https://via.placeholder.com/345x220" alt="" />
          </picture>
          <figcaption>345x220</figcaption>
        </figure>
      </div>

      <div class="matrix__block matrix__block--text">
        <div class="rte">
          <h2>blabla</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat.
          </p>
        </div>
      </div>

      <div class="matrix__block matrix__block--quote">
        <blockquote>
          <p>
            Fantastische reis samen met de kids. We gaan zeker nog eens terug naar deze plek!
          </p>
          <cite>Anton Luyten</cite>
        </blockquote>
      </div>

      <div class="matrix__block matrix__block--section">
        <hr />
      </div>

      <div class="matrix__block matrix__block--text">
        <div class="rte">
          <h2>Een andere section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum. Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.
          </p>
        </div>
      </div>

      <div class="matrix__block matrix__block--buttons">
        <div class="button-group">
          <a href="#" class="button">Lorem</a>
          <a href="#" class="button">Ipsum</a>
          <a href="#" class="button">Dolor</a>
          <a href="#" class="button">Sit</a>
          <a href="#" class="button">Amet</a>
          <a href="#" class="button">Consectetur</a>
          <a href="#" class="button">Adipiscing</a>
          <a href="#" class="button">Elit</a>
        </div>
      </div>

      <div class="matrix__block matrix__block--text">
        <div class="rte">
          <h2>Nog een andere section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum. Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est
            laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection
