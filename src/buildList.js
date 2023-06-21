const { version } = require("../package.json");
const polygon_mainnet = require("./tokens/polygon-mainnet.json");
const polygon_testnet = require("./tokens/polygon-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "ConeDEX Community",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://conegecko.com/assets/img/bitcone.png",
    keywords: ["conedex", "community"],
    tokens: [...polygon_mainnet, ...polygon_testnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
