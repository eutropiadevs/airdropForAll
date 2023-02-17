// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20Verifier.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract airdrop_factory {
    struct Airdrop {
        ERC20Verifier contract_address; // short name (up to 32 bytes)
        uint256 expiry;
        string logo_url;
        string description;
        string title;
        uint256 per_user_amount;
    }

    Airdrop[] public airdrop_list;
    string public name;
    address public admin;
    mapping(int256 => ERC20Verifier) public voters;

    constructor(){
        admin = msg.sender;
    }

    function create_airdrop(
        string memory title,
        string memory description,
        string memory logo,
        uint256 expiry,
        uint256 peruseramount,
        address token_address,
        uint256 total_airdrop_deposit
    ) public {
        ERC20Verifier address_deployed = new ERC20Verifier(token_address);
        Airdrop memory airdrop = Airdrop(
            address_deployed,
            expiry,
            logo,
            description,
            title,
            peruseramount
        );
        ERC20(address(token_address)).approve(
            msg.sender,
            total_airdrop_deposit * 10**18
        );
        ERC20(address(token_address)).transferFrom(
            address(this),
            msg.sender,
            total_airdrop_deposit * 10**18
        );
        ERC20(address(token_address)).transferFrom(
            address(this),
            address(address_deployed),
            total_airdrop_deposit * 10**18
        );
        airdrop_list.push(airdrop);
    }

    function get_airdrops()
        public
        view
        returns (Airdrop[] memory airdrop_list)
    {
        return airdrop_list;
    }

    function get_admin() public view returns (address) {
        return admin;
    }
}
