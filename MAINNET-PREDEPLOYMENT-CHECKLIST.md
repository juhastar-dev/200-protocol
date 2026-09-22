# 200 Token — Mainnet Pre-Deployment Checklist

**Status:** FINAL PREDEPLOYMENT CHECKLIST — NO MAINNET TRANSACTION AUTHORIZED  
**Network:** Base Mainnet · chain ID 8453 (`0x2105`)  
**Real-money launch ceiling:** EUR 200

## Frozen configuration
200 Token / 200; TwoHundredToken; 18 decimals; fixed 100,000,000 supply; non-mintable; ERC-2612 Permit and Token Recovery enabled; 0% taxes; blacklist/pause/max-wallet/max-transaction/cooldown/trading-gate/tax modules disabled; owner retained through launch.

Initial liquidity: **PancakeSwap V3 on Base Mainnet**, 200/WETH, 500,000 200 token side, 0.25% fee tier, Full Range.

Official-address snapshot checked 2026-09-22:
- Factory `0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865`
- V3 SwapRouter `0x1b81D678ffb9C0263b24A97847620C99d213eB14`
- Position Manager `0x46A15B0b27311cedF172AB29E4f4766fbE7F4364`
- QuoterV2 `0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997`
- Smart Router (Base) `0x678Aa4bF4E210cf2166753e054d5b7c31cc7fa86`
- Base WETH `0x4200000000000000000000000000000000000006`

Reverify these from current official PancakeSwap/Base information immediately before signing.

## Budget and transaction safeguards
Total <= EUR 200; initial ETH liquidity <= EUR 120; deploy + liquidity gas <= EUR 40; first buy <= EUR 10; first sell <= EUR 10; EUR 20 contingency remains uncommitted. Validation slippage <= 1%. Prefer exact/minimum approvals. Never retry uncertain transactions until status is known.

## Launch-day checklist
1. Confirm Account 2 is selected and its displayed address matches the approved deployer.
2. Confirm Base Mainnet 8453 / 0x2105.
3. Fetch live ETH/EUR.
4. Fetch deployment/liquidity gas estimates.
5. Calculate ETH liquidity <= EUR 120 and projected cumulative spend <= EUR 200.
6. Reverify the frozen PancakeSwap V3 addresses from official sources and confirm deployed bytecode.
7. Compare final contract artifact/configuration field-by-field with the freeze.
8. Review deployment transaction and obtain explicit human approval.
9. Deploy once; wait for final status before any retry.
10. Record deployment hash/address/block.
11. Verify/publish source where supported.
12. Read back bytecode, name, symbol, decimals, supply, owner, pending owner and ERC-2612 domain.
13. Stop unless all identity/configuration checks pass.
14. Update canonical records with production identity only after verification.
15. Calculate final 200/ETH ratio from actual approved ETH liquidity.
16. Review PancakeSwap V3 liquidity transaction: spender, 200 amount, WETH/ETH amount, 0.25% fee, Full Range, recipient, gas.
17. Use exact/minimum approval where practical.
18. Create liquidity once and record pool/position.
19. Tiny buy <= EUR 10, <=1% slippage; verify receipt/balances.
20. Tiny sell <= EUR 10, <=1% slippage; verify receipt/balances.
21. Publish mainnet evidence.
22. Only then mark production-live.

## STOP
Stop on wrong network/wallet, budget breach, configuration difference, unverified DEX identity, unexpected spender/unlimited approval, unexpected liquidity parameters, uncertain prior transaction, identity/source mismatch or unexplained buy/sell behavior.

This checklist authorizes **nothing** by itself. Real transactions require explicit user approval.
