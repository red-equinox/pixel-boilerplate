console.log( "app.js - requireJS config - starts app/main using requirejs([app/main])" );
requirejs.config({
  baseUrl: 'assets/js/lib',
  paths: {
    app: '../app'
  }
});

// Load the main app module to start the app
requirejs(["app/main"]);
