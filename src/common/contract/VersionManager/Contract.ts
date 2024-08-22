
export const VersionManagers = new Map<number, string>([
    [11155111,  "0x4261f9F93777a2f102D97C5d6CC567cBBEB9e0f5"], // Sepolia
    [1,         "0x6f4c6487D21920BB9D9f31a9F277E705dC47BB64"], // Ethereum
    [137,       "0x77cbc128f1eff68c169881c160f9b305a06a64cf"], // Polygon
    [56,        "0xaf3897d818d5cf36490ef0a282c6232fab8790b4"], // Binance
    [42161,     "0xC76440DbdB9B42Ae2BF0269D12280614604d43e8"], // Arbitrum
]);
export const BYTE_CODE = "6080604052348015600e575f80fd5b50600280546001600160a01b031916331790556105b88061002e5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c806351d8f3f61461004e578063adcaab531461006e578063c8ef8aea14610083578063d8ab827414610096575b5f80fd5b6001546040516001600160a01b0390911681526020015b60405180910390f35b61008161007c3660046104be565b6100ab565b005b6100816100913660046104f7565b610297565b61009e6103d4565b6040516100659190610517565b6002546001600160a01b031633146100f75760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b60448201526064015b60405180910390fd5b61016b825f805480602002602001604051908101604052809291908181526020015f905b82821015610162575f8481526020908190206040805180820190915260028502909101805482526001908101546001600160a01b031682840152908352909201910161011b565b50505050610446565b5f19146101a35760405162461bcd60e51b815260206004820152600660248201526545786973747360d01b60448201526064016100ee565b604080518082019091524281526001600160a01b03838116602083019081525f805460018101825590805292517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563600290940293840155517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56490920180546001600160a01b03191692909116919091179055801561025757600180546001600160a01b0319166001600160a01b0384161790555b6040516001600160a01b03831681527ff40fcec21964ffb566044d083b4073f29f7f7929110ea19e1b3ebe375d89055e9060200160405180910390a15050565b6002546001600160a01b031633146102de5760405162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b60448201526064016100ee565b610348815f805480602002602001604051908101604052809291908181526020015f9082821015610162575f8481526020908190206040805180820190915260028502909101805482526001908101546001600160a01b031682840152908352909201910161011b565b196103805760405162461bcd60e51b815260206004820152600860248201526709cde40d2dcc8caf60c31b60448201526064016100ee565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f3c4dbb057f7df48b080ac34e14a9186ad0847e234436b06de4078464d5936c629060200160405180910390a150565b60605f805480602002602001604051908101604052809291908181526020015f905b8282101561043d575f8481526020908190206040805180820190915260028502909101805482526001908101546001600160a01b03168284015290835290920191016103f6565b50505050905090565b5f805b825181101561049757836001600160a01b031683828151811061046e5761046e61056e565b6020026020010151602001516001600160a01b03160361048f57905061049d565b600101610449565b505f1990505b92915050565b80356001600160a01b03811681146104b9575f80fd5b919050565b5f80604083850312156104cf575f80fd5b6104d8836104a3565b9150602083013580151581146104ec575f80fd5b809150509250929050565b5f60208284031215610507575f80fd5b610510826104a3565b9392505050565b602080825282518282018190525f918401906040840190835b81811015610563578351805184526020908101516001600160a01b03168185015290930192604090920191600101610530565b509095945050505050565b634e487b7160e01b5f52603260045260245ffdfea2646970667358221220c006baa9616bec03a5895aeac8f96953f7991b8f017fa44bbe8f6fa0739ca07864736f6c634300081a0033";
export const ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Deployed",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_manager",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "setToCurrent",
                "type": "bool"
            }
        ],
        "name": "postState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Set",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "setBackTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCurrentManager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStates",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "internalType": "struct VersionManager.State[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]