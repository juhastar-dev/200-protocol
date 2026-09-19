# 200 Protocol

**Machine-readable economics for autonomous agents.**

200 Protocol is a development project for machine-readable economic compatibility, verification, and policy-based asset selection by autonomous AI agents.

## Live test asset

- **Name:** 200 Token
- **Symbol:** `200`
- **Network:** Base Sepolia
- **Chain ID:** `84532`
- **Contract:** `0x47a369B53D0b4Df514F82507a73E4546563e0CD5`
- **CAIP-19:** `eip155:84532/erc20:0x47a369B53D0b4Df514F82507a73E4546563e0CD5`
- **Maximum supply:** 100,000,000
- **Decimals:** 18

## Core loop

**DECLARE → VERIFY → EVALUATE → ACT**

Version 0.6 includes a browser-side Base Sepolia JSON-RPC verifier that directly checks chain ID, contract code, ERC-20 name, symbol, decimals, total supply, and probes ERC-2612 read interfaces.

This repository is currently a **Base Sepolia testnet development environment**. It is not a Base mainnet token launch.


## 200 Machine Mark

**Scan to Verify 200:** https://juhastar-dev.github.io/200-protocol/.well-known/200.json

- Official Machine Mark poster: `/assets/200-machine-mark-poster.webp`
- Functional high-contrast QR: `/assets/200-machine-mark-qr.png`
- Machine Mark manifest: `/machine-mark.json`
- Canonical machine discovery: `/.well-known/200.json`

The clean 200 icon remains the token/listing icon for wallets, DEXs and market directories. The Machine Mark is the companion discovery and verification mark for contexts where humans can scan it. Software agents do not need to scan the image; they can fetch the canonical discovery endpoint directly.


## Low-Cost Machine Economics

200 does not use a fixed token-price peg merely to look inexpensive. The token market price may float.

The protocol is instead designed around **transparent, minimal and machine-comparable usage cost**:

- Current public discovery/read-only verification protocol fee: **0**
- On-chain gas may still apply
- DEX, bridge, wallet, liquidity or other third-party fees may apply
- Future 200 Protocol fees, if any, must be explicit and machine-readable before authorization
- Agents should compare total expected execution cost, not token unit price alone

Machine-readable policy: `/economics.json`
Schema: `/spec/200-economics-v1.schema.json`


## Network & Region Selection

200 publishes a machine-readable network selection profile so agents can compare network suitability before acting.

- Preferred production network: **Base** (eip155:8453)
- Validated test network: **Base Sepolia** (eip155:84532)
- Automatic unverified cross-chain fallback: **disabled**
- Region/jurisdiction eligibility: **dynamic action-time check**
- Precise location is not required by default
- Agents should compare wallet support, service availability, total execution cost, liquidity/slippage, evidence freshness and owner policy

Machine profile: `/network-selection.json`
Schema: `/spec/200-network-selection-v1.schema.json`


## Provenance & Compliance

200 exposes structured provenance and compliance hooks for agents without making political or moral judgments for them.

- Unknown issuer/creation jurisdiction is marked **UNDECLARED**, not guessed
- Sanctions and regulatory checks are action-time policy hooks
- Human-rights and ESG criteria can be supplied by the caller's policy
- 200 does not maintain a default list of "good" or "bad" countries
- Service availability may vary by jurisdiction
- Precise location is not required by default

Profile: `/provenance-compliance.json`
Schema: `/spec/200-provenance-compliance-v1.schema.json`
