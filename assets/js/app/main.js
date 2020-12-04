console.log( "app/main.js"  );
//define(function (require) {
  //console.log( "Put your javascript foo here"  );
//});
requirejs(['domReady', 'underscore'], function (domReady) {
    requirejs(['one'], function (one) {
        domReady(function () {
            one.addToDom();

        });
    });

    requirejs(['two'], function (two) {
        domReady(function () {
            two.addToDom();

        });
    });
});
