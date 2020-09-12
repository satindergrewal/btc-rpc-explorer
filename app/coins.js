var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var chips = require("./coins/chips.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"CHIPS": chips,

	"coins":["BTC", "LTC", "CHIPS"]
};