import { Network } from "./type";

export enum BlockchainNetworks {
    Goerli = 0,
    Sepolia
}

export const Networks: Network[] = [
    {
        value: BlockchainNetworks.Goerli,
        name: "Ethereum Goerli",
        url: "../assets/ethereum.svg"
    },
    {
        value: BlockchainNetworks.Sepolia,
        name: "Ethereum Sepolia",
        url: "../assets/ethereum.svg"
    }
];
