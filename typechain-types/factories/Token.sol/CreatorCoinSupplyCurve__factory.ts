/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  CreatorCoinSupplyCurve,
  CreatorCoinSupplyCurveInterface,
} from "../../Token.sol/CreatorCoinSupplyCurve";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    name: "BuyCoins",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
    ],
    name: "SellCoins",
    type: "event",
  },
  {
    inputs: [],
    name: "DESO_PRICE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FOUNDER_REWARD_PERCENTAGE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_COINS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyCoins",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "founder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentSupply",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sellCoins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610c6f806100616000396000f3fe6080604052600436106100915760003560e01c806351a4cd731161005957806351a4cd731461017f578063ba480e8b146101a8578063e7572230146101d3578063e82c0d6c14610210578063fe4681961461023b57610091565b806318160ddd1461009657806327e235e3146100c15780632ff2e9dc146100fe578063384302a9146101295780634d853ee514610154575b600080fd5b3480156100a257600080fd5b506100ab610257565b6040516100b89190610963565b60405180910390f35b3480156100cd57600080fd5b506100e860048036038101906100e391906107cc565b6102bf565b6040516100f59190610963565b60405180910390f35b34801561010a57600080fd5b506101136102d7565b6040516101209190610963565b60405180910390f35b34801561013557600080fd5b5061013e6102dc565b60405161014b9190610963565b60405180910390f35b34801561016057600080fd5b506101696102e2565b60405161017691906108c8565b60405180910390f35b34801561018b57600080fd5b506101a660048036038101906101a191906107f5565b610308565b005b3480156101b457600080fd5b506101bd6104ec565b6040516101ca9190610963565b60405180910390f35b3480156101df57600080fd5b506101fa60048036038101906101f591906107f5565b6104f1565b6040516102079190610963565b60405180910390f35b34801561021c57600080fd5b5061022561055d565b6040516102329190610963565b60405180910390f35b610255600480360381019061025091906107f5565b610562565b005b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60006020528060005260406000206000915090505481565b600081565b6105dc81565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000811161034b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610342906108e3565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156103cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c390610903565b60405180910390fd5b60006103e9826103da610257565b6103e49190610a99565b6104f1565b9050600082826103f99190610a3f565b9050826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104499190610a99565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610496573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f0efe1a9ef421d184aaa2333867d716610993d794d4c02d1472bce129afe2cf6484836040516104df92919061097e565b60405180910390a2505050565b600a81565b60006105dc8210610524577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050610558565b60006105dc83846105359190610a3f565b61053f9190610a0e565b905060006010826105509190610a3f565b905080925050505b919050565b601081565b600081116105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059c906108e3565b60405180910390fd5b6105dc6105b0610257565b826105bb91906109b8565b11156105fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f390610943565b60405180910390fd5b600061060e610609610257565b6104f1565b90506000828261061e9190610a3f565b905080341015610663576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065a90610923565b60405180910390fd5b826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106b191906109b8565b9250508190555060006064600a836106c99190610a3f565b6106d39190610a0e565b905080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461074591906109b8565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167faf3b6280eb81c0fa5c4d579f7d4fa98e0240f2e44a0875464364b90670927c49858460405161079492919061097e565b60405180910390a250505050565b6000813590506107b181610c0b565b92915050565b6000813590506107c681610c22565b92915050565b6000602082840312156107de57600080fd5b60006107ec848285016107a2565b91505092915050565b60006020828403121561080757600080fd5b6000610815848285016107b7565b91505092915050565b61082781610acd565b82525050565b600061083a600e836109a7565b915061084582610b67565b602082019050919050565b600061085d6014836109a7565b915061086882610b90565b602082019050919050565b60006108806012836109a7565b915061088b82610bb9565b602082019050919050565b60006108a36016836109a7565b91506108ae82610be2565b602082019050919050565b6108c281610aff565b82525050565b60006020820190506108dd600083018461081e565b92915050565b600060208201905081810360008301526108fc8161082d565b9050919050565b6000602082019050818103600083015261091c81610850565b9050919050565b6000602082019050818103600083015261093c81610873565b9050919050565b6000602082019050818103600083015261095c81610896565b9050919050565b600060208201905061097860008301846108b9565b92915050565b600060408201905061099360008301856108b9565b6109a060208301846108b9565b9392505050565b600082825260208201905092915050565b60006109c382610aff565b91506109ce83610aff565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0357610a02610b09565b5b828201905092915050565b6000610a1982610aff565b9150610a2483610aff565b925082610a3457610a33610b38565b5b828204905092915050565b6000610a4a82610aff565b9150610a5583610aff565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610a8e57610a8d610b09565b5b828202905092915050565b6000610aa482610aff565b9150610aaf83610aff565b925082821015610ac257610ac1610b09565b5b828203905092915050565b6000610ad882610adf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f496e76616c696420616d6f756e74000000000000000000000000000000000000600082015250565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b7f45786365656473206d6178696d756d20737570706c7900000000000000000000600082015250565b610c1481610acd565b8114610c1f57600080fd5b50565b610c2b81610aff565b8114610c3657600080fd5b5056fea2646970667358221220a449da5ae6b50683e11692b0f91ab871287603b4307a0328f4b217a6c1bdb86a64736f6c63430008040033";

type CreatorCoinSupplyCurveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreatorCoinSupplyCurveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreatorCoinSupplyCurve__factory extends ContractFactory {
  constructor(...args: CreatorCoinSupplyCurveConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CreatorCoinSupplyCurve> {
    return super.deploy(overrides || {}) as Promise<CreatorCoinSupplyCurve>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CreatorCoinSupplyCurve {
    return super.attach(address) as CreatorCoinSupplyCurve;
  }
  override connect(signer: Signer): CreatorCoinSupplyCurve__factory {
    return super.connect(signer) as CreatorCoinSupplyCurve__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreatorCoinSupplyCurveInterface {
    return new utils.Interface(_abi) as CreatorCoinSupplyCurveInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreatorCoinSupplyCurve {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CreatorCoinSupplyCurve;
  }
}
