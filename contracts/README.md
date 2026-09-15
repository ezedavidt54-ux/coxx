# COOX Smart Contracts

## COOX token

`CooxToken.sol` is the new COOX ERC20 token for the protocol.

Configuration:

* Name: Coox
* Symbol: COOX
* Decimals: 18
* Initial supply: 250,000,000 COOX
* Supply model: fixed
* Public minting: none
* Holder burning: supported
* Permit approvals: supported

The full initial supply is minted once to the deployment holder. There is no owner role and no function that can increase supply after deployment.

## Deployment plan

1. Compile and test locally.
2. Deploy the token to Arbitrum Sepolia.
3. Verify the source and record the deployed address and ABI.
4. Build and test the COOX swap mechanism against the testnet token.
5. Only after testnet validation, deploy the production token and swap infrastructure to Arbitrum One.

## Swap architecture

The ERC20 token is deliberately separate from the exchange mechanism. An ERC20 token alone does not provide a USDC/COOX market or liquidity. The exchange layer will be implemented after the token is validated, using a clearly defined liquidity and pricing mechanism rather than a simulated frontend calculation.
