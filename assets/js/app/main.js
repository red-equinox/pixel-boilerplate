console.log( "app/main.js"  );
//define(function (require) {
  //console.log( "Put your javascript foo here"  );
//});
requirejs(['domReady', 'underscore'], function (domReady) {
    requirejs(['one', 'two'], function (one, two) {
        domReady(function () {
            one.addToDom();
            console.log( "Put your one foo here"  );
            two.addToDom();
            console.log( "Put your one foo here"  );
        });
    });


});
