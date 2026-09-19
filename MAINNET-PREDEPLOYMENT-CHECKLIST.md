# 200 Token — Mainnet Pre-Deployment Checklist

**Status:** READY FOR LAUNCH-DAY PREFLIGHT — NO MAINNET TRANSACTION AUTHORIZED  
**Network:** Base Mainnet  
**Required chain ID:** 8453 (`0x2105`)  
**Absolute total real-money launch cap:** EUR 200

## Frozen configuration

- 200 Token / symbol 200
- Contract name: TwoHundredToken
- 18 decimals
- Fixed supply: 100,000,000 200
- Non-mintable
- ERC-2612 Permit enabled
- Token Recovery enabled
- 0% transfer / buy / sell tax
- blacklist disabled
- pausable disabled
- max-wallet disabled
- max-transaction disabled
- anti-bot cooldown disabled
- trading gate disabled
- tax modules disabled
- owner retained through launch
- token-side initial liquidity plan: 500,000 200
- preferred liquidity implementation currently: PancakeSwap V3
- currently frozen V3 fee tier: 0.25%
- currently frozen V3 range: Full Range
- final DEX route/contracts must be rechecked against current official PancakeSwap information on launch day

## Budget hard limits

- Total launch: <= EUR 200
- Initial ETH liquidity: <= EUR 120
- Deployment + liquidity gas: <= EUR 40
- First real buy: <= EUR 10
- First real sell: <= EUR 10
- Contingency: EUR 20, not automatically spendable
- Unused allocations remain unspent

## Validation transaction safeguards

- Maximum validation-trade slippage: 1.0%
- 1.0% is a ceiling, not a target
- Prefer exact/minimum approvals
- Verify every approval spender address before signing
- Never retry an uncertain transaction until its on-chain status is checked
- Do not continue after an unexpected quote, balance, recipient, range, fee tier, contract address or wallet/network state

## Launch-day sequence

1. Confirm the correct deployer/owner account in the wallet.
2. Confirm Base Mainnet and chain ID 8453 / 0x2105.
3. Fetch the live ETH/EUR rate.
4. Calculate the ETH liquidity amount so liquidity remains <= EUR 120 and the complete launch remains <= EUR 200.
5. Fetch live deployment and liquidity gas estimates.
6. Stop if projected deployment + liquidity gas exceeds EUR 40.
7. Re-check current official PancakeSwap Base deployment/contracts and whether V3 remains the intended production path.
8. Compare the final contract configuration field-by-field with the frozen configuration.
9. Present deployment transaction for human review.
10. Deploy once.
11. Wait for final transaction status before any retry or follow-on transaction.
12. Record deployment hash and contract address.
13. Verify/publish contract source on BaseScan where supported.
14. Read back and verify name, symbol, decimals, total supply, owner, pending owner and ERC-2612 domain.
15. Do not create liquidity unless identity checks pass.
16. Calculate the actual 200/ETH launch ratio from the final approved ETH amount.
17. Present liquidity transaction for human review.
18. Verify spender, token amounts, fee tier/range, recipient and estimated gas.
19. Create liquidity once and record the resulting pool/position.
20. Execute a deliberately small buy, <= EUR 10, under the 1% maximum slippage rule.
21. Verify its on-chain result before continuing.
22. Execute a deliberately small sell, <= EUR 10, under the 1% maximum slippage rule.
23. Verify balances/output and investigate any unexplained deduction.
24. Update public human-readable and machine-readable evidence.
25. Only then change project status from testnet/prelaunch to production-live.

## Immediate STOP conditions

STOP and do not sign if:

- network is not Base Mainnet / chain 8453;
- cumulative projected real-money spending would exceed EUR 200;
- initial ETH liquidity would exceed EUR 120;
- deployment + liquidity gas projection would exceed EUR 40;
- validation trade would exceed EUR 10;
- wallet/deployer is not the approved owner;
- final contract settings differ from the freeze;
- current official DEX contracts cannot be confirmed;
- requested approval spender is unexpected;
- an unlimited approval is requested where exact approval is sufficient;
- liquidity parameters differ from the reviewed plan;
- any previous transaction has uncertain status;
- deployed identity differs from expected values;
- source verification does not correspond to the deployed artifact where verification is available;
- post-launch validation reveals unexplained behavior.

## Authorization state

This checklist does **not** authorize deployment or spending.

The next phase is a launch-day read-only preflight using current ETH/EUR, current gas conditions and current official DEX deployment information. A real mainnet transaction should only be presented after those checks and after explicit user approval.
