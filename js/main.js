// When you change APPName, be sure to update it in mylibs/util.js
// @see http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
var APPNAME = {
  
  methodName: function() {
    
  },
  
  // Initializers
  common: {
    init: function() { 
      
    },
    finalize: function() {
      
    }
  },
  
  bodyId_or_className: {
    init: function() { 

    },
    finalize: function() { 
      
    }
  }
};

UTIL = {
  fire: function( func,funcname, args ) {
    var namespace = APPNAME;  // indicate your obj literal namespace here
 
    funcname = ( funcname === undefined ) ? 'init' : funcname;
    if ( func !== '' && namespace[ func ] && typeof namespace[ func ][ funcname ] == 'function' ) {
      namespace[ func ][ funcname ]( args );
    }
  },
  loadEvents: function() {
    var bodyId = document.body.id;
 
    // hit up common first.
    UTIL.fire( 'common' );
 
    // do all the classes too.
    $.each( document.body.className.split( /\s+/ ), function( i, classnm ) {
      UTIL.fire( classnm );
      UTIL.fire( classnm, bodyId );
    });
    UTIL.fire( 'common', 'finalize' );
  }
};

$(document).ready(UTIL.loadEvents);