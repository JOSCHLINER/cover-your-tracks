$(document).ready(function(){
  var trackerInput = document.getElementById('tracker-input');
  var trackerOutput  = document.getElementById('tracker-output');
  var jsInput = document.getElementById('js-input');
  var jsOutput  = document.getElementById('js-output');
  var defaultsInput = document.getElementById('defaults-input');
  var defaultsOutput  = document.getElementById('defaults-output');
  var resistantInput = document.getElementById('resistant-input');
  var resistantOutput  = document.getElementById('resistant-output');
  // hide all prints except "you" for 5 seconds
  $('.footprints').hide();
  $('.footprints[first-fox]').show();
  $('.footprints[x-img="fox"]').delay(5000).fadeIn(4000);
  $('.footprints[x-img="raccoon"]').delay(5000).fadeIn(4000);
  $('.footprints[x-img="raccoonfoot"]').delay(5000).fadeIn(4000);
  // change "you" from red to gray

  function redToGray() {
    setTimeout(function(){
      $('.footprints[x-img="fox"]:nth-child(1)  > .foot').css('background-image','url(/static/svg/fox-gray.svg)');
      $('.footprints[x-img="fox"]:nth-child(1)  > .you').fadeOut(1000);
    },4000);
  }
  redToGray();

  defaultsInput.onchange = function(){
    if (defaultsInput.value == '2') {
      defaultsOutput.value = "no"
      $('.footprints[x-img="fox"]:nth-child(2)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      $('.footprints[x-img="fox"]:nth-child(3)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      $('.footprints[x-img="fox"]:nth-child(4)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      $('.footprints[x-img="fox"]:nth-child(5)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');

    } else {
      defaultsOutput.value = "yes"
      $('.footprints[x-img="fox"]:nth-child(2)  > .foot' ).css('background-image','url(/static/svg/antelope.svg)');
      $('.footprints[x-img="fox"]:nth-child(3)  > .foot' ).css('background-image','url(/static/svg/antelope.svg)');
      $('.footprints[x-img="fox"]:nth-child(4)  > .foot' ).css('background-image','url(/static/svg/bird.svg)');
      $('.footprints[x-img="fox"]:nth-child(5)  > .foot' ).css('background-image','url(/static/svg/bird.svg)');
    }
  }
  resistantInput.onchange = function(){
    if (resistantInput.value == '1') {
      resistantOutput.value = "no"
      if (jsInput.value == '1') {
        $('.footprints[x-img="fox"]:nth-child(6)  > .foot' ).css('background-image','url(/static/svg/deer.svg)');
        $('.footprints[x-img="fox"]:nth-child(7)  > .foot' ).css('background-image','url(/static/svg/deer.svg)');
      }
      else if (defaultsInput.value == '2') {
        $('.footprints[x-img="fox"]:nth-child(2)  > .foot' ).css('background-image','url(/static/svg/bird.svg)');
        $('.footprints[x-img="fox"]:nth-child(2)  > .foot' ).css('background-image','url(/static/svg/bird.svg)');
      }
    } else {
      resistantOutput.value = "yes"
      if (jsInput.value == '1') {
        $('.footprints[x-img="fox"]:nth-child(6)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
        $('.footprints[x-img="fox"]:nth-child(7)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      }
      else if (defaultsInput.value == '2') {
        $('.footprints[x-img="fox"]:nth-child(4)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
        $('.footprints[x-img="fox"]:nth-child(5)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      }
    }
  }
  trackerInput.onchange = function(){
    if (trackerInput.value == '1') {
      trackerOutput.value = "not installed"
      $('.footprints').show();
      $('.tracker-text').fadeOut(1000);
    } else {
      trackerOutput.value = "installed"
      $('.footprints').hide();
      $('.tracker-text').fadeIn(1000);
    }
  }
  jsInput.onchange = function(){
    if (jsInput.value == '1') {
      jsOutput.value = "enabled"
      $('.footprints[x-img="fox"]:nth-child(6)  > .foot' ).css('background-image','url(/static/svg/deer.svg)');
      $('.footprints[x-img="fox"]:nth-child(7)  > .foot' ).css('background-image','url(/static/svg/deer.svg)');
      $('.footprints[x-img="fox"]:nth-child(8)  > .foot' ).css('background-image','url(/static/svg/horse.svg)');
      $('.footprints[x-img="fox"]:nth-child(9)  > .foot' ).css('background-image','url(/static/svg/horse.svg)');
    } else {
      jsOutput.value = "not enabled"
      $('.footprints[x-img="fox"]:nth-child(6)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      $('.footprints[x-img="fox"]:nth-child(7)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      $('.footprints[x-img="fox"]:nth-child(8)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
      $('.footprints[x-img="fox"]:nth-child(9)  > .foot' ).css('background-image','url(/static/svg/fox-gray.svg)');
    }
  }

});
