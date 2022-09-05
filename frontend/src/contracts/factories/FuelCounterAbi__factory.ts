/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type {
  FuelCounterAbi,
  FuelCounterAbiInterface,
} from "../FuelCounterAbi";
const _abi = [
  {
    type: "function",
    name: "count",
    inputs: [],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "increment",
    inputs: [],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
];

export class FuelCounterAbi__factory {
  static readonly abi = _abi;
  static createInterface(): FuelCounterAbiInterface {
    return new Interface(_abi) as unknown as FuelCounterAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: Wallet | Provider
  ): FuelCounterAbi {
    return new Contract(
      id,
      _abi,
      walletOrProvider
    ) as unknown as FuelCounterAbi;
  }
}
