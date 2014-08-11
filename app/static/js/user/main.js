/* global $, document */

(function(){
  'use strict';
  var a = 3,
      b = 2;

  $(document).ready(initialize);

  function initialize(){
    $('div').css('color', 'red');
    console.log('the dom is now ready!');
  }

  console.log('the dom is not ready');


  console.log(a,b);
})();

