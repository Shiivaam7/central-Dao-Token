# ☕ **CentralDaoToken** Smart Contract

A simple smart contract for the **Central DAO Token (CDT)**, an ERC20 token built using Solidity and Hardhat. This contract allows the creation of the CDT token with an initial supply, deployable on Ethereum-based blockchains, including Core Blockchain networks.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd CentralDaoToken
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PRIVATEKEY="your_core_wallet_private_key"
CORE_TEST2_SCAN_KEY="your_testnet2_explorer_api_key"
CORE_MAIN_SCAN_KEY="your_mainnet_explorer_api_key"
CORE_TEST1_SCAN_KEY="your_testnet1_explorer_api_key"
```

> ⚠️ **Important:** Never share your private key or commit the `.env` file to version control.

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Use a deployment script to deploy the `CentralDaoToken` contract:

```bash
npx hardhat run scripts/deploy.js --network core_testnet2
```

Make sure to provide the initial supply as a constructor argument in the deployment script.

---

## 🔍 Contract Verification

You can verify contracts using Core block explorers:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address> <constructor_args_if_any>
```

API keys for verification must be included in `.env` as shown above.


