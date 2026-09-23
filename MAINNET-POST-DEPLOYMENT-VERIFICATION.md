# 200 Token — Post-Deployment Verification Sequence

Status: PREPARED — DO NOT TREAT AS MAINNET DEPLOYMENT AUTHORIZATION

Immediately after the Base Mainnet deployment transaction confirms:

1. Record the production contract address, deployment transaction hash, block number, deployer and timestamp.
2. Confirm runtime bytecode exists at the new address.
3. Read and confirm: name = 200 Token; symbol = 200; decimals = 18; totalSupply = 100,000,000 × 10^18.
4. Confirm owner is exactly 0x64d6719831414f883aA51CB59584D7B4F4066E08.
5. Confirm the entire initial supply is held by the intended owner before liquidity operations.
6. Reconfirm there is no public/external mint path and that the frozen source/build hashes remain the approved candidate hashes.
7. Verify/publish the source code and compiler settings on the Base block explorer before liquidity.
8. Run the read-only DEX identity/linkage preflight again.
9. Only after steps 1–8 pass: prepare the 200/WETH PancakeSwap V3 pool/liquidity transaction. Use approximately €0.001 per 200 as the target initial reference price (not a guaranteed market price) and approximately €120 total initial liquidity, while calculating the exact 200/WETH amounts, V3 ticks and concentrated range from live launch-day conditions. The former 500,000 200 and Full Range assumptions are superseded.
10. Keep total launch spending at or below the frozen €200 ceiling. Do not infer an ETH amount from an old exchange rate. Unused budget remains unspent; additional liquidity is optional and should follow genuine market demand.
11. After liquidity: record pool address/position ID and transaction hash; verify pool token identities and fee tier.
12. Perform only the planned tiny buy and tiny sell, with slippage capped at 1.0%, then the small post-launch transfer.
13. Publish the canonical Base Mainnet contract address and evidence to the website/machine-readable metadata only after the checks pass.

Hard stop conditions:
- Wrong chain, signer, owner, supply, bytecode, compiler/build hash, DEX linkage, or fee tier.
- Unexpected contract behavior or unexplained transaction simulation.
- Projected total launch spend above €200.
- Any request to expose a seed phrase or private key.

This checklist is deliberately sequential: deployment does not authorize liquidity, and liquidity does not authorize broader spending.

## Post-launch operating policy

- 200 is intended for low-maintenance, market-led operation; normal buying, selling and transfers do not require routine founder intervention.
- Do not manufacture volume or perform routine founder trading merely to create activity.
- Add or reposition liquidity only when genuine demand, market depth and trading activity justify it.
- Any founder-held 200 sale is optional and should be assessed against current liquidity, volume, expected execution and price impact rather than quoted price alone.
- PancakeSwap V3 on Base is the initial liquidity venue. If it becomes unsuitable or unavailable, another Base DEX such as Uniswap or Aerodrome may be considered without replacing the canonical 200 Token contract.
- The token contract/source/build freeze is unchanged by this liquidity-policy update.
