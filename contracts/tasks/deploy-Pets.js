const { task } = require("hardhat/config")
require("dotenv").config();

const AccountAddr = process.env.AccountAddr;

task("deploy-Pets","deploy and verify Pets contract").setAction(async (taskArgs, hre) => {
    const PetsFactory = await ethers.getContractFactory("Pets");
    console.log("contract deploying");
    const Pets = await PetsFactory.deploy(AccountAddr);
    await Pets.waitForDeployment()
    console.log(`successfully!!!contract deployed to ${Pets.target}`)

    if(hre.network.config.chainId === 11155111 && process.env.EhterscanApi){
        console.log("waiting for 5 confirmations....")
        await Pets.deploymentTransaction().wait(5)
        await verifyerc721(Pets.target,[AccountAddr]);
    }else{
        console.log("verification skipped!!!")
    }
})

async function verifyerc721(PetsAddr,args){
  console.log("verifying contract....")
  await hre.run("verify:verify", {
      address: PetsAddr,
      constructorArguments: args,
  });
}
module.exports = {}
