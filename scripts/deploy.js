  async function main() {
    const verifierContract = "ERC20Verifier";
    const factoryContract = "airdrop_factory";
  
    const DropCoin = await hre.ethers.getContractFactory("DropToken");
    const dropToken = await DropCoin.deploy();
    console.log("Deploying DropToken");
    await dropToken.deployed();
    console.log("Drop Token deployed to:", dropToken.address);
  
    const ERC20Verifier = await ethers.getContractFactory(verifierContract);
    const erc20Verifier = await ERC20Verifier.deploy(
      dropToken.address
    );
    console.log("Deploying ERC20Verifier");
    await erc20Verifier.deployed();
    console.log("contract hash:", erc20Verifier.address);
  
    const FactoryContract = await ethers.getContractFactory(factoryContract);
    const factoryContractDeploy = await FactoryContract.deploy();
    console.log("Deploying FactoryContract");
    await factoryContractDeploy.deployed();
    console.log("contract hash:", factoryContractDeploy.address);
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  