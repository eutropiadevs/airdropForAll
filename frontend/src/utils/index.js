import FACTORY from "../artifacts/contracts/factory.sol/airdrop_factory.json";
import DROP from "../artifacts/contracts/DropToken.sol/DropToken.json";
import { BigNumber } from "ethers";
import { ethers } from "ethers";
import Web3Modal from 'web3modal';


export const contracts = {
    FACTORY: {
        abi: FACTORY.abi,
        address: "0x12B9168e499297e4e641253F699c4a61669219a8",
    },
    DROP_TOKEN: {
        abi: DROP.abi,
        address: "0x8de22B9422F5E1F323862f7b5f1A37b65c69d3C6",
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


// export const requestBalance = async () => {
//     const web3Modal = new Web3Modal();
//     const connection = await web3Modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);
//     const signer = provider.getSigner();

//     const Spotogame = new ethers.Contract(
//         contracts.SPOTO_GAME.address,
//         contracts.SPOTO_GAME.abi,
//         signer
//     );

//     try {
//         const data = await Spotogame.balanceOf(requestAccount());

//         const bal = bigNumberToDecimal(data);
//         localStorage.setItem("userBal", bal);
//     } catch (error) {
//         console.log(error);
//         window.alert("Please connect Matic Mumbai Testnet");
//     }
// };

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
