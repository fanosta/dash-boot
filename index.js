var dash_button = require('node-dash-button');
var wol = require('node-wol');

var dash = dash_button("ac:63:be:17:d9:fb", null, null, 'udp');

dash.on("detected", function() {
	console.log('event');
	wol.wake('94:DE:80:7A:62:94', function(error) {
        if (error) {
            console.log(error);
        } else {
            console.log("success sending magic packet");
        }
    })
});

