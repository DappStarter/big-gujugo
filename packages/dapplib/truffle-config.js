require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give enroll slender solve find deny oval toward coral light army gather'; 
let testAccounts = [
"0x93f1d506a4e37a0b1aa556bd337416a5451fadc607d8471a7e93024ee071278d",
"0x092331e161d1b42b2a5ef6408efbc88bb384f9477788aace009d3ae1c2db542a",
"0x15e9095d6c0dc0000f27c7858537714e3c7c34fa9e85db10e95ad2712c2f2f9f",
"0xf5f1d3e02f2a3b5029594dc70c579d0a95f260bd04d7f5a4dad317c386b9c3f0",
"0x2407b8261455147501d4a4e54b2ad3ad669e7078cfbef3e0a97c09afb282a461",
"0x42bc1e40a7e78b882b40971b3b8f31865a4771cac50dec5a6cbaaa15c471cf10",
"0x7d9cd5461358d1b23d3b8db9589c29550910ab8e778fc701729c303bc246f26a",
"0x681d76c0d71b2086e7cc7a44dfb1975c1e87447343f6c7ac12de07eb3ad8aee3",
"0x6c8020c7be9ae282a1e1e25b59071f7f603194bebbf25262b7d1a20bf3d0873a",
"0xd59a4cd408eab37d396768e112846752619ca0b5e3b8a41df63675ed09bff426"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

