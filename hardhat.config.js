// require('@nomiclabs/hardhat-waffle');
// require('dotenv').config();

// module.exports = {
//   solidity: "0.8.17",
//   paths: {
//     artifacts: "./frontend/src/artifacts",
//   },
//   networks: {
//     mumbai: {
//       url: `${process.env.ALCHEMY_MUMBAI_URL}`,
//       accounts: [`0x${process.env.MUMBAI_PRIVATE_KEY}`],
//       allowUnlimitedContractSize: true,
//     } 
//   }
// };
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://omniscient-quiet-model.matic-testnet.discover.quiknode.pro/fa45659b59cd2901778bb1b382715725ee7ab36e/",
      accounts: [`0x${process.env.MUMBAI_PRIVATE_KEY}`]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: "./frontend/src/artifacts"
  }
}
