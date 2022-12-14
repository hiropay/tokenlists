type ExtensionValue = string | number | boolean | null | undefined;

export enum TokenlistTabNames {
  PEG_USD = 'USD pegged',
  PEG_EUR = 'EUR pegged',

  STABLECOIN = 'Stablecoin',
}

export interface RouterInfo {
  readonly chainId: number;
  readonly address: string;
  readonly timestamp: string;
  readonly version: string;
}

export interface TestnetFaucetInfo {
  readonly chainId: number;
  readonly address: string;
  readonly token: string;
}

export interface ChainInfo {
  readonly chainId: number;
  readonly logoUri: string;
  readonly explorerUrl: string;
  readonly rpcUrls: string[];
  readonly feeTreasury?: string;
  readonly priceFeeds?: {
    readonly [key: string]: string;
  };
}

export interface TokenInfo {
  readonly chainId: number;
  readonly address: string;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoUri?: string;
  readonly tags?: TokenlistTabNames[];
  readonly extensions?: {
    readonly [key: string]:
      | {
          [key: string]:
            | {
                [key: string]: ExtensionValue;
              }
            | ExtensionValue;
        }
      | ExtensionValue;
  };
}

export interface Version {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
}

export interface TokenList {
  readonly name: string;
  readonly timestamp: string;
  readonly version: Version;
  readonly tokens: TokenInfo[];
  readonly keywords?: string[];
  readonly tags?: any;
  readonly logoUri?: string;
}
