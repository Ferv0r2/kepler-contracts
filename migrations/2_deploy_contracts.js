const Kepler = artifacts.require("Kepler");
const fs = require("fs");

module.exports = function (deployer) {
  var name = "truffle-kepler";
  var symbol = "tk";

  deployer.deploy(Kepler, name, symbol).then(() => {
    if (Kepler._json) {
      // 1. Record recently deployed contract's abi file to 'deployedABI'
      fs.writeFile(
        "deployedABI",
        JSON.stringify(Kepler._json.abi, 2),
        (err) => {
          if (err) throw err;
          console.log(
            `The abi of ${Kepler._json.contractName} is recorded on deployedABI file`
          );
        }
      );
    }

    // 2. Record recently deployed contract's address to 'deployedAddress'
    fs.writeFile("deployedAddress", Kepler.address, (err) => {
      if (err) throw err;
      console.log(
        `The deployed contract address * ${Kepler.address} * is recorded on deployedAddress file`
      );
    });
  });
};
