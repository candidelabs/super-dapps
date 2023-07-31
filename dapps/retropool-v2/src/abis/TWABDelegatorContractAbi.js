const TWABDelegatorContractAbi = [
    {
        "address": "0xb38e46EBf90888D621Cde5661D3cC2476d7bCc2e",
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name_",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "symbol_",
                        "type": "string"
                    },
                    {
                        "internalType": "contract ITicket",
                        "name": "_ticket",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "slot",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegatee",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint96",
                        "name": "lockUntil",
                        "type": "uint96"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "DelegateeUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "slot",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint96",
                        "name": "lockUntil",
                        "type": "uint96"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegatee",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "contract Delegation",
                        "name": "delegation",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "DelegationCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "slot",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "DelegationFunded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "slot",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "DelegationFundedFromStake",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "representative",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "set",
                        "type": "bool"
                    }
                ],
                "name": "RepresentativeSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "contract ITicket",
                        "name": "ticket",
                        "type": "address"
                    }
                ],
                "name": "TicketSet",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "TicketsStaked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "TicketsUnstaked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "slot",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "TransferredDelegation",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "delegator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "slot",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "WithdrewDelegationToStake",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "MAX_LOCK",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    }
                ],
                "name": "computeDelegationAddress",
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
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_delegatee",
                        "type": "address"
                    },
                    {
                        "internalType": "uint96",
                        "name": "_lockDuration",
                        "type": "uint96"
                    }
                ],
                "name": "createDelegation",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "delegationInstance",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "fundDelegation",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "fundDelegationFromStake",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    }
                ],
                "name": "getDelegation",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "delegation",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "delegatee",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "balance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lockUntil",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "wasCreated",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_representative",
                        "type": "address"
                    }
                ],
                "name": "isRepresentativeOf",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes[]",
                        "name": "_data",
                        "type": "bytes[]"
                    }
                ],
                "name": "multicall",
                "outputs": [
                    {
                        "internalType": "bytes[]",
                        "name": "",
                        "type": "bytes[]"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "internalType": "struct PermitAndMulticall.Signature",
                        "name": "_permitSignature",
                        "type": "tuple"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "_data",
                        "type": "bytes[]"
                    }
                ],
                "name": "permitAndMulticall",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_representative",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "_set",
                        "type": "bool"
                    }
                ],
                "name": "setRepresentative",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "stake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "ticket",
                "outputs": [
                    {
                        "internalType": "contract ITicket",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    }
                ],
                "name": "transferDelegationTo",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "unstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_delegatee",
                        "type": "address"
                    },
                    {
                        "internalType": "uint96",
                        "name": "_lockDuration",
                        "type": "uint96"
                    }
                ],
                "name": "updateDelegatee",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_delegator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_slot",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "withdrawDelegationToStake",
                "outputs": [
                    {
                        "internalType": "contract Delegation",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "transactionHash": "0xfab455f2e1e2f8f7d3043451cc8203770042ecb2e6a3575b65d1d02c676e88d1",
        "receipt": {
            "to": null,
            "from": "0x3A791e828fDd420fbE16416efDF509E4b9088Dd4",
            "contractAddress": "0xb38e46EBf90888D621Cde5661D3cC2476d7bCc2e",
            "transactionIndex": 58,
            "gasUsed": "3086689",
            "logsBloom": "0x00000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000040000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000140000000000000000000000000000000000000000000000000000",
            "blockHash": "0xb56458d823c986424bc35e36400eab3510eefdaae3ffe58a6643f8f02cc381b0",
            "transactionHash": "0xfab455f2e1e2f8f7d3043451cc8203770042ecb2e6a3575b65d1d02c676e88d1",
            "logs": [
                {
                    "transactionIndex": 58,
                    "blockNumber": 7411301,
                    "transactionHash": "0xfab455f2e1e2f8f7d3043451cc8203770042ecb2e6a3575b65d1d02c676e88d1",
                    "address": "0xb38e46EBf90888D621Cde5661D3cC2476d7bCc2e",
                    "topics": [
                        "0x9f9d59c87dbdc6ca82d9e5924782004b9aebc366c505c0ccab12f61e2a9f3321",
                        "0x0000000000000000000000008537c5a9aad3ec1d31a84e94d19fcfc681e83ed0"
                    ],
                    "data": "0x",
                    "logIndex": 104,
                    "blockHash": "0xb56458d823c986424bc35e36400eab3510eefdaae3ffe58a6643f8f02cc381b0"
                }
            ],
            "blockNumber": 7411301,
            "cumulativeGasUsed": "23363191",
            "status": 1,
            "byzantium": true
        },
        "args": [
            "PoolTogether Staked aUSDC Ticket",
            "stkPTaUSDC",
            "0x8537C5a9AAd3ec1D31a84e94d19FcFC681E83ED0"
        ],
        "numDeployments": 1,
        "solcInputHash": "db7fc198573b433c3e1cdb88d532220a",
        "metadata": "{\"compiler\":{\"version\":\"0.8.6+commit.11564f7e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name_\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol_\",\"type\":\"string\"},{\"internalType\":\"contract ITicket\",\"name\":\"_ticket\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"slot\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegatee\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint96\",\"name\":\"lockUntil\",\"type\":\"uint96\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"DelegateeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"slot\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint96\",\"name\":\"lockUntil\",\"type\":\"uint96\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegatee\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"contract Delegation\",\"name\":\"delegation\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"DelegationCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"slot\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"DelegationFunded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"slot\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"DelegationFundedFromStake\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"representative\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"set\",\"type\":\"bool\"}],\"name\":\"RepresentativeSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"contract ITicket\",\"name\":\"ticket\",\"type\":\"address\"}],\"name\":\"TicketSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TicketsStaked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TicketsUnstaked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"slot\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"TransferredDelegation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"slot\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"WithdrewDelegationToStake\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_LOCK\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"}],\"name\":\"computeDelegationAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_delegatee\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"_lockDuration\",\"type\":\"uint96\"}],\"name\":\"createDelegation\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"delegationInstance\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"fundDelegation\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"fundDelegationFromStake\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"}],\"name\":\"getDelegation\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"delegation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"delegatee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lockUntil\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"wasCreated\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_representative\",\"type\":\"address\"}],\"name\":\"isRepresentativeOf\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes[]\",\"name\":\"_data\",\"type\":\"bytes[]\"}],\"name\":\"multicall\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"internalType\":\"struct PermitAndMulticall.Signature\",\"name\":\"_permitSignature\",\"type\":\"tuple\"},{\"internalType\":\"bytes[]\",\"name\":\"_data\",\"type\":\"bytes[]\"}],\"name\":\"permitAndMulticall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_representative\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_set\",\"type\":\"bool\"}],\"name\":\"setRepresentative\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"stake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ticket\",\"outputs\":[{\"internalType\":\"contract ITicket\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"transferDelegationTo\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"unstake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_delegatee\",\"type\":\"address\"},{\"internalType\":\"uint96\",\"name\":\"_lockDuration\",\"type\":\"uint96\"}],\"name\":\"updateDelegatee\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_slot\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdrawDelegationToStake\",\"outputs\":[{\"internalType\":\"contract Delegation\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"DelegateeUpdated(address,uint256,address,uint96,address)\":{\"params\":{\"delegatee\":\"Address of the delegatee\",\"delegator\":\"Address of the delegator\",\"lockUntil\":\"Timestamp until which the delegation is locked\",\"slot\":\"Slot of the delegation\",\"user\":\"Address of the user who updated the delegatee\"}},\"DelegationCreated(address,uint256,uint96,address,address,address)\":{\"params\":{\"delegatee\":\"Address of the delegatee\",\"delegation\":\"Address of the delegation that was created\",\"delegator\":\"Delegator of the delegation\",\"lockUntil\":\"Timestamp until which the delegation is locked\",\"slot\":\"Slot of the delegation\",\"user\":\"Address of the user who created the delegation\"}},\"DelegationFunded(address,uint256,uint256,address)\":{\"params\":{\"amount\":\"Amount of tickets that were sent to the delegation\",\"delegator\":\"Address of the delegator\",\"slot\":\"Slot of the delegation\",\"user\":\"Address of the user who funded the delegation\"}},\"DelegationFundedFromStake(address,uint256,uint256,address)\":{\"params\":{\"amount\":\"Amount of tickets that were sent to the delegation\",\"delegator\":\"Address of the delegator\",\"slot\":\"Slot of the delegation\",\"user\":\"Address of the user who pulled funds from the delegator stake to the delegation\"}},\"RepresentativeSet(address,address,bool)\":{\"params\":{\"delegator\":\"Address of the delegator\",\"representative\":\"Address of the representative\",\"set\":\"Boolean indicating if the representative was set or unset\"}},\"TicketSet(address)\":{\"params\":{\"ticket\":\"Address of the ticket\"}},\"TicketsStaked(address,uint256)\":{\"params\":{\"amount\":\"Amount of tickets staked\",\"delegator\":\"Address of the delegator\"}},\"TicketsUnstaked(address,address,uint256)\":{\"params\":{\"amount\":\"Amount of tickets unstaked\",\"delegator\":\"Address of the delegator\",\"recipient\":\"Address of the recipient that will receive the tickets\"}},\"TransferredDelegation(address,uint256,uint256,address)\":{\"params\":{\"amount\":\"Amount of tickets withdrawn\",\"delegator\":\"Address of the delegator\",\"slot\":\"Slot of the delegation\",\"to\":\"Recipient address of withdrawn tickets\"}},\"WithdrewDelegationToStake(address,uint256,uint256,address)\":{\"params\":{\"amount\":\"Amount of tickets withdrawn\",\"delegator\":\"Address of the delegator\",\"slot\":\"Slot of the delegation\",\"user\":\"Address of the user who withdrew the tickets\"}}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"computeDelegationAddress(address,uint256)\":{\"params\":{\"_delegator\":\"The user who is delegating tickets\",\"_slot\":\"The delegation slot\"},\"returns\":{\"_0\":\"The address of the delegation.  This is the address that holds the balance of tickets.\"}},\"constructor\":{\"params\":{\"_ticket\":\"Address of the ticket contract\",\"name_\":\"The name for the staked ticket token\",\"symbol_\":\"The symbol for the staked ticket token\"}},\"createDelegation(address,uint256,address,uint96)\":{\"details\":\"The `_delegator` and `_slot` params are used to compute the salt of the delegation\",\"params\":{\"_delegatee\":\"Address of the delegatee\",\"_delegator\":\"Address of the delegator that will be able to handle the delegation\",\"_lockDuration\":\"Duration of time for which the delegation is locked. Must be less than the max duration.\",\"_slot\":\"Slot of the delegation\"},\"returns\":{\"_0\":\"Returns the address of the Delegation contract that will hold the tickets\"}},\"decimals()\":{\"details\":\"This value is equal to the decimals of the ticket being delegated.\",\"returns\":{\"_0\":\"ERC20 token decimals\"}},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"fundDelegation(address,uint256,uint256)\":{\"details\":\"Callable by anyone.Will revert if delegation does not exist.\",\"params\":{\"_amount\":\"Amount of tickets to transfer\",\"_delegator\":\"Address of the delegator\",\"_slot\":\"Slot of the delegation\"},\"returns\":{\"_0\":\"The address of the Delegation\"}},\"fundDelegationFromStake(address,uint256,uint256)\":{\"details\":\"Callable only by the `_delegator` or a representative.Will revert if delegation does not exist.Will revert if `_amount` is greater than the staked amount.\",\"params\":{\"_amount\":\"Amount of tickets to send to the delegation from the staked amount\",\"_delegator\":\"Address of the delegator\",\"_slot\":\"Slot of the delegation\"},\"returns\":{\"_0\":\"The address of the Delegation\"}},\"getDelegation(address,uint256)\":{\"params\":{\"_delegator\":\"The delegator address\",\"_slot\":\"The delegation slot they are using\"},\"returns\":{\"balance\":\"The balance of tickets in the delegation\",\"delegatee\":\"The address that tickets are being delegated to\",\"delegation\":\"The address that holds tickets for the delegation\",\"lockUntil\":\"The timestamp at which the delegation unlocks\",\"wasCreated\":\"Whether or not the delegation has been created\"}},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"isRepresentativeOf(address,address)\":{\"params\":{\"_delegator\":\"The delegator\",\"_representative\":\"The representative to check for\"},\"returns\":{\"_0\":\"True if the rep is a rep, false otherwise\"}},\"multicall(bytes[])\":{\"params\":{\"_data\":\"An array of encoded function calls.  The calls must be abi-encoded calls to this contract.\"},\"returns\":{\"_0\":\"The results from each function call\"}},\"name()\":{\"details\":\"Returns the name of the token.\"},\"permitAndMulticall(uint256,(uint256,uint8,bytes32,bytes32),bytes[])\":{\"params\":{\"_amount\":\"Amount of tickets to approve\",\"_data\":\"Datas to call with `functionDelegateCall`\",\"_permitSignature\":\"Permit signature\"}},\"setRepresentative(address,bool)\":{\"details\":\"If `_set` is `true`, `_representative` will be set as representative of `msg.sender`.If `_set` is `false`, `_representative` will be unset as representative of `msg.sender`.\",\"params\":{\"_representative\":\"Address of the representative\",\"_set\":\"Set or unset the representative\"}},\"stake(address,uint256)\":{\"details\":\"Tickets can be staked on behalf of a `_to` user.\",\"params\":{\"_amount\":\"Amount of tickets to stake\",\"_to\":\"Address to which the stake will be attributed\"}},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferDelegationTo(uint256,uint256,address)\":{\"details\":\"Tickets are sent directly to the passed `_to` address.Will revert if delegation is still locked.\",\"params\":{\"_amount\":\"Amount to withdraw\",\"_slot\":\"Slot of the delegation\",\"_to\":\"Account to transfer the withdrawn tickets to\"},\"returns\":{\"_0\":\"The address of the Delegation\"}},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"},\"unstake(address,uint256)\":{\"details\":\"If delegator has delegated his whole stake, he will first have to withdraw from a delegation to be able to unstake.\",\"params\":{\"_amount\":\"Amount of tickets to unstake\",\"_to\":\"Address of the recipient that will receive the tickets\"}},\"updateDelegatee(address,uint256,address,uint96)\":{\"details\":\"Only callable by the `_delegator` or their representative.Will revert if delegation is still locked.\",\"params\":{\"_delegatee\":\"Address of the delegatee\",\"_delegator\":\"Address of the delegator\",\"_lockDuration\":\"Duration of time during which the delegatee cannot be changed nor withdrawn\",\"_slot\":\"Slot of the delegation\"},\"returns\":{\"_0\":\"The address of the Delegation\"}},\"withdrawDelegationToStake(address,uint256,uint256)\":{\"details\":\"Only callable by the `_delegator` or a representative.Will send the tickets to this contract and increase the `_delegator` staked amount.Will revert if delegation is still locked.\",\"params\":{\"_amount\":\"Amount of tickets to withdraw\",\"_delegator\":\"Address of the delegator\",\"_slot\":\"Slot of the delegation\"},\"returns\":{\"_0\":\"The address of the Delegation\"}}},\"stateVariables\":{\"representatives\":{\"details\":\"Representative can only handle delegation and cannot withdraw tickets to their wallet.delegator => representative => bool allowing representative to represent the delegator\"}},\"title\":\"Delegate chances to win to multiple accounts.\",\"version\":1},\"userdoc\":{\"events\":{\"DelegateeUpdated(address,uint256,address,uint96,address)\":{\"notice\":\"Emitted when a delegatee is updated.\"},\"DelegationCreated(address,uint256,uint96,address,address,address)\":{\"notice\":\"Emitted when a new delegation is created.\"},\"DelegationFunded(address,uint256,uint256,address)\":{\"notice\":\"Emitted when a delegation is funded.\"},\"DelegationFundedFromStake(address,uint256,uint256,address)\":{\"notice\":\"Emitted when a delegation is funded from the staked amount.\"},\"RepresentativeSet(address,address,bool)\":{\"notice\":\"Emitted when a representative is set.\"},\"TicketSet(address)\":{\"notice\":\"Emitted when ticket associated with this contract has been set.\"},\"TicketsStaked(address,uint256)\":{\"notice\":\"Emitted when tickets have been staked.\"},\"TicketsUnstaked(address,address,uint256)\":{\"notice\":\"Emitted when tickets have been unstaked.\"},\"TransferredDelegation(address,uint256,uint256,address)\":{\"notice\":\"Emitted when a delegator withdraws an amount of tickets from a delegation to a specified wallet.\"},\"WithdrewDelegationToStake(address,uint256,uint256,address)\":{\"notice\":\"Emitted when an amount of tickets has been withdrawn from a delegation. The tickets are held by this contract and the delegator stake is increased.\"}},\"kind\":\"user\",\"methods\":{\"MAX_LOCK()\":{\"notice\":\"Max lock time during which a delegation cannot be updated.\"},\"computeDelegationAddress(address,uint256)\":{\"notice\":\"Computes the address of the delegation for the delegator + slot combination.\"},\"constructor\":{\"notice\":\"Creates a new TWAB Delegator that is bound to the given ticket contract.\"},\"createDelegation(address,uint256,address,uint96)\":{\"notice\":\"Creates a new delegation. This will create a new Delegation contract for the given slot and have it delegate its tickets to the given delegatee. If a non-zero lock duration is passed, then the delegatee cannot be changed, nor funding withdrawn, until the lock has expired.\"},\"decimals()\":{\"notice\":\"Returns the ERC20 token decimals.\"},\"delegationInstance()\":{\"notice\":\"The instance to which all proxies will point.\"},\"fundDelegation(address,uint256,uint256)\":{\"notice\":\"Fund a delegation by transferring tickets from the caller to the delegation.\"},\"fundDelegationFromStake(address,uint256,uint256)\":{\"notice\":\"Fund a delegation using the `_delegator` stake.\"},\"getDelegation(address,uint256)\":{\"notice\":\"Allows the caller to easily get the details for a delegation.\"},\"isRepresentativeOf(address,address)\":{\"notice\":\"Returns whether or not the given rep is a representative of the delegator.\"},\"multicall(bytes[])\":{\"notice\":\"Allows a user to call multiple functions on the same contract.  Useful for EOA who wants to batch transactions.\"},\"permitAndMulticall(uint256,(uint256,uint8,bytes32,bytes32),bytes[])\":{\"notice\":\"Alow a user to approve ticket and run various calls in one transaction.\"},\"setRepresentative(address,bool)\":{\"notice\":\"Allow an account to set or unset a `_representative` to handle delegation.\"},\"stake(address,uint256)\":{\"notice\":\"Stake `_amount` of tickets in this contract.\"},\"ticket()\":{\"notice\":\"Prize pool ticket to which this contract is tied to.\"},\"transferDelegationTo(uint256,uint256,address)\":{\"notice\":\"Withdraw an `_amount` of tickets from a delegation. The delegator is assumed to be the caller.\"},\"unstake(address,uint256)\":{\"notice\":\"Unstake `_amount` of tickets from this contract. Transfers ticket to the passed `_to` address.\"},\"updateDelegatee(address,uint256,address,uint96)\":{\"notice\":\"Updates the delegatee and lock duration for a delegation slot.\"},\"withdrawDelegationToStake(address,uint256,uint256)\":{\"notice\":\"Withdraw tickets from a delegation. The tickets will be held by this contract and the delegator's stake will increase.\"}},\"notice\":\"This contract allows accounts to easily delegate a portion of their tickets to multiple delegatees. The delegatees chance of winning prizes is increased by the delegated amount. If a delegator doesn't want to actively manage the delegations, then they can stake on the contract and appoint representatives.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol\":\"TWABDelegator\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":2000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/proxy/Clones.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (proxy/Clones.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev https://eips.ethereum.org/EIPS/eip-1167[EIP 1167] is a standard for\\n * deploying minimal proxy contracts, also known as \\\"clones\\\".\\n *\\n * > To simply and cheaply clone contract functionality in an immutable way, this standard specifies\\n * > a minimal bytecode implementation that delegates all calls to a known, fixed address.\\n *\\n * The library includes functions to deploy a proxy using either `create` (traditional deployment) or `create2`\\n * (salted deterministic deployment). It also includes functions to predict the addresses of clones deployed using the\\n * deterministic method.\\n *\\n * _Available since v3.4._\\n */\\nlibrary Clones {\\n    /**\\n     * @dev Deploys and returns the address of a clone that mimics the behaviour of `implementation`.\\n     *\\n     * This function uses the create opcode, which should never revert.\\n     */\\n    function clone(address implementation) internal returns (address instance) {\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            let ptr := mload(0x40)\\n            mstore(ptr, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)\\n            mstore(add(ptr, 0x14), shl(0x60, implementation))\\n            mstore(add(ptr, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)\\n            instance := create(0, ptr, 0x37)\\n        }\\n        require(instance != address(0), \\\"ERC1167: create failed\\\");\\n    }\\n\\n    /**\\n     * @dev Deploys and returns the address of a clone that mimics the behaviour of `implementation`.\\n     *\\n     * This function uses the create2 opcode and a `salt` to deterministically deploy\\n     * the clone. Using the same `implementation` and `salt` multiple time will revert, since\\n     * the clones cannot be deployed twice at the same address.\\n     */\\n    function cloneDeterministic(address implementation, bytes32 salt) internal returns (address instance) {\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            let ptr := mload(0x40)\\n            mstore(ptr, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)\\n            mstore(add(ptr, 0x14), shl(0x60, implementation))\\n            mstore(add(ptr, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)\\n            instance := create2(0, ptr, 0x37, salt)\\n        }\\n        require(instance != address(0), \\\"ERC1167: create2 failed\\\");\\n    }\\n\\n    /**\\n     * @dev Computes the address of a clone deployed using {Clones-cloneDeterministic}.\\n     */\\n    function predictDeterministicAddress(\\n        address implementation,\\n        bytes32 salt,\\n        address deployer\\n    ) internal pure returns (address predicted) {\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            let ptr := mload(0x40)\\n            mstore(ptr, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)\\n            mstore(add(ptr, 0x14), shl(0x60, implementation))\\n            mstore(add(ptr, 0x28), 0x5af43d82803e903d91602b57fd5bf3ff00000000000000000000000000000000)\\n            mstore(add(ptr, 0x38), shl(0x60, deployer))\\n            mstore(add(ptr, 0x4c), salt)\\n            mstore(add(ptr, 0x6c), keccak256(ptr, 0x37))\\n            predicted := keccak256(add(ptr, 0x37), 0x55)\\n        }\\n    }\\n\\n    /**\\n     * @dev Computes the address of a clone deployed using {Clones-cloneDeterministic}.\\n     */\\n    function predictDeterministicAddress(address implementation, bytes32 salt)\\n        internal\\n        view\\n        returns (address predicted)\\n    {\\n        return predictDeterministicAddress(implementation, salt, address(this));\\n    }\\n}\\n\",\"keccak256\":\"0xae614c6b103b743c62e9544632f7ef4fc8950de4e9c783d2e765a3b86701dda3\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC20/ERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"./IERC20.sol\\\";\\nimport \\\"./extensions/IERC20Metadata.sol\\\";\\nimport \\\"../../utils/Context.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\\n * instead returning `false` on failure. This behavior is nonetheless\\n * conventional and does not conflict with the expectations of ERC20\\n * applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn't required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20 is Context, IERC20, IERC20Metadata {\\n    mapping(address => uint256) private _balances;\\n\\n    mapping(address => mapping(address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}.\\n     *\\n     * The default value of {decimals} is 18. To select a different value for\\n     * {decimals} you should overload it.\\n     *\\n     * All two of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor(string memory name_, string memory symbol_) {\\n        _name = name_;\\n        _symbol = symbol_;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual override returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual override returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\\n     * overridden;\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual override returns (uint8) {\\n        return 18;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address to, uint256 amount) public virtual override returns (bool) {\\n        address owner = _msgSender();\\n        _transfer(owner, to, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on\\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        address owner = _msgSender();\\n        _approve(owner, spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * NOTE: Does not update the allowance if the current allowance\\n     * is the maximum `uint256`.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` and `to` cannot be the zero address.\\n     * - `from` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``from``'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) public virtual override returns (bool) {\\n        address spender = _msgSender();\\n        _spendAllowance(from, spender, amount);\\n        _transfer(from, to, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        _approve(owner, spender, allowance(owner, spender) + addedValue);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        address owner = _msgSender();\\n        uint256 currentAllowance = allowance(owner, spender);\\n        require(currentAllowance >= subtractedValue, \\\"ERC20: decreased allowance below zero\\\");\\n        unchecked {\\n            _approve(owner, spender, currentAllowance - subtractedValue);\\n        }\\n\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves `amount` of tokens from `from` to `to`.\\n     *\\n     * This internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `to` cannot be the zero address.\\n     * - `from` must have a balance of at least `amount`.\\n     */\\n    function _transfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {\\n        require(from != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(to != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(from, to, amount);\\n\\n        uint256 fromBalance = _balances[from];\\n        require(fromBalance >= amount, \\\"ERC20: transfer amount exceeds balance\\\");\\n        unchecked {\\n            _balances[from] = fromBalance - amount;\\n        }\\n        _balances[to] += amount;\\n\\n        emit Transfer(from, to, amount);\\n\\n        _afterTokenTransfer(from, to, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply += amount;\\n        _balances[account] += amount;\\n        emit Transfer(address(0), account, amount);\\n\\n        _afterTokenTransfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        uint256 accountBalance = _balances[account];\\n        require(accountBalance >= amount, \\\"ERC20: burn amount exceeds balance\\\");\\n        unchecked {\\n            _balances[account] = accountBalance - amount;\\n        }\\n        _totalSupply -= amount;\\n\\n        emit Transfer(account, address(0), amount);\\n\\n        _afterTokenTransfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        require(owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Updates `owner` s allowance for `spender` based on spent `amount`.\\n     *\\n     * Does not update the allowance amount in case of infinite allowance.\\n     * Revert if not enough allowance is available.\\n     *\\n     * Might emit an {Approval} event.\\n     */\\n    function _spendAllowance(\\n        address owner,\\n        address spender,\\n        uint256 amount\\n    ) internal virtual {\\n        uint256 currentAllowance = allowance(owner, spender);\\n        if (currentAllowance != type(uint256).max) {\\n            require(currentAllowance >= amount, \\\"ERC20: insufficient allowance\\\");\\n            unchecked {\\n                _approve(owner, spender, currentAllowance - amount);\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * will be transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * has been transferred to `to`.\\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) internal virtual {}\\n}\\n\",\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) external returns (bool);\\n}\\n\",\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Metadata.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC20.sol\\\";\\n\\n/**\\n * @dev Interface for the optional metadata functions from the ERC20 standard.\\n *\\n * _Available since v4.1._\\n */\\ninterface IERC20Metadata is IERC20 {\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the symbol of the token.\\n     */\\n    function symbol() external view returns (string memory);\\n\\n    /**\\n     * @dev Returns the decimals places of the token.\\n     */\\n    function decimals() external view returns (uint8);\\n}\\n\",\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/draft-IERC20Permit.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in\\n * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].\\n *\\n * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by\\n * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't\\n * need to send a transaction, and thus is not required to hold Ether at all.\\n */\\ninterface IERC20Permit {\\n    /**\\n     * @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,\\n     * given ``owner``'s signed approval.\\n     *\\n     * IMPORTANT: The same issues {IERC20-approve} has related to transaction\\n     * ordering also apply here.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `deadline` must be a timestamp in the future.\\n     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`\\n     * over the EIP712-formatted function arguments.\\n     * - the signature must use ``owner``'s current nonce (see {nonces}).\\n     *\\n     * For more information on the signature format, see the\\n     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP\\n     * section].\\n     */\\n    function permit(\\n        address owner,\\n        address spender,\\n        uint256 value,\\n        uint256 deadline,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) external;\\n\\n    /**\\n     * @dev Returns the current nonce for `owner`. This value must be\\n     * included whenever a signature is generated for {permit}.\\n     *\\n     * Every successful call to {permit} increases ``owner``'s nonce by one. This\\n     * prevents a signature from being used multiple times.\\n     */\\n    function nonces(address owner) external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\\n     */\\n    // solhint-disable-next-line func-name-mixedcase\\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\\n}\\n\",\"keccak256\":\"0xf41ca991f30855bf80ffd11e9347856a517b977f0a6c2d52e6421a99b7840329\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC20/utils/SafeERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../IERC20.sol\\\";\\nimport \\\"../extensions/draft-IERC20Permit.sol\\\";\\nimport \\\"../../../utils/Address.sol\\\";\\n\\n/**\\n * @title SafeERC20\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\n * contract returns false). Tokens that return no value (and instead revert or\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\n * successful.\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\n */\\nlibrary SafeERC20 {\\n    using Address for address;\\n\\n    function safeTransfer(\\n        IERC20 token,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\\n    }\\n\\n    function safeTransferFrom(\\n        IERC20 token,\\n        address from,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\\n    }\\n\\n    /**\\n     * @dev Deprecated. This function has issues similar to the ones found in\\n     * {IERC20-approve}, and its usage is discouraged.\\n     *\\n     * Whenever possible, use {safeIncreaseAllowance} and\\n     * {safeDecreaseAllowance} instead.\\n     */\\n    function safeApprove(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        // safeApprove should only be called when setting an initial allowance,\\n        // or when resetting it to zero. To increase and decrease it, use\\n        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'\\n        require(\\n            (value == 0) || (token.allowance(address(this), spender) == 0),\\n            \\\"SafeERC20: approve from non-zero to non-zero allowance\\\"\\n        );\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\\n    }\\n\\n    function safeIncreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender) + value;\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    function safeDecreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        unchecked {\\n            uint256 oldAllowance = token.allowance(address(this), spender);\\n            require(oldAllowance >= value, \\\"SafeERC20: decreased allowance below zero\\\");\\n            uint256 newAllowance = oldAllowance - value;\\n            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n        }\\n    }\\n\\n    function safePermit(\\n        IERC20Permit token,\\n        address owner,\\n        address spender,\\n        uint256 value,\\n        uint256 deadline,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) internal {\\n        uint256 nonceBefore = token.nonces(owner);\\n        token.permit(owner, spender, value, deadline, v, r, s);\\n        uint256 nonceAfter = token.nonces(owner);\\n        require(nonceAfter == nonceBefore + 1, \\\"SafeERC20: permit did not succeed\\\");\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     */\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\n        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since\\n        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that\\n        // the target address contains contract code and also asserts for success in the low-level call.\\n\\n        bytes memory returndata = address(token).functionCall(data, \\\"SafeERC20: low-level call failed\\\");\\n        if (returndata.length > 0) {\\n            // Return data is optional\\n            require(abi.decode(returndata, (bool)), \\\"SafeERC20: ERC20 operation did not succeed\\\");\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x032807210d1d7d218963d7355d62e021a84bf1b3339f4f50be2f63b53cccaf29\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn't rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n                /// @solidity memory-safe-assembly\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (utils/math/SafeCast.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Wrappers over Solidity's uintXX/intXX casting operators with added overflow\\n * checks.\\n *\\n * Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\\n * easily result in undesired exploitation or bugs, since developers usually\\n * assume that overflows raise errors. `SafeCast` restores this intuition by\\n * reverting the transaction when such an operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it's recommended to use it always.\\n *\\n * Can be combined with {SafeMath} and {SignedSafeMath} to extend it to smaller types, by performing\\n * all math on `uint256` and `int256` and then downcasting.\\n */\\nlibrary SafeCast {\\n    /**\\n     * @dev Returns the downcasted uint248 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint248).\\n     *\\n     * Counterpart to Solidity's `uint248` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 248 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint248(uint256 value) internal pure returns (uint248) {\\n        require(value <= type(uint248).max, \\\"SafeCast: value doesn't fit in 248 bits\\\");\\n        return uint248(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint240 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint240).\\n     *\\n     * Counterpart to Solidity's `uint240` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 240 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint240(uint256 value) internal pure returns (uint240) {\\n        require(value <= type(uint240).max, \\\"SafeCast: value doesn't fit in 240 bits\\\");\\n        return uint240(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint232 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint232).\\n     *\\n     * Counterpart to Solidity's `uint232` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 232 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint232(uint256 value) internal pure returns (uint232) {\\n        require(value <= type(uint232).max, \\\"SafeCast: value doesn't fit in 232 bits\\\");\\n        return uint232(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint224 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint224).\\n     *\\n     * Counterpart to Solidity's `uint224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     *\\n     * _Available since v4.2._\\n     */\\n    function toUint224(uint256 value) internal pure returns (uint224) {\\n        require(value <= type(uint224).max, \\\"SafeCast: value doesn't fit in 224 bits\\\");\\n        return uint224(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint216 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint216).\\n     *\\n     * Counterpart to Solidity's `uint216` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 216 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint216(uint256 value) internal pure returns (uint216) {\\n        require(value <= type(uint216).max, \\\"SafeCast: value doesn't fit in 216 bits\\\");\\n        return uint216(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint208 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint208).\\n     *\\n     * Counterpart to Solidity's `uint208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint208(uint256 value) internal pure returns (uint208) {\\n        require(value <= type(uint208).max, \\\"SafeCast: value doesn't fit in 208 bits\\\");\\n        return uint208(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint200 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint200).\\n     *\\n     * Counterpart to Solidity's `uint200` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 200 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint200(uint256 value) internal pure returns (uint200) {\\n        require(value <= type(uint200).max, \\\"SafeCast: value doesn't fit in 200 bits\\\");\\n        return uint200(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint192 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint192).\\n     *\\n     * Counterpart to Solidity's `uint192` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 192 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint192(uint256 value) internal pure returns (uint192) {\\n        require(value <= type(uint192).max, \\\"SafeCast: value doesn't fit in 192 bits\\\");\\n        return uint192(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint184 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint184).\\n     *\\n     * Counterpart to Solidity's `uint184` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 184 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint184(uint256 value) internal pure returns (uint184) {\\n        require(value <= type(uint184).max, \\\"SafeCast: value doesn't fit in 184 bits\\\");\\n        return uint184(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint176 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint176).\\n     *\\n     * Counterpart to Solidity's `uint176` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 176 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint176(uint256 value) internal pure returns (uint176) {\\n        require(value <= type(uint176).max, \\\"SafeCast: value doesn't fit in 176 bits\\\");\\n        return uint176(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint168 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint168).\\n     *\\n     * Counterpart to Solidity's `uint168` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 168 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint168(uint256 value) internal pure returns (uint168) {\\n        require(value <= type(uint168).max, \\\"SafeCast: value doesn't fit in 168 bits\\\");\\n        return uint168(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint160 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint160).\\n     *\\n     * Counterpart to Solidity's `uint160` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 160 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint160(uint256 value) internal pure returns (uint160) {\\n        require(value <= type(uint160).max, \\\"SafeCast: value doesn't fit in 160 bits\\\");\\n        return uint160(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint152 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint152).\\n     *\\n     * Counterpart to Solidity's `uint152` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 152 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint152(uint256 value) internal pure returns (uint152) {\\n        require(value <= type(uint152).max, \\\"SafeCast: value doesn't fit in 152 bits\\\");\\n        return uint152(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint144 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint144).\\n     *\\n     * Counterpart to Solidity's `uint144` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 144 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint144(uint256 value) internal pure returns (uint144) {\\n        require(value <= type(uint144).max, \\\"SafeCast: value doesn't fit in 144 bits\\\");\\n        return uint144(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint136 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint136).\\n     *\\n     * Counterpart to Solidity's `uint136` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 136 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint136(uint256 value) internal pure returns (uint136) {\\n        require(value <= type(uint136).max, \\\"SafeCast: value doesn't fit in 136 bits\\\");\\n        return uint136(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint128 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint128).\\n     *\\n     * Counterpart to Solidity's `uint128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint128(uint256 value) internal pure returns (uint128) {\\n        require(value <= type(uint128).max, \\\"SafeCast: value doesn't fit in 128 bits\\\");\\n        return uint128(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint120 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint120).\\n     *\\n     * Counterpart to Solidity's `uint120` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 120 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint120(uint256 value) internal pure returns (uint120) {\\n        require(value <= type(uint120).max, \\\"SafeCast: value doesn't fit in 120 bits\\\");\\n        return uint120(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint112 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint112).\\n     *\\n     * Counterpart to Solidity's `uint112` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 112 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint112(uint256 value) internal pure returns (uint112) {\\n        require(value <= type(uint112).max, \\\"SafeCast: value doesn't fit in 112 bits\\\");\\n        return uint112(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint104 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint104).\\n     *\\n     * Counterpart to Solidity's `uint104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint104(uint256 value) internal pure returns (uint104) {\\n        require(value <= type(uint104).max, \\\"SafeCast: value doesn't fit in 104 bits\\\");\\n        return uint104(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint96 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint96).\\n     *\\n     * Counterpart to Solidity's `uint96` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 96 bits\\n     *\\n     * _Available since v4.2._\\n     */\\n    function toUint96(uint256 value) internal pure returns (uint96) {\\n        require(value <= type(uint96).max, \\\"SafeCast: value doesn't fit in 96 bits\\\");\\n        return uint96(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint88 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint88).\\n     *\\n     * Counterpart to Solidity's `uint88` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 88 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint88(uint256 value) internal pure returns (uint88) {\\n        require(value <= type(uint88).max, \\\"SafeCast: value doesn't fit in 88 bits\\\");\\n        return uint88(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint80 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint80).\\n     *\\n     * Counterpart to Solidity's `uint80` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 80 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint80(uint256 value) internal pure returns (uint80) {\\n        require(value <= type(uint80).max, \\\"SafeCast: value doesn't fit in 80 bits\\\");\\n        return uint80(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint72 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint72).\\n     *\\n     * Counterpart to Solidity's `uint72` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 72 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint72(uint256 value) internal pure returns (uint72) {\\n        require(value <= type(uint72).max, \\\"SafeCast: value doesn't fit in 72 bits\\\");\\n        return uint72(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint64 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint64).\\n     *\\n     * Counterpart to Solidity's `uint64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint64(uint256 value) internal pure returns (uint64) {\\n        require(value <= type(uint64).max, \\\"SafeCast: value doesn't fit in 64 bits\\\");\\n        return uint64(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint56 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint56).\\n     *\\n     * Counterpart to Solidity's `uint56` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 56 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint56(uint256 value) internal pure returns (uint56) {\\n        require(value <= type(uint56).max, \\\"SafeCast: value doesn't fit in 56 bits\\\");\\n        return uint56(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint48 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint48).\\n     *\\n     * Counterpart to Solidity's `uint48` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 48 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint48(uint256 value) internal pure returns (uint48) {\\n        require(value <= type(uint48).max, \\\"SafeCast: value doesn't fit in 48 bits\\\");\\n        return uint48(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint40 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint40).\\n     *\\n     * Counterpart to Solidity's `uint40` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 40 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint40(uint256 value) internal pure returns (uint40) {\\n        require(value <= type(uint40).max, \\\"SafeCast: value doesn't fit in 40 bits\\\");\\n        return uint40(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint32 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint32).\\n     *\\n     * Counterpart to Solidity's `uint32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint32(uint256 value) internal pure returns (uint32) {\\n        require(value <= type(uint32).max, \\\"SafeCast: value doesn't fit in 32 bits\\\");\\n        return uint32(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint24 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint24).\\n     *\\n     * Counterpart to Solidity's `uint24` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 24 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint24(uint256 value) internal pure returns (uint24) {\\n        require(value <= type(uint24).max, \\\"SafeCast: value doesn't fit in 24 bits\\\");\\n        return uint24(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint16 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint16).\\n     *\\n     * Counterpart to Solidity's `uint16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint16(uint256 value) internal pure returns (uint16) {\\n        require(value <= type(uint16).max, \\\"SafeCast: value doesn't fit in 16 bits\\\");\\n        return uint16(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint8 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint8).\\n     *\\n     * Counterpart to Solidity's `uint8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint8(uint256 value) internal pure returns (uint8) {\\n        require(value <= type(uint8).max, \\\"SafeCast: value doesn't fit in 8 bits\\\");\\n        return uint8(value);\\n    }\\n\\n    /**\\n     * @dev Converts a signed int256 into an unsigned uint256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be greater than or equal to 0.\\n     *\\n     * _Available since v3.0._\\n     */\\n    function toUint256(int256 value) internal pure returns (uint256) {\\n        require(value >= 0, \\\"SafeCast: value must be positive\\\");\\n        return uint256(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int248 from int256, reverting on\\n     * overflow (when the input is less than smallest int248 or\\n     * greater than largest int248).\\n     *\\n     * Counterpart to Solidity's `int248` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 248 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt248(int256 value) internal pure returns (int248) {\\n        require(value >= type(int248).min && value <= type(int248).max, \\\"SafeCast: value doesn't fit in 248 bits\\\");\\n        return int248(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int240 from int256, reverting on\\n     * overflow (when the input is less than smallest int240 or\\n     * greater than largest int240).\\n     *\\n     * Counterpart to Solidity's `int240` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 240 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt240(int256 value) internal pure returns (int240) {\\n        require(value >= type(int240).min && value <= type(int240).max, \\\"SafeCast: value doesn't fit in 240 bits\\\");\\n        return int240(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int232 from int256, reverting on\\n     * overflow (when the input is less than smallest int232 or\\n     * greater than largest int232).\\n     *\\n     * Counterpart to Solidity's `int232` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 232 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt232(int256 value) internal pure returns (int232) {\\n        require(value >= type(int232).min && value <= type(int232).max, \\\"SafeCast: value doesn't fit in 232 bits\\\");\\n        return int232(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int224 from int256, reverting on\\n     * overflow (when the input is less than smallest int224 or\\n     * greater than largest int224).\\n     *\\n     * Counterpart to Solidity's `int224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt224(int256 value) internal pure returns (int224) {\\n        require(value >= type(int224).min && value <= type(int224).max, \\\"SafeCast: value doesn't fit in 224 bits\\\");\\n        return int224(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int216 from int256, reverting on\\n     * overflow (when the input is less than smallest int216 or\\n     * greater than largest int216).\\n     *\\n     * Counterpart to Solidity's `int216` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 216 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt216(int256 value) internal pure returns (int216) {\\n        require(value >= type(int216).min && value <= type(int216).max, \\\"SafeCast: value doesn't fit in 216 bits\\\");\\n        return int216(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int208 from int256, reverting on\\n     * overflow (when the input is less than smallest int208 or\\n     * greater than largest int208).\\n     *\\n     * Counterpart to Solidity's `int208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt208(int256 value) internal pure returns (int208) {\\n        require(value >= type(int208).min && value <= type(int208).max, \\\"SafeCast: value doesn't fit in 208 bits\\\");\\n        return int208(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int200 from int256, reverting on\\n     * overflow (when the input is less than smallest int200 or\\n     * greater than largest int200).\\n     *\\n     * Counterpart to Solidity's `int200` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 200 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt200(int256 value) internal pure returns (int200) {\\n        require(value >= type(int200).min && value <= type(int200).max, \\\"SafeCast: value doesn't fit in 200 bits\\\");\\n        return int200(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int192 from int256, reverting on\\n     * overflow (when the input is less than smallest int192 or\\n     * greater than largest int192).\\n     *\\n     * Counterpart to Solidity's `int192` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 192 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt192(int256 value) internal pure returns (int192) {\\n        require(value >= type(int192).min && value <= type(int192).max, \\\"SafeCast: value doesn't fit in 192 bits\\\");\\n        return int192(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int184 from int256, reverting on\\n     * overflow (when the input is less than smallest int184 or\\n     * greater than largest int184).\\n     *\\n     * Counterpart to Solidity's `int184` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 184 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt184(int256 value) internal pure returns (int184) {\\n        require(value >= type(int184).min && value <= type(int184).max, \\\"SafeCast: value doesn't fit in 184 bits\\\");\\n        return int184(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int176 from int256, reverting on\\n     * overflow (when the input is less than smallest int176 or\\n     * greater than largest int176).\\n     *\\n     * Counterpart to Solidity's `int176` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 176 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt176(int256 value) internal pure returns (int176) {\\n        require(value >= type(int176).min && value <= type(int176).max, \\\"SafeCast: value doesn't fit in 176 bits\\\");\\n        return int176(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int168 from int256, reverting on\\n     * overflow (when the input is less than smallest int168 or\\n     * greater than largest int168).\\n     *\\n     * Counterpart to Solidity's `int168` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 168 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt168(int256 value) internal pure returns (int168) {\\n        require(value >= type(int168).min && value <= type(int168).max, \\\"SafeCast: value doesn't fit in 168 bits\\\");\\n        return int168(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int160 from int256, reverting on\\n     * overflow (when the input is less than smallest int160 or\\n     * greater than largest int160).\\n     *\\n     * Counterpart to Solidity's `int160` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 160 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt160(int256 value) internal pure returns (int160) {\\n        require(value >= type(int160).min && value <= type(int160).max, \\\"SafeCast: value doesn't fit in 160 bits\\\");\\n        return int160(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int152 from int256, reverting on\\n     * overflow (when the input is less than smallest int152 or\\n     * greater than largest int152).\\n     *\\n     * Counterpart to Solidity's `int152` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 152 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt152(int256 value) internal pure returns (int152) {\\n        require(value >= type(int152).min && value <= type(int152).max, \\\"SafeCast: value doesn't fit in 152 bits\\\");\\n        return int152(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int144 from int256, reverting on\\n     * overflow (when the input is less than smallest int144 or\\n     * greater than largest int144).\\n     *\\n     * Counterpart to Solidity's `int144` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 144 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt144(int256 value) internal pure returns (int144) {\\n        require(value >= type(int144).min && value <= type(int144).max, \\\"SafeCast: value doesn't fit in 144 bits\\\");\\n        return int144(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int136 from int256, reverting on\\n     * overflow (when the input is less than smallest int136 or\\n     * greater than largest int136).\\n     *\\n     * Counterpart to Solidity's `int136` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 136 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt136(int256 value) internal pure returns (int136) {\\n        require(value >= type(int136).min && value <= type(int136).max, \\\"SafeCast: value doesn't fit in 136 bits\\\");\\n        return int136(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int128 from int256, reverting on\\n     * overflow (when the input is less than smallest int128 or\\n     * greater than largest int128).\\n     *\\n     * Counterpart to Solidity's `int128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt128(int256 value) internal pure returns (int128) {\\n        require(value >= type(int128).min && value <= type(int128).max, \\\"SafeCast: value doesn't fit in 128 bits\\\");\\n        return int128(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int120 from int256, reverting on\\n     * overflow (when the input is less than smallest int120 or\\n     * greater than largest int120).\\n     *\\n     * Counterpart to Solidity's `int120` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 120 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt120(int256 value) internal pure returns (int120) {\\n        require(value >= type(int120).min && value <= type(int120).max, \\\"SafeCast: value doesn't fit in 120 bits\\\");\\n        return int120(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int112 from int256, reverting on\\n     * overflow (when the input is less than smallest int112 or\\n     * greater than largest int112).\\n     *\\n     * Counterpart to Solidity's `int112` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 112 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt112(int256 value) internal pure returns (int112) {\\n        require(value >= type(int112).min && value <= type(int112).max, \\\"SafeCast: value doesn't fit in 112 bits\\\");\\n        return int112(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int104 from int256, reverting on\\n     * overflow (when the input is less than smallest int104 or\\n     * greater than largest int104).\\n     *\\n     * Counterpart to Solidity's `int104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt104(int256 value) internal pure returns (int104) {\\n        require(value >= type(int104).min && value <= type(int104).max, \\\"SafeCast: value doesn't fit in 104 bits\\\");\\n        return int104(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int96 from int256, reverting on\\n     * overflow (when the input is less than smallest int96 or\\n     * greater than largest int96).\\n     *\\n     * Counterpart to Solidity's `int96` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 96 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt96(int256 value) internal pure returns (int96) {\\n        require(value >= type(int96).min && value <= type(int96).max, \\\"SafeCast: value doesn't fit in 96 bits\\\");\\n        return int96(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int88 from int256, reverting on\\n     * overflow (when the input is less than smallest int88 or\\n     * greater than largest int88).\\n     *\\n     * Counterpart to Solidity's `int88` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 88 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt88(int256 value) internal pure returns (int88) {\\n        require(value >= type(int88).min && value <= type(int88).max, \\\"SafeCast: value doesn't fit in 88 bits\\\");\\n        return int88(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int80 from int256, reverting on\\n     * overflow (when the input is less than smallest int80 or\\n     * greater than largest int80).\\n     *\\n     * Counterpart to Solidity's `int80` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 80 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt80(int256 value) internal pure returns (int80) {\\n        require(value >= type(int80).min && value <= type(int80).max, \\\"SafeCast: value doesn't fit in 80 bits\\\");\\n        return int80(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int72 from int256, reverting on\\n     * overflow (when the input is less than smallest int72 or\\n     * greater than largest int72).\\n     *\\n     * Counterpart to Solidity's `int72` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 72 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt72(int256 value) internal pure returns (int72) {\\n        require(value >= type(int72).min && value <= type(int72).max, \\\"SafeCast: value doesn't fit in 72 bits\\\");\\n        return int72(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int64 from int256, reverting on\\n     * overflow (when the input is less than smallest int64 or\\n     * greater than largest int64).\\n     *\\n     * Counterpart to Solidity's `int64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt64(int256 value) internal pure returns (int64) {\\n        require(value >= type(int64).min && value <= type(int64).max, \\\"SafeCast: value doesn't fit in 64 bits\\\");\\n        return int64(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int56 from int256, reverting on\\n     * overflow (when the input is less than smallest int56 or\\n     * greater than largest int56).\\n     *\\n     * Counterpart to Solidity's `int56` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 56 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt56(int256 value) internal pure returns (int56) {\\n        require(value >= type(int56).min && value <= type(int56).max, \\\"SafeCast: value doesn't fit in 56 bits\\\");\\n        return int56(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int48 from int256, reverting on\\n     * overflow (when the input is less than smallest int48 or\\n     * greater than largest int48).\\n     *\\n     * Counterpart to Solidity's `int48` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 48 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt48(int256 value) internal pure returns (int48) {\\n        require(value >= type(int48).min && value <= type(int48).max, \\\"SafeCast: value doesn't fit in 48 bits\\\");\\n        return int48(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int40 from int256, reverting on\\n     * overflow (when the input is less than smallest int40 or\\n     * greater than largest int40).\\n     *\\n     * Counterpart to Solidity's `int40` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 40 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt40(int256 value) internal pure returns (int40) {\\n        require(value >= type(int40).min && value <= type(int40).max, \\\"SafeCast: value doesn't fit in 40 bits\\\");\\n        return int40(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int32 from int256, reverting on\\n     * overflow (when the input is less than smallest int32 or\\n     * greater than largest int32).\\n     *\\n     * Counterpart to Solidity's `int32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt32(int256 value) internal pure returns (int32) {\\n        require(value >= type(int32).min && value <= type(int32).max, \\\"SafeCast: value doesn't fit in 32 bits\\\");\\n        return int32(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int24 from int256, reverting on\\n     * overflow (when the input is less than smallest int24 or\\n     * greater than largest int24).\\n     *\\n     * Counterpart to Solidity's `int24` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 24 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt24(int256 value) internal pure returns (int24) {\\n        require(value >= type(int24).min && value <= type(int24).max, \\\"SafeCast: value doesn't fit in 24 bits\\\");\\n        return int24(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int16 from int256, reverting on\\n     * overflow (when the input is less than smallest int16 or\\n     * greater than largest int16).\\n     *\\n     * Counterpart to Solidity's `int16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt16(int256 value) internal pure returns (int16) {\\n        require(value >= type(int16).min && value <= type(int16).max, \\\"SafeCast: value doesn't fit in 16 bits\\\");\\n        return int16(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int8 from int256, reverting on\\n     * overflow (when the input is less than smallest int8 or\\n     * greater than largest int8).\\n     *\\n     * Counterpart to Solidity's `int8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt8(int256 value) internal pure returns (int8) {\\n        require(value >= type(int8).min && value <= type(int8).max, \\\"SafeCast: value doesn't fit in 8 bits\\\");\\n        return int8(value);\\n    }\\n\\n    /**\\n     * @dev Converts an unsigned uint256 into a signed int256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be less than or equal to maxInt256.\\n     *\\n     * _Available since v3.0._\\n     */\\n    function toInt256(uint256 value) internal pure returns (int256) {\\n        // Note: Unsafe cast below is okay because `type(int256).max` is guaranteed to be positive\\n        require(value <= uint256(type(int256).max), \\\"SafeCast: value doesn't fit in an int256\\\");\\n        return int256(value);\\n    }\\n}\\n\",\"keccak256\":\"0x02686c31ccb9ee77a299fa5f47327af5271f251a707a0e24f321957166ff0434\",\"license\":\"MIT\"},\"@pooltogether/v4-core/contracts/interfaces/IControlledToken.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\n\\n/** @title IControlledToken\\n  * @author PoolTogether Inc Team\\n  * @notice ERC20 Tokens with a controller for minting & burning.\\n*/\\ninterface IControlledToken is IERC20 {\\n\\n    /** \\n        @notice Interface to the contract responsible for controlling mint/burn\\n    */\\n    function controller() external view returns (address);\\n\\n    /** \\n      * @notice Allows the controller to mint tokens for a user account\\n      * @dev May be overridden to provide more granular control over minting\\n      * @param user Address of the receiver of the minted tokens\\n      * @param amount Amount of tokens to mint\\n    */\\n    function controllerMint(address user, uint256 amount) external;\\n\\n    /** \\n      * @notice Allows the controller to burn tokens from a user account\\n      * @dev May be overridden to provide more granular control over burning\\n      * @param user Address of the holder account to burn tokens from\\n      * @param amount Amount of tokens to burn\\n    */\\n    function controllerBurn(address user, uint256 amount) external;\\n\\n    /** \\n      * @notice Allows an operator via the controller to burn tokens on behalf of a user account\\n      * @dev May be overridden to provide more granular control over operator-burning\\n      * @param operator Address of the operator performing the burn action via the controller contract\\n      * @param user Address of the holder account to burn tokens from\\n      * @param amount Amount of tokens to burn\\n    */\\n    function controllerBurnFrom(\\n        address operator,\\n        address user,\\n        uint256 amount\\n    ) external;\\n}\\n\",\"keccak256\":\"0x90dceeec1eea6e49021e8db88b084f3f0c503c60b6f7e0bbecd2529ffde87ef3\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-core/contracts/interfaces/ITicket.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\\"../libraries/TwabLib.sol\\\";\\nimport \\\"./IControlledToken.sol\\\";\\n\\ninterface ITicket is IControlledToken {\\n    /**\\n     * @notice A struct containing details for an Account.\\n     * @param balance The current balance for an Account.\\n     * @param nextTwabIndex The next available index to store a new twab.\\n     * @param cardinality The number of recorded twabs (plus one!).\\n     */\\n    struct AccountDetails {\\n        uint224 balance;\\n        uint16 nextTwabIndex;\\n        uint16 cardinality;\\n    }\\n\\n    /**\\n     * @notice Combines account details with their twab history.\\n     * @param details The account details.\\n     * @param twabs The history of twabs for this account.\\n     */\\n    struct Account {\\n        AccountDetails details;\\n        ObservationLib.Observation[65535] twabs;\\n    }\\n\\n    /**\\n     * @notice Emitted when TWAB balance has been delegated to another user.\\n     * @param delegator Address of the delegator.\\n     * @param delegate Address of the delegate.\\n     */\\n    event Delegated(address indexed delegator, address indexed delegate);\\n\\n    /**\\n     * @notice Emitted when ticket is initialized.\\n     * @param name Ticket name (eg: PoolTogether Dai Ticket (Compound)).\\n     * @param symbol Ticket symbol (eg: PcDAI).\\n     * @param decimals Ticket decimals.\\n     * @param controller Token controller address.\\n     */\\n    event TicketInitialized(string name, string symbol, uint8 decimals, address indexed controller);\\n\\n    /**\\n     * @notice Emitted when a new TWAB has been recorded.\\n     * @param delegate The recipient of the ticket power (may be the same as the user).\\n     * @param newTwab Updated TWAB of a ticket holder after a successful TWAB recording.\\n     */\\n    event NewUserTwab(\\n        address indexed delegate,\\n        ObservationLib.Observation newTwab\\n    );\\n\\n    /**\\n     * @notice Emitted when a new total supply TWAB has been recorded.\\n     * @param newTotalSupplyTwab Updated TWAB of tickets total supply after a successful total supply TWAB recording.\\n     */\\n    event NewTotalSupplyTwab(ObservationLib.Observation newTotalSupplyTwab);\\n\\n    /**\\n     * @notice Retrieves the address of the delegate to whom `user` has delegated their tickets.\\n     * @dev Address of the delegate will be the zero address if `user` has not delegated their tickets.\\n     * @param user Address of the delegator.\\n     * @return Address of the delegate.\\n     */\\n    function delegateOf(address user) external view returns (address);\\n\\n    /**\\n    * @notice Delegate time-weighted average balances to an alternative address.\\n    * @dev    Transfers (including mints) trigger the storage of a TWAB in delegate(s) account, instead of the\\n              targetted sender and/or recipient address(s).\\n    * @dev    To reset the delegate, pass the zero address (0x000.000) as `to` parameter.\\n    * @dev Current delegate address should be different from the new delegate address `to`.\\n    * @param  to Recipient of delegated TWAB.\\n    */\\n    function delegate(address to) external;\\n\\n    /**\\n     * @notice Allows the controller to delegate on a users behalf.\\n     * @param user The user for whom to delegate\\n     * @param delegate The new delegate\\n     */\\n    function controllerDelegateFor(address user, address delegate) external;\\n\\n    /**\\n     * @notice Allows a user to delegate via signature\\n     * @param user The user who is delegating\\n     * @param delegate The new delegate\\n     * @param deadline The timestamp by which this must be submitted\\n     * @param v The v portion of the ECDSA sig\\n     * @param r The r portion of the ECDSA sig\\n     * @param s The s portion of the ECDSA sig\\n     */\\n    function delegateWithSignature(\\n        address user,\\n        address delegate,\\n        uint256 deadline,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) external;\\n\\n    /**\\n     * @notice Gets a users twab context.  This is a struct with their balance, next twab index, and cardinality.\\n     * @param user The user for whom to fetch the TWAB context.\\n     * @return The TWAB context, which includes { balance, nextTwabIndex, cardinality }\\n     */\\n    function getAccountDetails(address user) external view returns (TwabLib.AccountDetails memory);\\n\\n    /**\\n     * @notice Gets the TWAB at a specific index for a user.\\n     * @param user The user for whom to fetch the TWAB.\\n     * @param index The index of the TWAB to fetch.\\n     * @return The TWAB, which includes the twab amount and the timestamp.\\n     */\\n    function getTwab(address user, uint16 index)\\n        external\\n        view\\n        returns (ObservationLib.Observation memory);\\n\\n    /**\\n     * @notice Retrieves `user` TWAB balance.\\n     * @param user Address of the user whose TWAB is being fetched.\\n     * @param timestamp Timestamp at which we want to retrieve the TWAB balance.\\n     * @return The TWAB balance at the given timestamp.\\n     */\\n    function getBalanceAt(address user, uint64 timestamp) external view returns (uint256);\\n\\n    /**\\n     * @notice Retrieves `user` TWAB balances.\\n     * @param user Address of the user whose TWABs are being fetched.\\n     * @param timestamps Timestamps range at which we want to retrieve the TWAB balances.\\n     * @return `user` TWAB balances.\\n     */\\n    function getBalancesAt(address user, uint64[] calldata timestamps)\\n        external\\n        view\\n        returns (uint256[] memory);\\n\\n    /**\\n     * @notice Retrieves the average balance held by a user for a given time frame.\\n     * @param user The user whose balance is checked.\\n     * @param startTime The start time of the time frame.\\n     * @param endTime The end time of the time frame.\\n     * @return The average balance that the user held during the time frame.\\n     */\\n    function getAverageBalanceBetween(\\n        address user,\\n        uint64 startTime,\\n        uint64 endTime\\n    ) external view returns (uint256);\\n\\n    /**\\n     * @notice Retrieves the average balances held by a user for a given time frame.\\n     * @param user The user whose balance is checked.\\n     * @param startTimes The start time of the time frame.\\n     * @param endTimes The end time of the time frame.\\n     * @return The average balance that the user held during the time frame.\\n     */\\n    function getAverageBalancesBetween(\\n        address user,\\n        uint64[] calldata startTimes,\\n        uint64[] calldata endTimes\\n    ) external view returns (uint256[] memory);\\n\\n    /**\\n     * @notice Retrieves the total supply TWAB balance at the given timestamp.\\n     * @param timestamp Timestamp at which we want to retrieve the total supply TWAB balance.\\n     * @return The total supply TWAB balance at the given timestamp.\\n     */\\n    function getTotalSupplyAt(uint64 timestamp) external view returns (uint256);\\n\\n    /**\\n     * @notice Retrieves the total supply TWAB balance between the given timestamps range.\\n     * @param timestamps Timestamps range at which we want to retrieve the total supply TWAB balance.\\n     * @return Total supply TWAB balances.\\n     */\\n    function getTotalSuppliesAt(uint64[] calldata timestamps)\\n        external\\n        view\\n        returns (uint256[] memory);\\n\\n    /**\\n     * @notice Retrieves the average total supply balance for a set of given time frames.\\n     * @param startTimes Array of start times.\\n     * @param endTimes Array of end times.\\n     * @return The average total supplies held during the time frame.\\n     */\\n    function getAverageTotalSuppliesBetween(\\n        uint64[] calldata startTimes,\\n        uint64[] calldata endTimes\\n    ) external view returns (uint256[] memory);\\n}\\n\",\"keccak256\":\"0xb9f6423a8a9c7394941cb84723b82cc66c5f815d689dc0562e612ae4d9f1cc27\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-core/contracts/libraries/ExtendedSafeCastLib.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\n/**\\n * @dev Wrappers over Solidity's uintXX/intXX casting operators with added overflow\\n * checks.\\n *\\n * Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\\n * easily result in undesired exploitation or bugs, since developers usually\\n * assume that overflows raise errors. `SafeCast` restores this intuition by\\n * reverting the transaction when such an operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it's recommended to use it always.\\n *\\n * Can be combined with {SafeMath} and {SignedSafeMath} to extend it to smaller types, by performing\\n * all math on `uint256` and `int256` and then downcasting.\\n */\\nlibrary ExtendedSafeCastLib {\\n\\n    /**\\n     * @dev Returns the downcasted uint104 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint104).\\n     *\\n     * Counterpart to Solidity's `uint104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     */\\n    function toUint104(uint256 _value) internal pure returns (uint104) {\\n        require(_value <= type(uint104).max, \\\"SafeCast: value doesn't fit in 104 bits\\\");\\n        return uint104(_value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint208 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint208).\\n     *\\n     * Counterpart to Solidity's `uint208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     */\\n    function toUint208(uint256 _value) internal pure returns (uint208) {\\n        require(_value <= type(uint208).max, \\\"SafeCast: value doesn't fit in 208 bits\\\");\\n        return uint208(_value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint224 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint224).\\n     *\\n     * Counterpart to Solidity's `uint224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     */\\n    function toUint224(uint256 _value) internal pure returns (uint224) {\\n        require(_value <= type(uint224).max, \\\"SafeCast: value doesn't fit in 224 bits\\\");\\n        return uint224(_value);\\n    }\\n}\\n\",\"keccak256\":\"0x1e8add7802f19dbf5957b4d921b2d7b5277f39c9e44505c0375e52f02134e434\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-core/contracts/libraries/ObservationLib.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\\"@openzeppelin/contracts/utils/math/SafeCast.sol\\\";\\n\\nimport \\\"./OverflowSafeComparatorLib.sol\\\";\\nimport \\\"./RingBufferLib.sol\\\";\\n\\n/**\\n* @title Observation Library\\n* @notice This library allows one to store an array of timestamped values and efficiently binary search them.\\n* @dev Largely pulled from Uniswap V3 Oracle.sol: https://github.com/Uniswap/v3-core/blob/c05a0e2c8c08c460fb4d05cfdda30b3ad8deeaac/contracts/libraries/Oracle.sol\\n* @author PoolTogether Inc.\\n*/\\nlibrary ObservationLib {\\n    using OverflowSafeComparatorLib for uint32;\\n    using SafeCast for uint256;\\n\\n    /// @notice The maximum number of observations\\n    uint24 public constant MAX_CARDINALITY = 16777215; // 2**24\\n\\n    /**\\n    * @notice Observation, which includes an amount and timestamp.\\n    * @param amount `amount` at `timestamp`.\\n    * @param timestamp Recorded `timestamp`.\\n    */\\n    struct Observation {\\n        uint224 amount;\\n        uint32 timestamp;\\n    }\\n\\n    /**\\n    * @notice Fetches Observations `beforeOrAt` and `atOrAfter` a `_target`, eg: where [`beforeOrAt`, `atOrAfter`] is satisfied.\\n    * The result may be the same Observation, or adjacent Observations.\\n    * @dev The answer must be contained in the array used when the target is located within the stored Observation.\\n    * boundaries: older than the most recent Observation and younger, or the same age as, the oldest Observation.\\n    * @dev  If `_newestObservationIndex` is less than `_oldestObservationIndex`, it means that we've wrapped around the circular buffer.\\n    *       So the most recent observation will be at `_oldestObservationIndex + _cardinality - 1`, at the beginning of the circular buffer.\\n    * @param _observations List of Observations to search through.\\n    * @param _newestObservationIndex Index of the newest Observation. Right side of the circular buffer.\\n    * @param _oldestObservationIndex Index of the oldest Observation. Left side of the circular buffer.\\n    * @param _target Timestamp at which we are searching the Observation.\\n    * @param _cardinality Cardinality of the circular buffer we are searching through.\\n    * @param _time Timestamp at which we perform the binary search.\\n    * @return beforeOrAt Observation recorded before, or at, the target.\\n    * @return atOrAfter Observation recorded at, or after, the target.\\n    */\\n    function binarySearch(\\n        Observation[MAX_CARDINALITY] storage _observations,\\n        uint24 _newestObservationIndex,\\n        uint24 _oldestObservationIndex,\\n        uint32 _target,\\n        uint24 _cardinality,\\n        uint32 _time\\n    ) internal view returns (Observation memory beforeOrAt, Observation memory atOrAfter) {\\n        uint256 leftSide = _oldestObservationIndex;\\n        uint256 rightSide = _newestObservationIndex < leftSide\\n            ? leftSide + _cardinality - 1\\n            : _newestObservationIndex;\\n        uint256 currentIndex;\\n\\n        while (true) {\\n            // We start our search in the middle of the `leftSide` and `rightSide`.\\n            // After each iteration, we narrow down the search to the left or the right side while still starting our search in the middle.\\n            currentIndex = (leftSide + rightSide) / 2;\\n\\n            beforeOrAt = _observations[uint24(RingBufferLib.wrap(currentIndex, _cardinality))];\\n            uint32 beforeOrAtTimestamp = beforeOrAt.timestamp;\\n\\n            // We've landed on an uninitialized timestamp, keep searching higher (more recently).\\n            if (beforeOrAtTimestamp == 0) {\\n                leftSide = currentIndex + 1;\\n                continue;\\n            }\\n\\n            atOrAfter = _observations[uint24(RingBufferLib.nextIndex(currentIndex, _cardinality))];\\n\\n            bool targetAtOrAfter = beforeOrAtTimestamp.lte(_target, _time);\\n\\n            // Check if we've found the corresponding Observation.\\n            if (targetAtOrAfter && _target.lte(atOrAfter.timestamp, _time)) {\\n                break;\\n            }\\n\\n            // If `beforeOrAtTimestamp` is greater than `_target`, then we keep searching lower. To the left of the current index.\\n            if (!targetAtOrAfter) {\\n                rightSide = currentIndex - 1;\\n            } else {\\n                // Otherwise, we keep searching higher. To the left of the current index.\\n                leftSide = currentIndex + 1;\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x225592b42013fc0af60822e75bc047d53b42a5fcf15f2173cdc3b50bea334b0a\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-core/contracts/libraries/OverflowSafeComparatorLib.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\n/// @title OverflowSafeComparatorLib library to share comparator functions between contracts\\n/// @dev Code taken from Uniswap V3 Oracle.sol: https://github.com/Uniswap/v3-core/blob/3e88af408132fc957e3e406f65a0ce2b1ca06c3d/contracts/libraries/Oracle.sol\\n/// @author PoolTogether Inc.\\nlibrary OverflowSafeComparatorLib {\\n    /// @notice 32-bit timestamps comparator.\\n    /// @dev safe for 0 or 1 overflows, `_a` and `_b` must be chronologically before or equal to time.\\n    /// @param _a A comparison timestamp from which to determine the relative position of `_timestamp`.\\n    /// @param _b Timestamp to compare against `_a`.\\n    /// @param _timestamp A timestamp truncated to 32 bits.\\n    /// @return bool Whether `_a` is chronologically < `_b`.\\n    function lt(\\n        uint32 _a,\\n        uint32 _b,\\n        uint32 _timestamp\\n    ) internal pure returns (bool) {\\n        // No need to adjust if there hasn't been an overflow\\n        if (_a <= _timestamp && _b <= _timestamp) return _a < _b;\\n\\n        uint256 aAdjusted = _a > _timestamp ? _a : _a + 2**32;\\n        uint256 bAdjusted = _b > _timestamp ? _b : _b + 2**32;\\n\\n        return aAdjusted < bAdjusted;\\n    }\\n\\n    /// @notice 32-bit timestamps comparator.\\n    /// @dev safe for 0 or 1 overflows, `_a` and `_b` must be chronologically before or equal to time.\\n    /// @param _a A comparison timestamp from which to determine the relative position of `_timestamp`.\\n    /// @param _b Timestamp to compare against `_a`.\\n    /// @param _timestamp A timestamp truncated to 32 bits.\\n    /// @return bool Whether `_a` is chronologically <= `_b`.\\n    function lte(\\n        uint32 _a,\\n        uint32 _b,\\n        uint32 _timestamp\\n    ) internal pure returns (bool) {\\n\\n        // No need to adjust if there hasn't been an overflow\\n        if (_a <= _timestamp && _b <= _timestamp) return _a <= _b;\\n\\n        uint256 aAdjusted = _a > _timestamp ? _a : _a + 2**32;\\n        uint256 bAdjusted = _b > _timestamp ? _b : _b + 2**32;\\n\\n        return aAdjusted <= bAdjusted;\\n    }\\n\\n    /// @notice 32-bit timestamp subtractor\\n    /// @dev safe for 0 or 1 overflows, where `_a` and `_b` must be chronologically before or equal to time\\n    /// @param _a The subtraction left operand\\n    /// @param _b The subtraction right operand\\n    /// @param _timestamp The current time.  Expected to be chronologically after both.\\n    /// @return The difference between a and b, adjusted for overflow\\n    function checkedSub(\\n        uint32 _a,\\n        uint32 _b,\\n        uint32 _timestamp\\n    ) internal pure returns (uint32) {\\n        // No need to adjust if there hasn't been an overflow\\n\\n        if (_a <= _timestamp && _b <= _timestamp) return _a - _b;\\n\\n        uint256 aAdjusted = _a > _timestamp ? _a : _a + 2**32;\\n        uint256 bAdjusted = _b > _timestamp ? _b : _b + 2**32;\\n\\n        return uint32(aAdjusted - bAdjusted);\\n    }\\n}\\n\",\"keccak256\":\"0x20630cf89e7b92462946defe979fd0e69fa119841d55886121948ad810778c74\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-core/contracts/libraries/RingBufferLib.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nlibrary RingBufferLib {\\n    /**\\n    * @notice Returns wrapped TWAB index.\\n    * @dev  In order to navigate the TWAB circular buffer, we need to use the modulo operator.\\n    * @dev  For example, if `_index` is equal to 32 and the TWAB circular buffer is of `_cardinality` 32,\\n    *       it will return 0 and will point to the first element of the array.\\n    * @param _index Index used to navigate through the TWAB circular buffer.\\n    * @param _cardinality TWAB buffer cardinality.\\n    * @return TWAB index.\\n    */\\n    function wrap(uint256 _index, uint256 _cardinality) internal pure returns (uint256) {\\n        return _index % _cardinality;\\n    }\\n\\n    /**\\n    * @notice Computes the negative offset from the given index, wrapped by the cardinality.\\n    * @dev  We add `_cardinality` to `_index` to be able to offset even if `_amount` is superior to `_cardinality`.\\n    * @param _index The index from which to offset\\n    * @param _amount The number of indices to offset.  This is subtracted from the given index.\\n    * @param _cardinality The number of elements in the ring buffer\\n    * @return Offsetted index.\\n     */\\n    function offset(\\n        uint256 _index,\\n        uint256 _amount,\\n        uint256 _cardinality\\n    ) internal pure returns (uint256) {\\n        return wrap(_index + _cardinality - _amount, _cardinality);\\n    }\\n\\n    /// @notice Returns the index of the last recorded TWAB\\n    /// @param _nextIndex The next available twab index.  This will be recorded to next.\\n    /// @param _cardinality The cardinality of the TWAB history.\\n    /// @return The index of the last recorded TWAB\\n    function newestIndex(uint256 _nextIndex, uint256 _cardinality)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        if (_cardinality == 0) {\\n            return 0;\\n        }\\n\\n        return wrap(_nextIndex + _cardinality - 1, _cardinality);\\n    }\\n\\n    /// @notice Computes the ring buffer index that follows the given one, wrapped by cardinality\\n    /// @param _index The index to increment\\n    /// @param _cardinality The number of elements in the Ring Buffer\\n    /// @return The next index relative to the given index.  Will wrap around to 0 if the next index == cardinality\\n    function nextIndex(uint256 _index, uint256 _cardinality)\\n        internal\\n        pure\\n        returns (uint256)\\n    {\\n        return wrap(_index + 1, _cardinality);\\n    }\\n}\\n\",\"keccak256\":\"0x052e3bf6bfb30f32950e322c853589a8d153cf34f4b1ee292b17eb46f2ae656c\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-core/contracts/libraries/TwabLib.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\\"./ExtendedSafeCastLib.sol\\\";\\nimport \\\"./OverflowSafeComparatorLib.sol\\\";\\nimport \\\"./RingBufferLib.sol\\\";\\nimport \\\"./ObservationLib.sol\\\";\\n\\n/**\\n  * @title  PoolTogether V4 TwabLib (Library)\\n  * @author PoolTogether Inc Team\\n  * @dev    Time-Weighted Average Balance Library for ERC20 tokens.\\n  * @notice This TwabLib adds on-chain historical lookups to a user(s) time-weighted average balance.\\n            Each user is mapped to an Account struct containing the TWAB history (ring bufffer) and\\n            ring buffer parameters. Every token.transfer() creates a new TWAB checkpoint. The new TWAB\\n            checkpoint is stored in the circular ring buffer, as either a new checkpoint or rewriting\\n            a previous checkpoint with new parameters. The TwabLib (using existing blocktimes 1block/15sec)\\n            guarantees minimum 7.4 years of search history.\\n */\\nlibrary TwabLib {\\n    using OverflowSafeComparatorLib for uint32;\\n    using ExtendedSafeCastLib for uint256;\\n\\n    /**\\n      * @notice Sets max ring buffer length in the Account.twabs Observation list.\\n                As users transfer/mint/burn tickets new Observation checkpoints are\\n                recorded. The current max cardinality guarantees a six month minimum,\\n                of historical accurate lookups with current estimates of 1 new block\\n                every 15 seconds - the of course contain a transfer to trigger an\\n                observation write to storage.\\n      * @dev    The user Account.AccountDetails.cardinality parameter can NOT exceed\\n                the max cardinality variable. Preventing \\\"corrupted\\\" ring buffer lookup\\n                pointers and new observation checkpoints.\\n\\n                The MAX_CARDINALITY in fact guarantees at least 7.4 years of records:\\n                If 14 = block time in seconds\\n                (2**24) * 14 = 234881024 seconds of history\\n                234881024 / (365 * 24 * 60 * 60) ~= 7.44 years\\n    */\\n    uint24 public constant MAX_CARDINALITY = 16777215; // 2**24\\n\\n    /** @notice Struct ring buffer parameters for single user Account\\n      * @param balance       Current balance for an Account\\n      * @param nextTwabIndex Next uninitialized or updatable ring buffer checkpoint storage slot\\n      * @param cardinality   Current total \\\"initialized\\\" ring buffer checkpoints for single user AccountDetails.\\n                             Used to set initial boundary conditions for an efficient binary search.\\n    */\\n    struct AccountDetails {\\n        uint208 balance;\\n        uint24 nextTwabIndex;\\n        uint24 cardinality;\\n    }\\n\\n    /// @notice Combines account details with their twab history\\n    /// @param details The account details\\n    /// @param twabs The history of twabs for this account\\n    struct Account {\\n        AccountDetails details;\\n        ObservationLib.Observation[MAX_CARDINALITY] twabs;\\n    }\\n\\n    /// @notice Increases an account's balance and records a new twab.\\n    /// @param _account The account whose balance will be increased\\n    /// @param _amount The amount to increase the balance by\\n    /// @param _currentTime The current time\\n    /// @return accountDetails The new AccountDetails\\n    /// @return twab The user's latest TWAB\\n    /// @return isNew Whether the TWAB is new\\n    function increaseBalance(\\n        Account storage _account,\\n        uint208 _amount,\\n        uint32 _currentTime\\n    )\\n        internal\\n        returns (\\n            AccountDetails memory accountDetails,\\n            ObservationLib.Observation memory twab,\\n            bool isNew\\n        )\\n    {\\n        AccountDetails memory _accountDetails = _account.details;\\n        (accountDetails, twab, isNew) = _nextTwab(_account.twabs, _accountDetails, _currentTime);\\n        accountDetails.balance = _accountDetails.balance + _amount;\\n    }\\n\\n    /** @notice Calculates the next TWAB checkpoint for an account with a decreasing balance.\\n     * @dev    With Account struct and amount decreasing calculates the next TWAB observable checkpoint.\\n     * @param _account        Account whose balance will be decreased\\n     * @param _amount         Amount to decrease the balance by\\n     * @param _revertMessage  Revert message for insufficient balance\\n     * @return accountDetails Updated Account.details struct\\n     * @return twab           TWAB observation (with decreasing average)\\n     * @return isNew          Whether TWAB is new or calling twice in the same block\\n     */\\n    function decreaseBalance(\\n        Account storage _account,\\n        uint208 _amount,\\n        string memory _revertMessage,\\n        uint32 _currentTime\\n    )\\n        internal\\n        returns (\\n            AccountDetails memory accountDetails,\\n            ObservationLib.Observation memory twab,\\n            bool isNew\\n        )\\n    {\\n        AccountDetails memory _accountDetails = _account.details;\\n\\n        require(_accountDetails.balance >= _amount, _revertMessage);\\n\\n        (accountDetails, twab, isNew) = _nextTwab(_account.twabs, _accountDetails, _currentTime);\\n        unchecked {\\n            accountDetails.balance -= _amount;\\n        }\\n    }\\n\\n    /** @notice Calculates the average balance held by a user for a given time frame.\\n      * @dev    Finds the average balance between start and end timestamp epochs.\\n                Validates the supplied end time is within the range of elapsed time i.e. less then timestamp of now.\\n      * @param _twabs          Individual user Observation recorded checkpoints passed as storage pointer\\n      * @param _accountDetails User AccountDetails struct loaded in memory\\n      * @param _startTime      Start of timestamp range as an epoch\\n      * @param _endTime        End of timestamp range as an epoch\\n      * @param _currentTime    Block.timestamp\\n      * @return Average balance of user held between epoch timestamps start and end\\n    */\\n    function getAverageBalanceBetween(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _startTime,\\n        uint32 _endTime,\\n        uint32 _currentTime\\n    ) internal view returns (uint256) {\\n        uint32 endTime = _endTime > _currentTime ? _currentTime : _endTime;\\n\\n        return\\n            _getAverageBalanceBetween(_twabs, _accountDetails, _startTime, endTime, _currentTime);\\n    }\\n\\n    /// @notice Retrieves the oldest TWAB\\n    /// @param _twabs The storage array of twabs\\n    /// @param _accountDetails The TWAB account details\\n    /// @return index The index of the oldest TWAB in the twabs array\\n    /// @return twab The oldest TWAB\\n    function oldestTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails\\n    ) internal view returns (uint24 index, ObservationLib.Observation memory twab) {\\n        index = _accountDetails.nextTwabIndex;\\n        twab = _twabs[index];\\n\\n        // If the TWAB is not initialized we go to the beginning of the TWAB circular buffer at index 0\\n        if (twab.timestamp == 0) {\\n            index = 0;\\n            twab = _twabs[0];\\n        }\\n    }\\n\\n    /// @notice Retrieves the newest TWAB\\n    /// @param _twabs The storage array of twabs\\n    /// @param _accountDetails The TWAB account details\\n    /// @return index The index of the newest TWAB in the twabs array\\n    /// @return twab The newest TWAB\\n    function newestTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails\\n    ) internal view returns (uint24 index, ObservationLib.Observation memory twab) {\\n        index = uint24(RingBufferLib.newestIndex(_accountDetails.nextTwabIndex, MAX_CARDINALITY));\\n        twab = _twabs[index];\\n    }\\n\\n    /// @notice Retrieves amount at `_targetTime` timestamp\\n    /// @param _twabs List of TWABs to search through.\\n    /// @param _accountDetails Accounts details\\n    /// @param _targetTime Timestamp at which the reserved TWAB should be for.\\n    /// @return uint256 TWAB amount at `_targetTime`.\\n    function getBalanceAt(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _targetTime,\\n        uint32 _currentTime\\n    ) internal view returns (uint256) {\\n        uint32 timeToTarget = _targetTime > _currentTime ? _currentTime : _targetTime;\\n        return _getBalanceAt(_twabs, _accountDetails, timeToTarget, _currentTime);\\n    }\\n\\n    /// @notice Calculates the average balance held by a user for a given time frame.\\n    /// @param _startTime The start time of the time frame.\\n    /// @param _endTime The end time of the time frame.\\n    /// @return The average balance that the user held during the time frame.\\n    function _getAverageBalanceBetween(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _startTime,\\n        uint32 _endTime,\\n        uint32 _currentTime\\n    ) private view returns (uint256) {\\n        (uint24 oldestTwabIndex, ObservationLib.Observation memory oldTwab) = oldestTwab(\\n            _twabs,\\n            _accountDetails\\n        );\\n\\n        (uint24 newestTwabIndex, ObservationLib.Observation memory newTwab) = newestTwab(\\n            _twabs,\\n            _accountDetails\\n        );\\n\\n        ObservationLib.Observation memory startTwab = _calculateTwab(\\n            _twabs,\\n            _accountDetails,\\n            newTwab,\\n            oldTwab,\\n            newestTwabIndex,\\n            oldestTwabIndex,\\n            _startTime,\\n            _currentTime\\n        );\\n\\n        ObservationLib.Observation memory endTwab = _calculateTwab(\\n            _twabs,\\n            _accountDetails,\\n            newTwab,\\n            oldTwab,\\n            newestTwabIndex,\\n            oldestTwabIndex,\\n            _endTime,\\n            _currentTime\\n        );\\n\\n        // Difference in amount / time\\n        return (endTwab.amount - startTwab.amount) / OverflowSafeComparatorLib.checkedSub(endTwab.timestamp, startTwab.timestamp, _currentTime);\\n    }\\n\\n    /** @notice Searches TWAB history and calculate the difference between amount(s)/timestamp(s) to return average balance\\n                between the Observations closes to the supplied targetTime.\\n      * @param _twabs          Individual user Observation recorded checkpoints passed as storage pointer\\n      * @param _accountDetails User AccountDetails struct loaded in memory\\n      * @param _targetTime     Target timestamp to filter Observations in the ring buffer binary search\\n      * @param _currentTime    Block.timestamp\\n      * @return uint256 Time-weighted average amount between two closest observations.\\n    */\\n    function _getBalanceAt(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _targetTime,\\n        uint32 _currentTime\\n    ) private view returns (uint256) {\\n        uint24 newestTwabIndex;\\n        ObservationLib.Observation memory afterOrAt;\\n        ObservationLib.Observation memory beforeOrAt;\\n        (newestTwabIndex, beforeOrAt) = newestTwab(_twabs, _accountDetails);\\n\\n        // If `_targetTime` is chronologically after the newest TWAB, we can simply return the current balance\\n        if (beforeOrAt.timestamp.lte(_targetTime, _currentTime)) {\\n            return _accountDetails.balance;\\n        }\\n\\n        uint24 oldestTwabIndex;\\n        // Now, set before to the oldest TWAB\\n        (oldestTwabIndex, beforeOrAt) = oldestTwab(_twabs, _accountDetails);\\n\\n        // If `_targetTime` is chronologically before the oldest TWAB, we can early return\\n        if (_targetTime.lt(beforeOrAt.timestamp, _currentTime)) {\\n            return 0;\\n        }\\n\\n        // Otherwise, we perform the `binarySearch`\\n        (beforeOrAt, afterOrAt) = ObservationLib.binarySearch(\\n            _twabs,\\n            newestTwabIndex,\\n            oldestTwabIndex,\\n            _targetTime,\\n            _accountDetails.cardinality,\\n            _currentTime\\n        );\\n\\n        // Sum the difference in amounts and divide by the difference in timestamps.\\n        // The time-weighted average balance uses time measured between two epoch timestamps as\\n        // a constaint on the measurement when calculating the time weighted average balance.\\n        return\\n            (afterOrAt.amount - beforeOrAt.amount) / OverflowSafeComparatorLib.checkedSub(afterOrAt.timestamp, beforeOrAt.timestamp, _currentTime);\\n    }\\n\\n    /** @notice Calculates a user TWAB for a target timestamp using the historical TWAB records.\\n                The balance is linearly interpolated: amount differences / timestamp differences\\n                using the simple (after.amount - before.amount / end.timestamp - start.timestamp) formula.\\n    /** @dev    Binary search in _calculateTwab fails when searching out of bounds. Thus, before\\n                searching we exclude target timestamps out of range of newest/oldest TWAB(s).\\n                IF a search is before or after the range we \\\"extrapolate\\\" a Observation from the expected state.\\n      * @param _twabs           Individual user Observation recorded checkpoints passed as storage pointer\\n      * @param _accountDetails  User AccountDetails struct loaded in memory\\n      * @param _newestTwab      Newest TWAB in history (end of ring buffer)\\n      * @param _oldestTwab      Olderst TWAB in history (end of ring buffer)\\n      * @param _newestTwabIndex Pointer in ring buffer to newest TWAB\\n      * @param _oldestTwabIndex Pointer in ring buffer to oldest TWAB\\n      * @param _targetTimestamp Epoch timestamp to calculate for time (T) in the TWAB\\n      * @param _time            Block.timestamp\\n      * @return accountDetails Updated Account.details struct\\n    */\\n    function _calculateTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        ObservationLib.Observation memory _newestTwab,\\n        ObservationLib.Observation memory _oldestTwab,\\n        uint24 _newestTwabIndex,\\n        uint24 _oldestTwabIndex,\\n        uint32 _targetTimestamp,\\n        uint32 _time\\n    ) private view returns (ObservationLib.Observation memory) {\\n        // If `_targetTimestamp` is chronologically after the newest TWAB, we extrapolate a new one\\n        if (_newestTwab.timestamp.lt(_targetTimestamp, _time)) {\\n            return _computeNextTwab(_newestTwab, _accountDetails.balance, _targetTimestamp);\\n        }\\n\\n        if (_newestTwab.timestamp == _targetTimestamp) {\\n            return _newestTwab;\\n        }\\n\\n        if (_oldestTwab.timestamp == _targetTimestamp) {\\n            return _oldestTwab;\\n        }\\n\\n        // If `_targetTimestamp` is chronologically before the oldest TWAB, we create a zero twab\\n        if (_targetTimestamp.lt(_oldestTwab.timestamp, _time)) {\\n            return ObservationLib.Observation({ amount: 0, timestamp: _targetTimestamp });\\n        }\\n\\n        // Otherwise, both timestamps must be surrounded by twabs.\\n        (\\n            ObservationLib.Observation memory beforeOrAtStart,\\n            ObservationLib.Observation memory afterOrAtStart\\n        ) = ObservationLib.binarySearch(\\n                _twabs,\\n                _newestTwabIndex,\\n                _oldestTwabIndex,\\n                _targetTimestamp,\\n                _accountDetails.cardinality,\\n                _time\\n            );\\n\\n        uint224 heldBalance = (afterOrAtStart.amount - beforeOrAtStart.amount) /\\n            OverflowSafeComparatorLib.checkedSub(afterOrAtStart.timestamp, beforeOrAtStart.timestamp, _time);\\n\\n        return _computeNextTwab(beforeOrAtStart, heldBalance, _targetTimestamp);\\n    }\\n\\n    /**\\n     * @notice Calculates the next TWAB using the newestTwab and updated balance.\\n     * @dev    Storage of the TWAB obersation is managed by the calling function and not _computeNextTwab.\\n     * @param _currentTwab    Newest Observation in the Account.twabs list\\n     * @param _currentBalance User balance at time of most recent (newest) checkpoint write\\n     * @param _time           Current block.timestamp\\n     * @return TWAB Observation\\n     */\\n    function _computeNextTwab(\\n        ObservationLib.Observation memory _currentTwab,\\n        uint224 _currentBalance,\\n        uint32 _time\\n    ) private pure returns (ObservationLib.Observation memory) {\\n        // New twab amount = last twab amount (or zero) + (current amount * elapsed seconds)\\n        return\\n            ObservationLib.Observation({\\n                amount: _currentTwab.amount +\\n                    _currentBalance *\\n                    (_time.checkedSub(_currentTwab.timestamp, _time)),\\n                timestamp: _time\\n            });\\n    }\\n\\n    /// @notice Sets a new TWAB Observation at the next available index and returns the new account details.\\n    /// @dev Note that if _currentTime is before the last observation timestamp, it appears as an overflow\\n    /// @param _twabs The twabs array to insert into\\n    /// @param _accountDetails The current account details\\n    /// @param _currentTime The current time\\n    /// @return accountDetails The new account details\\n    /// @return twab The newest twab (may or may not be brand-new)\\n    /// @return isNew Whether the newest twab was created by this call\\n    function _nextTwab(\\n        ObservationLib.Observation[MAX_CARDINALITY] storage _twabs,\\n        AccountDetails memory _accountDetails,\\n        uint32 _currentTime\\n    )\\n        private\\n        returns (\\n            AccountDetails memory accountDetails,\\n            ObservationLib.Observation memory twab,\\n            bool isNew\\n        )\\n    {\\n        (, ObservationLib.Observation memory _newestTwab) = newestTwab(_twabs, _accountDetails);\\n\\n        // if we're in the same block, return\\n        if (_newestTwab.timestamp == _currentTime) {\\n            return (_accountDetails, _newestTwab, false);\\n        }\\n\\n        ObservationLib.Observation memory newTwab = _computeNextTwab(\\n            _newestTwab,\\n            _accountDetails.balance,\\n            _currentTime\\n        );\\n\\n        _twabs[_accountDetails.nextTwabIndex] = newTwab;\\n\\n        AccountDetails memory nextAccountDetails = push(_accountDetails);\\n\\n        return (nextAccountDetails, newTwab, true);\\n    }\\n\\n    /// @notice \\\"Pushes\\\" a new element on the AccountDetails ring buffer, and returns the new AccountDetails\\n    /// @param _accountDetails The account details from which to pull the cardinality and next index\\n    /// @return The new AccountDetails\\n    function push(AccountDetails memory _accountDetails)\\n        internal\\n        pure\\n        returns (AccountDetails memory)\\n    {\\n        _accountDetails.nextTwabIndex = uint24(\\n            RingBufferLib.nextIndex(_accountDetails.nextTwabIndex, MAX_CARDINALITY)\\n        );\\n\\n        // Prevent the Account specific cardinality from exceeding the MAX_CARDINALITY.\\n        // The ring buffer length is limited by MAX_CARDINALITY. IF the account.cardinality\\n        // exceeds the max cardinality, new observations would be incorrectly set or the\\n        // observation would be out of \\\"bounds\\\" of the ring buffer. Once reached the\\n        // AccountDetails.cardinality will continue to be equal to max cardinality.\\n        if (_accountDetails.cardinality < MAX_CARDINALITY) {\\n            _accountDetails.cardinality += 1;\\n        }\\n\\n        return _accountDetails;\\n    }\\n}\\n\",\"keccak256\":\"0xa9cd1103707325d2eaba038d7c0f2b271d934448b8782b82f922653eccb8c90a\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-twab-delegator/contracts/Delegation.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\n/**\\n * @title Contract instantiated via CREATE2 to handle a Delegation by a delegator to a delegatee.\\n * @notice A Delegation allows his owner to execute calls on behalf of the contract.\\n * @dev This contract is intended to be counterfactually instantiated via CREATE2 through the LowLevelDelegator contract.\\n * @dev This contract will hold tickets that will be delegated to a chosen delegatee.\\n */\\ncontract Delegation {\\n  /**\\n   * @notice A structure to define arbitrary contract calls.\\n   * @param to The address to call\\n   * @param data The call data\\n   */\\n  struct Call {\\n    address to;\\n    bytes data;\\n  }\\n\\n  /// @notice Contract owner.\\n  address private _owner;\\n\\n  /// @notice Timestamp until which the delegation is locked.\\n  uint96 public lockUntil;\\n\\n  /**\\n   * @notice Initializes the delegation.\\n   * @param _lockUntil Timestamp until which the delegation is locked\\n   */\\n  function initialize(uint96 _lockUntil) external {\\n    require(_owner == address(0), \\\"Delegation/already-init\\\");\\n    _owner = msg.sender;\\n    lockUntil = _lockUntil;\\n  }\\n\\n  /**\\n   * @notice Executes calls on behalf of this contract.\\n   * @param calls The array of calls to be executed\\n   * @return An array of the return values for each of the calls\\n   */\\n  function executeCalls(Call[] calldata calls) external onlyOwner returns (bytes[] memory) {\\n    uint256 _callsLength = calls.length;\\n    bytes[] memory response = new bytes[](_callsLength);\\n    Call memory call;\\n\\n    for (uint256 i; i < _callsLength; i++) {\\n      call = calls[i];\\n      response[i] = _executeCall(call.to, call.data);\\n    }\\n\\n    return response;\\n  }\\n\\n  /**\\n   * @notice Set the timestamp until which the delegation is locked.\\n   * @param _lockUntil The timestamp until which the delegation is locked\\n   */\\n  function setLockUntil(uint96 _lockUntil) external onlyOwner {\\n    lockUntil = _lockUntil;\\n  }\\n\\n  /**\\n   * @notice Executes a call to another contract.\\n   * @param to The address to call\\n   * @param data The call data\\n   * @return The return data from the call\\n   */\\n  function _executeCall(address to, bytes memory data) internal returns (bytes memory) {\\n    (bool succeeded, bytes memory returnValue) = to.call{ value: 0 }(data);\\n    require(succeeded, string(returnValue));\\n    return returnValue;\\n  }\\n\\n  /// @notice Modifier to only allow the contract owner to call a function\\n  modifier onlyOwner() {\\n    require(msg.sender == _owner, \\\"Delegation/only-owner\\\");\\n    _;\\n  }\\n}\\n\",\"keccak256\":\"0xc2ea113565355fe530fc67b8fb6f8b8fbe3dfdca41e95dfe90599a45e315fff6\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-twab-delegator/contracts/LowLevelDelegator.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\\"@openzeppelin/contracts/proxy/Clones.sol\\\";\\n\\nimport \\\"./Delegation.sol\\\";\\n\\n/// @title The LowLevelDelegator allows users to create delegations very cheaply.\\ncontract LowLevelDelegator {\\n  using Clones for address;\\n\\n  /// @notice The instance to which all proxies will point.\\n  Delegation public delegationInstance;\\n\\n  /// @notice Contract constructor.\\n  constructor() {\\n    delegationInstance = new Delegation();\\n    delegationInstance.initialize(uint96(0));\\n  }\\n\\n  /**\\n   * @notice Creates a clone of the delegation.\\n   * @param _salt Random number used to deterministically deploy the clone\\n   * @param _lockUntil Timestamp until which the delegation is locked\\n   * @return The newly created delegation\\n   */\\n  function _createDelegation(bytes32 _salt, uint96 _lockUntil) internal returns (Delegation) {\\n    Delegation _delegation = Delegation(address(delegationInstance).cloneDeterministic(_salt));\\n    _delegation.initialize(_lockUntil);\\n    return _delegation;\\n  }\\n\\n  /**\\n   * @notice Computes the address of a clone, also known as minimal proxy contract.\\n   * @param _salt Random number used to compute the address\\n   * @return Address at which the clone will be deployed\\n   */\\n  function _computeAddress(bytes32 _salt) internal view returns (address) {\\n    return address(delegationInstance).predictDeterministicAddress(_salt, address(this));\\n  }\\n\\n  /**\\n   * @notice Computes salt used to deterministically deploy a clone.\\n   * @param _delegator Address of the delegator\\n   * @param _slot Slot of the delegation\\n   * @return Salt used to deterministically deploy a clone.\\n   */\\n  function _computeSalt(address _delegator, bytes32 _slot) internal pure returns (bytes32) {\\n    return keccak256(abi.encodePacked(_delegator, _slot));\\n  }\\n}\\n\",\"keccak256\":\"0x9b16bf6411ae2a363bac7dcd8afede08114420920677388969ec68e455c5427f\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-twab-delegator/contracts/PermitAndMulticall.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\\"@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol\\\";\\nimport \\\"@openzeppelin/contracts/utils/Address.sol\\\";\\n\\n/**\\n * @notice Allows a user to permit token spend and then call multiple functions on a contract.\\n */\\ncontract PermitAndMulticall {\\n  /**\\n   * @notice Secp256k1 signature values.\\n   * @param deadline Timestamp at which the signature expires\\n   * @param v `v` portion of the signature\\n   * @param r `r` portion of the signature\\n   * @param s `s` portion of the signature\\n   */\\n  struct Signature {\\n    uint256 deadline;\\n    uint8 v;\\n    bytes32 r;\\n    bytes32 s;\\n  }\\n\\n  /**\\n   * @notice Allows a user to call multiple functions on the same contract.  Useful for EOA who want to batch transactions.\\n   * @param _data An array of encoded function calls.  The calls must be abi-encoded calls to this contract.\\n   * @return The results from each function call\\n   */\\n  function _multicall(bytes[] calldata _data) internal virtual returns (bytes[] memory) {\\n    uint256 _dataLength = _data.length;\\n    bytes[] memory results = new bytes[](_dataLength);\\n\\n    for (uint256 i; i < _dataLength; i++) {\\n      results[i] = Address.functionDelegateCall(address(this), _data[i]);\\n    }\\n\\n    return results;\\n  }\\n\\n  /**\\n   * @notice Allow a user to approve an ERC20 token and run various calls in one transaction.\\n   * @param _permitToken Address of the ERC20 token\\n   * @param _amount Amount of tickets to approve\\n   * @param _permitSignature Permit signature\\n   * @param _data Datas to call with `functionDelegateCall`\\n   */\\n  function _permitAndMulticall(\\n    IERC20Permit _permitToken,\\n    uint256 _amount,\\n    Signature calldata _permitSignature,\\n    bytes[] calldata _data\\n  ) internal {\\n    _permitToken.permit(\\n      msg.sender,\\n      address(this),\\n      _amount,\\n      _permitSignature.deadline,\\n      _permitSignature.v,\\n      _permitSignature.r,\\n      _permitSignature.s\\n    );\\n\\n    _multicall(_data);\\n  }\\n}\\n\",\"keccak256\":\"0x2137f42bfa852716a1df09c2a452d62043236b1a783023f1ee1b05d1f958f4c5\",\"license\":\"GPL-3.0\"},\"@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity 0.8.6;\\n\\nimport \\\"@openzeppelin/contracts/proxy/Clones.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC20/IERC20.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\\";\\nimport \\\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\\\";\\nimport \\\"@pooltogether/v4-core/contracts/interfaces/ITicket.sol\\\";\\n\\nimport \\\"./Delegation.sol\\\";\\nimport \\\"./LowLevelDelegator.sol\\\";\\nimport \\\"./PermitAndMulticall.sol\\\";\\n\\n/**\\n * @title Delegate chances to win to multiple accounts.\\n * @notice This contract allows accounts to easily delegate a portion of their tickets to multiple delegatees.\\n  The delegatees chance of winning prizes is increased by the delegated amount.\\n  If a delegator doesn't want to actively manage the delegations, then they can stake on the contract and appoint representatives.\\n */\\ncontract TWABDelegator is ERC20, LowLevelDelegator, PermitAndMulticall {\\n  using Address for address;\\n  using Clones for address;\\n  using SafeERC20 for IERC20;\\n\\n  /* ============ Events ============ */\\n\\n  /**\\n   * @notice Emitted when ticket associated with this contract has been set.\\n   * @param ticket Address of the ticket\\n   */\\n  event TicketSet(ITicket indexed ticket);\\n\\n  /**\\n   * @notice Emitted when tickets have been staked.\\n   * @param delegator Address of the delegator\\n   * @param amount Amount of tickets staked\\n   */\\n  event TicketsStaked(address indexed delegator, uint256 amount);\\n\\n  /**\\n   * @notice Emitted when tickets have been unstaked.\\n   * @param delegator Address of the delegator\\n   * @param recipient Address of the recipient that will receive the tickets\\n   * @param amount Amount of tickets unstaked\\n   */\\n  event TicketsUnstaked(address indexed delegator, address indexed recipient, uint256 amount);\\n\\n  /**\\n   * @notice Emitted when a new delegation is created.\\n   * @param delegator Delegator of the delegation\\n   * @param slot Slot of the delegation\\n   * @param lockUntil Timestamp until which the delegation is locked\\n   * @param delegatee Address of the delegatee\\n   * @param delegation Address of the delegation that was created\\n   * @param user Address of the user who created the delegation\\n   */\\n  event DelegationCreated(\\n    address indexed delegator,\\n    uint256 indexed slot,\\n    uint96 lockUntil,\\n    address indexed delegatee,\\n    Delegation delegation,\\n    address user\\n  );\\n\\n  /**\\n   * @notice Emitted when a delegatee is updated.\\n   * @param delegator Address of the delegator\\n   * @param slot Slot of the delegation\\n   * @param delegatee Address of the delegatee\\n   * @param lockUntil Timestamp until which the delegation is locked\\n   * @param user Address of the user who updated the delegatee\\n   */\\n  event DelegateeUpdated(\\n    address indexed delegator,\\n    uint256 indexed slot,\\n    address indexed delegatee,\\n    uint96 lockUntil,\\n    address user\\n  );\\n\\n  /**\\n   * @notice Emitted when a delegation is funded.\\n   * @param delegator Address of the delegator\\n   * @param slot Slot of the delegation\\n   * @param amount Amount of tickets that were sent to the delegation\\n   * @param user Address of the user who funded the delegation\\n   */\\n  event DelegationFunded(\\n    address indexed delegator,\\n    uint256 indexed slot,\\n    uint256 amount,\\n    address indexed user\\n  );\\n\\n  /**\\n   * @notice Emitted when a delegation is funded from the staked amount.\\n   * @param delegator Address of the delegator\\n   * @param slot Slot of the delegation\\n   * @param amount Amount of tickets that were sent to the delegation\\n   * @param user Address of the user who pulled funds from the delegator stake to the delegation\\n   */\\n  event DelegationFundedFromStake(\\n    address indexed delegator,\\n    uint256 indexed slot,\\n    uint256 amount,\\n    address indexed user\\n  );\\n\\n  /**\\n   * @notice Emitted when an amount of tickets has been withdrawn from a delegation. The tickets are held by this contract and the delegator stake is increased.\\n   * @param delegator Address of the delegator\\n   * @param slot Slot of the delegation\\n   * @param amount Amount of tickets withdrawn\\n   * @param user Address of the user who withdrew the tickets\\n   */\\n  event WithdrewDelegationToStake(\\n    address indexed delegator,\\n    uint256 indexed slot,\\n    uint256 amount,\\n    address indexed user\\n  );\\n\\n  /**\\n   * @notice Emitted when a delegator withdraws an amount of tickets from a delegation to a specified wallet.\\n   * @param delegator Address of the delegator\\n   * @param slot  Slot of the delegation\\n   * @param amount Amount of tickets withdrawn\\n   * @param to Recipient address of withdrawn tickets\\n   */\\n  event TransferredDelegation(\\n    address indexed delegator,\\n    uint256 indexed slot,\\n    uint256 amount,\\n    address indexed to\\n  );\\n\\n  /**\\n   * @notice Emitted when a representative is set.\\n   * @param delegator Address of the delegator\\n   * @param representative Address of the representative\\n   * @param set Boolean indicating if the representative was set or unset\\n   */\\n  event RepresentativeSet(address indexed delegator, address indexed representative, bool set);\\n\\n  /* ============ Variables ============ */\\n\\n  /// @notice Prize pool ticket to which this contract is tied to.\\n  ITicket public immutable ticket;\\n\\n  /// @notice Max lock time during which a delegation cannot be updated.\\n  uint256 public constant MAX_LOCK = 180 days;\\n\\n  /**\\n   * @notice Representative elected by the delegator to handle delegation.\\n   * @dev Representative can only handle delegation and cannot withdraw tickets to their wallet.\\n   * @dev delegator => representative => bool allowing representative to represent the delegator\\n   */\\n  mapping(address => mapping(address => bool)) internal representatives;\\n\\n  /* ============ Constructor ============ */\\n\\n  /**\\n   * @notice Creates a new TWAB Delegator that is bound to the given ticket contract.\\n   * @param name_ The name for the staked ticket token\\n   * @param symbol_ The symbol for the staked ticket token\\n   * @param _ticket Address of the ticket contract\\n   */\\n  constructor(\\n    string memory name_,\\n    string memory symbol_,\\n    ITicket _ticket\\n  ) LowLevelDelegator() ERC20(name_, symbol_) {\\n    require(address(_ticket) != address(0), \\\"TWABDelegator/tick-not-zero-addr\\\");\\n    ticket = _ticket;\\n\\n    emit TicketSet(_ticket);\\n  }\\n\\n  /* ============ External Functions ============ */\\n\\n  /**\\n   * @notice Stake `_amount` of tickets in this contract.\\n   * @dev Tickets can be staked on behalf of a `_to` user.\\n   * @param _to Address to which the stake will be attributed\\n   * @param _amount Amount of tickets to stake\\n   */\\n  function stake(address _to, uint256 _amount) external {\\n    _requireAmountGtZero(_amount);\\n\\n    IERC20(ticket).safeTransferFrom(msg.sender, address(this), _amount);\\n    _mint(_to, _amount);\\n\\n    emit TicketsStaked(_to, _amount);\\n  }\\n\\n  /**\\n   * @notice Unstake `_amount` of tickets from this contract. Transfers ticket to the passed `_to` address.\\n   * @dev If delegator has delegated his whole stake, he will first have to withdraw from a delegation to be able to unstake.\\n   * @param _to Address of the recipient that will receive the tickets\\n   * @param _amount Amount of tickets to unstake\\n   */\\n  function unstake(address _to, uint256 _amount) external {\\n    _requireRecipientNotZeroAddress(_to);\\n    _requireAmountGtZero(_amount);\\n\\n    _burn(msg.sender, _amount);\\n\\n    IERC20(ticket).safeTransfer(_to, _amount);\\n\\n    emit TicketsUnstaked(msg.sender, _to, _amount);\\n  }\\n\\n  /**\\n   * @notice Creates a new delegation.\\n   This will create a new Delegation contract for the given slot and have it delegate its tickets to the given delegatee.\\n   If a non-zero lock duration is passed, then the delegatee cannot be changed, nor funding withdrawn, until the lock has expired.\\n   * @dev The `_delegator` and `_slot` params are used to compute the salt of the delegation\\n   * @param _delegator Address of the delegator that will be able to handle the delegation\\n   * @param _slot Slot of the delegation\\n   * @param _delegatee Address of the delegatee\\n   * @param _lockDuration Duration of time for which the delegation is locked. Must be less than the max duration.\\n   * @return Returns the address of the Delegation contract that will hold the tickets\\n   */\\n  function createDelegation(\\n    address _delegator,\\n    uint256 _slot,\\n    address _delegatee,\\n    uint96 _lockDuration\\n  ) external returns (Delegation) {\\n    _requireDelegatorOrRepresentative(_delegator);\\n    _requireDelegateeNotZeroAddress(_delegatee);\\n    _requireLockDuration(_lockDuration);\\n\\n    uint96 _lockUntil = _computeLockUntil(_lockDuration);\\n\\n    Delegation _delegation = _createDelegation(\\n      _computeSalt(_delegator, bytes32(_slot)),\\n      _lockUntil\\n    );\\n\\n    _setDelegateeCall(_delegation, _delegatee);\\n\\n    emit DelegationCreated(_delegator, _slot, _lockUntil, _delegatee, _delegation, msg.sender);\\n\\n    return _delegation;\\n  }\\n\\n  /**\\n   * @notice Updates the delegatee and lock duration for a delegation slot.\\n   * @dev Only callable by the `_delegator` or their representative.\\n   * @dev Will revert if delegation is still locked.\\n   * @param _delegator Address of the delegator\\n   * @param _slot Slot of the delegation\\n   * @param _delegatee Address of the delegatee\\n   * @param _lockDuration Duration of time during which the delegatee cannot be changed nor withdrawn\\n   * @return The address of the Delegation\\n   */\\n  function updateDelegatee(\\n    address _delegator,\\n    uint256 _slot,\\n    address _delegatee,\\n    uint96 _lockDuration\\n  ) external returns (Delegation) {\\n    _requireDelegatorOrRepresentative(_delegator);\\n    _requireDelegateeNotZeroAddress(_delegatee);\\n    _requireLockDuration(_lockDuration);\\n\\n    Delegation _delegation = Delegation(_computeAddress(_delegator, _slot));\\n    _requireDelegationUnlocked(_delegation);\\n\\n    uint96 _lockUntil = _computeLockUntil(_lockDuration);\\n\\n    if (_lockDuration > 0) {\\n      _delegation.setLockUntil(_lockUntil);\\n    }\\n\\n    _setDelegateeCall(_delegation, _delegatee);\\n\\n    emit DelegateeUpdated(_delegator, _slot, _delegatee, _lockUntil, msg.sender);\\n\\n    return _delegation;\\n  }\\n\\n  /**\\n   * @notice Fund a delegation by transferring tickets from the caller to the delegation.\\n   * @dev Callable by anyone.\\n   * @dev Will revert if delegation does not exist.\\n   * @param _delegator Address of the delegator\\n   * @param _slot Slot of the delegation\\n   * @param _amount Amount of tickets to transfer\\n   * @return The address of the Delegation\\n   */\\n  function fundDelegation(\\n    address _delegator,\\n    uint256 _slot,\\n    uint256 _amount\\n  ) external returns (Delegation) {\\n    require(_delegator != address(0), \\\"TWABDelegator/dlgtr-not-zero-adr\\\");\\n    _requireAmountGtZero(_amount);\\n\\n    Delegation _delegation = Delegation(_computeAddress(_delegator, _slot));\\n    IERC20(ticket).safeTransferFrom(msg.sender, address(_delegation), _amount);\\n\\n    emit DelegationFunded(_delegator, _slot, _amount, msg.sender);\\n\\n    return _delegation;\\n  }\\n\\n  /**\\n   * @notice Fund a delegation using the `_delegator` stake.\\n   * @dev Callable only by the `_delegator` or a representative.\\n   * @dev Will revert if delegation does not exist.\\n   * @dev Will revert if `_amount` is greater than the staked amount.\\n   * @param _delegator Address of the delegator\\n   * @param _slot Slot of the delegation\\n   * @param _amount Amount of tickets to send to the delegation from the staked amount\\n   * @return The address of the Delegation\\n   */\\n  function fundDelegationFromStake(\\n    address _delegator,\\n    uint256 _slot,\\n    uint256 _amount\\n  ) external returns (Delegation) {\\n    _requireDelegatorOrRepresentative(_delegator);\\n    _requireAmountGtZero(_amount);\\n\\n    Delegation _delegation = Delegation(_computeAddress(_delegator, _slot));\\n\\n    _burn(_delegator, _amount);\\n\\n    IERC20(ticket).safeTransfer(address(_delegation), _amount);\\n\\n    emit DelegationFundedFromStake(_delegator, _slot, _amount, msg.sender);\\n\\n    return _delegation;\\n  }\\n\\n  /**\\n   * @notice Withdraw tickets from a delegation. The tickets will be held by this contract and the delegator's stake will increase.\\n   * @dev Only callable by the `_delegator` or a representative.\\n   * @dev Will send the tickets to this contract and increase the `_delegator` staked amount.\\n   * @dev Will revert if delegation is still locked.\\n   * @param _delegator Address of the delegator\\n   * @param _slot Slot of the delegation\\n   * @param _amount Amount of tickets to withdraw\\n   * @return The address of the Delegation\\n   */\\n  function withdrawDelegationToStake(\\n    address _delegator,\\n    uint256 _slot,\\n    uint256 _amount\\n  ) external returns (Delegation) {\\n    _requireDelegatorOrRepresentative(_delegator);\\n\\n    Delegation _delegation = Delegation(_computeAddress(_delegator, _slot));\\n\\n    _transfer(_delegation, address(this), _amount);\\n\\n    _mint(_delegator, _amount);\\n\\n    emit WithdrewDelegationToStake(_delegator, _slot, _amount, msg.sender);\\n\\n    return _delegation;\\n  }\\n\\n  /**\\n   * @notice Withdraw an `_amount` of tickets from a delegation. The delegator is assumed to be the caller.\\n   * @dev Tickets are sent directly to the passed `_to` address.\\n   * @dev Will revert if delegation is still locked.\\n   * @param _slot Slot of the delegation\\n   * @param _amount Amount to withdraw\\n   * @param _to Account to transfer the withdrawn tickets to\\n   * @return The address of the Delegation\\n   */\\n  function transferDelegationTo(\\n    uint256 _slot,\\n    uint256 _amount,\\n    address _to\\n  ) external returns (Delegation) {\\n    _requireRecipientNotZeroAddress(_to);\\n\\n    Delegation _delegation = Delegation(_computeAddress(msg.sender, _slot));\\n    _transfer(_delegation, _to, _amount);\\n\\n    emit TransferredDelegation(msg.sender, _slot, _amount, _to);\\n\\n    return _delegation;\\n  }\\n\\n  /**\\n   * @notice Allow an account to set or unset a `_representative` to handle delegation.\\n   * @dev If `_set` is `true`, `_representative` will be set as representative of `msg.sender`.\\n   * @dev If `_set` is `false`, `_representative` will be unset as representative of `msg.sender`.\\n   * @param _representative Address of the representative\\n   * @param _set Set or unset the representative\\n   */\\n  function setRepresentative(address _representative, bool _set) external {\\n    require(_representative != address(0), \\\"TWABDelegator/rep-not-zero-addr\\\");\\n\\n    representatives[msg.sender][_representative] = _set;\\n\\n    emit RepresentativeSet(msg.sender, _representative, _set);\\n  }\\n\\n  /**\\n   * @notice Returns whether or not the given rep is a representative of the delegator.\\n   * @param _delegator The delegator\\n   * @param _representative The representative to check for\\n   * @return True if the rep is a rep, false otherwise\\n   */\\n  function isRepresentativeOf(address _delegator, address _representative)\\n    external\\n    view\\n    returns (bool)\\n  {\\n    return representatives[_delegator][_representative];\\n  }\\n\\n  /**\\n   * @notice Allows a user to call multiple functions on the same contract.  Useful for EOA who wants to batch transactions.\\n   * @param _data An array of encoded function calls.  The calls must be abi-encoded calls to this contract.\\n   * @return The results from each function call\\n   */\\n  function multicall(bytes[] calldata _data) external returns (bytes[] memory) {\\n    return _multicall(_data);\\n  }\\n\\n  /**\\n   * @notice Alow a user to approve ticket and run various calls in one transaction.\\n   * @param _amount Amount of tickets to approve\\n   * @param _permitSignature Permit signature\\n   * @param _data Datas to call with `functionDelegateCall`\\n   */\\n  function permitAndMulticall(\\n    uint256 _amount,\\n    Signature calldata _permitSignature,\\n    bytes[] calldata _data\\n  ) external {\\n    _permitAndMulticall(IERC20Permit(address(ticket)), _amount, _permitSignature, _data);\\n  }\\n\\n  /**\\n   * @notice Allows the caller to easily get the details for a delegation.\\n   * @param _delegator The delegator address\\n   * @param _slot The delegation slot they are using\\n   * @return delegation The address that holds tickets for the delegation\\n   * @return delegatee The address that tickets are being delegated to\\n   * @return balance The balance of tickets in the delegation\\n   * @return lockUntil The timestamp at which the delegation unlocks\\n   * @return wasCreated Whether or not the delegation has been created\\n   */\\n  function getDelegation(address _delegator, uint256 _slot)\\n    external\\n    view\\n    returns (\\n      Delegation delegation,\\n      address delegatee,\\n      uint256 balance,\\n      uint256 lockUntil,\\n      bool wasCreated\\n    )\\n  {\\n    delegation = Delegation(_computeAddress(_delegator, _slot));\\n    wasCreated = address(delegation).isContract();\\n    delegatee = ticket.delegateOf(address(delegation));\\n    balance = ticket.balanceOf(address(delegation));\\n\\n    if (wasCreated) {\\n      lockUntil = delegation.lockUntil();\\n    }\\n  }\\n\\n  /**\\n   * @notice Computes the address of the delegation for the delegator + slot combination.\\n   * @param _delegator The user who is delegating tickets\\n   * @param _slot The delegation slot\\n   * @return The address of the delegation.  This is the address that holds the balance of tickets.\\n   */\\n  function computeDelegationAddress(address _delegator, uint256 _slot)\\n    external\\n    view\\n    returns (address)\\n  {\\n    return _computeAddress(_delegator, _slot);\\n  }\\n\\n  /**\\n   * @notice Returns the ERC20 token decimals.\\n   * @dev This value is equal to the decimals of the ticket being delegated.\\n   * @return ERC20 token decimals\\n   */\\n  function decimals() public view virtual override returns (uint8) {\\n    return ERC20(address(ticket)).decimals();\\n  }\\n\\n  /* ============ Internal Functions ============ */\\n\\n  /**\\n   * @notice Computes the address of a delegation contract using the delegator and slot as a salt.\\n   The contract is a clone, also known as minimal proxy contract.\\n   * @param _delegator Address of the delegator\\n   * @param _slot Slot of the delegation\\n   * @return Address at which the delegation contract will be deployed\\n   */\\n  function _computeAddress(address _delegator, uint256 _slot) internal view returns (address) {\\n    return _computeAddress(_computeSalt(_delegator, bytes32(_slot)));\\n  }\\n\\n  /**\\n   * @notice Computes the timestamp at which the delegation unlocks, after which the delegatee can be changed and tickets withdrawn.\\n   * @param _lockDuration The duration of the lock\\n   * @return The lock expiration timestamp\\n   */\\n  function _computeLockUntil(uint96 _lockDuration) internal view returns (uint96) {\\n    unchecked {\\n      return uint96(block.timestamp) + _lockDuration;\\n    }\\n  }\\n\\n  /**\\n   * @notice Delegates tickets from the `_delegation` contract to the `_delegatee` address.\\n   * @param _delegation Address of the delegation contract\\n   * @param _delegatee Address of the delegatee\\n   */\\n  function _setDelegateeCall(Delegation _delegation, address _delegatee) internal {\\n    bytes4 _selector = ticket.delegate.selector;\\n    bytes memory _data = abi.encodeWithSelector(_selector, _delegatee);\\n\\n    _executeCall(_delegation, _data);\\n  }\\n\\n  /**\\n   * @notice Tranfers tickets from the Delegation contract to the `_to` address.\\n   * @param _delegation Address of the delegation contract\\n   * @param _to Address of the recipient\\n   * @param _amount Amount of tickets to transfer\\n   */\\n  function _transferCall(\\n    Delegation _delegation,\\n    address _to,\\n    uint256 _amount\\n  ) internal {\\n    bytes4 _selector = ticket.transfer.selector;\\n    bytes memory _data = abi.encodeWithSelector(_selector, _to, _amount);\\n\\n    _executeCall(_delegation, _data);\\n  }\\n\\n  /**\\n   * @notice Execute a function call on the delegation contract.\\n   * @param _delegation Address of the delegation contract\\n   * @param _data The call data that will be executed\\n   * @return The return datas from the calls\\n   */\\n  function _executeCall(Delegation _delegation, bytes memory _data)\\n    internal\\n    returns (bytes[] memory)\\n  {\\n    Delegation.Call[] memory _calls = new Delegation.Call[](1);\\n    _calls[0] = Delegation.Call({ to: address(ticket), data: _data });\\n\\n    return _delegation.executeCalls(_calls);\\n  }\\n\\n  /**\\n   * @notice Transfers tickets from a delegation contract to `_to`.\\n   * @param _delegation Address of the delegation contract\\n   * @param _to Address of the recipient\\n   * @param _amount Amount of tickets to transfer\\n   */\\n  function _transfer(\\n    Delegation _delegation,\\n    address _to,\\n    uint256 _amount\\n  ) internal {\\n    _requireAmountGtZero(_amount);\\n    _requireDelegationUnlocked(_delegation);\\n\\n    _transferCall(_delegation, _to, _amount);\\n  }\\n\\n  /* ============ Modifier/Require Functions ============ */\\n\\n  /**\\n   * @notice Require to only allow the delegator or representative to call a function.\\n   * @param _delegator Address of the delegator\\n   */\\n  function _requireDelegatorOrRepresentative(address _delegator) internal view {\\n    require(\\n      _delegator == msg.sender || representatives[_delegator][msg.sender],\\n      \\\"TWABDelegator/not-dlgtr-or-rep\\\"\\n    );\\n  }\\n\\n  /**\\n   * @notice Require to verify that `_delegatee` is not address zero.\\n   * @param _delegatee Address of the delegatee\\n   */\\n  function _requireDelegateeNotZeroAddress(address _delegatee) internal pure {\\n    require(_delegatee != address(0), \\\"TWABDelegator/dlgt-not-zero-addr\\\");\\n  }\\n\\n  /**\\n   * @notice Require to verify that `_amount` is greater than 0.\\n   * @param _amount Amount to check\\n   */\\n  function _requireAmountGtZero(uint256 _amount) internal pure {\\n    require(_amount > 0, \\\"TWABDelegator/amount-gt-zero\\\");\\n  }\\n\\n  /**\\n   * @notice Require to verify that `_to` is not address zero.\\n   * @param _to Address to check\\n   */\\n  function _requireRecipientNotZeroAddress(address _to) internal pure {\\n    require(_to != address(0), \\\"TWABDelegator/to-not-zero-addr\\\");\\n  }\\n\\n  /**\\n   * @notice Require to verify if a `_delegation` is locked.\\n   * @param _delegation Delegation to check\\n   */\\n  function _requireDelegationUnlocked(Delegation _delegation) internal view {\\n    require(block.timestamp >= _delegation.lockUntil(), \\\"TWABDelegator/delegation-locked\\\");\\n  }\\n\\n  /**\\n   * @notice Require to verify that a `_lockDuration` does not exceed the maximum lock duration.\\n   * @param _lockDuration Lock duration to check\\n   */\\n  function _requireLockDuration(uint256 _lockDuration) internal pure {\\n    require(_lockDuration <= MAX_LOCK, \\\"TWABDelegator/lock-too-long\\\");\\n  }\\n}\\n\",\"keccak256\":\"0xb601391dace6c270c82f8cf18bd063ca1b1926a3349e27d713f687d7e6f914ad\",\"license\":\"GPL-3.0\"}},\"version\":1}",
        "bytecode": "0x60a06040523480156200001157600080fd5b506040516200389238038062003892833981016040819052620000349162000317565b8251839083906200004d906003906020850190620001ac565b50805162000063906004906020840190620001ac565b50505060405162000074906200023b565b604051809103906000f08015801562000091573d6000803e3d6000fd5b50600580546001600160a01b0319166001600160a01b0392909216918217905560405163909f1cad60e01b81526000600482015263909f1cad90602401600060405180830381600087803b158015620000e957600080fd5b505af1158015620000fe573d6000803e3d6000fd5b505050506001600160a01b0381166200015d5760405162461bcd60e51b815260206004820181905260248201527f5457414244656c656761746f722f7469636b2d6e6f742d7a65726f2d61646472604482015260640160405180910390fd5b6001600160601b0319606082901b166080526040516001600160a01b038216907f9f9d59c87dbdc6ca82d9e5924782004b9aebc366c505c0ccab12f61e2a9f332190600090a2505050620003f7565b828054620001ba90620003a4565b90600052602060002090601f016020900481019282620001de576000855562000229565b82601f10620001f957805160ff191683800117855562000229565b8280016001018555821562000229579182015b82811115620002295782518255916020019190600101906200020c565b506200023792915062000249565b5090565b6107fc806200309683390190565b5b808211156200023757600081556001016200024a565b600082601f8301126200027257600080fd5b81516001600160401b03808211156200028f576200028f620003e1565b604051601f8301601f19908116603f01168101908282118183101715620002ba57620002ba620003e1565b81604052838152602092508683858801011115620002d757600080fd5b600091505b83821015620002fb5785820183015181830184015290820190620002dc565b838211156200030d5760008385830101525b9695505050505050565b6000806000606084860312156200032d57600080fd5b83516001600160401b03808211156200034557600080fd5b620003538783880162000260565b945060208601519150808211156200036a57600080fd5b50620003798682870162000260565b604086015190935090506001600160a01b03811681146200039957600080fd5b809150509250925092565b600181811c90821680620003b957607f821691505b60208210811415620003db57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c612c4162000455600039600081816102e4015281816104c4015281816105c8015281816107a001528181610c8e01528181610d3001528181610df001528181610ea701528181610ff0015261201a0152612c416000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063889de805116100f9578063ac9650d811610097578063ca40edf111610071578063ca40edf114610418578063dd62ed3e14610460578063e18fa6eb14610499578063e7880ae1146104ac57600080fd5b8063ac9650d8146103d2578063adc9772e146103f2578063c2a672e01461040557600080fd5b806395d89b41116100d357806395d89b4114610391578063982b1f2f14610399578063a457c2d7146103ac578063a9059cbb146103bf57600080fd5b8063889de8051461032f5780638b4b4ec91461034257806390ab08851461035557600080fd5b80635f66501111610166578063666f7af611610140578063666f7af6146102b95780636c59f295146102cc5780636cc25db7146102df57806370a082311461030657600080fd5b80635f6650111461027157806363fc611f1461029c57806365a5d5f0146102af57600080fd5b806318160ddd116101a257806318160ddd1461021f57806323b872dd14610231578063313ce56714610244578063395093511461025e57600080fd5b806306452792146101c957806306fdde03146101de578063095ea7b3146101fc575b600080fd5b6101dc6101d73660046127df565b6104bf565b005b6101e66104f2565b6040516101f391906129fc565b60405180910390f35b61020f61020a36600461259a565b610584565b60405190151581526020016101f3565b6002545b6040519081526020016101f3565b61020f61023f36600461252b565b61059e565b61024c6105c4565b60405160ff90911681526020016101f3565b61020f61026c36600461259a565b61065c565b61028461027f366004612619565b61069b565b6040516001600160a01b0390911681526020016101f3565b600554610284906001600160a01b031681565b61022362ed4e0081565b6102846102c7366004612619565b61071f565b6102846102da3660046125c6565b61080e565b6102847f000000000000000000000000000000000000000000000000000000000000000081565b6102236103143660046124b8565b6001600160a01b031660009081526020819052604090205490565b61028461033d3660046125c6565b610954565b610284610350366004612845565b610a4f565b61020f6103633660046124f2565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101e6610ab9565b6101dc6103a736600461256c565b610ac8565b61020f6103ba36600461259a565b610ba9565b61020f6103cd36600461259a565b610c5e565b6103e56103e036600461264e565b610c6c565b6040516101f3919061291d565b6101dc61040036600461259a565b610c78565b6101dc61041336600461259a565b610d07565b61042b61042636600461259a565b610d94565b604080516001600160a01b0396871681529590941660208601529284019190915260608301521515608082015260a0016101f3565b61022361046e3660046124f2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102846104a7366004612619565b610fb7565b6102846104ba36600461259a565b61105d565b6104ec7f000000000000000000000000000000000000000000000000000000000000000085858585611069565b50505050565b60606003805461050190612b00565b80601f016020809104026020016040519081016040528092919081815260200182805461052d90612b00565b801561057a5780601f1061054f5761010080835404028352916020019161057a565b820191906000526020600020905b81548152906001019060200180831161055d57829003601f168201915b5050505050905090565b600033610592818585611141565b60019150505b92915050565b6000336105ac858285611299565b6105b7858585611325565b60019150505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561061f57600080fd5b505afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610657919061289b565b905090565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906105929082908690610696908790612aa5565b611141565b60006106a68461153c565b60006106b285856115c5565b90506106bf81308561161b565b6106c9858461163d565b336001600160a01b031684866001600160a01b03167f6862a473baa6176f1c866c69aa93da8508d7afc71b52dddc9d5e8b0bb7aab6f48660405161070f91815260200190565b60405180910390a4949350505050565b60006001600160a01b03841661077c5760405162461bcd60e51b815260206004820181905260248201527f5457414244656c656761746f722f646c6774722d6e6f742d7a65726f2d61647260448201526064015b60405180910390fd5b61078582611715565b600061079185856115c5565b90506107c86001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016338386611765565b336001600160a01b031684866001600160a01b03167f383183291bd9a7fb8bd9c7c86c5013a89d1490c9f4e486da279804b83729a1dc8660405161070f91815260200190565b60006108198561153c565b61082283611816565b610839826bffffffffffffffffffffffff1661186c565b600061084586866115c5565b9050610850816118bf565b4283016bffffffffffffffffffffffff8416156108e8576040517fac2293af0000000000000000000000000000000000000000000000000000000081526bffffffffffffffffffffffff821660048201526001600160a01b0383169063ac2293af90602401600060405180830381600087803b1580156108cf57600080fd5b505af11580156108e3573d6000803e3d6000fd5b505050505b6108f2828661198d565b604080516bffffffffffffffffffffffff831681523360208201526001600160a01b03808816928992918b16917ffd96a87f22afea1e17a7117a4923f1499a1c1eb2bd7c492caf07f3a3c38ade6f910160405180910390a45095945050505050565b600061095f8561153c565b61096883611816565b61097f826bffffffffffffffffffffffff1661186c565b42820160006109d96109d388886040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b83611a13565b90506109e5818661198d565b604080516bffffffffffffffffffffffff841681526001600160a01b03838116602083015233828401529151878316928992908b16917f5533acb96061e404278604d3df68397263be1d4b9df394136a2968802633d8a59181900360600190a49695505050505050565b6000610a5a82611ab9565b6000610a6633866115c5565b9050610a7381848661161b565b826001600160a01b031685336001600160a01b03167f622b7da8a20026f1176ccc7ec0a635a4544a67e99b0125018e3d89b888ce8ebe8760405161070f91815260200190565b60606004805461050190612b00565b6001600160a01b038216610b1e5760405162461bcd60e51b815260206004820152601f60248201527f5457414244656c656761746f722f7265702d6e6f742d7a65726f2d61646472006044820152606401610773565b3360008181526006602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f50062a33e55b9f3dfcf05fbf1356b7c92313796cfb8526cdee5a497fcbb8cc3391015b60405180910390a35050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919083811015610c465760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610773565b610c538286868403611141565b506001949350505050565b600033610592818585611325565b60606105bd8383611b0f565b610c8181611715565b610cb66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611765565b610cc0828261163d565b816001600160a01b03167f15c2c6e5db9e25d828754c9c5cee6c5c3df074e6ac26e7491c0f8ce7bbd447d682604051610cfb91815260200190565b60405180910390a25050565b610d1082611ab9565b610d1981611715565b610d233382611c09565b610d576001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168383611d8e565b6040518181526001600160a01b0383169033907ff7128607975b3ff61bc02d19a1c8267e526f7a5b7144dc4efcdac634663fd36990602001610b9d565b6000806000806000610da687876115c5565b94506001600160a01b0385163b15156040517f8d22ea2a0000000000000000000000000000000000000000000000000000000081526001600160a01b0387811660048301529192507f000000000000000000000000000000000000000000000000000000000000000090911690638d22ea2a9060240160206040518083038186803b158015610e3457600080fd5b505afa158015610e48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6c91906124d5565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0387811660048301529195507f0000000000000000000000000000000000000000000000000000000000000000909116906370a082319060240160206040518083038186803b158015610eeb57600080fd5b505afa158015610eff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2391906127c6565b92508015610fad57846001600160a01b0316633c78929e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f6457600080fd5b505afa158015610f78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9c91906128b8565b6bffffffffffffffffffffffff1691505b9295509295909350565b6000610fc28461153c565b610fcb82611715565b6000610fd785856115c5565b9050610fe38584611c09565b6110176001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168285611d8e565b336001600160a01b031684866001600160a01b03167fb1968721eeb35d2206c8aa91805bc908019965ff4cff13c158f89956fb8e92488660405161070f91815260200190565b60006105bd83836115c5565b6001600160a01b03851663d505accf333087873561108d60408a0160208b0161287e565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b1681526001600160a01b0396871660048201529590941660248601526044850192909252606484015260ff16608483015286013560a4820152606086013560c482015260e401600060405180830381600087803b15801561111757600080fd5b505af115801561112b573d6000803e3d6000fd5b505050506111398282611b0f565b505050505050565b6001600160a01b0383166111bc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0382166112385760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146104ec57818110156113185760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610773565b6104ec8484848403611141565b6001600160a01b0383166113a15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b03821661141d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b038316600090815260208190526040902054818110156114ac5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906114e3908490612aa5565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161152f91815260200190565b60405180910390a36104ec565b6001600160a01b03811633148061157657506001600160a01b038116600090815260066020908152604080832033845290915290205460ff165b6115c25760405162461bcd60e51b815260206004820152601e60248201527f5457414244656c656761746f722f6e6f742d646c6774722d6f722d72657000006044820152606401610773565b50565b60006105bd61161684846040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b611dd7565b61162481611715565b61162d836118bf565b611638838383611e60565b505050565b6001600160a01b0382166116935760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610773565b80600260008282546116a59190612aa5565b90915550506001600160a01b038216600090815260208190526040812080548392906116d2908490612aa5565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b9d565b600081116115c25760405162461bcd60e51b815260206004820152601c60248201527f5457414244656c656761746f722f616d6f756e742d67742d7a65726f000000006044820152606401610773565b6040516001600160a01b03808516602483015283166044820152606481018290526104ec9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ee3565b6001600160a01b0381166115c25760405162461bcd60e51b815260206004820181905260248201527f5457414244656c656761746f722f646c67742d6e6f742d7a65726f2d616464726044820152606401610773565b62ed4e008111156115c25760405162461bcd60e51b815260206004820152601b60248201527f5457414244656c656761746f722f6c6f636b2d746f6f2d6c6f6e6700000000006044820152606401610773565b806001600160a01b0316633c78929e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118f857600080fd5b505afa15801561190c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193091906128b8565b6bffffffffffffffffffffffff164210156115c25760405162461bcd60e51b815260206004820152601f60248201527f5457414244656c656761746f722f64656c65676174696f6e2d6c6f636b6564006044820152606401610773565b604080516001600160a01b0383166024808301919091528251808303909101815260449091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5c19a95c0000000000000000000000000000000000000000000000000000000090811790915290611a0c8482611fc8565b5050505050565b6005546000908190611a2e906001600160a01b03168561210c565b6040517f909f1cad0000000000000000000000000000000000000000000000000000000081526bffffffffffffffffffffffff851660048201529091506001600160a01b0382169063909f1cad90602401600060405180830381600087803b158015611a9957600080fd5b505af1158015611aad573d6000803e3d6000fd5b50929695505050505050565b6001600160a01b0381166115c25760405162461bcd60e51b815260206004820152601e60248201527f5457414244656c656761746f722f746f2d6e6f742d7a65726f2d6164647200006044820152606401610773565b60608160008167ffffffffffffffff811115611b2d57611b2d612b82565b604051908082528060200260200182016040528015611b6057816020015b6060815260200190600190039081611b4b5790505b50905060005b82811015611c0057611bd030878784818110611b8457611b84612b6c565b9050602002810190611b969190612a0f565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506121c392505050565b828281518110611be257611be2612b6c565b60200260200101819052508080611bf890612b3b565b915050611b66565b50949350505050565b6001600160a01b038216611c855760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b03821660009081526020819052604090205481811015611d145760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611d43908490612abd565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6040516001600160a01b0383166024820152604481018290526116389084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016117b2565b600554600090610598906001600160a01b031683306040517f3d602d80600a3d3981f3363d3d373d3d3d363d730000000000000000000000008152606093841b60148201527f5af43d82803e903d91602b57fd5bf3ff000000000000000000000000000000006028820152921b6038830152604c8201526037808220606c830152605591012090565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000908117909152906111398582611fc8565b6000611f38826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121e89092919063ffffffff16565b8051909150156116385780806020019051810190611f5691906127a9565b6116385760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610773565b60408051600180825281830190925260609160009190816020015b604080518082019091526000815260606020820152815260200190600190039081611fe357905050905060405180604001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602001848152508160008151811061205e5761205e612b6c565b60209081029190910101526040517fde9443bf0000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063de9443bf906120ae90849060040161297f565b600060405180830381600087803b1580156120c857600080fd5b505af11580156120dc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526121049190810190612690565b949350505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528360601b60148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f59150506001600160a01b0381166105985760405162461bcd60e51b815260206004820152601760248201527f455243313136373a2063726561746532206661696c65640000000000000000006044820152606401610773565b60606105bd8383604051806060016040528060278152602001612be5602791396121f7565b606061210484846000856122eb565b60606001600160a01b0384163b6122765760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610773565b600080856001600160a01b0316856040516122919190612901565b600060405180830381855af49150503d80600081146122cc576040519150601f19603f3d011682016040523d82523d6000602084013e6122d1565b606091505b50915091506122e1828286612433565b9695505050505050565b6060824710156123635760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0385163b6123ba5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610773565b600080866001600160a01b031685876040516123d69190612901565b60006040518083038185875af1925050503d8060008114612413576040519150601f19603f3d011682016040523d82523d6000602084013e612418565b606091505b5091509150612428828286612433565b979650505050505050565b606083156124425750816105bd565b8251156124525782518084602001fd5b8160405162461bcd60e51b815260040161077391906129fc565b60008083601f84011261247e57600080fd5b50813567ffffffffffffffff81111561249657600080fd5b6020830191508360208260051b85010111156124b157600080fd5b9250929050565b6000602082840312156124ca57600080fd5b81356105bd81612b98565b6000602082840312156124e757600080fd5b81516105bd81612b98565b6000806040838503121561250557600080fd5b823561251081612b98565b9150602083013561252081612b98565b809150509250929050565b60008060006060848603121561254057600080fd5b833561254b81612b98565b9250602084013561255b81612b98565b929592945050506040919091013590565b6000806040838503121561257f57600080fd5b823561258a81612b98565b9150602083013561252081612bad565b600080604083850312156125ad57600080fd5b82356125b881612b98565b946020939093013593505050565b600080600080608085870312156125dc57600080fd5b84356125e781612b98565b93506020850135925060408501356125fe81612b98565b9150606085013561260e81612bca565b939692955090935050565b60008060006060848603121561262e57600080fd5b833561263981612b98565b95602085013595506040909401359392505050565b6000806020838503121561266157600080fd5b823567ffffffffffffffff81111561267857600080fd5b6126848582860161246c565b90969095509350505050565b600060208083850312156126a357600080fd5b825167ffffffffffffffff808211156126bb57600080fd5b8185019150601f86818401126126d057600080fd5b8251828111156126e2576126e2612b82565b8060051b6126f1868201612a74565b8281528681019086880183880189018c101561270c57600080fd5b600093505b8484101561279a5780518781111561272857600080fd5b8801603f81018d1361273957600080fd5b8981015160408982111561274f5761274f612b82565b6127608c601f198b85011601612a74565b8281528f8284860101111561277457600080fd5b612783838e8301848701612ad4565b865250505060019390930192918801918801612711565b509a9950505050505050505050565b6000602082840312156127bb57600080fd5b81516105bd81612bad565b6000602082840312156127d857600080fd5b5051919050565b60008060008084860360c08112156127f657600080fd5b853594506080601f198201121561280c57600080fd5b5060208501925060a085013567ffffffffffffffff81111561282d57600080fd5b6128398782880161246c565b95989497509550505050565b60008060006060848603121561285a57600080fd5b8335925060208401359150604084013561287381612b98565b809150509250925092565b60006020828403121561289057600080fd5b81356105bd81612bbb565b6000602082840312156128ad57600080fd5b81516105bd81612bbb565b6000602082840312156128ca57600080fd5b81516105bd81612bca565b600081518084526128ed816020860160208601612ad4565b601f01601f19169290920160200192915050565b60008251612913818460208701612ad4565b9190910192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561297257603f198886030184526129608583516128d5565b94509285019290850190600101612944565b5092979650505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156129ee57888303603f19018552815180516001600160a01b031684528701518784018790526129db878501826128d5565b95880195935050908601906001016129a6565b509098975050505050505050565b6020815260006105bd60208301846128d5565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a4457600080fd5b83018035915067ffffffffffffffff821115612a5f57600080fd5b6020019150368190038213156124b157600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612a9d57612a9d612b82565b604052919050565b60008219821115612ab857612ab8612b56565b500190565b600082821015612acf57612acf612b56565b500390565b60005b83811015612aef578181015183820152602001612ad7565b838111156104ec5750506000910152565b600181811c90821680612b1457607f821691505b60208210811415612b3557634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612b4f57612b4f612b56565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146115c257600080fd5b80151581146115c257600080fd5b60ff811681146115c257600080fd5b6bffffffffffffffffffffffff811681146115c257600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d0292d6239030d54a5d6b0eccefe8c8623bf4e9e57c862c6aa2520af08b04cd764736f6c63430008060033608060405234801561001057600080fd5b506107dc806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633c78929e14610051578063909f1cad146100a3578063ac2293af146100b8578063de9443bf146100cb575b600080fd5b600054610081907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff1681565b6040516bffffffffffffffffffffffff90911681526020015b60405180910390f35b6100b66100b136600461049e565b6100eb565b005b6100b66100c636600461049e565b610182565b6100de6100d9366004610429565b610234565b60405161009a919061051b565b60005473ffffffffffffffffffffffffffffffffffffffff16156101565760405162461bcd60e51b815260206004820152601760248201527f44656c65676174696f6e2f616c72656164792d696e697400000000000000000060448201526064015b60405180910390fd5b6bffffffffffffffffffffffff1674010000000000000000000000000000000000000000023317600055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101e95760405162461bcd60e51b815260206004820152601560248201527f44656c65676174696f6e2f6f6e6c792d6f776e65720000000000000000000000604482015260640161014d565b600080546bffffffffffffffffffffffff909216740100000000000000000000000000000000000000000273ffffffffffffffffffffffffffffffffffffffff909216919091179055565b60005460609073ffffffffffffffffffffffffffffffffffffffff16331461029e5760405162461bcd60e51b815260206004820152601560248201527f44656c65676174696f6e2f6f6e6c792d6f776e65720000000000000000000000604482015260640161014d565b8160008167ffffffffffffffff8111156102ba576102ba610790565b6040519080825280602002602001820160405280156102ed57816020015b60608152602001906001900390816102d85790505b5060408051808201909152600081526060602082015290915060005b83811015610382578686828181106103235761032361077a565b905060200281019061033591906105ae565b61033e9061063c565b91506103528260000151836020015161038d565b8382815181106103645761036461077a565b6020026020010181905250808061037a90610733565b915050610309565b509095945050505050565b60606000808473ffffffffffffffffffffffffffffffffffffffff166000856040516103b991906104ff565b60006040518083038185875af1925050503d80600081146103f6576040519150601f19603f3d011682016040523d82523d6000602084013e6103fb565b606091505b50915091508181906104205760405162461bcd60e51b815260040161014d919061059b565b50949350505050565b6000806020838503121561043c57600080fd5b823567ffffffffffffffff8082111561045457600080fd5b818501915085601f83011261046857600080fd5b81358181111561047757600080fd5b8660208260051b850101111561048c57600080fd5b60209290920196919550909350505050565b6000602082840312156104b057600080fd5b81356bffffffffffffffffffffffff811681146104cc57600080fd5b9392505050565b600081518084526104eb816020860160208601610703565b601f01601f19169290920160200192915050565b60008251610511818460208701610703565b9190910192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561058e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088860301845261057c8583516104d3565b94509285019290850190600101610542565b5092979650505050505050565b6020815260006104cc60208301846104d3565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc183360301811261051157600080fd5b6040805190810167ffffffffffffffff8111828210171561060557610605610790565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561063457610634610790565b604052919050565b60006040823603121561064e57600080fd5b6106566105e2565b823573ffffffffffffffffffffffffffffffffffffffff8116811461067a57600080fd5b815260208381013567ffffffffffffffff8082111561069857600080fd5b9085019036601f8301126106ab57600080fd5b8135818111156106bd576106bd610790565b6106cf84601f19601f8401160161060b565b915080825236848285010111156106e557600080fd5b80848401858401376000908201840152918301919091525092915050565b60005b8381101561071e578181015183820152602001610706565b8381111561072d576000848401525b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561077357634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e12294174ea821f82c2a1f83c4f824acb92d2de0e672f2347c9eb5611a26a93564736f6c63430008060033",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101c45760003560e01c8063889de805116100f9578063ac9650d811610097578063ca40edf111610071578063ca40edf114610418578063dd62ed3e14610460578063e18fa6eb14610499578063e7880ae1146104ac57600080fd5b8063ac9650d8146103d2578063adc9772e146103f2578063c2a672e01461040557600080fd5b806395d89b41116100d357806395d89b4114610391578063982b1f2f14610399578063a457c2d7146103ac578063a9059cbb146103bf57600080fd5b8063889de8051461032f5780638b4b4ec91461034257806390ab08851461035557600080fd5b80635f66501111610166578063666f7af611610140578063666f7af6146102b95780636c59f295146102cc5780636cc25db7146102df57806370a082311461030657600080fd5b80635f6650111461027157806363fc611f1461029c57806365a5d5f0146102af57600080fd5b806318160ddd116101a257806318160ddd1461021f57806323b872dd14610231578063313ce56714610244578063395093511461025e57600080fd5b806306452792146101c957806306fdde03146101de578063095ea7b3146101fc575b600080fd5b6101dc6101d73660046127df565b6104bf565b005b6101e66104f2565b6040516101f391906129fc565b60405180910390f35b61020f61020a36600461259a565b610584565b60405190151581526020016101f3565b6002545b6040519081526020016101f3565b61020f61023f36600461252b565b61059e565b61024c6105c4565b60405160ff90911681526020016101f3565b61020f61026c36600461259a565b61065c565b61028461027f366004612619565b61069b565b6040516001600160a01b0390911681526020016101f3565b600554610284906001600160a01b031681565b61022362ed4e0081565b6102846102c7366004612619565b61071f565b6102846102da3660046125c6565b61080e565b6102847f000000000000000000000000000000000000000000000000000000000000000081565b6102236103143660046124b8565b6001600160a01b031660009081526020819052604090205490565b61028461033d3660046125c6565b610954565b610284610350366004612845565b610a4f565b61020f6103633660046124f2565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101e6610ab9565b6101dc6103a736600461256c565b610ac8565b61020f6103ba36600461259a565b610ba9565b61020f6103cd36600461259a565b610c5e565b6103e56103e036600461264e565b610c6c565b6040516101f3919061291d565b6101dc61040036600461259a565b610c78565b6101dc61041336600461259a565b610d07565b61042b61042636600461259a565b610d94565b604080516001600160a01b0396871681529590941660208601529284019190915260608301521515608082015260a0016101f3565b61022361046e3660046124f2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102846104a7366004612619565b610fb7565b6102846104ba36600461259a565b61105d565b6104ec7f000000000000000000000000000000000000000000000000000000000000000085858585611069565b50505050565b60606003805461050190612b00565b80601f016020809104026020016040519081016040528092919081815260200182805461052d90612b00565b801561057a5780601f1061054f5761010080835404028352916020019161057a565b820191906000526020600020905b81548152906001019060200180831161055d57829003601f168201915b5050505050905090565b600033610592818585611141565b60019150505b92915050565b6000336105ac858285611299565b6105b7858585611325565b60019150505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561061f57600080fd5b505afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610657919061289b565b905090565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906105929082908690610696908790612aa5565b611141565b60006106a68461153c565b60006106b285856115c5565b90506106bf81308561161b565b6106c9858461163d565b336001600160a01b031684866001600160a01b03167f6862a473baa6176f1c866c69aa93da8508d7afc71b52dddc9d5e8b0bb7aab6f48660405161070f91815260200190565b60405180910390a4949350505050565b60006001600160a01b03841661077c5760405162461bcd60e51b815260206004820181905260248201527f5457414244656c656761746f722f646c6774722d6e6f742d7a65726f2d61647260448201526064015b60405180910390fd5b61078582611715565b600061079185856115c5565b90506107c86001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016338386611765565b336001600160a01b031684866001600160a01b03167f383183291bd9a7fb8bd9c7c86c5013a89d1490c9f4e486da279804b83729a1dc8660405161070f91815260200190565b60006108198561153c565b61082283611816565b610839826bffffffffffffffffffffffff1661186c565b600061084586866115c5565b9050610850816118bf565b4283016bffffffffffffffffffffffff8416156108e8576040517fac2293af0000000000000000000000000000000000000000000000000000000081526bffffffffffffffffffffffff821660048201526001600160a01b0383169063ac2293af90602401600060405180830381600087803b1580156108cf57600080fd5b505af11580156108e3573d6000803e3d6000fd5b505050505b6108f2828661198d565b604080516bffffffffffffffffffffffff831681523360208201526001600160a01b03808816928992918b16917ffd96a87f22afea1e17a7117a4923f1499a1c1eb2bd7c492caf07f3a3c38ade6f910160405180910390a45095945050505050565b600061095f8561153c565b61096883611816565b61097f826bffffffffffffffffffffffff1661186c565b42820160006109d96109d388886040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b83611a13565b90506109e5818661198d565b604080516bffffffffffffffffffffffff841681526001600160a01b03838116602083015233828401529151878316928992908b16917f5533acb96061e404278604d3df68397263be1d4b9df394136a2968802633d8a59181900360600190a49695505050505050565b6000610a5a82611ab9565b6000610a6633866115c5565b9050610a7381848661161b565b826001600160a01b031685336001600160a01b03167f622b7da8a20026f1176ccc7ec0a635a4544a67e99b0125018e3d89b888ce8ebe8760405161070f91815260200190565b60606004805461050190612b00565b6001600160a01b038216610b1e5760405162461bcd60e51b815260206004820152601f60248201527f5457414244656c656761746f722f7265702d6e6f742d7a65726f2d61646472006044820152606401610773565b3360008181526006602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f50062a33e55b9f3dfcf05fbf1356b7c92313796cfb8526cdee5a497fcbb8cc3391015b60405180910390a35050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919083811015610c465760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610773565b610c538286868403611141565b506001949350505050565b600033610592818585611325565b60606105bd8383611b0f565b610c8181611715565b610cb66001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611765565b610cc0828261163d565b816001600160a01b03167f15c2c6e5db9e25d828754c9c5cee6c5c3df074e6ac26e7491c0f8ce7bbd447d682604051610cfb91815260200190565b60405180910390a25050565b610d1082611ab9565b610d1981611715565b610d233382611c09565b610d576001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168383611d8e565b6040518181526001600160a01b0383169033907ff7128607975b3ff61bc02d19a1c8267e526f7a5b7144dc4efcdac634663fd36990602001610b9d565b6000806000806000610da687876115c5565b94506001600160a01b0385163b15156040517f8d22ea2a0000000000000000000000000000000000000000000000000000000081526001600160a01b0387811660048301529192507f000000000000000000000000000000000000000000000000000000000000000090911690638d22ea2a9060240160206040518083038186803b158015610e3457600080fd5b505afa158015610e48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6c91906124d5565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0387811660048301529195507f0000000000000000000000000000000000000000000000000000000000000000909116906370a082319060240160206040518083038186803b158015610eeb57600080fd5b505afa158015610eff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2391906127c6565b92508015610fad57846001600160a01b0316633c78929e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f6457600080fd5b505afa158015610f78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9c91906128b8565b6bffffffffffffffffffffffff1691505b9295509295909350565b6000610fc28461153c565b610fcb82611715565b6000610fd785856115c5565b9050610fe38584611c09565b6110176001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168285611d8e565b336001600160a01b031684866001600160a01b03167fb1968721eeb35d2206c8aa91805bc908019965ff4cff13c158f89956fb8e92488660405161070f91815260200190565b60006105bd83836115c5565b6001600160a01b03851663d505accf333087873561108d60408a0160208b0161287e565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b1681526001600160a01b0396871660048201529590941660248601526044850192909252606484015260ff16608483015286013560a4820152606086013560c482015260e401600060405180830381600087803b15801561111757600080fd5b505af115801561112b573d6000803e3d6000fd5b505050506111398282611b0f565b505050505050565b6001600160a01b0383166111bc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0382166112385760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146104ec57818110156113185760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610773565b6104ec8484848403611141565b6001600160a01b0383166113a15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b03821661141d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b038316600090815260208190526040902054818110156114ac5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906114e3908490612aa5565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161152f91815260200190565b60405180910390a36104ec565b6001600160a01b03811633148061157657506001600160a01b038116600090815260066020908152604080832033845290915290205460ff165b6115c25760405162461bcd60e51b815260206004820152601e60248201527f5457414244656c656761746f722f6e6f742d646c6774722d6f722d72657000006044820152606401610773565b50565b60006105bd61161684846040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b611dd7565b61162481611715565b61162d836118bf565b611638838383611e60565b505050565b6001600160a01b0382166116935760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610773565b80600260008282546116a59190612aa5565b90915550506001600160a01b038216600090815260208190526040812080548392906116d2908490612aa5565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b9d565b600081116115c25760405162461bcd60e51b815260206004820152601c60248201527f5457414244656c656761746f722f616d6f756e742d67742d7a65726f000000006044820152606401610773565b6040516001600160a01b03808516602483015283166044820152606481018290526104ec9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ee3565b6001600160a01b0381166115c25760405162461bcd60e51b815260206004820181905260248201527f5457414244656c656761746f722f646c67742d6e6f742d7a65726f2d616464726044820152606401610773565b62ed4e008111156115c25760405162461bcd60e51b815260206004820152601b60248201527f5457414244656c656761746f722f6c6f636b2d746f6f2d6c6f6e6700000000006044820152606401610773565b806001600160a01b0316633c78929e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118f857600080fd5b505afa15801561190c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193091906128b8565b6bffffffffffffffffffffffff164210156115c25760405162461bcd60e51b815260206004820152601f60248201527f5457414244656c656761746f722f64656c65676174696f6e2d6c6f636b6564006044820152606401610773565b604080516001600160a01b0383166024808301919091528251808303909101815260449091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5c19a95c0000000000000000000000000000000000000000000000000000000090811790915290611a0c8482611fc8565b5050505050565b6005546000908190611a2e906001600160a01b03168561210c565b6040517f909f1cad0000000000000000000000000000000000000000000000000000000081526bffffffffffffffffffffffff851660048201529091506001600160a01b0382169063909f1cad90602401600060405180830381600087803b158015611a9957600080fd5b505af1158015611aad573d6000803e3d6000fd5b50929695505050505050565b6001600160a01b0381166115c25760405162461bcd60e51b815260206004820152601e60248201527f5457414244656c656761746f722f746f2d6e6f742d7a65726f2d6164647200006044820152606401610773565b60608160008167ffffffffffffffff811115611b2d57611b2d612b82565b604051908082528060200260200182016040528015611b6057816020015b6060815260200190600190039081611b4b5790505b50905060005b82811015611c0057611bd030878784818110611b8457611b84612b6c565b9050602002810190611b969190612a0f565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506121c392505050565b828281518110611be257611be2612b6c565b60200260200101819052508080611bf890612b3b565b915050611b66565b50949350505050565b6001600160a01b038216611c855760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b03821660009081526020819052604090205481811015611d145760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611d43908490612abd565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6040516001600160a01b0383166024820152604481018290526116389084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016117b2565b600554600090610598906001600160a01b031683306040517f3d602d80600a3d3981f3363d3d373d3d3d363d730000000000000000000000008152606093841b60148201527f5af43d82803e903d91602b57fd5bf3ff000000000000000000000000000000006028820152921b6038830152604c8201526037808220606c830152605591012090565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000908117909152906111398582611fc8565b6000611f38826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166121e89092919063ffffffff16565b8051909150156116385780806020019051810190611f5691906127a9565b6116385760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610773565b60408051600180825281830190925260609160009190816020015b604080518082019091526000815260606020820152815260200190600190039081611fe357905050905060405180604001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602001848152508160008151811061205e5761205e612b6c565b60209081029190910101526040517fde9443bf0000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063de9443bf906120ae90849060040161297f565b600060405180830381600087803b1580156120c857600080fd5b505af11580156120dc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526121049190810190612690565b949350505050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528360601b60148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152826037826000f59150506001600160a01b0381166105985760405162461bcd60e51b815260206004820152601760248201527f455243313136373a2063726561746532206661696c65640000000000000000006044820152606401610773565b60606105bd8383604051806060016040528060278152602001612be5602791396121f7565b606061210484846000856122eb565b60606001600160a01b0384163b6122765760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610773565b600080856001600160a01b0316856040516122919190612901565b600060405180830381855af49150503d80600081146122cc576040519150601f19603f3d011682016040523d82523d6000602084013e6122d1565b606091505b50915091506122e1828286612433565b9695505050505050565b6060824710156123635760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610773565b6001600160a01b0385163b6123ba5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610773565b600080866001600160a01b031685876040516123d69190612901565b60006040518083038185875af1925050503d8060008114612413576040519150601f19603f3d011682016040523d82523d6000602084013e612418565b606091505b5091509150612428828286612433565b979650505050505050565b606083156124425750816105bd565b8251156124525782518084602001fd5b8160405162461bcd60e51b815260040161077391906129fc565b60008083601f84011261247e57600080fd5b50813567ffffffffffffffff81111561249657600080fd5b6020830191508360208260051b85010111156124b157600080fd5b9250929050565b6000602082840312156124ca57600080fd5b81356105bd81612b98565b6000602082840312156124e757600080fd5b81516105bd81612b98565b6000806040838503121561250557600080fd5b823561251081612b98565b9150602083013561252081612b98565b809150509250929050565b60008060006060848603121561254057600080fd5b833561254b81612b98565b9250602084013561255b81612b98565b929592945050506040919091013590565b6000806040838503121561257f57600080fd5b823561258a81612b98565b9150602083013561252081612bad565b600080604083850312156125ad57600080fd5b82356125b881612b98565b946020939093013593505050565b600080600080608085870312156125dc57600080fd5b84356125e781612b98565b93506020850135925060408501356125fe81612b98565b9150606085013561260e81612bca565b939692955090935050565b60008060006060848603121561262e57600080fd5b833561263981612b98565b95602085013595506040909401359392505050565b6000806020838503121561266157600080fd5b823567ffffffffffffffff81111561267857600080fd5b6126848582860161246c565b90969095509350505050565b600060208083850312156126a357600080fd5b825167ffffffffffffffff808211156126bb57600080fd5b8185019150601f86818401126126d057600080fd5b8251828111156126e2576126e2612b82565b8060051b6126f1868201612a74565b8281528681019086880183880189018c101561270c57600080fd5b600093505b8484101561279a5780518781111561272857600080fd5b8801603f81018d1361273957600080fd5b8981015160408982111561274f5761274f612b82565b6127608c601f198b85011601612a74565b8281528f8284860101111561277457600080fd5b612783838e8301848701612ad4565b865250505060019390930192918801918801612711565b509a9950505050505050505050565b6000602082840312156127bb57600080fd5b81516105bd81612bad565b6000602082840312156127d857600080fd5b5051919050565b60008060008084860360c08112156127f657600080fd5b853594506080601f198201121561280c57600080fd5b5060208501925060a085013567ffffffffffffffff81111561282d57600080fd5b6128398782880161246c565b95989497509550505050565b60008060006060848603121561285a57600080fd5b8335925060208401359150604084013561287381612b98565b809150509250925092565b60006020828403121561289057600080fd5b81356105bd81612bbb565b6000602082840312156128ad57600080fd5b81516105bd81612bbb565b6000602082840312156128ca57600080fd5b81516105bd81612bca565b600081518084526128ed816020860160208601612ad4565b601f01601f19169290920160200192915050565b60008251612913818460208701612ad4565b9190910192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561297257603f198886030184526129608583516128d5565b94509285019290850190600101612944565b5092979650505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156129ee57888303603f19018552815180516001600160a01b031684528701518784018790526129db878501826128d5565b95880195935050908601906001016129a6565b509098975050505050505050565b6020815260006105bd60208301846128d5565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a4457600080fd5b83018035915067ffffffffffffffff821115612a5f57600080fd5b6020019150368190038213156124b157600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612a9d57612a9d612b82565b604052919050565b60008219821115612ab857612ab8612b56565b500190565b600082821015612acf57612acf612b56565b500390565b60005b83811015612aef578181015183820152602001612ad7565b838111156104ec5750506000910152565b600181811c90821680612b1457607f821691505b60208210811415612b3557634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612b4f57612b4f612b56565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146115c257600080fd5b80151581146115c257600080fd5b60ff811681146115c257600080fd5b6bffffffffffffffffffffffff811681146115c257600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d0292d6239030d54a5d6b0eccefe8c8623bf4e9e57c862c6aa2520af08b04cd764736f6c63430008060033",
        "devdoc": {
            "events": {
                "DelegateeUpdated(address,uint256,address,uint96,address)": {
                    "params": {
                        "delegatee": "Address of the delegatee",
                        "delegator": "Address of the delegator",
                        "lockUntil": "Timestamp until which the delegation is locked",
                        "slot": "Slot of the delegation",
                        "user": "Address of the user who updated the delegatee"
                    }
                },
                "DelegationCreated(address,uint256,uint96,address,address,address)": {
                    "params": {
                        "delegatee": "Address of the delegatee",
                        "delegation": "Address of the delegation that was created",
                        "delegator": "Delegator of the delegation",
                        "lockUntil": "Timestamp until which the delegation is locked",
                        "slot": "Slot of the delegation",
                        "user": "Address of the user who created the delegation"
                    }
                },
                "DelegationFunded(address,uint256,uint256,address)": {
                    "params": {
                        "amount": "Amount of tickets that were sent to the delegation",
                        "delegator": "Address of the delegator",
                        "slot": "Slot of the delegation",
                        "user": "Address of the user who funded the delegation"
                    }
                },
                "DelegationFundedFromStake(address,uint256,uint256,address)": {
                    "params": {
                        "amount": "Amount of tickets that were sent to the delegation",
                        "delegator": "Address of the delegator",
                        "slot": "Slot of the delegation",
                        "user": "Address of the user who pulled funds from the delegator stake to the delegation"
                    }
                },
                "RepresentativeSet(address,address,bool)": {
                    "params": {
                        "delegator": "Address of the delegator",
                        "representative": "Address of the representative",
                        "set": "Boolean indicating if the representative was set or unset"
                    }
                },
                "TicketSet(address)": {
                    "params": {
                        "ticket": "Address of the ticket"
                    }
                },
                "TicketsStaked(address,uint256)": {
                    "params": {
                        "amount": "Amount of tickets staked",
                        "delegator": "Address of the delegator"
                    }
                },
                "TicketsUnstaked(address,address,uint256)": {
                    "params": {
                        "amount": "Amount of tickets unstaked",
                        "delegator": "Address of the delegator",
                        "recipient": "Address of the recipient that will receive the tickets"
                    }
                },
                "TransferredDelegation(address,uint256,uint256,address)": {
                    "params": {
                        "amount": "Amount of tickets withdrawn",
                        "delegator": "Address of the delegator",
                        "slot": "Slot of the delegation",
                        "to": "Recipient address of withdrawn tickets"
                    }
                },
                "WithdrewDelegationToStake(address,uint256,uint256,address)": {
                    "params": {
                        "amount": "Amount of tickets withdrawn",
                        "delegator": "Address of the delegator",
                        "slot": "Slot of the delegation",
                        "user": "Address of the user who withdrew the tickets"
                    }
                }
            },
            "kind": "dev",
            "methods": {
                "allowance(address,address)": {
                    "details": "See {IERC20-allowance}."
                },
                "approve(address,uint256)": {
                    "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
                },
                "balanceOf(address)": {
                    "details": "See {IERC20-balanceOf}."
                },
                "computeDelegationAddress(address,uint256)": {
                    "params": {
                        "_delegator": "The user who is delegating tickets",
                        "_slot": "The delegation slot"
                    },
                    "returns": {
                        "_0": "The address of the delegation.  This is the address that holds the balance of tickets."
                    }
                },
                "constructor": {
                    "params": {
                        "_ticket": "Address of the ticket contract",
                        "name_": "The name for the staked ticket token",
                        "symbol_": "The symbol for the staked ticket token"
                    }
                },
                "createDelegation(address,uint256,address,uint96)": {
                    "details": "The `_delegator` and `_slot` params are used to compute the salt of the delegation",
                    "params": {
                        "_delegatee": "Address of the delegatee",
                        "_delegator": "Address of the delegator that will be able to handle the delegation",
                        "_lockDuration": "Duration of time for which the delegation is locked. Must be less than the max duration.",
                        "_slot": "Slot of the delegation"
                    },
                    "returns": {
                        "_0": "Returns the address of the Delegation contract that will hold the tickets"
                    }
                },
                "decimals()": {
                    "details": "This value is equal to the decimals of the ticket being delegated.",
                    "returns": {
                        "_0": "ERC20 token decimals"
                    }
                },
                "decreaseAllowance(address,uint256)": {
                    "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
                },
                "fundDelegation(address,uint256,uint256)": {
                    "details": "Callable by anyone.Will revert if delegation does not exist.",
                    "params": {
                        "_amount": "Amount of tickets to transfer",
                        "_delegator": "Address of the delegator",
                        "_slot": "Slot of the delegation"
                    },
                    "returns": {
                        "_0": "The address of the Delegation"
                    }
                },
                "fundDelegationFromStake(address,uint256,uint256)": {
                    "details": "Callable only by the `_delegator` or a representative.Will revert if delegation does not exist.Will revert if `_amount` is greater than the staked amount.",
                    "params": {
                        "_amount": "Amount of tickets to send to the delegation from the staked amount",
                        "_delegator": "Address of the delegator",
                        "_slot": "Slot of the delegation"
                    },
                    "returns": {
                        "_0": "The address of the Delegation"
                    }
                },
                "getDelegation(address,uint256)": {
                    "params": {
                        "_delegator": "The delegator address",
                        "_slot": "The delegation slot they are using"
                    },
                    "returns": {
                        "balance": "The balance of tickets in the delegation",
                        "delegatee": "The address that tickets are being delegated to",
                        "delegation": "The address that holds tickets for the delegation",
                        "lockUntil": "The timestamp at which the delegation unlocks",
                        "wasCreated": "Whether or not the delegation has been created"
                    }
                },
                "increaseAllowance(address,uint256)": {
                    "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
                },
                "isRepresentativeOf(address,address)": {
                    "params": {
                        "_delegator": "The delegator",
                        "_representative": "The representative to check for"
                    },
                    "returns": {
                        "_0": "True if the rep is a rep, false otherwise"
                    }
                },
                "multicall(bytes[])": {
                    "params": {
                        "_data": "An array of encoded function calls.  The calls must be abi-encoded calls to this contract."
                    },
                    "returns": {
                        "_0": "The results from each function call"
                    }
                },
                "name()": {
                    "details": "Returns the name of the token."
                },
                "permitAndMulticall(uint256,(uint256,uint8,bytes32,bytes32),bytes[])": {
                    "params": {
                        "_amount": "Amount of tickets to approve",
                        "_data": "Datas to call with `functionDelegateCall`",
                        "_permitSignature": "Permit signature"
                    }
                },
                "setRepresentative(address,bool)": {
                    "details": "If `_set` is `true`, `_representative` will be set as representative of `msg.sender`.If `_set` is `false`, `_representative` will be unset as representative of `msg.sender`.",
                    "params": {
                        "_representative": "Address of the representative",
                        "_set": "Set or unset the representative"
                    }
                },
                "stake(address,uint256)": {
                    "details": "Tickets can be staked on behalf of a `_to` user.",
                    "params": {
                        "_amount": "Amount of tickets to stake",
                        "_to": "Address to which the stake will be attributed"
                    }
                },
                "symbol()": {
                    "details": "Returns the symbol of the token, usually a shorter version of the name."
                },
                "totalSupply()": {
                    "details": "See {IERC20-totalSupply}."
                },
                "transfer(address,uint256)": {
                    "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
                },
                "transferDelegationTo(uint256,uint256,address)": {
                    "details": "Tickets are sent directly to the passed `_to` address.Will revert if delegation is still locked.",
                    "params": {
                        "_amount": "Amount to withdraw",
                        "_slot": "Slot of the delegation",
                        "_to": "Account to transfer the withdrawn tickets to"
                    },
                    "returns": {
                        "_0": "The address of the Delegation"
                    }
                },
                "transferFrom(address,address,uint256)": {
                    "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
                },
                "unstake(address,uint256)": {
                    "details": "If delegator has delegated his whole stake, he will first have to withdraw from a delegation to be able to unstake.",
                    "params": {
                        "_amount": "Amount of tickets to unstake",
                        "_to": "Address of the recipient that will receive the tickets"
                    }
                },
                "updateDelegatee(address,uint256,address,uint96)": {
                    "details": "Only callable by the `_delegator` or their representative.Will revert if delegation is still locked.",
                    "params": {
                        "_delegatee": "Address of the delegatee",
                        "_delegator": "Address of the delegator",
                        "_lockDuration": "Duration of time during which the delegatee cannot be changed nor withdrawn",
                        "_slot": "Slot of the delegation"
                    },
                    "returns": {
                        "_0": "The address of the Delegation"
                    }
                },
                "withdrawDelegationToStake(address,uint256,uint256)": {
                    "details": "Only callable by the `_delegator` or a representative.Will send the tickets to this contract and increase the `_delegator` staked amount.Will revert if delegation is still locked.",
                    "params": {
                        "_amount": "Amount of tickets to withdraw",
                        "_delegator": "Address of the delegator",
                        "_slot": "Slot of the delegation"
                    },
                    "returns": {
                        "_0": "The address of the Delegation"
                    }
                }
            },
            "stateVariables": {
                "representatives": {
                    "details": "Representative can only handle delegation and cannot withdraw tickets to their wallet.delegator => representative => bool allowing representative to represent the delegator"
                }
            },
            "title": "Delegate chances to win to multiple accounts.",
            "version": 1
        },
        "userdoc": {
            "events": {
                "DelegateeUpdated(address,uint256,address,uint96,address)": {
                    "notice": "Emitted when a delegatee is updated."
                },
                "DelegationCreated(address,uint256,uint96,address,address,address)": {
                    "notice": "Emitted when a new delegation is created."
                },
                "DelegationFunded(address,uint256,uint256,address)": {
                    "notice": "Emitted when a delegation is funded."
                },
                "DelegationFundedFromStake(address,uint256,uint256,address)": {
                    "notice": "Emitted when a delegation is funded from the staked amount."
                },
                "RepresentativeSet(address,address,bool)": {
                    "notice": "Emitted when a representative is set."
                },
                "TicketSet(address)": {
                    "notice": "Emitted when ticket associated with this contract has been set."
                },
                "TicketsStaked(address,uint256)": {
                    "notice": "Emitted when tickets have been staked."
                },
                "TicketsUnstaked(address,address,uint256)": {
                    "notice": "Emitted when tickets have been unstaked."
                },
                "TransferredDelegation(address,uint256,uint256,address)": {
                    "notice": "Emitted when a delegator withdraws an amount of tickets from a delegation to a specified wallet."
                },
                "WithdrewDelegationToStake(address,uint256,uint256,address)": {
                    "notice": "Emitted when an amount of tickets has been withdrawn from a delegation. The tickets are held by this contract and the delegator stake is increased."
                }
            },
            "kind": "user",
            "methods": {
                "MAX_LOCK()": {
                    "notice": "Max lock time during which a delegation cannot be updated."
                },
                "computeDelegationAddress(address,uint256)": {
                    "notice": "Computes the address of the delegation for the delegator + slot combination."
                },
                "constructor": {
                    "notice": "Creates a new TWAB Delegator that is bound to the given ticket contract."
                },
                "createDelegation(address,uint256,address,uint96)": {
                    "notice": "Creates a new delegation. This will create a new Delegation contract for the given slot and have it delegate its tickets to the given delegatee. If a non-zero lock duration is passed, then the delegatee cannot be changed, nor funding withdrawn, until the lock has expired."
                },
                "decimals()": {
                    "notice": "Returns the ERC20 token decimals."
                },
                "delegationInstance()": {
                    "notice": "The instance to which all proxies will point."
                },
                "fundDelegation(address,uint256,uint256)": {
                    "notice": "Fund a delegation by transferring tickets from the caller to the delegation."
                },
                "fundDelegationFromStake(address,uint256,uint256)": {
                    "notice": "Fund a delegation using the `_delegator` stake."
                },
                "getDelegation(address,uint256)": {
                    "notice": "Allows the caller to easily get the details for a delegation."
                },
                "isRepresentativeOf(address,address)": {
                    "notice": "Returns whether or not the given rep is a representative of the delegator."
                },
                "multicall(bytes[])": {
                    "notice": "Allows a user to call multiple functions on the same contract.  Useful for EOA who wants to batch transactions."
                },
                "permitAndMulticall(uint256,(uint256,uint8,bytes32,bytes32),bytes[])": {
                    "notice": "Alow a user to approve ticket and run various calls in one transaction."
                },
                "setRepresentative(address,bool)": {
                    "notice": "Allow an account to set or unset a `_representative` to handle delegation."
                },
                "stake(address,uint256)": {
                    "notice": "Stake `_amount` of tickets in this contract."
                },
                "ticket()": {
                    "notice": "Prize pool ticket to which this contract is tied to."
                },
                "transferDelegationTo(uint256,uint256,address)": {
                    "notice": "Withdraw an `_amount` of tickets from a delegation. The delegator is assumed to be the caller."
                },
                "unstake(address,uint256)": {
                    "notice": "Unstake `_amount` of tickets from this contract. Transfers ticket to the passed `_to` address."
                },
                "updateDelegatee(address,uint256,address,uint96)": {
                    "notice": "Updates the delegatee and lock duration for a delegation slot."
                },
                "withdrawDelegationToStake(address,uint256,uint256)": {
                    "notice": "Withdraw tickets from a delegation. The tickets will be held by this contract and the delegator's stake will increase."
                }
            },
            "notice": "This contract allows accounts to easily delegate a portion of their tickets to multiple delegatees. The delegatees chance of winning prizes is increased by the delegated amount. If a delegator doesn't want to actively manage the delegations, then they can stake on the contract and appoint representatives.",
            "version": 1
        },
        "storageLayout": {
            "storage": [
                {
                    "astId": 289,
                    "contract": "@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol:TWABDelegator",
                    "label": "_balances",
                    "offset": 0,
                    "slot": "0",
                    "type": "t_mapping(t_address,t_uint256)"
                },
                {
                    "astId": 295,
                    "contract": "@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol:TWABDelegator",
                    "label": "_allowances",
                    "offset": 0,
                    "slot": "1",
                    "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
                },
                {
                    "astId": 297,
                    "contract": "@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol:TWABDelegator",
                    "label": "_totalSupply",
                    "offset": 0,
                    "slot": "2",
                    "type": "t_uint256"
                },
                {
                    "astId": 299,
                    "contract": "@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol:TWABDelegator",
                    "label": "_name",
                    "offset": 0,
                    "slot": "3",
                    "type": "t_string_storage"
                },
                {
                    "astId": 301,
                    "contract": "@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol:TWABDelegator",
                    "label": "_symbol",
                    "offset": 0,
                    "slot": "4",
                    "type": "t_string_storage"
                },
                {
                    "astId": 15988,
                    "contract": "@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol:TWABDelegator",
                    "label": "delegationInstance",
                    "offset": 0,
                    "slot": "5",
                    "type": "t_contract(Delegation)15976"
                },
                {
                    "astId": 16339,
                    "contract": "@pooltogether/v4-twab-delegator/contracts/TWABDelegator.sol:TWABDelegator",
                    "label": "representatives",
                    "offset": 0,
                    "slot": "6",
                    "type": "t_mapping(t_address,t_mapping(t_address,t_bool))"
                }
            ],
            "types": {
                "t_address": {
                    "encoding": "inplace",
                    "label": "address",
                    "numberOfBytes": "20"
                },
                "t_bool": {
                    "encoding": "inplace",
                    "label": "bool",
                    "numberOfBytes": "1"
                },
                "t_contract(Delegation)15976": {
                    "encoding": "inplace",
                    "label": "contract Delegation",
                    "numberOfBytes": "20"
                },
                "t_mapping(t_address,t_bool)": {
                    "encoding": "mapping",
                    "key": "t_address",
                    "label": "mapping(address => bool)",
                    "numberOfBytes": "32",
                    "value": "t_bool"
                },
                "t_mapping(t_address,t_mapping(t_address,t_bool))": {
                    "encoding": "mapping",
                    "key": "t_address",
                    "label": "mapping(address => mapping(address => bool))",
                    "numberOfBytes": "32",
                    "value": "t_mapping(t_address,t_bool)"
                },
                "t_mapping(t_address,t_mapping(t_address,t_uint256))": {
                    "encoding": "mapping",
                    "key": "t_address",
                    "label": "mapping(address => mapping(address => uint256))",
                    "numberOfBytes": "32",
                    "value": "t_mapping(t_address,t_uint256)"
                },
                "t_mapping(t_address,t_uint256)": {
                    "encoding": "mapping",
                    "key": "t_address",
                    "label": "mapping(address => uint256)",
                    "numberOfBytes": "32",
                    "value": "t_uint256"
                },
                "t_string_storage": {
                    "encoding": "bytes",
                    "label": "string",
                    "numberOfBytes": "32"
                },
                "t_uint256": {
                    "encoding": "inplace",
                    "label": "uint256",
                    "numberOfBytes": "32"
                }
            }
        }
    }
]

export default TWABDelegatorContractAbi;