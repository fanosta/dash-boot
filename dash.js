var dash_button = require('node-dash-button');
var actions = require('./actions')
var cfg = require('./config.json');


var brabantia = dash_button(cfg.dash.brabantia, null, null, 'udp');

brabantia.on("detected", function() {
    console.log("brabantia pressed");
    actions.boot_ombra();
});
