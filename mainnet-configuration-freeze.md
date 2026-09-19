# 200 Token — Base Mainnet Configuration Freeze

**Freeze draft:** v1  
**Date:** 2026-09-19  
**Status:** DRAFT — FUNDAMENTALS FROZEN / LAUNCH ECONOMICS PENDING  
**Predecessor evidence:** Base Sepolia core validation complete (11 PASS, 0 FAIL, 0 pending core checks)

## 1. Production network

- Network: Base Mainnet
- Chain ID: 8453
- Native gas asset: ETH
- Production contract address: NOT YET DEPLOYED
- Production CAIP-19: GENERATED AFTER DEPLOYMENT

## 2. Token fundamentals — FROZEN

These values are intended to match the successfully tested Base Sepolia design:

- Token name: **200 Token**
- Symbol: **200**
- Contract name: **TwoHundredToken**
- Decimals: **18**
- Initial / maximum supply: **100,000,000 200**
- Mintable: **NO**
- ERC-2612 Permit: **ENABLED**
- Token Recovery: **ENABLED**
- Transfer tax: **0%**
- Buy tax: **0%**
- Sell tax: **0%**
- Blacklist: **DISABLED**
- Pausable: **DISABLED**
- Max wallet: **DISABLED**
- Max transaction: **DISABLED**
- Anti-bot cooldown: **DISABLED**
- enableTrading gate: **DISABLED**
- Dividend / wallet / liquidity / auto-burn taxes: **DISABLED**

Any deviation from these values before deployment reopens the freeze and requires a new review.

## 3. Ownership model — PROVISIONAL FREEZE

- Deployment owner: **Account 2 / deployment wallet**
- Ownership must **NOT** be renounced at deployment.
- No ownership transfer will be performed during the deployment transaction sequence.
- Owner powers are limited to the functionality actually present in the final contract; Token Recovery is an intentionally retained owner feature.
- After stable mainnet operation, ownership may be reviewed separately for transfer to a safer operational model (for example, a multisig) if desired.

Reason: irreversible ownership changes should not be made merely for appearance. The Base Sepolia validation demonstrated that Token Recovery is useful and owner-dependent.

## 4. DEX / liquidity design — FROZEN IN PRINCIPLE, ADDRESSES PENDING

- Target ecosystem: PancakeSwap on Base Mainnet
- Initial pair: **200 / WETH (ETH-facing liquidity)**
- Production router / factory / pair addresses: **VERIFY FROM CURRENT OFFICIAL PANCAKESWAP DEPLOYMENTS IMMEDIATELY BEFORE MAINNET ACTION**
- Do not copy Base Sepolia router or pair addresses into production.
- Liquidity transactions must use explicit minimum-output / slippage protection.
- Initial LP tokens must remain under deliberate owner control until a separate LP custody/locking policy is approved.
- No LP burn or irreversible lock is part of this freeze.

## 5. Launch economics — REAL-MONEY BUDGET FROZEN

**Absolute total real-money launch budget: EUR 200 maximum.**

This EUR 200 cap includes all real-money costs in the production launch sequence:
- ETH placed into initial liquidity
- Base mainnet deployment gas
- liquidity-creation gas
- small post-launch buy test
- small post-launch sell test
- other unavoidable Base transaction fees associated with launch

### Token-side amount

- Planned initial token-side liquidity: **500,000 200**
- This means **500,000 units of the 200 Token**, not EUR 500,000.
- These tokens come from the fixed 100,000,000 200 supply; they are not purchased for EUR 500,000.
- Portion of fixed supply represented by 500,000 200: **0.5%**

### ETH-side amount

The previously illustrated **0.05 ETH is no longer a hard commitment**.

The exact ETH amount will be calculated immediately before launch using the then-current ETH/EUR price. It must leave enough of the EUR 200 total budget for deployment gas, liquidity-creation gas, and deliberately small real buy/sell validation transactions.

**Hard stop:** if projected cumulative real-money launch spending would exceed EUR 200, do not submit the transaction.

Because the exact ETH amount is dynamic, the initial 200/ETH ratio, initial ETH price per 200, and mathematical implied FDV will also be recalculated immediately before launch. They are not frozen yet and are not market-value predictions.

### EUR 200 launch budget allocation — FROZEN

The EUR 200 total is a **hard ceiling, not a spending target**.

