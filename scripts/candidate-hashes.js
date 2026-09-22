const fs = require("fs");
const crypto = require("crypto");

function sha256Hex(data){ return crypto.createHash("sha256").update(data).digest("hex"); }
const source = fs.readFileSync("contracts/TwoHundredToken.sol");
const artifact = JSON.parse(fs.readFileSync("artifacts/contracts/TwoHundredToken.sol/TwoHundredToken.json","utf8"));
const out = {
  schema: "200-protocol/production-candidate-hashes/v1",
  sourceSha256: sha256Hex(source),
  creationBytecodeSha256: sha256Hex(Buffer.from(artifact.bytecode.slice(2),"hex")),
  deployedBytecodeSha256: sha256Hex(Buffer.from(artifact.deployedBytecode.slice(2),"hex")),
  compiler: "solc 0.8.24",
  optimizer: { enabled: true, runs: 200 },
  evmVersion: "cancun",
  openzeppelinContracts: "5.0.2",
  note: "Hashes identify this reconstructed candidate build. They do not claim identity with the earlier Base Sepolia deployment."
};
console.log(JSON.stringify(out,null,2));
