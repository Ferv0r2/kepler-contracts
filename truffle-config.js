const HDWalletProvider = require("@truffle/hdwallet-provider");

/**
 * truffle network variables
 * for deploying contract to klaytn network.
 */
const NETWORK_ID = "1001";

/**
 * URL: URL for the remote node you will be using
 * PRIVATE_KEY: Private key of the account that pays for the transaction (Change it to your own private key)
 */
const URL = "https://api.baobab.klaytn.net:8651";

// Paste your `Private key` that has enough KLAY to truffle.js
const PRIVATE_KEY =
  "0x07f43ead6ebc149965fe5327c5def06c7af52f0f27c6e2e5d9a88e0e5187382b";

module.exports = {
  networks: {
    baobab: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: "8500000",
      gasPrice: null,
    },
    ganache: {
      host: "localhost",
      port: 0545,
      network_id: "*",
    },
  },

  // Specify the version of compiler, we use 0.5.6
  compilers: {
    solc: {
      version: "0.5.6",
    },
  },
};
