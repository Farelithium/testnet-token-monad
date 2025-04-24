import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DeployToken = buildModule("DeployToken", (m) => {
  const initialSupply = m.getParameter("initialSupply", "1000000"); // 1 juta token
  const token = m.contract("MyToken", [initialSupply]);
  return { token };
});

export default DeployToken;
