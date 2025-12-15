const { ethers } = require('ethers');

class NFTSDK {
  constructor(config) {
    this.contractAddress = config.contractAddress;
    this.abi = config.abi;
    
    // Provider 初始化
    if (config.rpcUrl) {
      this.provider = new ethers.JsonRpcProvider(config.rpcUrl);
    } else if (typeof window !== 'undefined' && window.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum);
    } else {
      this.provider = null;
    }
    
    // 创建合约实例
    if (this.provider) {
      this.contract = new ethers.Contract(
        this.contractAddress,
        this.abi,
        this.provider
      );
    }
    
    this.ipfsGateway = config.ipfsGateway || 'https://ipfs.io/ipfs/';
  }

  // 核心方法：获取NFT图片URL
  async getNFTImageUrl(tokenId) {
    try {
      // 1. 获取tokenURI
      const tokenURI = await this.contract.tokenURI(tokenId);
      
      // 2. 获取元数据
      const metadata = await this.fetchMetadata(tokenURI);
      
      // 3. 解析图片URL
      const imageUrl = this.resolveImageUrl(metadata.image);
      
      return imageUrl;
    } catch (error) {
      console.error('获取NFT图片失败:', error);
      throw error;
    }
  }

  async fetchMetadata(tokenURI) {
    const resolvedURI = this.resolveIPFSUri(tokenURI);
    const response = await fetch(resolvedURI);
    return await response.json();
  }

  resolveIPFSUri(uri) {
    if (uri.startsWith('ipfs://')) {
      return uri.replace('ipfs://', this.ipfsGateway);
    }
    return uri;
  }

  resolveImageUrl(imageUri) {
    if (!imageUri) return '';
    if (imageUri.startsWith('ipfs://')) {
      return imageUri.replace('ipfs://', this.ipfsGateway);
    }
    return imageUri;
  }

  // 连接钱包（前端用）
  async connectWallet() {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error('请安装MetaMask钱包');
    }
    
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    this.provider = provider;
    this.contract = new ethers.Contract(
      this.contractAddress,
      this.abi,
      provider
    );
    return provider;
  }
}

// 导出
module.exports = { NFTSDK };