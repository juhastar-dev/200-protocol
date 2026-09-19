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
