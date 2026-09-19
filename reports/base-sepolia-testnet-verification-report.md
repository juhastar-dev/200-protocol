# 200 Token - Base Sepolia Testnet Verification Report

**Report date:** 2026-09-19  
**Protocol:** 200 Protocol  
**Asset:** 200 Token (200)  
**Environment:** Base Sepolia testnet  
**Chain ID:** 84532  
**Contract:** `0x47a369B53D0b4Df514F82507a73E4546563e0CD5`  
**CAIP-19:** `eip155:84532/erc20:0x47a369B53D0b4Df514F82507a73E4546563e0CD5`  
**Core validation status:** COMPLETE  
**Next phase:** MAINNET_CONFIGURATION_FREEZE

## 1. Purpose

This report consolidates the completed Base Sepolia validation work for the 200 Token. It distinguishes observed on-chain facts and behavioral test results from declarations. The evidence is scoped to the transactions and conditions tested on Base Sepolia and does not, by itself, guarantee future behavior or Base mainnet behavior.

## 2. Deployed token identity

- Name: 200 Token
- Symbol: 200
- Standard: ERC-20 with ERC-2612 Permit
- Decimals: 18
- Total supply: 100,000,000 200
- Mintable: no
- Owner: `0x64d6719831414f883aA51CB59584D7B4F4066E08`
- Pending owner: zero address
- Contract-held 200 at final admin review: 0
- PancakeSwap V2 router: `0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb`
- 200/WETH pair: `0x769b276A04ac8Db2E3044cD12A47df9E098f2923`
- Base Sepolia WETH: `0x4200000000000000000000000000000000000006`

## 3. Core verification matrix

| Check | Result | Key observed evidence |
|---|---|---|
| Standard wallet transfer | PASS | 1,000 200 sent and exactly 1,000 200 received |
| Large transfer | PASS | 5,000,000 200 transferred in one wallet-to-wallet transaction; recipient held >5% of supply |
| Liquidity creation | PASS | 100,000 200 + 0.0001 ETH supplied; 3.162277660168378331 LP minted |
| DEX buy | PASS | 0.000001 ETH -> 987.648209114086982351 200; actual output matched live router quote |
| DEX sell | PASS | 500 200 -> 0.000000506212363177 ETH; actual output matched router quote |
| ERC-2612 domain | PASS | On-chain DOMAIN_SEPARATOR matched the computed EIP-712 domain |
| ERC-2612 Permit | PASS | Permit for exactly 123 200 created an on-chain allowance of exactly 123 200 |
| transferFrom consumption | PASS | 10 200 consumed from Permit allowance; allowance fell exactly 123 -> 113 200 |
| Token Recovery | PASS | 5 200 deposited into token contract and recovered; contract balance returned 5 -> 0 |
| Admin control review | PASS | Expected owner, zero pending owner, name/symbol/decimals/supply all matched |
| Liquidity removal | PASS | 0.1 LP removed under 0.5% output guard; 3.062277660168378331 LP remained and pool stayed active |

**Core checks recorded: 11**  
**PASS: 11**  
**FAIL: 0**  
**Pending core token checks: 0**

## 4. On-chain transaction evidence

### Liquidity creation
- Transaction: `0x0949db26e964ac498c4765dc7eb9063c0b0781d98240743aa98c793a171b1897`
- 100,000 200 + 0.0001 ETH added
- 3.162277660168378331 Pancake LP tokens minted
- Block: 46995505
- Status: Success

### ETH -> 200 buy
- Transaction: `0x372046b334aa82d1e97fef33db4eb2b5b9102dc68ff8afc5427edb49c1b58930`
- 0.000001 ETH spent
- 987.648209114086982351 200 received
- Block: 46996651
- Status: Success

### 200 -> ETH sell
- Transaction: `0x73d124bde1a26cde1afa04166f2630b9dfd46b5daee9e8d6b01368c32cf5e8a3`
- 500 200 sold
- 0.000000506212363177 ETH received
- Block: 46997144
- Status: Success

### ERC-2612 Permit
- Transaction: `0x28bbd6226a7bc21aaddd45c1fb6fa2b95f803f560d1465ee48f9155445a0481f`
- Owner: Account 3
- Spender: Account 2
- Permit amount: 123 200
- Resulting allowance: 123 200
- Status: PASS

### transferFrom allowance consumption
- Transaction: `0xcb45319d1f01f776856a18177f787bceaf7bc3df549816c1bc04a86e0c25d811`
- 10 200 moved from Account 3 to Account 2
- Allowance before: 123 200
- Allowance after: 113 200
- Status: PASS

