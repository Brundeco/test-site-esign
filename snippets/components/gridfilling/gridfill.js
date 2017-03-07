/* bij gebruik met packery moeten de items dezelfde hoogte hebben */
/* zorgt ervoor dat een grid opgevuld zal worden, ookal klopt het aantal items niet */

esign.initPackery = function () {

  esign.cache.$grid.packery({
    itemSelector: '.grid-item',
    initLayout: true,
    percentPosition: true,
    gutterWidth: 10,
    resize: true

  });


  esign.cache.$grid.imagesLoaded().progress(function () {
    esign.cache.$grid.packery();
  });
  esign.cache.$grid.on('layoutComplete', function () {
    esign.fillGrid();
  });

};

esign.fillGrid = function () {
  //console.log('FILL GRID')
  var allItems = [];
  var rowItems = [];
  var currentOffsetTop;
  //old starten bij 0; eerste item zal offset top hebben die groter is dan dit dus
  //er zal in de loop een eerste row worden aangemaakt bij het vergelijken van de old & current offset top
  //items moeten dus wel zelfde hoogte hebben
  var oldOffsetTop = 0;
  //padding/gutter om de correcte width terug te krijgen bij berekenen
  var padding = 20;
  var amountItems = $('.grid-fit .grid-item').length;


  var rowIndex = 0;

  $('.grid-fit .grid-item').each(function (index, element) {

    currentOffsetTop = $(element).offset().top;
    if (currentOffsetTop != oldOffsetTop) {
      //nieuwe row

      oldOffsetTop = currentOffsetTop;
      if (rowItems.length > 0) {
        allItems[rowIndex] = rowItems;
        rowItems = [];
        rowIndex++;
      }
    }

    rowItems.push(element);

    //laatste item moet ook toegevoegd worden aan een nieuwe row
    //handmatig want laatste row en hierna geen check of de offset top verschilt
    if (index == amountItems - 1) {
      if (rowItems.length > 0) {
        allItems[rowIndex] = rowItems;
        rowItems = [];
        rowIndex++;
      }
    }

  });


  var row, totalWidth;

  for (var i = 0; i < allItems.length; i++) {
    //alle rows afgaan
    row = allItems[i];
    rowItems = [];
    totalWidth = 0;
    for (var j = 0; j < allItems[i].length; j++) {
      //alle items in een row afgaan
      var gridItem = allItems[i][j];
      //percentage width van element tov parent container
      var percentageWidth = 100 * ($(gridItem).width() + padding) / ($(gridItem).offsetParent().width());
      totalWidth = totalWidth + percentageWidth;

      //bij laatste item in de row berekenen of de row wel gevuld wordt

      if (j == allItems[i].length - 1) {
        // console.log(totalWidth);
        if (totalWidth != 100) {
          //aantal items op deze row bekijken en bijhouden welke verhouding ze moeten hebben om deze wel te laten passen

          amountItems = allItems[i].length;
          var newWidthPercentage = 100 / amountItems;
          esign.resizeByPercentage(allItems[i], newWidthPercentage);


        }
      }
    }
  }
};


esign.resizeByPercentage = function (items, percentage) {

  percentage = parseInt(percentage);
  //console.log(percentage);
  $(items).each(function (index, element) {

    //aandehand van percentage juiste class geven

    $(element).removeClass();
    $(element).addClass('grid-item');
    var classList;

    switch (percentage) {

      case 20:
        classList = "medium-one-fifth large-one-fifth xlarge-one-fifth";

        break;
      case 25:
        classList = "medium-one-fourth large-one-fourth xlarge-one-fourth";

        break;
      case 40:
        classList = "medium-one-fifth large-two-fifth xlarge-two-fifth";

        break;
      case 50:
        classList = "medium-one-half large-one-half xlarge-one-half";

        break;
      case 33:
        classList = "medium-one-full large-one-third xlarge-one-third";

        break;
      case 100:
        classList = "medium-one-full large-one-full xlarge-one-full";

        break;
      default:
        classList = "medium-one-full large-one-full xlarge-one-full";

        break;
    }
    $(element).addClass(classList);

  });
};