require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stomach curtain saddle hospital imitate problem slot gate'; 
let testAccounts = [
"0xacba76a9cfad5abb4bbb4dc4415743a964e993b515efb4f8919fd5873db550d4",
"0x4e471c64948a189b103c4b827793234b1cfdc9bbbc6f65ca09e584293353c2a7",
"0x1395f4f06425f9f2df60a30b87e55f77a65771dfb23b88ad2997c2693cc9e1ed",
"0x913743a8088fe04687ed7a2394bbc36e51823ade90bb29e079bfa5043e79425a",
"0x924442f6840b66d0931975e25bddd80885e1c5c993e7e071c0af97fa856b1e83",
"0xab3d57a53df0a75e54e219f37017d80a82a97229a2c3a6fb17f6dea93ee0f627",
"0xfa10162924083b084ec9dccb1e2a683215a1122bb4415f0e0e0c8010c6217f24",
"0x111ce4c33885efb72a51129ce9c4797f27383c12805e7353ee9b8cba57296294",
"0x6c67ad0cd7d2940cd5ffa51afc576e04e5852c7a2f77128542f97f9d9011d761",
"0xe9786f3f20ecfa05c8370771bc6aa21655c19a198acfc3bf531db8a0b58711a1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


