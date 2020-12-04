console.log( "app.js - requireJS config - starts app/main using requirejs([app/main])" );
requirejs.config({
  baseUrl: 'assets/js/lib',
  paths: {
    app: '../app',
    underscore: 'underscore',
    domReady: 'domReady',
    one: '../app/home/one',
    two: '../app/home/two',
  },
  shim: {
    underscore: {
      exports: '_'
    },

  }
});

// Load the main app module to start the app
requirejs(["app/main"]);
