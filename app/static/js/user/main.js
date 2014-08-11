/* global $, document */

(function(){
  'use strict';
  var a = 3,
      b = 2;

  $(document).ready(initialize);

  function initialize(){
    $('div').css('color', 'red');
    $('h2').css('font-size', '50px');
    $('h2').text('Zoe');
    $('h2').fadeOut(2000);
    $('#a, #b, #c').addClass('happy');
    $('#c + ul > li').addClass('sad');
    console.log('the dom is now ready!');

    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color').click(makeColor);
    $('#fadeIn').click(makeFadeIn);
    $('#fadeOut').click(makeFadeOut);
  }
  
  function makeRed(){
    $('body').css('background-color', 'red');
    console.log('You clicked the red button');
  }

  function makeYellow(){
    $('body').css('background-color', 'yellow');
    console.log('You clicked the yellow button');
  }

  function makeColor(){
    $('body').css('background-color', $('#color-value').val());
    console.log('You clicked the color button');
  }

  function makeFadeIn(){
    var num= $('#fade-num').val() * 1;  
    $('footer').fadeIn(num);
  }

  function makeFadeOut(){
    var num= $('#fade-num').val() * 1;  
    $('footer').fadeOut(num);
  }

  console.log('the dom is not ready');
  console.log(a,b);
})();

