// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import standar ERC20 dari OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") Ownable() {
        // Memberikan supply awal kepada pemilik
        _mint(msg.sender, initialSupply);
    }
}
    // Fungsi mint untuk mencetak lebih banyak token
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Fungsi burn untuk mengurangi token
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    // Fungsi untuk mengatur allowance atau persetujuan antar wallet
    function approveSpender(address spender, uint256 amount) public returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }
}
