var wol = require('node-wol');
var cfg = require('./config.json');

module.exports = {
    boot_ombra: function() {wake(cfg.ombra.mac)}
}

function wake(mac) {
    wol.wake(mac, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("sent magic packet to " + mac);
        }
    })
}
