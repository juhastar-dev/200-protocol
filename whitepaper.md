# 200 — 200 Token
## Protocol Whitepaper v0.6 — Live Testnet Development Draft

### Abstract
200 is a machine-readable economic compatibility protocol intended for autonomous AI agents. 200 Token is its native coordination asset. 200 Protocol is designed around a simple principle: important economic information should be available to software in a structured, verifiable form rather than requiring interpretation of human-oriented promotional material.

200 separates the stable asset layer from the evolving agent-integration layer. 200 now has a fixed-supply ERC-20 test deployment on Base Sepolia, while manifests, verification mechanisms, policy evaluation, service interfaces and protocol adapters remain versioned and replaceable.

### Core Process
**DECLARE → VERIFY → EVALUATE → ACT**

An issuer or service may declare properties, but an autonomous agent should independently verify material facts wherever possible before taking economic action.

### Native Asset
- Name: 200 Token
- Symbol: 200
- Network: Base Sepolia
- Chain ID: 84532
- Contract: `0x47a369B53D0b4Df514F82507a73E4546563e0CD5`
- CAIP-19: `eip155:84532/erc20:0x47a369B53D0b4Df514F82507a73E4546563e0CD5`
- Maximum supply: 100,000,000
- Decimals: 18
- Future minting: disabled
- Transfer tax: 0% (deployment declaration; behavioral testing continues)
- Blacklist: disabled (deployment declaration)
- Pausable: disabled (deployment declaration)
- ERC-2612 Permit: enabled in the Base Sepolia test deployment
- Token recovery: enabled in the Base Sepolia test deployment

The token is intentionally simple. Agent intelligence belongs in the 200 Protocol rather than unnecessary transfer restrictions.

### Machine-Readable Asset Identity
Ticker symbols are ambiguous. 200 therefore prefers chain-aware canonical asset identity using CAIP-19 where applicable. Machines should identify an asset by chain and contract reference rather than symbol alone.

### 200-1 Asset Manifest
200-1 provides a structured declaration of asset identity, supply policy, contract privileges, economic behavior, utility, compatible interfaces and verification evidence.

### Human Authority
200 does not imply unrestricted autonomous financial authority. Agents should operate within explicit policy boundaries including approved chains and assets, transaction limits, spending limits, reputation thresholds, slippage limits and escalation rules.

### Stablecoins and 200
200 does not attempt to replace stablecoins. Stable-value assets may be preferable for pricing and settlement. 200 is intended for coordination roles such as access, staking, verification, contribution rewards and ecosystem participation.

### Proof of Useful Contribution
200-PoUC is a planned framework for recording verified economically useful work performed by humans or agents.

### Interoperability
200 is intended to use adapters rather than hard-code transient standards. Current targets include x402 for machine payments, A2A for agent communication/discovery, ERC-8004 for agent identity/reputation/validation, ERC-2612 for approvals and CAIP-19 for canonical asset identity.

### Future-Proofing
The native token can remain stable while the protocol evolves through versioned specifications such as 200-1, 200-2 and later versions. Adapters can be upgraded or replaced as agent standards evolve without replacing the token.

### Website as Protocol Surface
200 publishes information for both humans and machines. Human readers receive conventional documentation. Agents receive compact structured endpoints including `/200.json`, `/status.json`, `/llms.txt`, `/spec/200-1.json`, `/.well-known/agent-card.json`, and `/verify.html`.

### Tokenomics — Provisional
- 40% Agent contribution and ecosystem rewards
- 20% Ecosystem development
- 15% Agent adoption and integrations
- 10% Treasury
- 10% Founder/core development with long-term vesting
- 5% Initial liquidity

Total maximum supply: 100,000,000 200.

### Success Metrics
200 should prioritize usage metrics over speculative price metrics: compatible agents, compatible services, machine-initiated payments, manifests evaluated, verified useful contributions, successful autonomous purchases, rejected unsafe transactions and machine selection rate.

### Live On-Chain Verifier — v0.6
200 Verify includes a browser-side Base Sepolia JSON-RPC verifier. It directly checks chain ID, deployed bytecode presence, ERC-20 name, symbol, decimals and total supply, and probes ERC-2612 read interfaces. Behavioral properties that cannot be proven from standard ERC-20 reads remain explicitly classified as declarations pending stronger evidence. The verifier fails closed: if it cannot query the chain, it does not issue STATUS 200.

### Development Status
200 Protocol v0.6 is a live-testnet development specification. Base mainnet deployment has not started.
