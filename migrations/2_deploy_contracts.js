var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(ConvertLib, {
        gas: 6721975,
    });
    deployer.link(ConvertLib, MetaCoin);
    deployer.deploy(MetaCoin, {
        gas: 6721975,
    });
};