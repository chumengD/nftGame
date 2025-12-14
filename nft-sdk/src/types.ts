// src/types.ts
export interface NFTMetadata {
  name?: string;
  description?: string;
  image?: string;
  image_url?: string;
  attributes?: Array<{
    trait_type: string;
    value: string;
  }>;
  [key: string]: any;

}

export interface NFTInfo {
  tokenId: number;
  imageUrl: string;
  name?: string;
  metadata?: NFTMetadata;
}

export interface SDKConfig {
  contractAddress: string;
  contractABI: any[];
  rpcUrl?: string;
}