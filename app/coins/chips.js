var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"CHIPS",
		multiplier:1,
		default:true,
		values:["", "chips", "CHIPS"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"mCHIPS",
		multiplier:1000,
		values:["mbtc"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"bits",
		multiplier:1000000,
		values:["bits"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"sat",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
	{
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		values:["eur"],
		decimalPlaces:2,
		symbol:"€"
	},
];

module.exports = {
	name:"Chips",
	ticker:"CHIPS",
	logoUrlsByNetwork:{
		"main":"/img/logo/chips.png"
	},
	siteTitlesByNetwork: {
		"main":"Chips Explorer"
	},
	siteDescriptionHtml:"<b>BTC Explorer</b> is <a href='https://github.com/janoside/btc-rpc-explorer). If you run your own [Bitcoin Full Node](https://bitcoin.org/en/full-node), **BTC Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/janoside/btc-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle:"Chips Full Node",
	nodeUrl:"https://chips.cash",
	demoSiteUrl: "https://explorer.btc21.org",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/btccom/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
	],
	maxBlockWeight: 4000000,
	maxBlockSize: 1000000,
	difficultyAdjustmentBlockCount: 2016,
	maxSupplyByNetwork: {
		"main": new Decimal(20999817.31308491), // ref: https://bitcoin.stackexchange.com/a/38998
		"test": new Decimal(21000000),
		"regtest": new Decimal(21000000)
	},
	targetBlockTimeSeconds: 10,
	// targetBlockTimeMinutes: 10,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"CHIPS":currencyUnits[0], "mCHIPS":currencyUnits[1], "bits":currencyUnits[2], "sat":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHashesByNetwork:{
		"main":    "0000006e75f6aa0efdbf7db03132aa4e4d0c84951537a6f5a7c39a0a9d30e1e7",
		"test":    "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
		"regtest": "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206"
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":    "bc969ac1b1fe17ee8fd304fdb18d76e2a45883ff64c73c165c6c0c255bfe6276",
		"test":    "bc969ac1b1fe17ee8fd304fdb18d76e2a45883ff64c73c165c6c0c255bfe6276",
		"regtest": "bc969ac1b1fe17ee8fd304fdb18d76e2a45883ff64c73c165c6c0c255bfe6276"
	},
	genesisCoinbaseTransactionsByNetwork:{
		"main": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
			"txid": "bc969ac1b1fe17ee8fd304fdb18d76e2a45883ff64c73c165c6c0c255bfe6276",
			"hash": "bc969ac1b1fe17ee8fd304fdb18d76e2a45883ff64c73c165c6c0c255bfe6276",
			"size": 204,
			"vsize": 204,
			"version": 1,
			"confirmations":475000,
			"vin": [
				{
					"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50,
					"n": 0,
					"scriptPubKey": {
						"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
						"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
						]
					}
				}
			],
			"blockhash": "0000006e75f6aa0efdbf7db03132aa4e4d0c84951537a6f5a7c39a0a9d30e1e7",
			"time": 1230988505,
			"blocktime": 1230988505
		}
	},
	genesisBlockStatsByNetwork:{
		"main": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "0000006e75f6aa0efdbf7db03132aa4e4d0c84951537a6f5a7c39a0a9d30e1e7",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1231006505,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 5000000000,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1231006505,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		}
	},
	genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [
		{
			type: "blockheight",
			date: "2009-01-03",
			chain: "main",
			blockHeight: 0,
			blockHash: "0000006e75f6aa0efdbf7db03132aa4e4d0c84951537a6f5a7c39a0a9d30e1e7",
			summary: "The Bitcoin Genesis Block.",
			alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. This block was mined by Bitcoin's creator Satoshi Nakamoto. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		}
	],
	exchangeRateData:{
		jsonUrl:"https://api.coindesk.com/v1/bpi/currentprice.json",
		responseBodySelectorFunction:function(responseBody) {
			//console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

			var exchangedCurrencies = ["USD", "GBP", "EUR"];

			if (responseBody.bpi) {
				var exchangeRates = {};

				for (var i = 0; i < exchangedCurrencies.length; i++) {
					if (responseBody.bpi[exchangedCurrencies[i]]) {
						exchangeRates[exchangedCurrencies[i].toLowerCase()] = responseBody.bpi[exchangedCurrencies[i]].rate_float;
					}
				}

				return exchangeRates;
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight, chain) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var halvingBlockInterval = (chain == "regtest" ? 150 : 210000);
		var index = Math.floor(blockHeight / halvingBlockInterval);

		return eras[index];
	}
};