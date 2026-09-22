// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";

/// @title 200 Token
/// @notice Fixed-supply ERC-20 production candidate for the 200 Protocol.
/// @dev Reconstructed candidate. It is NOT claimed byte-for-byte identical to the
///      earlier Base Sepolia deployment. It must pass the candidate testnet gate
///      before any Mainnet deployment.
contract TwoHundredToken is ERC20, ERC20Permit, Ownable2Step {
    uint256 public constant MAX_SUPPLY = 100_000_000 ether;

    constructor(address initialOwner)
        ERC20("200 Token", "200")
        ERC20Permit("200 Token")
        Ownable(initialOwner)
    {
        _mint(initialOwner, MAX_SUPPLY);
    }

    /// @notice Recover this token's own balance if 200 was accidentally sent
    ///         directly to the token contract.
    /// @dev Does not provide access to holder balances or arbitrary third-party tokens.
    function recoverToken(uint256 amount) external onlyOwner {
        _transfer(address(this), owner(), amount);
    }
}
