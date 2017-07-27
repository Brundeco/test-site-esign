esign.moveElements = function() {

  moveElements = [];

  $('.move-element').each(function(index, element){


    var origPos = $('[data-element-id=' +$(element).attr('id') +'].position-original');
    if(origPos.length == 0){
      console.error('Original position not set for element ' , $(element));
    }

    if(origPos.length > 1) {
      console.error('Multiple original positions set for element ' , $(element));
    }

    var newPos = $('[data-element-id=' +$(element).attr('id') +'].position-moved');
    if(newPos.length == 0){
      console.error('New position not set for element ' , $(element));
    }
    if(newPos.length > 1) {
      console.error('Multiple new positions set for element ' , $(element));
    }
    var moveElement = {

      element: element,
      origPos: origPos,
      newPos: newPos,
      moveWhen: {
        type:'resize',
        props: {
          breakpoint: breakpoint,
          breakpointType: breakpointType,
        }
      },
      placeOnOriginalPosition: function(){
        console.log(this.origPos);
        $(this.element).insertAfter(this.origPos);
      },
      placeOnNewPosition: function(){
        console.log(this.newPos);
        $(this.element).insertAfter(this.newPos);
      },
      placeOnPosition: function(position){
        /* position as element */
        console.log(position);
        $(this.element).insertAfter($(position));
      },
      setOriginalPosition: function(position){
        /* position as element */
        console.log("Setted new original position: ",position);
        this.origPos = position;
      },
      setNewPosition: function(position){
        /* position as element */
        console.log("Setted new go to position: ",position);
        this.newPos = position;
      }

    };




    //console.log(origPos, newPos);

    /* INSTELLEN VAN EVENTS */

    var moveWhen = $(element).data("move-when");

    switch(moveWhen){
    /*  case 'resize':
        /!* BIJ BEPAALD BREAKPOINT VERPLAATSEN *!/
        var breakpoint = $(element).data('breakpoint');
        //type; max of min width
        var breakpointType = $(element).data('breakpoint-type');
        moveOnResize(element, origPos, newPos, breakpoint, breakpointType);
        break;

      case 'boolean':
        /!* NA EXPLICIET SETTEN ERVAN *!/

        break;*/

      default:
        var breakpoint = $(element).data('breakpoint');
        //type; max of min width
        var breakpointType = $(element).data('breakpoint-type');
        moveOnResize(element, origPos, newPos, breakpoint, breakpointType);
        break;
    }

    $('.moveElement-new[data-element-id=' + $(element).attr('id') + ']').on('click', function(){
      $(element).placeOnNewPosition();
    });
    $('.moveElement-original[data-element-id=' + $(element).attr('id') + ']').on('click', function(){
      $(element).placeOnOriginalPosition();
    });

  });

  function moveOnResize(element, origPos, newPos, breakpoint, breakpointType) {

    if(breakpoint == undefined){
      console.info('Breakpoint not defined for moveElementOnResize element', $(element), 'Used default breakpoint');
      breakpoint = 752;
    }
    if(breakpointType == undefined){
      console.info('Breakpoint type not defined for moveElementOnResize element', $(element), 'Used min as type');
      breakpointType = 'max';
    }

    /*  */

    if(breakpointType == 'max') {
      if($(window).width() < breakpoint) {
        $(element).insertAfter(newPos);
      }else {
        $(element).insertAfter(origPos);
      }

      $(window).on('resize', function(){
        if($(window).width() < breakpoint) {
          $(element).insertAfter(newPos);
        }else {
          $(element).insertAfter(origPos);
        }
      });
    }

    if(breakpointType == 'min') {
      if($(window).width() > breakpoint) {
        $(element).insertAfter(newPos);
      }else {
        $(element).insertAfter(origPos);
      }

      $(window).on('resize', function(){
        if($(window).width() > breakpoint) {
          $(element).insertAfter(newPos);
        }else {
          $(element).insertAfter(origPos);
        }
      });
    }





  }

};