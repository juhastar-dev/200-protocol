# 200 Token — Production Source / Build Artifact Gate

**Date:** 2026-09-22  
**Status:** BLOCKING GATE — SOURCE/BUILD ARTIFACT NOT YET FROZEN

## Finding
The current `main` branch contains the public protocol/site, machine-readable records, Base Sepolia evidence, Mainnet configuration and launch controls, but it does **not** contain the Solidity source, compiler/build configuration, dependency lockfile, deployment script, or reproducible production bytecode artifact for `TwoHundredToken`.

The Base Sepolia behavioral evidence remains valid for the deployed test contract and the behaviors actually tested. It is **not sufficient by itself** to prove that a future Mainnet deployment uses identical source and bytecode.

## Required before funding or Mainnet deployment
1. Recover or reconstruct the exact Solidity source intended for production.
2. Identify the exact source used for the validated Base Sepolia deployment if available.
3. Diff testnet source against production source and document every difference.
4. Freeze compiler version, optimizer settings/runs, EVM target and dependency versions.
5. Add a dependency lockfile and deterministic build instructions.
6. Add a deployment script that accepts only the frozen owner/configuration.
7. Compile from a clean environment and record source hash, creation-bytecode hash and runtime-bytecode hash.
8. Run local tests for fixed supply, no mint path, 0% transfer semantics, ownership, ERC-2612 Permit and Token Recovery.
9. Deploy the candidate to Base Sepolia from the frozen build and repeat the critical read/behavioral checks if the recovered source/build cannot be proven identical to the previously validated deployment.
10. Freeze a production candidate commit.
11. On Mainnet, deploy only from that frozen commit/build and verify published source/configuration before liquidity.

## Hard stop
**Do not fund for deployment and do not deploy the production 200 Token while this gate is BLOCKING.**

A matching name, symbol, decimals and supply after deployment are necessary but do not prove source equivalence. Production readiness requires a frozen, reproducible source/build artifact.

## Current conclusion
The public/documentation layer is substantially synchronized, but the exact deployable token artifact is the remaining critical technical provenance gap. Resolving it is a zero-cost preparation task.
