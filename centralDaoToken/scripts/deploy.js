const hre = require("hardhat");

async function main() {
  console.log(`Deploying Central DAO Token contract...`);

  const initialSupply = hre.ethers.parseEther("1000000"); // 1 million tokens

  const CentralDaoToken = await hre.ethers.getContractFactory("CentralDaoToken");
  const centralDaoToken = await CentralDaoToken.deploy(initialSupply);

  console.log(`Central DAO Token deployed to: ${centralDaoToken.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
