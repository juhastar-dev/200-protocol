# 200 Token — Production Source / Build Artifact Gate

**Date:** 2026-09-22  
**Status:** RESOLVED — PRODUCTION CANDIDATE BUILD FROZEN

## Resolution

The production candidate now has the required Solidity source, pinned compiler/build configuration, pinned dependencies, committed dependency lockfile, automated tests, deployment script, reproducibility hashes, and successful Base Sepolia candidate deployment evidence.

### Frozen candidate configuration
- Contract: `TwoHundredToken`
- Solidity: 0.8.24
- Optimizer: enabled, 200 runs
- EVM target: Cancun
- OpenZeppelin Contracts: 5.0.2
- Hardhat: 2.28.0
- Supply: 100,000,000 200, fixed at construction
- Intended owner: `0x64d6719831414f883aA51CB59584D7B4F4066E08`
- No public/external mint path
- ERC-2612 Permit enabled
- Owner-only token recovery enabled

### Reproducibility hashes
- Source SHA-256: `51c844cd8ec53c522eef6b908c5181ebe3516d64fec6698ccae0469b1b862c28`
- Creation bytecode SHA-256: `82ac1170556e59ab7cc892cc430485e943c4bc67bbc48bcc06b2ecb5c98cf24b`
- Runtime bytecode SHA-256: `a09a9a54c34984b6acf90f65b7a37e869fe90c2c3598b8782562839659f45a7e`

### Automated validation
The production-candidate suite passes 7 focused tests covering:
1. fixed identity and supply,
2. standard transfer with no tax,
3. large transfer without max-wallet/max-transaction restrictions,
4. ERC-2612 Permit,
5. owner-only token recovery,
6. Ownable2Step ownership flow,
7. ABI contains no mint function.

### Exact candidate Base Sepolia deployment
- Network: Base Sepolia, chain ID 84532
- Candidate: `0x17Cf1Dcfb537936d8Bda5CD9337B40A4aFc8065D`
- Owner: `0x64d6719831414f883aA51CB59584D7B4F4066E08`
- Total supply: 100,000,000 200
- Runtime bytecode size: 4,387 bytes
- Block: 47163520
- Deployment transaction: `0x12db2021b2e9ad5872fae94c7026a221568dfabbe2bf3535473cf504c96b6215`
- GitHub Actions run: 35755778509
- Candidate deployment commit: `3556821effc51cc22c19d187b49b876728b1e0b9`

The public RPC initially returned stale state immediately after confirmation; the hardened deployment script waited for bytecode visibility. Bytecode was visible on the second check, after which owner and supply checks passed.

## Production rule

From this point forward, the token source, compiler settings, dependency versions and token semantics are frozen for the intended production candidate. Any material change to those inputs invalidates this gate resolution and requires rebuilding, retesting, rehashing and repeating the candidate validation.

The Base Sepolia address above is testnet evidence only. It is not the future Base Mainnet token address.

## Mainnet hard gate remains

Resolving the source/build gate does **not** authorize a Mainnet transaction. Before Base Mainnet deployment:
- re-run the frozen build/tests from the committed lockfile,
- verify current Base Mainnet chain/RPC and official integration addresses,
- confirm the deployment budget and funded production wallet,
- deploy only with explicit authorization,
- verify the deployed source/configuration before liquidity,
- then perform the separately gated liquidity and small buy/sell checks.

No real ETH is required merely to keep this candidate frozen.
