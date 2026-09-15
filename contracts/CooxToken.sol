// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

/// @title Coox Token
/// @notice Fixed supply COOX token for the COOX protocol.
/// @dev The complete initial supply is minted once to the deployer.
///      There is intentionally no public or owner controlled mint function.
contract CooxToken is ERC20, ERC20Burnable, ERC20Permit {
    uint256 public constant INITIAL_SUPPLY = 250_000_000 ether;

    constructor(address initialHolder)
        ERC20("Coox", "COOX")
        ERC20Permit("Coox")
    {
        require(initialHolder != address(0), "Coox: zero initial holder");
        _mint(initialHolder, INITIAL_SUPPLY);
    }
}
