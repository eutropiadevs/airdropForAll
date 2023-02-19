import FACTORY from "../artifacts/contracts/factory.sol/airdrop_factory.json";
import DROP from "../artifacts/contracts/DropToken.sol/DropToken.json";
import { BigNumber } from "ethers";
import { ethers } from "ethers";
import Web3Modal from 'web3modal';


export const contracts = {
    FACTORY: {
        abi: FACTORY.abi,
        address: "0xAC70A6c866328e6283A787FDE99B6d8860cB517D",
    },
    DROP_TOKEN: {
        abi: DROP.abi,
        address: "0x34cb10Ec8b300821943112c73e81191784c19C93",
    },

};

export const bigNumberToDecimal = (number) => {
    const decimals = BigNumber.from("10000000000000000"); //16 zeroes, the contract has 18 decimals so this would show 2
    const tokens = number.div(decimals).toString();
    return tokens / 100; //Divided by 100 so to move the comma two spaces left
};

export const requestAccount = async () => {

    try {
        const [account] = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        return account;
    } catch (error) {
        console.log(error);
    }


};

export const callContractMethod = async (method) => {
    let error, result;
    try {
        result = await method();
    } catch (e) {
        error = handleContractCallError(e.error || e);
    }

    return {
        error,
        result,
    };
};

export const handleContractCallError = (error) => {
    let errorReason = error?.message;

    return errorReason;
};

export const handleContractInteractionResponse = async (
    result,
    error,
) => {
    if (error) {
        return error;
    }

    window.success(
        "Transaction sent! Waiting for confirmation from the network..."
    );
    await result.wait();
    window.success("Transaction confirmed!");
};

export const getContractInstance = async (
    contractToGet,
    withSigner = false
) => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let contract, signer;

        if (withSigner) {
            await requestAccount();
            signer = getSigner(provider);
        }

        contract = new ethers.Contract(
            contracts[contractToGet].address,
            contracts[contractToGet].abi,
            signer || provider
        );

        return contract;
    }
};

export const getSigner = (provider) => {
    if (window.ethereum) {
        const signer = provider.getSigner();

        return signer;
    }
};
