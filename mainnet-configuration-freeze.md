# 200 Token — Base Mainnet Configuration Freeze

**Freeze:** v2  
**Date:** 2026-09-22  
**Status:** FINAL FROZEN — PREDEPLOYMENT READY / DYNAMIC LAUNCH-DAY VALUES PENDING  
**Evidence:** Base Sepolia core validation complete (11 PASS, 0 FAIL, 0 pending core checks)

## Production network and token
- Base Mainnet, chain ID **8453 (0x2105)**; native gas asset ETH.
- Production contract: **NOT YET DEPLOYED**; production CAIP-19 is generated only after deployment.
- **200 Token (200)**; contract name **TwoHundredToken**; 18 decimals; fixed initial/maximum supply **100,000,000 200**; non-mintable.
- ERC-2612 Permit and Token Recovery enabled.
- 0% transfer/buy/sell tax; blacklist, pause, max-wallet, max-transaction, cooldown, trading gate and tax modules disabled.
- Owner retained through launch; no ownership renunciation/transfer in the launch sequence.

Any change to these fundamentals reopens this freeze.

## Initial liquidity — FINAL FROZEN IMPLEMENTATION
Initial liquidity implementation: **PancakeSwap V3 on Base Mainnet**. This removes the earlier DEX ambiguity.

Initial pair: **200/WETH**. Planned token side: **500,000 200 (0.5% of fixed supply)**. Fee tier: **0.25%**. Position: **Full Range**. No LP burn or irreversible lock at launch.

Official PancakeSwap developer documentation was checked on 2026-09-22 and records the following Base-compatible V3 addresses:
- PancakeV3Factory: `0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865`
- SwapRouter (v3): `0x1b81D678ffb9C0263b24A97847620C99d213eB14`
- NonfungiblePositionManager: `0x46A15B0b27311cedF172AB29E4f4766fbE7F4364`
- QuoterV2: `0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997`
- Smart Router for Base: `0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86`
- Base WETH: `0x4200000000000000000000000000000000000006`

These addresses are recorded configuration, not permission to transact. Reverify the official identities and deployed bytecode immediately before launch. The 200/WETH pool address cannot be frozen before the production 200 contract exists.

## Budget — FINAL FROZEN
Absolute total real-money launch budget: **EUR 200 maximum**, a ceiling rather than a target.
- Initial ETH liquidity: <= EUR 120
- Deployment + liquidity gas: <= EUR 40
- First buy validation: <= EUR 10
- First sell validation: <= EUR 10
- Untouched contingency: EUR 20

Unused money remains unused. The exact ETH liquidity amount is calculated immediately before launch from live ETH/EUR and must remain within both the EUR 120 liquidity ceiling and EUR 200 cumulative ceiling. Resulting launch ratio and mathematical implied FDV are calculated only from that actual amount and are not price predictions.

## Validation safeguards
Validation-trade slippage ceiling: **1.0%**, not a target. Prefer exact/minimum approvals; verify every spender. Never retry an uncertain transaction until its on-chain status is known. Stop on unexpected quote, recipient, fee tier, range, contract, balance or wallet/network state.

## Frozen launch sequence
1. Confirm Account 2 and Base Mainnet chain 8453.
2. Fetch live ETH/EUR and gas estimates.
3. Reverify the frozen PancakeSwap V3 Base contract identities from official sources and confirm bytecode.
4. Compare the final 200 contract artifact/configuration with this freeze.
5. Obtain explicit human authorization for the real deployment transaction.
6. Deploy once; wait for final status.
7. Record transaction, production contract address and block.
8. Verify/publish source where supported and read back bytecode, name, symbol, decimals, supply, owner, pending owner and ERC-2612 domain.
9. Do not create liquidity unless production identity/configuration passes.
10. Calculate final ETH side under the frozen budget.
11. Review exact PancakeSwap V3 approval/liquidity transaction: spender, token amounts, WETH/ETH path, 0.25% fee, Full Range, recipient and gas.
12. Create liquidity once; record pool/position and balances.
13. Execute one deliberately small buy <= EUR 10 and verify.
14. Execute one deliberately small sell <= EUR 10 and verify.
15. Publish production evidence and only then change public status to production-live.

## Hard stops
Do not sign if chain ID, wallet, token fundamentals, owner, official DEX identity, approval spender, fee tier/range, recipient, quote, gas/budget, previous transaction state or deployed identity differs from the reviewed plan. Do not publish an unverified production address.

## Security boundary
Never publish private keys or seed phrases. Mainnet evidence must be new mainnet evidence; Base Sepolia evidence remains historical test evidence. No mainnet transaction is authorized by this document.

## Remaining launch-day dynamic values
The configuration itself is now **FINAL FROZEN**. Only values that inherently cannot be fixed in advance remain dynamic:
- live ETH/EUR rate;
- exact ETH liquidity amount under the frozen ceilings;
- live gas estimates;
- production 200 contract address/CAIP-19 after deployment;
- resulting pool/position identity;
- transaction hashes and blocks.

Changing a frozen design choice is not a dynamic value and requires reopening the freeze.
