// src/NFTService.ts
import { ethers } from 'ethers';

export interface NFTServiceConfig {
  contractAddress: string;
  contractABI: any[];
  rpcUrl?: string;
}

export interface NFTInfo {
  tokenId: number;
  imageUrl: string;
  name?: string;
  metadata?: any;
}

export class NFTService {
  private contract: ethers.Contract;
  private provider: ethers.JsonRpcProvider;
  
  constructor(private config: NFTServiceConfig) {
    this.provider = new ethers.JsonRpcProvider(
      config.rpcUrl || 'https://mainnet.infura.io/v3/'
    );
    
    this.contract = new ethers.Contract(
      config.contractAddress,
      config.contractABI,
      this.provider
    );
  }

  /**
   * 获取用户拥有的所有NFT.
   */
  async getUserNFTs(userAddress: string): Promise<NFTInfo[]> {
    try {
      console.log(`正在获取用户 ${userAddress} 的NFT...`);
      
      // 1. 获取用户NFT数量
      const balance = await this.contract.balanceOf(userAddress);
      const count = Number(balance);
      
      if (count === 0) {
        console.log('用户没有NFT');
        return [];
      }
      
      console.log(`用户拥有 ${count} 个NFT`);
      
      // 2. 获取所有tokenId
      const tokenPromises = [];
      for (let i = 0; i < count; i++) {
        tokenPromises.push(
          this.contract.tokenOfOwnerByIndex(userAddress, i)
        );
      }
      
      const tokenIds = await Promise.all(tokenPromises);
      console.log('获取到的tokenIds:', tokenIds.map(id => Number(id)));
      
      // 3. 并行获取每个NFT的详细信息
      const nftPromises = tokenIds.map(tokenId => 
        this.getNFTInfo(Number(tokenId))
      );
      
      const nfts = await Promise.all(nftPromises);
      
      // 4. 过滤掉没有图片的NFT
      const validNFTs = nfts.filter(nft => nft.imageUrl);
      
      console.log(`成功获取 ${validNFTs.length} 个有效NFT`);
      return validNFTs;
      
    } catch (error) {
      console.error('获取用户NFT失败:', error);
      return [];
    }
  }

  /**
   * 获取单个NFT的详细信息
   */
  async getNFTInfo(tokenId: number): Promise<NFTInfo> {
    try {
      const tokenURI = await this.contract.tokenURI(tokenId);
      const metadataUrl = this.normalizeIPFSUrl(tokenURI);
      
      const response = await fetch(metadataUrl);
      const metadata = await response.json();
      
      return {
        tokenId,
        imageUrl: this.normalizeIPFSUrl(metadata.image || metadata.image_url || ''),
        name: metadata.name || `NFT #${tokenId}`,
        metadata
      };
    } catch (error) {
      console.error(`获取NFT #${tokenId}信息失败:`, error);
      return {
        tokenId,
        imageUrl: '',
        name: `NFT #${tokenId}`
      };
    }
  }

  /**
   * 获取单个NFT图片URL
   */
  async getNFTImage(tokenId: number): Promise<string> {
    const nftInfo = await this.getNFTInfo(tokenId);
    return nftInfo.imageUrl;
  }

  /**
   * 处理IPFS链接
   */
  private normalizeIPFSUrl(url: string): string {
    if (!url) return '';
    
    if (url.startsWith('ipfs://')) {
      return url.replace('ipfs://', 'https://ipfs.io/ipfs/');
    }
    
    return url;
  }

  /**
   * 获取合约实例（高级功能）
   */
  getContract(): ethers.Contract {
    return this.contract;
  }
}