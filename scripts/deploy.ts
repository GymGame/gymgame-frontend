import { ethers } from 'hardhat';
import { Gains, Gains__factory, GymJunkie, GymJunkie__factory } from '../typechain';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account: ' + deployer.address);

  const gainsFactory = (await ethers.getContractFactory('Gains')) as Gains__factory;
  let gainsContract = (await gainsFactory.connect(deployer).deploy()) as Gains;
  await gainsContract.deployed();

  console.log('Gains deployed to:', gainsContract.address);

  const nftFactory = (await ethers.getContractFactory('GymJunkie')) as GymJunkie__factory;
  let nftContract = (await nftFactory
    .connect(deployer)
    .deploy('www.placeholder.com', gainsContract.address)) as GymJunkie;
  await nftContract.deployed();

  console.log('NFT deployed to:', nftContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
