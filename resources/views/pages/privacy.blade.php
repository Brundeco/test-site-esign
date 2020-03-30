
@php
  $title = 'Privacyverklaring';

  // Privacy policy template variables
  $displayName = 'Esign';
  $companyName = 'Esign BVBA';
  $address = 'Stropkaai 55';
  $postal = '9000';
  $city = 'Gent';
  $country = 'België';
  $companyNumber = 'XXXX.XXX.XXX';
  $email = 'hello@esign.eu';
  $phone = '+32 9 241 86 50';
  $type = 'De website'; // 'Het platform', 'De applicatie'
  $typePossessive = 'Onze website'; // 'Ons platform', 'Onze applicatie'
  $url = 'https://www.esign.eu';
  $urlCookies = 'cookies.html';
  $data = [
    // Escape whatever is N/A
    'Identificatiegegevens',
    'Financiële bijzonderheden',
    'Persoonlijke kenmerken',
    'Fysieke gegevens',
    'Leefgewoonten',
    'Psychische gegevens',
    'Samenstelling van het gezin',
    'Vrijetijdsbesteding en interessen',
    'Lidmaatschappen',
    'Gerechtelijke gegevens',
    'Consumptiegewoonten',
    'Woningkenmerken',
    'Gegevens omtrent opleiding en vorming',
    'Gegevens omtrent beroep en betrekking',
    'Rijksregisternummer en identificatienummer van de sociale zekerheid',
    'Raciale of etnische gegevens',
    'Gegevens over het seksuele leven',
    'Politieke opvattingen',
    'Filosofische of religieuze overtuigingen',
    'Beeldopnamen',
    'Geluidsopnamen',
  ];
  $goals = [
    // Escape whatever is N/A
    'U toegang verschaffen tot uw gebruikersprofiel.',
    'Het aanbieden en verbeteren van een algemene en gepersonaliseerde dienstverlening; inclusief facturatiedoeleinden, aanbod van informatie, nieuwsbrieven en aanbiedingen die nuttig en/of noodzakelijk zijn voor u, de verkrijging en verwerking van gebruikersbeoordelingen en het verlenen van ondersteuning.',
    'Het aanbieden en verbeteren van de aangeleverde producten; persoonsgerichte en specifieke producten aan de hand van geleverde informatie en gegevens.',
    'De detectie van en bescherming tegen fraude, fouten en/of criminele gedragingen.',
    'Marketing doeleinden',
  ];
@endphp
@extends('layouts/app')

