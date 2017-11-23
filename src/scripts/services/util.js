/* globals numberformat */
/**
 util
 Utility service with misc. functions.

 @namespace Services
 */
'use strict';

angular
  .module('game')
  .service('util', ['prettyNumberFilter',
    '$sce',
    'data',
    'state',
    function(prettyNumber, $sce, data, state) {
      /* Return the HTML representation of an element, or the element itself
      if it doesn't have one */
      this.getHTML = function(resource) {
        let html = data.html[resource];
        if (typeof html === 'undefined' && data.resources[resource]) {
          html = data.resources[resource].html;
        }
        if (typeof html === 'undefined') {
          return resource;
        }
        return html;
      };

      this.prettifyNumber = function(number) {
        if (typeof number === 'undefined' || number === null) {
          return null;
        }
        if (number === '') {
          return '';
        }
        if (number === Infinity) {
          return '&infin;';
        }
        if (number === 0) {
          return '0';
        }
        return numberformat.format(number, state.player.numberformat);
      };

      this.addResource = function(resource, key, quantity){
        resource.number += quantity;
        if (quantity > 0 && !resource.unlocked) {
          resource.unlocked = true;
          state.addNew(key);
        }
      }

      this.trustHTML = function(html) {
        return $sce.trustAsHtml(html);
      };
    }
  ]);
