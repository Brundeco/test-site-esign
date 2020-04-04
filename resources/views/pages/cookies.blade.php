@extends('layouts.app')

@php
  $title = 'Cookieverklaring';
  $breadcrumbs = [
    ['label' => $title, 'url' => '#'],
  ];

  // Cookie policy template variables
  $displayName = 'Esign';
  $type = 'De website'; // 'Het platform', 'De applicatie'
  $typePossessive = 'Onze website'; // 'Ons platform', 'Onze applicatie'
  $urlPrivacy = 'privacy.html';
  $email = 'hello@esign.eu';
@endphp

@section('content')
  <div class="container">

    @include('_components.base.breadcrumbs')

    <h1>{{ $title }}</h1>

    <h2>Cookies</h2>

    <p>
      Cookies zijn kleine data- of tekstbestanden die door websites en applicaties op uw lokale computer worden geplaatst. Dergelijke cookies kunnen verschillende doeleinden hebben: er zijn technische cookies (bijvoorbeeld voor het bijhouden van taalinstellingen), sessiecookies (tijdelijke cookies die verlopen na één sessie) en tracking cookies (cookies die uw gedrag op het internet volgen en bijhouden, om u op die manier een meer optimale gebruikservaring te kunnen aanbieden).
    </p>

    <p>
      De Belgische Wet betreffende de elektronische communicatie van 13 juni 2005 bevat enkele bepalingen rond cookies en het gebruik ervan op websites. De wet is een omzetting van de Europese e-Privacyrichtlijn, wat betekent dat de cookiewetgeving verschillend kan geïmplementeerd worden in andere Europese lidstaten.
    </p>

    <p>
      {{ $displayName }} is gevestigd in België en volgt bijgevolg de Belgische wetgeving inzake cookies.
    </p>

    <h2>Doel en nut van cookies</h2>

    <p>
      {{ $displayName }} wil elke bezoeker van {{ strtolower($type) }} zo goed mogelijk informeren over zijn rechten onder de Belgische wetgeving inzake cookies, en over welke cookies {{ $displayName }} gebruikt. Door {{ strtolower($type) }} te gebruiken gaat de bezoeker akkoord met het gebruik van cookies. Cookies helpen {{ $displayName }} om uw bezoek aan {{ strtolower($type) }} te optimaliseren, om technische keuzes te herinneren (bijvoorbeeld een taalkeuze, een nieuwsbrief, et cetera) en om u meer relevante diensten en aanbiedingen te tonen.
    </p>

    <p>
      Als u {{ strtolower($type) }} van {{ $displayName }} wil consulteren, is het aan te raden dat de technische instellingen voor cookies ingeschakeld werden. Zonder ingeschakelde cookies kan {{ $displayName }} geen probleemloos bezoek op {{ strtolower($type) }} garanderen. Indien u de cookies liever niet wenst, bent u als bezoeker vrij om de cookies uit te schakelen.
    </p>

    <p>
      Wij gebruiken cookies om uw bezoek aan {{ strtolower($typePossessive) }} te verbeteren. De cookies die wij gebruiken zijn veilig. De informatie die we verzamelen met behulp van cookies helpt ons om eventuele fouten te identificeren of om u specifieke diensten te laten zien waarvan wij denken dat ze voor u van belang kunnen zijn.
    </p>

    <h2>Soorten cookies gebruikt door {{ $displayName }}</h2>

    <p>
      We onderscheiden volgende types cookies, naargelang hun doeleinden:
    </p>

    <ul>
      <li>
        <strong>Essentiële/ Strikt noodzakelijke cookies:</strong>
        <p>Deze cookies zijn nodig om {{ strtolower($type) }} te laten functioneren en kunnen niet worden uitgeschakeld in onze systemen. Ze worden meestal alleen ingesteld als reactie op acties die door u zijn gesteld, zoals het instellen van uw privacyvoorkeuren, inloggen of het invullen van formulieren. Ze zijn noodzakelijk voor een goede communicatie en ze vergemakkelijken het navigeren (bijvoorbeeld naar een vorige pagina terugkeren, etc.).</p>
      </li>
      <li>
        <strong>Niet-essentiële cookies:</strong>
        <p>Deze cookies zijn op zich niet noodzakelijk om {{ strtolower($type) }} te laten functioneren, maar ze helpen ons wel een verbeterde en gepersonaliseerde website aan te bieden.</p>
        <ul>
          <li>
            <strong>Functionele cookies:</strong>
            <p>Deze cookies stellen {{ strtolower($type) }} in staat om verbeterde functionaliteit en personalisatie te bieden. Ze kunnen worden ingesteld door ons of door externe providers wiens diensten we hebben toegevoegd aan onze pagina's.</p>
          </li>
          <li>
            <strong>Analytische cookies:</strong>
            <p>Met deze cookies kunnen we bezoeken en traffic bijhouden, zodat we de prestaties van {{ strtolower($typePossessive) }} kunnen meten en verbeteren. Ze helpen ons te weten welke pagina's het meest en het minst populair zijn en hoe bezoekers zich door {{ strtolower($type) }} verplaatsen.</p>
          </li>
          <li>
            <strong>Targeting / advertising cookies:</strong>
            <p>
              Deze cookies kunnen door onze advertentiepartners via {{ strtolower($typePossessive) }} worden ingesteld.<br>
              Ze kunnen door die bedrijven worden gebruikt om een profiel van uw interesses samen te stellen en u relevante advertenties op andere sites te laten zien.
            </p>
          </li>
        </ul>
      </li>
    </ul>

    <p>
      Wij gebruiken enerzijds onze eigen cookies en anderzijds cookies van zorgvuldig geselecteerde partners met wie we samenwerken en die onze diensten op hun website adverteren.
    </p>

    <h3>First Party Cookies:</h3>

    <h4>Domeinnaam: URL</h4>

    <table>
      <thead>
      <tr>
        <th>Naam</th>
        <th>Type</th>
        <th>Bewaarduur</th>
      </tr>
      </thead>
      <tbody>
      {{-- TODO --}}
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>

    <h3>Third Party Cookies:</h3>

    <h4>Domeinnaam: URL 1</h4>

    <table>
      <thead>
      <tr>
        <th>Naam</th>
        <th>Type</th>
        <th>Bewaarduur</th>
      </tr>
      </thead>
      <tbody>
      {{-- TODO --}}
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>

    <h4>Domeinnaam: URL 2</h4>

    <table>
      <thead>
      <tr>
        <th>Naam</th>
        <th>Type</th>
        <th>Bewaarduur</th>
      </tr>
      </thead>
      <tbody>
      {{-- TODO --}}
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>

    <p>
      Neem kennis van onze <a href="{{ $urlPrivacy }}">Privacyverklaring</a> voor meer informatie omtrent de verwerking van persoonsgegevens door {{ $displayName }}.
    </p>

    <h2>Beheer van de cookies</h2>

    <p>
      Zorg ervoor dat cookies zijn ingeschakeld in uw browser. Om cookies in te schakelen moeten de volgende handelingen uitgevoerd worden:
    </p>

    <p>
      <strong>Bij browser - Microsoft Internet Explorer</strong>
    </p>
    <ul>
      <li>In Internet Explorer, klik op 'Internetopties' in het menu 'Extra'.</li>
      <li>Op het tabblad 'Privacy', verplaats de instellingen- schuifknop naar 'laag' of ‘accepteer alle cookies' (instelling boven 'medium' schakelt cookies uit).</li>
      <li>Klik op 'OK'.</li>
    </ul>

    <p>
      <strong>Bij browser - Mozilla Firefox</strong>
    </p>
    <ul>
      <li>Klik op 'Firefox' in de linkerbovenhoek van uw browser en klik vervolgens op 'Opties'.</li>
      <li>Op het tabblad 'Privacy', zorg ervoor dat de ‘Websites laten weten dat ik niet gevolgd wil worden’ niet is aangevinkt.</li>
      <li>Klik op 'OK'.</li>
    </ul>

    <p>
      <strong>Bij browser - Google Chrome</strong>
    </p>
    <ul>
      <li>Klik op de drie puntjes naast de browserbalk bovenaan in uw browservenster en kies 'Opties'.</li>
      <li>Zoek het gedeelte ‘Privacy and security’ en klik op ‘content settings’.</li>
      <li>Klik op de optie ‘cookies’.</li>
      <li>Selecteer nu 'Allow sites to save and read cookie data’.</li>
    </ul>

    <p>
      <strong>Bij browser - Safari</strong>
    </p>
    <ul>
      <li>Kies ‘Voorkeuren’ in het taakmenu. (Het taakmenu bevindt zich rechtsboven in het Safari-venster en ziet eruit als een tandwiel of klik op ‘Safari’ in het uitgebreide taakmenu.)</li>
      <li>Klik op het Privacy tabblad. Zoek de sectie genaamd ‘Cookies en andere websitegegevens’</li>
      <li>Duid aan dat u cookies aanvaardt.</li>
    </ul>

    <p>
      Als u {{ strtolower($type) }} van {{ $displayName }} wil consulteren, is het aan te raden dat u cookies ingeschakeld hebt. Echter, als u dit liever niet wenst, bent u als bezoeker vrij om de cookies uit te schakelen via uw browserinstellingen. Dit kan via volgende manieren:
    </p>

    <p>
      <strong>Bij browser - Microsoft Internet Explorer</strong>
    </p>
    <ul>
      <li>Selecteer in Internet Explorer de knop Extra en selecteer Internetopties.</li>
      <li>Selecteer het tabblad Privacy en verplaats onder Instellingen de schuifregelaar naar boven om alle cookies te blokkeren. Klik op OK.</li>
    </ul>

    <p>
      <strong>Bij browser - Mozilla Firefox</strong>
    </p>
    <ul>
      <li>Klik op de menuknop en kies ‘Voorkeuren’.</li>
      <li>Selecteer het paneel ‘Privacy & Beveiliging’ en ga naar de sectie ‘Geschiedenis’.</li>
      <li>Stel naast ‘Firefox zal’ in op ‘Aangepaste instellingen gebruiken voor geschiedenis’.</li>
      <li>Stel ‘Cookies van derden accepteren’ in op ‘Nooit’.</li>
      <li>Sluit de pagina ‘about: preferences’. Wijzigingen die u hebt aangebracht, worden automatisch opgeslagen.<li></li>
    </ul>

    <p>
      <strong>Bij browser - Google Chrome</strong>
    </p>
    <ul>
      <li>Selecteer ‘Meer Instellingen’ in de browserwerkbalk.</li>
      <li>Selecteer onderaan de pagina de optie ‘Geavanceerd’.</li>
      <li>Selecteer bij 'Privacy en beveiliging' de optie ‘Instellingen voor content’.</li>
      <li>Selecteer ‘Cookies’.</li>
      <li>Schakel ‘Sites toestaan cookiegegevens op te slaan en te lezen’ uit.</li>
    </ul>

    <p>
      <strong>Bij browser - Safari</strong>
    </p>
    <ul>
      <li>Kies ‘Voorkeuren’ in het taakmenu. (Het taakmenu bevindt zich rechtsboven in het Safari-venster en ziet eruit als een tandwiel of klik op ‘Safari’ in het uitgebreide taakmenu.)</li>
      <li>Klik op het Privacy tabblad. Zoek de sectie genaamd ‘Cookies en andere websitegegevens’</li>
      <li>Duid aan dat u cookies niet aanvaardt.</li>
    </ul>

    <p>
      Of raadpleeg hiervoor de help-functie van uw internetbrowser.
    </p>

    <h2>Rechten van de bezoekers</h2>

    <p>
      Aangezien cookies een verwerking van persoonsgegevens kunnen uitmaken, heeft u als betrokkene recht op de rechtmatige en veilige verwerking van de persoonsgegevens. Als betrokkene kan u volgende rechten uitoefenen:
    </p>

    <ul>
      <li>Recht op verzet: Indien er sprake is van een zwaarwegende en gerechtvaardigde redenen kan men zich verzetten tegen de verwerking van persoonsgegevens.</li>
      <li>Recht op toegang: Iedere betrokkene die zijn identiteit bewijst, beschikt over een recht op toegang tot de informatie rond het al dan niet bestaan van verwerkingen van zijn persoonsgegevens, net als de doeleinden van deze verwerking, de categorieën van gegevens waarop deze verwerkingen betrekking hebben en de categorieën van ontvangers aan wie de gegevens worden verstrekt.</li>
      <li>Recht op verbetering: Onnauwkeurige of onvolledige persoonsgegevens kunnen op verzoek van de betrokkene steeds verbeterd of zelfs uitgewist worden.</li>
    </ul>

    <p>
      De uitoefening van deze rechten gebeurt conform de modaliteiten zoals bepaald in onze <a href="{{ $urlPrivacy }}">Privacyverklaring</a>. Meer informatie over de rechten van bezoekers vindt u ook in de <a href="{{ $urlPrivacy }}">Privacyverklaring</a>. Mocht u na het lezen van deze Cookieverklaring toch nog vragen of opmerkingen rond cookies hebben, kan u steeds contact opnemen via <a href="mailto:{{ $email }}">{{ $email }}</a>.
    </p>

  </div>
@stop