@section('content')
  <div class="container">
    <h1>Privacyverklaring</h1>

    <h2>Waarom deze privacyverklaring</h2>

    <p>
      {{ $displayName }} hecht grote waarde aan de bescherming van uw privacy en persoonsgegevens. Wij gebruiken uw persoonsgegevens uitsluitend in overeenstemming met de Privacywet en andere relevante vigerende wettelijke voorschriften. Iedere verwijzing in deze Privacyverklaring naar de Privacywet betekent een verwijzing naar de Wet van 8 december 1992 tot bescherming van de persoonlijke levenssfeer ten opzichte van de verwerking van persoonsgegevens. Iedere verwijzing naar de Verordening is een verwijzing naar de Verordening van 27 april 2016 betreffende de bescherming van natuurlijke personen in verband met de verwerking van persoonsgegevens en betreffende het vrije verkeer van die gegevens.
    </p>

    <p>
      Met deze Privacyverklaring wil {{ $displayName }} u wijzen op eventuele verwerkingshandelingen ten aanzien van deze gegevens en op uw rechten. Door gebruik te maken van ons platform/onze website/onze applicatie verleent u expliciet uw toestemming met mogelijke verwerkingshandelingen door {{ $displayName }}.
    </p>

    <p>
      Het is mogelijk dat deze Privacyverklaring in de toekomst onderhevig is aan aanpassingen en wijzigingen. Het is aan u om op regelmatige basis dit document te raadplegen. Iedere substantiële wijziging zal steeds duidelijk gecommuniceerd worden op het platform van {{ $displayName }}.
    </p>

    <h2>Wie verwerkt de persoonsgegevens?</h2>

    <p>
      {{ $type }} <em>{{ $url }}</em> is een initiatief van:
    </p>

    <p>
      {{ $companyName }} (Hierna: “{{ $displayName }}”)<br>
      {{ $address }}<br>
      {{ $postal }} {{ $city }}<br>
      {{ $country }}<br>
      Btw-nummer: {{ $companyNumber }}<br>
      E-mail: <a href="mailto:{{ $email }}">{{ $email }}</a><br>
      Telefoon: {{ $phone }}
    </p>

    <h2>Welke persoonsgegevens worden verwerkt?</h2>

    <p>
      {{ $displayName }} verbindt zich ertoe enkel de gegevens te verwerken die ter zake dienend zijn en noodzakelijk zijn voor de doeleinden waarvoor zij verzameld werden. Volgende categorieën van persoonsgegevens kunnen verwerkt worden door {{ $displayName }}:
    </p>

    <ul>
      @foreach ($data as $item)
        <li>{{ $item }}</li>
      @endforeach
    </ul>

    <h2>Voor welke doeleinden worden mijn persoonsgegevens gebruikt?</h2>

    <p>
      {{ $displayName }} verzamelt persoonsgegevens om u een veilige, optimale en persoonlijke gebruikerservaring te bieden. De verzameling van persoonsgegevens wordt uitgebreider naarmate u intensiever gebruik maakt van {{ strtolower($type) }} en onze online dienstverlening.
    </p>

    <p>
      Gegevensverwerking is essentieel voor de werking van {{ strtolower($type) }} en de daarbij horende diensten. De verwerking gebeurt uitsluitend voor volgende welbepaalde doeleinden:
    </p>

    <ul>
      @foreach ($goals as $goal)
        <li>{{ $goal }}</li>
      @endforeach
    </ul>

    <p>
      Bij een bezoek aan {{ strtolower($type) }} van {{ $displayName }} worden er enkele gegevens ingezameld voor statistische doeleinden. Dergelijke gegevens zijn noodzakelijk om het gebruik van {{ strtolower($typePossessive) }} te optimaliseren. Deze gegevens zijn: IP-adres, vermoedelijke plaats van consultatie, uur en dag van consultatie, welke pagina’s er werden bezocht. Wanneer u {{ strtolower($type) }} van {{ $displayName }} bezoekt verklaart u zich akkoord met deze gegevensinzameling bestemd voor statische doeleinden zoals hierboven omschreven.
    </p>

    <p>
      De Gebruiker verschaft steeds zelf de persoonsgegevens aan {{ $displayName }} en kan op die manier een zekere controle uitoefenen. Indien bepaalde gegevens onvolledig of ogenschijnlijk incorrect zijn, behoudt {{ $displayName }} zich het recht voor bepaalde verwachte handelingen tijdelijk of permanent uit te stellen.
    </p>

    <p>
      De persoonsgegevens worden enkel verwerkt voor intern gebruik binnen {{ $displayName }}.
    </p>

    <p>
      We kunnen u dan ook geruststellen dat persoonsgegevens niet verkocht, doorgegeven of meegedeeld worden aan derde partijen die aan ons verbonden zijn. {{ $displayName }} heeft alle mogelijke juridische en technische voorzorgen genomen om ongeoorloofde toegang en gebruik te vermijden.
    </p>

    <h2>Wij gebruiken ook cookies!</h2>

    <p>
      Tijdens een bezoek aan {{ strtolower($typePossessive) }} kunnen 'cookies' op uw harde schijf geplaatst worden om {{ strtolower($type) }} beter af te stemmen op de behoeften van de terugkerende bezoeker. Niet-functionele cookies helpen ons om uw bezoek aan het platform te optimaliseren en om technische keuzes te herinneren.
    </p>

    <p>
      Voor een verder begrip van de wijze waarop wij cookies gebruiken om uw persoonsgegevens te verzamelen en te verwerken, verwijzen wij u graag door naar onze <a href="{{ $urlCookies }}">Cookieverklaring</a>.
    </p>

    <p>
      Als u {{ strtolower($type) }} van {{ $displayName }} wil consulteren, is het aan te raden dat u cookies ingeschakeld hebt. Hoe u cookies daarentegen kan uitschakelen, staat eveneens te lezen in onze <a href="{{ $urlCookies }}">Cookieverklaring</a>.
    </p>

    <h2>Wat zijn mijn rechten?</h2>

    <h3>Garantie van een rechtmatige en veilige verwerking van de persoonsgegevens</h3>

    <p>
      {{ $displayName }} verwerkt uw persoonsgegevens steeds eerlijk en rechtmatig. Dit houdt volgende garanties in:
    </p>

    <ul>
      <li>Persoonsgegevens worden enkel conform de omschreven en gerechtvaardigde doeleinden van deze Privacyverklaring verwerkt.</li>
      <li>Persoonsgegevens worden enkel verwerkt voor zover dit toereikend, ter zake dienend en niet overmatig is.</li>
      <li>Persoonsgegevens worden maar bewaard zolang dit noodzakelijk is voor het verwezelijken van de omschreven en gerechtvaardigde doeleinden in deze Privacyverklaring.</li>
    </ul>

    <p>
      De nodige technische en beveiligingsmaatregelen werden genomen om de risico’s op onrechtmatige toegang tot of verwerking van de persoonsgegevens tot een minimum te reduceren. Bij inbraak in haar informaticasystemen zal {{ $displayName }} onmiddellijk alle mogelijke maatregelen nemen om de schade tot een minimum te beperken.
    </p>

    <h3>Recht op inzage/rectificatie/wissen van uw persoonsgegevens</h3>

    <p>
      Bij bewijs van uw identiteit als Gebruiker, beschikt u over een recht om van {{ $displayName }} uitsluitsel te krijgen over het al dan niet verwerken van uw persoonsgegevens. Wanneer {{ $displayName }} uw gegevens verwerkt, heeft u bovendien het recht om inzage te verkrijgen in de verzamelde persoonsgegevens. Indien u wenst uw recht op inzage te gebruiken, zal {{ $displayName }} hieraan gevolg geven binnen één (1) maand na het ontvangen van de aanvraag. De aanvraag gebeurt via aangetekende zending of via het versturen van een e-mail naar <a href="mailto:{{ $email }}">{{ $email }}</a>.
    </p>

    <p>
      Onnauwkeurige of onvolledige persoonsgegevens kunnen steeds verbeterd worden. Het is aan de Gebruiker om in de eerste plaats zelf onnauwkeurigheden en onvolledigheden aan te passen. U kan uw recht op verbetering uitoefenen door een aanvullende verklaring te verstrekken aan {{ $displayName }}. {{ $displayName }} zal hieraan gevolg geven binnen één (1) maand na het ontvangen van de aanvullende verklaring.
    </p>

    <p>
      U heeft bovendien het recht om zonder onredelijke vertraging uw persoonsgegevens door ons te laten wissen. U kan slechts beroep doen op dit recht om vergeten te worden in de hiernavolgende gevallen:
    </p>

    <ul>
      <li>Wanneer de persoonsgegevens niet langer nodig zijn voor de doeleinden waarvoor zij oorspronkelijk werden verzameld;</li>
      <li>Wanneer de persoonsgegevens verzameld werden op basis van verkregen toestemming en geen andere rechtsgrond bestaat voor de verwerking;</li>
      <li>Wanneer bezwaar wordt gemaakt tegen de verwerking en geen prevalerende dwingende gerechtvaardigde gronden voor de verwerking bestaan;</li>
      <li>Wanneer de persoonsgegevens onrechtmatig werden verwerkt;</li>
      <li>Wanneer de persoonsgegevens gewist moeten worden overeenkomstig een wettelijke verplichting.</li>
    </ul>

    {{ $displayName }} beoordeelt de aanwezigheid van een van de voornoemde gevallen.

    <h3>Recht op beperking van/bezwaar tegen de verwerking van uw persoonsgegevens</h3>

    <p>
      Gebruiker heeft het recht om een beperking van de verwerking van uw persoonsgegevens te verkrijgen:
    </p>

    <ul>
      <li>Gedurende de periode die {{ $displayName }} nodig heeft om de juistheid van de persoonsgegevens te controleren, in geval van betwisting;</li>
      <li>Wanneer de gegevensverwerking onrechtmatig is en Gebruiker verzoekt tot een beperking van de verwerking in plaats van het wissen van de persoonsgegevens;</li>
      <li>Wanneer {{ $displayName }} de persoonsgegevens van de Gebruiker niet meer nodig heeft voor de verwerkingsdoeleinden en Gebruiker de persoonsgegevens nodig heeft inzake een rechtsvordering;</li>
      <li>Gedurende de periode die {{ $displayName }} nodig heeft om de aanwezigheid van de gronden voor het wissen van persoonsgegevens te beoordelen.</li>
    </ul>

    <p>
      Gebruiker heeft bovendien te allen tijde het recht om bezwaar te maken tegen de verwerking van zijn persoonsgegevens. {{ $displayName }} staakt hierna de verwerking van uw persoonsgegevens, tenzij {{ $displayName }} dwingende gerechtvaardigde gronden voor de verwerking van uw persoonsgegevens kan aanvoeren die zwaarder wegen dan het recht van de Gebruiker op bezwaar.
    </p>

    <p>
      Indien Gebruiker wenst om deze rechten uit te oefenen, zal {{ $displayName }} hieraan gevolg geven binnen één  (1) maand na het ontvangen van de aanvraag. De aanvraag gebeurt via aangetekende zending of via een e-mail naar <a href="mailto:{{ $email }}">{{ $email }}</a>.
    </p>

    <h3>Recht op gegevensoverdraagbaarheid</h3>

    <p>
      Gebruiker heeft het recht om de aan {{ $displayName }} verstrekte persoonsgegevens in een gestructureerde, gangbare en machine leesbare vorm te verkrijgen. Daarnaast heeft Gebruiker het recht om deze persoonsgegevens over te dragen aan een andere verwerkingsverantwoordelijke wanneer de verwerking van de persoonsgegevens uitsluitend rust op de verkregen toestemming van de Gebruiker.
    </p>

    <p>
      Indien Gebruiker wenst om dit recht uit te oefenen, zal {{ $displayName }} hieraan gevolg geven binnen één (1) maand na het ontvangen van de aanvraag. De aanvraag gebeurt via aangetekende zending of via een e-mail naar <a href="mailto:{{ $email }}">{{ $email }}</a>.
    </p>

    <h3>Recht op het intrekken van mijn toestemming/recht om klacht in te dienen</h3>

    <p>
      Gebruiker heeft te allen tijde het recht om zijn toestemming in te trekken. Het intrekken van de toestemming laat de rechtmatigheid van de verwerking op basis van de toestemming vóór de intrekking daarvan, onverlet. Daarnaast heeft Gebruiker het recht om klacht in te dienen betreffende de verwerking van zijn persoonsgegevens door {{ $displayName }} bij de Belgische Commissie voor de Bescherming van de Persoonlijke Levenssfeer.
    </p>

    <p>
      Indien Gebruiker wenst dit recht uit te oefenen, zal {{ $displayName }} hieraan gevolg geven binnen één (1) maand na het ontvangen van de aanvraag. De aanvraag gebeurt via aangetekende zending of via e-mail naar <a href="mailto:{{ $email }}">{{ $email }}</a>.
    </p>
  </div>
@endsection