### Token Recovery
Deposit:
- `0xf5bb35d99edd60f65a6f2cb397e4f5741b5600ff36c24dfbdbaaf79316890d62`
- 5 200 deliberately placed into the token contract

Recovery:
- `0xd43e63f859ee078f0b11339d8cf23728973864553f543407d6644ed64c6bc10d`
- Contract-held balance returned from 5 200 to 0
- Account 2 returned to its pre-test 200 balance
- A fresh RPC read was used for the final state because the immediate UI display briefly showed stale state

### Liquidity removal
LP approval:
- `0xe5ab1d7e6daa6c48ccb032ef3dee0ccf464d0d9a7ec9407f17aa0a4c3168040d`
- Exact router allowance: 0.1 LP

Removal:
- `0xda51ef606bdd9117eec0eead7d0b224ab77e656bcf1ffb3b2595d97f7b15dbc9`
- 0.1 LP removed
- 3,146.85686979135337764 200 received
- LP balance after: 3.062277660168378331 LP
- Pool reserve after: 96,365.494921094559640009 200
- Pool WETH reserve after: 0.000097315895040527 WETH
- 0.5% minimum-output guard satisfied
- Pool remained active

## 5. Behavioral conclusions supported by the tests

The completed tests support the following scoped conclusions for the deployed Base Sepolia contract:

- Standard wallet transfers work for the tested amounts.
- A single transfer equal to 5% of total supply completed and the recipient successfully held more than 5% of total supply.
- The tested standard transfer, buy and sell did not show an additional token-side amount deduction beyond the quoted route behavior.
- PancakeSwap V2 liquidity can be added and partially removed.
- ETH -> 200 and 200 -> ETH swaps execute through the configured pool.
- ERC-2612 Permit is operational for the tested owner/spender pair.
- Permit-created allowance is consumable through standard transferFrom behavior.
- The enabled owner Token Recovery function successfully recovered the token's own balance from the contract in the controlled test.
- Current on-chain ownership is Account 2 and no ownership transfer is pending.
- Core identity values match the expected deployment.

These are observations from defined tests; they are not claims about every possible transaction path, adversarial condition, future deployment, or third-party integration.

## 6. Declared configuration and test scope

The current public manifest declares:
- transfer tax: 0%
- buy tax: 0%
- sell tax: 0%
- blacklist: disabled
- pausable: disabled
- max wallet: disabled
- max transaction: disabled
- mintable: false
- Permit: enabled
- Token Recovery: enabled

Where possible, declarations were supplemented with direct RPC checks or behavioral evidence. The Base Sepolia contract source is not currently verified on BaseScan, so the evidence package deliberately avoids treating unverified source assumptions as independently verified facts.

## 7. Ownership and administrative state

Read-only on-chain review confirmed:
- owner: `0x64d6719831414f883aA51CB59584D7B4F4066E08`
- pending owner: `0x0000000000000000000000000000000000000000`
- name: 200 Token
- symbol: 200
- decimals: 18
- total supply: 100,000,000 200
- contract-held balance at review: 0 200

No ownership transfer or ownership renunciation was performed during validation.

## 8. Machine-readable evidence endpoints

The public 200 Protocol site exposes:
- `/verification-summary.json` - compact AI-fast PASS matrix
- `/status.json` - current deployment and readiness state
- `/200.json` - canonical manifest and detailed evidence
- `/llms.txt` - fast context for LLM/agent systems
- `/verify.html` - direct RPC verifier
- `/examples/assessment-200.json` - structured assessment example
- `/spec/200-1.json` - protocol specification

The intended machine workflow is:

**DECLARE -> VERIFY -> EVALUATE -> ACT**

A 200 result means the defined policy requirements were satisfied for an authorized action. It is not an investment rating, credit rating, or guarantee of safety.

## 9. Readiness conclusion

The recorded **core 200 Token Base Sepolia validation matrix is complete: 11 PASS, 0 FAIL, 0 pending core checks.**

The next development phase is **MAINNET_CONFIGURATION_FREEZE**: define and freeze the intended Base mainnet token configuration, ownership model, initial liquidity parameters, launch procedure, and pre-deployment checklist before any production transaction is submitted.

Separate protocol roadmap items remain planned, including:
- signed manifest
- x402 adapter
- ERC-8004 integration

These are broader 200 Protocol integration milestones and are tracked separately from the completed core token validation.

## 10. Disclaimer

This report documents testnet observations and verification work for a development asset. Base Sepolia tokens and ETH have no production value. Testnet behavior does not guarantee mainnet behavior, security, liquidity, price performance, availability, regulatory treatment, or suitability for any financial purpose. Independent contract review and production deployment controls remain appropriate before a mainnet launch.
