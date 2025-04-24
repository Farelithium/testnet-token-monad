async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Mendapatkan kontrak yang sudah dikompilasi
    const Token = await ethers.getContractFactory("MyToken");
  
    // Menentukan jumlah supply awal (misalnya 1 juta token dengan 18 desimal)
    const initialSupply = ethers.utils.parseUnits("1000000", 18);
  
    // Deploy kontrak dengan supply awal
    const token = await Token.deploy(initialSupply);
    console.log("Token deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  