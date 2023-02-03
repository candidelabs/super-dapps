# RetroActive Public Goods Pooling

<div style="display:flex; justify-content:space-around" >
    <img src="./src/assets/candide-logo-watermark-lighter.svg" alt="candide" width="270"/>
    <img src="./src/assets/optimism-logo.svg" alt="optimism" width="270"/>
    <img src="./src/assets/pooltogether-logo--purple-gradient.svg" alt="pooltogether" width="180"/>
</div>

<br/>

This project is a tool that allows users to deposit and delegate their chances of winning to Optimism [RetroPGF](https://community.optimism.io/docs/governance/retropgf-2/) round 2 in one click gasless no loss donation; helping fund public goods that support the development and usage of the OP Stack

## Motivation

RetroPGF is Optimism mechanism for funding open-source software. The Optimism Collective’s second round of Retroactive Public Goods Funding (RetroPGF) takes place in Q1 2023.

This tool aims to simplify the stage of a user journey of depositing and delegating to RetroPGF in PoolTogether. While the PoolTogether frontend is extremely well designed 3, it is constrained by EOA wallets’ limitations. A user wanting to deposit and delegate to RetroPGF with an EOA has a multi-step process involving several transaction executions and two different web pages.

Harnessing the power PoolTogether as a no-loss saving protocol and CANDIDE account abstraction benefits to remove friction in participating in public goods funding.

## How it works

Users connect to the tool with their wallet using WalletConnect, and select the amount they want to deposit and delegate. They then get a request in their wallet to confirm the operations

## Main Contract Interaction

PoolTogether’s StakePrizePool and TWABDelegator on Optimism
Function Calls

The tool’s frontend communicates JSON-RPC method for sending multiple function calls from the user’s wallet. The tool offers a one-click experience for multi-step interactions of bundled calls that approve USDC, deposit to the pool and delegate the tickets to RetroPGF.eth. The standard for communication used is EIP-5792. The following function calls are communicated:

- `approve` X USDC erc-20 contract

- `deposit` X USDC token to StakePrizePool contract

- `approve` X TICK erc-20 contract

- `stake` with delegator address and X Tickets in TWABDelegator contract

- `createDelegation` with delegator address, slot and delegatee and lock duration in TWABDelegator contract

- `fundDelegation` with the delegator address, slot, and amount of tickets in TWABDelegator contract

## Wallet compatibility

Smart contract wallets that support [EIP-5792](https://eips.ethereum.org/EIPS/eip-5792). EOA wallets like Metamask cannot execute bundled function calls

## Gas Sponsorship

Pooltogether is sponsoring the first 1000 deposits in support of retroactive public goods funding, making deposits gasless for end-users thanks to CANDIDE's [Paymaster feature](https://docs.candidewallet.com/develop/wallet/gasless-transactions)

---

## Develop

```bash
npm install
npm run start
```

## Test

```bash
npm run test
```

## Build

```bash
npm run build
```