- Initial ETH liquidity: **maximum EUR 120**
- Deployment + liquidity-creation gas reserve: **maximum EUR 40**
- First real buy validation: **maximum EUR 10**
- First real sell validation: **maximum EUR 10**
- Untouched contingency: **EUR 20**
- Absolute cumulative launch maximum: **EUR 200**

Rules:

- The exact ETH liquidity amount is calculated immediately before launch using the live ETH/EUR price.
- Gas is estimated immediately before each transaction.
- If deployment + liquidity gas is projected to exceed EUR 40, stop and reassess.
- Buy and sell validation transactions may be smaller than EUR 10 and should use the smallest practical amount.
- The EUR 20 contingency is not automatically spent.
- Savings in one category are not automatically transferred to another category.
- Before every mainnet signature, calculate projected cumulative real-money spending. If it would exceed EUR 200, do not sign.
- A failed or apparently stale transaction must be checked on-chain before any retry.

### V3 launch-position rationale

- **0.25% fee tier** is selected for the initial 200/WETH pool.
- **Full Range** is selected for the initial V3 position.
- Full Range prioritizes operational simplicity and avoids an initial position becoming inactive merely because a new token's price moves outside a narrow range.
- A narrower concentrated position may be evaluated later after 200 has observable mainnet trading history.
- This configuration does not alter the EUR 200 maximum total real-money launch budget.

## 6. Mainnet deployment sequence — FROZEN

1. Verify Base Mainnet chain ID and wallet network.
2. Reconfirm final contract configuration against this freeze.
3. Confirm deployer wallet and sufficient ETH for deployment + liquidity + test transactions.
4. Deploy the 200 Token contract.
5. Record production contract address and deployment transaction.
6. Verify/publish contract source on BaseScan where supported.
7. Independently read name, symbol, decimals, total supply, owner, pending owner, bytecode and ERC-2612 domain.
8. Update public website and machine-readable files with the mainnet contract identity.
9. Re-verify current official PancakeSwap production contracts.
10. Create initial 200/WETH liquidity using the approved launch-economics values.
11. Record LP token ownership and pool address.
12. Execute a deliberately small real buy.
13. Execute a deliberately small real sell.
14. Confirm resulting balances, pool state and expected tax-free behavior.
15. Publish mainnet transaction evidence and change public status from testnet-only to production-live only after validation passes.

## 7. Mainnet launch stop conditions

STOP immediately if any of the following occurs:

- wallet is not on Base Mainnet chain 8453;
- deployed name, symbol, decimals or supply differ from the freeze;
- unexpected mint capability or admin feature appears;
- owner differs from intended deployment owner;
- unexpected pending owner exists;
- source verification does not match the deployed artifact where verification is available;
- current official PancakeSwap addresses cannot be independently confirmed;
- liquidity quote or pair composition differs from the approved plan;
- buy or sell shows unexplained token deductions;
- any transaction asks for an unlimited approval where an exact amount is sufficient;
- website or machine-readable records would point to an unverified/incorrect address.

## 8. Security and transparency rules

- Never publish or commit private keys, seed phrases or wallet secrets.
- Prefer exact approvals over unlimited approvals when practical.
- Re-verify every production address independently before signing.
- Keep the Base Sepolia address clearly labeled as testnet after mainnet deployment.
- Publish the Base mainnet contract address in a single canonical machine-readable record.
- Preserve the testnet report as historical evidence; do not rewrite it as mainnet evidence.
- Mainnet claims must be supported by new mainnet evidence.

## 9. Current freeze status

**FROZEN NOW**
- network family: Base
- name: 200 Token
- symbol: 200
- decimals: 18
- fixed supply: 100,000,000
- non-mintable
- Permit enabled
- Token Recovery enabled
- no transfer/buy/sell taxes
- no blacklist
- no pause
- no max wallet
- no max transaction
- no anti-bot cooldown
- no trading gate
- no tax modules
- ownership retained through launch
- no LP burn/irreversible lock during launch

**STILL REQUIRED**
- exact ETH liquidity amount calculated at launch under the EUR 200 total cap
- resulting launch price calculation from that exact ETH amount
- launch slippage limit (test trade euro caps are now frozen)
- live verification of current PancakeSwap Base Mainnet deployment addresses

Once those values are approved, this document advances from **DRAFT** to **FINAL FROZEN**.
