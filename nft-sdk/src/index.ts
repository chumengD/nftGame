
import { NFTService } from './NFTService';
import type { NFTInfo } from './NFTService';


// 从后端获取这些信息，然后填在这里
const CONTRACT_CONFIG = {

  address: '0x1f2ff50ce23d1771D77c9e700ba3c9C4C5fd313B', 
  
  abi: [
    {
  "_format": "hh-sol-artifact-1",
  "contractName": "Pets",
  "sourceName": "contracts/Pets.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ERC721EnumerableForbiddenBatchMint",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721IncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721InsufficientApproval",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC721InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC721NonexistentToken",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "ERC721OutOfBoundsIndex",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
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
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_fromTokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_toTokenId",
          "type": "uint256"
        }
      ],
      "name": "BatchMetadataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "MetadataUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
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
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "indexed": false,
          "internalType": "bool",
          "name": "isError",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_user_Exp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "count",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "add_user_exp_Event",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "current_pet_name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_user_Exp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_pet_Happy",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_pet_Exp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_pet_Level",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "getCurrentTimestamp_Event",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isError",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_user_Exp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_pet_Level",
          "type": "uint256"
        }
      ],
      "name": "mint_Event",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "set_pet_name_Event",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isError",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_user_Exp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_pet_Exp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "current_pet_Level",
          "type": "uint256"
        }
      ],
      "name": "shopping_Event",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "add_pet_level",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "add_user_exp",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
      "inputs": [],
      "name": "getCurrentTimestamp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_history",
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
          "internalType": "uint256",
          "name": "time_Pass",
          "type": "uint256"
        }
      ],
      "name": "happy_calculate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
      "inputs": [],
      "name": "mint",
      "outputs": [],
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
      "inputs": [],
      "name": "owner",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "production",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nutrition",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "happy_value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
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
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "in_name",
          "type": "string"
        }
      ],
      "name": "set_pet_name",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "shopping",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startgetCurrentTimestamp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "level",
          "type": "uint256"
        }
      ],
      "name": "updateUri",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052604051806060016040528060358152602001620054d560359139601790816200002e919062000747565b503480156200003c57600080fd5b50604051620055de380380620055de833981810160405281019062000062919062000898565b806040518060400160405280600481526020017f50657473000000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f70657400000000000000000000000000000000000000000000000000000000008152508160009081620000e0919062000747565b508060019081620000f2919062000747565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200016a5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001619190620008db565b60405180910390fd5b6200017b81620001a360201b60201c565b506200018c6200026960201b60201c565b6200019c6200039a60201b60201c565b50620008f8565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60405180608001604052806001815260200160648152602001600a815260200160c881525060156000600181526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015590505060405180608001604052806002815260200160c881526020016019815260200161012c81525060156000600281526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003015590505060405180608001604052806003815260200161012c815260200160468152602001610190815250601560006003815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030155905050565b604051806060016040528060358152602001620054d560359139600d6000600181526020019081526020016000209081620003d6919062000747565b50604051806060016040528060358152602001620055a960359139600d600060028152602001908152602001600020908162000413919062000747565b506040518060600160405280603581526020016200557460359139600d600060038152602001908152602001600020908162000450919062000747565b506040518060600160405280603581526020016200550a60359139600d60006004815260200190815260200160002090816200048d919062000747565b506040518060600160405280603581526020016200553f60359139600d6000600581526020019081526020016000209081620004ca919062000747565b50565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200054f57607f821691505b60208210810362000565576200056462000507565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005cf7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000590565b620005db868362000590565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000628620006226200061c84620005f3565b620005fd565b620005f3565b9050919050565b6000819050919050565b620006448362000607565b6200065c62000653826200062f565b8484546200059d565b825550505050565b600090565b6200067362000664565b6200068081848462000639565b505050565b5b81811015620006a8576200069c60008262000669565b60018101905062000686565b5050565b601f821115620006f757620006c1816200056b565b620006cc8462000580565b81016020851015620006dc578190505b620006f4620006eb8562000580565b83018262000685565b50505b505050565b600082821c905092915050565b60006200071c60001984600802620006fc565b1980831691505092915050565b600062000737838362000709565b9150826002028217905092915050565b6200075282620004cd565b67ffffffffffffffff8111156200076e576200076d620004d8565b5b6200077a825462000536565b62000787828285620006ac565b600060209050601f831160018114620007bf5760008415620007aa578287015190505b620007b6858262000729565b86555062000826565b601f198416620007cf866200056b565b60005b82811015620007f957848901518255600182019150602085019450602081019050620007d2565b8683101562000819578489015162000815601f89168262000709565b8355505b6001600288020188555050505b505050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620008608262000833565b9050919050565b620008728162000853565b81146200087e57600080fd5b50565b600081519050620008928162000867565b92915050565b600060208284031215620008b157620008b06200082e565b5b6000620008c18482850162000881565b91505092915050565b620008d58162000853565b82525050565b6000602082019050620008f26000830184620008ca565b92915050565b614bcd80620009086000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80636c9230db11610104578063a26a7d5a116100a2578063cc903eee11610071578063cc903eee1461050c578063e137f7c014610528578063e985e9c514610544578063f2fde38b14610574576101da565b8063a26a7d5a1461045d578063b88d4fde14610490578063c87b56dd146104ac578063c8c79a9b146104dc576101da565b806382ef2d9e116100de57806382ef2d9e146103e95780638da5cb5b1461040557806395d89b4114610423578063a22cb46514610441576101da565b80636c9230db146103a557806370a08231146103af578063715018a6146103df576101da565b806323b872dd1161017c5780634ae479401161014b5780634ae479401461031d5780634f6ccce7146103275780635fe36f0a146103575780636352211e14610375576101da565b806323b872dd146102ab5780632f745c59146102c75780633a7b6995146102f757806342842e0e14610301576101da565b8063095ea7b3116101b8578063095ea7b31461025d5780630fdd153e146102795780631249c58b1461028357806318160ddd1461028d576101da565b806301ffc9a7146101df57806306fdde031461020f578063081812fc1461022d575b600080fd5b6101f960048036038101906101f49190613752565b610590565b604051610206919061379a565b60405180910390f35b6102176105a2565b6040516102249190613845565b60405180910390f35b6102476004803603810190610242919061389d565b610634565b604051610254919061390b565b60405180910390f35b61027760048036038101906102729190613952565b610650565b005b610281610666565b005b61028b6106f2565b005b610295610b28565b6040516102a291906139a1565b60405180910390f35b6102c560048036038101906102c091906139bc565b610b35565b005b6102e160048036038101906102dc9190613952565b610c37565b6040516102ee91906139a1565b60405180910390f35b6102ff610ce0565b005b61031b600480360381019061031691906139bc565b610ea1565b005b610325610ec1565b005b610341600480360381019061033c919061389d565b611018565b60405161034e91906139a1565b60405180910390f35b61035f61108e565b60405161036c91906139a1565b60405180910390f35b61038f600480360381019061038a919061389d565b6110d5565b60405161039c919061390b565b60405180910390f35b6103ad6110e7565b005b6103c960048036038101906103c49190613a0f565b6115e2565b6040516103d691906139a1565b60405180910390f35b6103e761169c565b005b61040360048036038101906103fe919061389d565b6116b0565b005b61040d611834565b60405161041a919061390b565b60405180910390f35b61042b61185e565b6040516104389190613845565b60405180910390f35b61045b60048036038101906104569190613a68565b6118f0565b005b6104776004803603810190610472919061389d565b611906565b6040516104879493929190613aa8565b60405180910390f35b6104aa60048036038101906104a59190613c22565b611936565b005b6104c660048036038101906104c1919061389d565b61195b565b6040516104d39190613845565b60405180910390f35b6104f660048036038101906104f1919061389d565b61196d565b60405161050391906139a1565b60405180910390f35b6105266004803603810190610521919061389d565b611b7d565b005b610542600480360381019061053d9190613d46565b611f25565b005b61055e60048036038101906105599190613d8f565b611faa565b60405161056b919061379a565b60405180910390f35b61058e60048036038101906105899190613a0f565b61203e565b005b600061059b826120c4565b9050919050565b6060600080546105b190613dfe565b80601f01602080910402602001604051908101604052809291908181526020018280546105dd90613dfe565b801561062a5780601f106105ff5761010080835404028352916020019161062a565b820191906000526020600020905b81548152906001019060200180831161060d57829003601f168201915b5050505050905090565b600061063f82612125565b50610649826121ad565b9050919050565b610662828261065d6121ea565b6121f2565b5050565b42600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610258601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b6064600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107f9577f2b77007e62eec21381298934453ce192e21a0e5ab4cd1ce2ce474690be72f70c6001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516107ec93929190613ea1565b60405180910390a1610b26565b6001610804336115e2565b106108c8577f2b77007e62eec21381298934453ce192e21a0e5ab4cd1ce2ce474690be72f70c6001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516108bb93929190613f37565b60405180910390a1610b25565b6000601660008154809291906108dd90613fb0565b9190505590506108ed3382612204565b61098181601780546108fe90613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461092a90613dfe565b80156109775780601f1061094c57610100808354040283529160200191610977565b820191906000526020600020905b81548152906001019060200180831161095a57829003601f168201915b5050505050612222565b80601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109cd610666565b6064600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a1d9190613ff8565b925050819055506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f2b77007e62eec21381298934453ce192e21a0e5ab4cd1ce2ce474690be72f70c6000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051610b1b93929190614078565b60405180910390a1505b5b565b6000600880549050905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba75760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610b9e919061390b565b60405180910390fd5b6000610bbb8383610bb66121ea565b61227e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c31578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610c28939291906140c2565b60405180910390fd5b50505050565b6000610c42836115e2565b8210610c875782826040517fa57d13dc000000000000000000000000000000000000000000000000000000008152600401610c7e9291906140f9565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b6001601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d309190614122565b925050819055506064600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d879190614122565b925050819055506001601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dde9190614122565b925050819055507f0434ee65d635048f87115011189d3d9e02f5938073e5d9fc91225507f63680546000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051610e97939291906141a2565b60405180910390a1565b610ebc83838360405180602001604052806000815250611936565b505050565b60005b6064600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610fc257600190506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f5f9190614122565b925050819055506064600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fb69190613ff8565b92505081905550610ec4565b801561101557611010601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b0565b600090505b50565b6000611022610b28565b8210611068576000826040517fa57d13dc00000000000000000000000000000000000000000000000000000000815260040161105f9291906140f9565b60405180910390fd5b6008828154811061107c5761107b6141ec565b5b90600052602060002001549050919050565b6000601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60006110e082612125565b9050919050565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540361113357600080fd5b6000429050600061118d600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111889190613ff8565b61196d565b905081600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008103611359577fef86f3524cdf8f57adffc9c73399f445efb6d1a16f93adb03513a84b43fb59b1601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460405161134c959493929190614326565b60405180910390a16115de565b600181036114a1577fef86f3524cdf8f57adffc9c73399f445efb6d1a16f93adb03513a84b43fb59b1601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051611494959493929190614424565b60405180910390a16115dd565b7fef86f3524cdf8f57adffc9c73399f445efb6d1a16f93adb03513a84b43fb59b1601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516115d49594939291906144dd565b60405180910390a15b5b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116555760006040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161164c919061390b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6116a4612294565b6116ae600061231b565b565b6000600d600083815260200190815260200160002080546116d090613dfe565b80601f01602080910402602001604051908101604052809291908181526020018280546116fc90613dfe565b80156117495780601f1061171e57610100808354040283529160200191611749565b820191906000526020600020905b81548152906001019060200180831161172c57829003601f168201915b5050505050905060008151036117e7576017805461176690613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461179290613dfe565b80156117df5780601f106117b4576101008083540402835291602001916117df565b820191906000526020600020905b8154815290600101906020018083116117c257829003601f168201915b505050505090505b611830601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482612222565b5050565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461186d90613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461189990613dfe565b80156118e65780601f106118bb576101008083540402835291602001916118e6565b820191906000526020600020905b8154815290600101906020018083116118c957829003601f168201915b5050505050905090565b6119026118fb6121ea565b83836123e1565b5050565b60156020528060005260406000206000915090508060000154908060010154908060020154908060030154905084565b611941848484610b35565b61195561194c6121ea565b85858585612550565b50505050565b606061196682612701565b9050919050565b6000806018603c80856119809190614579565b61198a9190614579565b61199491906145aa565b905080601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611a3d5780601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a2c9190613ff8565b925050819055506000915050611b78565b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410611b72576001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b199190613ff8565b92505081905550611b68601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b0565b6001915050611b78565b60029150505b919050565b6015600082815260200190815260200160002060010154600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015611cda577f8e1be9a57e40f7a0b713d827da1a5e7110272d1cef8d9c1fb553dfa0711154086001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051611ccd949392919061465e565b60405180910390a1611f22565b6015600082815260200190815260200160002060010154600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d3f9190613ff8565b925050819055506015600082815260200190815260200160002060020154600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611dab9190614122565b925050819055506015600082815260200190815260200160002060030154601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611e179190614122565b92505081905550611e26610ec1565b7f8e1be9a57e40f7a0b713d827da1a5e7110272d1cef8d9c1fb553dfa0711154086000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051611f199493929190614702565b60405180910390a15b50565b80601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209081611f7191906148e7565b507f334c6972d7f5d47de6a757e53999c131629d1c23ad402e5ff5a6619398a8d7a9604051611f9f90614a05565b60405180910390a150565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b612046612294565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036120b85760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016120af919061390b565b60405180910390fd5b6120c18161231b565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061211e575061211d82612814565b5b9050919050565b6000806121318361288e565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036121a457826040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161219b91906139a1565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6121ff83838360016128cb565b505050565b61221e828260405180602001604052806000815250612a90565b5050565b80600a6000848152602001908152602001600020908161224291906148e7565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce78260405161227291906139a1565b60405180910390a15050565b600061228b848484612ab4565b90509392505050565b61229c6121ea565b73ffffffffffffffffffffffffffffffffffffffff166122ba611834565b73ffffffffffffffffffffffffffffffffffffffff1614612319576122dd6121ea565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401612310919061390b565b60405180910390fd5b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361245257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401612449919061390b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612543919061379a565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156126fa578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016125af9493929190614a7a565b6020604051808303816000875af19250505080156125eb57506040513d601f19601f820116820180604052508101906125e89190614adb565b60015b61266f573d806000811461261b576040519150601f19603f3d011682016040523d82523d6000602084013e612620565b606091505b50600081510361266757836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161265e919061390b565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146126f857836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016126ef919061390b565b60405180910390fd5b505b5050505050565b606061270c82612125565b506000600a6000848152602001908152602001600020805461272d90613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461275990613dfe565b80156127a65780601f1061277b576101008083540402835291602001916127a6565b820191906000526020600020905b81548152906001019060200180831161278957829003601f168201915b5050505050905060006127b7612bd1565b905060008151036127cc57819250505061280f565b6000825111156128015780826040516020016127e9929190614b44565b6040516020818303038152906040529250505061280f565b61280a84612be8565b925050505b919050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612887575061288682612c51565b5b9050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806129045750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15612a3857600061291484612125565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561297f57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561299257506129908184611faa565b155b156129d457826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016129cb919061390b565b60405180910390fd5b8115612a3657838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b612a9a8383612d33565b612aaf612aa56121ea565b6000858585612550565b505050565b600080612ac2858585612e2c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612b0657612b0184613046565b612b45565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612b4457612b43818561308f565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603612b8757612b828461317a565b612bc6565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612bc557612bc4858561324b565b5b5b809150509392505050565b606060405180602001604052806000815250905090565b6060612bf382612125565b506000612bfe612bd1565b90506000815111612c1e5760405180602001604052806000815250612c49565b80612c28846132d6565b604051602001612c39929190614b44565b6040516020818303038152906040525b915050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612d1c57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80612d2c5750612d2b826133a4565b5b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612da55760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612d9c919061390b565b60405180910390fd5b6000612db38383600061227e565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612e275760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401612e1e919061390b565b60405180910390fd5b505050565b600080612e388461288e565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612e7a57612e7981848661340e565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612f0b57612ebc6000856000806128cb565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612f8e576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b600061309a836115e2565b90506000600760008481526020019081526020016000205490506000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508282146131465760008160008581526020019081526020016000205490508082600085815260200190815260200160002081905550826007600083815260200190815260200160002081905550505b6007600085815260200190815260200160002060009055806000848152602001908152602001600020600090555050505050565b6000600160088054905061318e9190613ff8565b90506000600960008481526020019081526020016000205490506000600883815481106131be576131bd6141ec565b5b9060005260206000200154905080600883815481106131e0576131df6141ec565b5b90600052602060002001819055508160096000838152602001908152602001600020819055506009600085815260200190815260200160002060009055600880548061322f5761322e614b68565b5b6001900381819060005260206000200160009055905550505050565b60006001613258846115e2565b6132629190613ff8565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b6060600060016132e5846134d2565b01905060008167ffffffffffffffff81111561330457613303613af7565b5b6040519080825280601f01601f1916602001820160405280156133365781602001600182028036833780820191505090505b509050600082602083010190505b600115613399578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161338d5761338c61454a565b5b04945060008503613344575b819350505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b613419838383613625565b6134cd57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361348e57806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161348591906139a1565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016134c49291906140f9565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613530577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816135265761352561454a565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061356d576d04ee2d6d415b85acef810000000083816135635761356261454a565b5b0492506020810190505b662386f26fc10000831061359c57662386f26fc1000083816135925761359161454a565b5b0492506010810190505b6305f5e10083106135c5576305f5e10083816135bb576135ba61454a565b5b0492506008810190505b61271083106135ea5761271083816135e0576135df61454a565b5b0492506004810190505b6064831061360d57606483816136035761360261454a565b5b0492506002810190505b600a831061361c576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156136dd57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061369e575061369d8484611faa565b5b806136dc57508273ffffffffffffffffffffffffffffffffffffffff166136c4836121ad565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61372f816136fa565b811461373a57600080fd5b50565b60008135905061374c81613726565b92915050565b600060208284031215613768576137676136f0565b5b60006137768482850161373d565b91505092915050565b60008115159050919050565b6137948161377f565b82525050565b60006020820190506137af600083018461378b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156137ef5780820151818401526020810190506137d4565b60008484015250505050565b6000601f19601f8301169050919050565b6000613817826137b5565b61382181856137c0565b93506138318185602086016137d1565b61383a816137fb565b840191505092915050565b6000602082019050818103600083015261385f818461380c565b905092915050565b6000819050919050565b61387a81613867565b811461388557600080fd5b50565b60008135905061389781613871565b92915050565b6000602082840312156138b3576138b26136f0565b5b60006138c184828501613888565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006138f5826138ca565b9050919050565b613905816138ea565b82525050565b600060208201905061392060008301846138fc565b92915050565b61392f816138ea565b811461393a57600080fd5b50565b60008135905061394c81613926565b92915050565b60008060408385031215613969576139686136f0565b5b60006139778582860161393d565b925050602061398885828601613888565b9150509250929050565b61399b81613867565b82525050565b60006020820190506139b66000830184613992565b92915050565b6000806000606084860312156139d5576139d46136f0565b5b60006139e38682870161393d565b93505060206139f48682870161393d565b9250506040613a0586828701613888565b9150509250925092565b600060208284031215613a2557613a246136f0565b5b6000613a338482850161393d565b91505092915050565b613a458161377f565b8114613a5057600080fd5b50565b600081359050613a6281613a3c565b92915050565b60008060408385031215613a7f57613a7e6136f0565b5b6000613a8d8582860161393d565b9250506020613a9e85828601613a53565b9150509250929050565b6000608082019050613abd6000830187613992565b613aca6020830186613992565b613ad76040830185613992565b613ae46060830184613992565b95945050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b613b2f826137fb565b810181811067ffffffffffffffff82111715613b4e57613b4d613af7565b5b80604052505050565b6000613b616136e6565b9050613b6d8282613b26565b919050565b600067ffffffffffffffff821115613b8d57613b8c613af7565b5b613b96826137fb565b9050602081019050919050565b82818337600083830152505050565b6000613bc5613bc084613b72565b613b57565b905082815260208101848484011115613be157613be0613af2565b5b613bec848285613ba3565b509392505050565b600082601f830112613c0957613c08613aed565b5b8135613c19848260208601613bb2565b91505092915050565b60008060008060808587031215613c3c57613c3b6136f0565b5b6000613c4a8782880161393d565b9450506020613c5b8782880161393d565b9350506040613c6c87828801613888565b925050606085013567ffffffffffffffff811115613c8d57613c8c6136f5565b5b613c9987828801613bf4565b91505092959194509250565b600067ffffffffffffffff821115613cc057613cbf613af7565b5b613cc9826137fb565b9050602081019050919050565b6000613ce9613ce484613ca5565b613b57565b905082815260208101848484011115613d0557613d04613af2565b5b613d10848285613ba3565b509392505050565b600082601f830112613d2d57613d2c613aed565b5b8135613d3d848260208601613cd6565b91505092915050565b600060208284031215613d5c57613d5b6136f0565b5b600082013567ffffffffffffffff811115613d7a57613d796136f5565b5b613d8684828501613d18565b91505092915050565b60008060408385031215613da657613da56136f0565b5b6000613db48582860161393d565b9250506020613dc58582860161393d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613e1657607f821691505b602082108103613e2957613e28613dcf565b5b50919050565b7f596f75206e656564206174206c656173742031303020657870657269656e636560008201527f20706f696e747320746f20676574206120706574210000000000000000000000602082015250565b6000613e8b6035836137c0565b9150613e9682613e2f565b604082019050919050565b6000608082019050613eb6600083018661378b565b8181036020830152613ec781613e7e565b9050613ed66040830185613992565b613ee36060830184613992565b949350505050565b7f4120706572736f6e206f6e6c792063616e2068617665206f6e65207065742100600082015250565b6000613f21601f836137c0565b9150613f2c82613eeb565b602082019050919050565b6000608082019050613f4c600083018661378b565b8181036020830152613f5d81613f14565b9050613f6c6040830185613992565b613f796060830184613992565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613fbb82613867565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613fed57613fec613f81565b5b600182019050919050565b600061400382613867565b915061400e83613867565b925082820390508181111561402657614025613f81565b5b92915050565b7f43726561742070657473207375636365737366756c6c79210000000000000000600082015250565b60006140626018836137c0565b915061406d8261402c565b602082019050919050565b600060808201905061408d600083018661378b565b818103602083015261409e81614055565b90506140ad6040830185613992565b6140ba6060830184613992565b949350505050565b60006060820190506140d760008301866138fc565b6140e46020830185613992565b6140f160408301846138fc565b949350505050565b600060408201905061410e60008301856138fc565b61411b6020830184613992565b9392505050565b600061412d82613867565b915061413883613867565b92508282019050808211156141505761414f613f81565b5b92915050565b7f5369676e20696e207375636365737366756c0000000000000000000000000000600082015250565b600061418c6012836137c0565b915061419782614156565b602082019050919050565b60006080820190506141b7600083018661378b565b6141c46020830185613992565b6141d16040830184613992565b81810360608301526141e28161417f565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008190508160005260206000209050919050565b6000815461423d81613dfe565b61424781866137c0565b945060018216600081146142625760018114614278576142ab565b60ff1983168652811515602002860193506142ab565b6142818561421b565b60005b838110156142a357815481890152600182019150602081019050614284565b808801955050505b50505092915050565b7f706c6561736520617474656e74696f6e20796f75722070657420656d6f74696f60008201527f6e21000000000000000000000000000000000000000000000000000000000000602082015250565b60006143106022836137c0565b915061431b826142b4565b604082019050919050565b600060c08201905081810360008301526143408188614230565b905061434f6020830187613992565b61435c6040830186613992565b6143696060830185613992565b6143766080830184613992565b81810360a083015261438781614303565b90509695505050505050565b6000819050919050565b6000819050919050565b60006143c26143bd6143b884614393565b61439d565b613867565b9050919050565b6143d2816143a7565b82525050565b7f4c6576656c207375627374726163742031000000000000000000000000000000600082015250565b600061440e6011836137c0565b9150614419826143d8565b602082019050919050565b600060c082019050818103600083015261443e8188614230565b905061444d6020830187613992565b61445a60408301866143c9565b6144676060830185613992565b6144746080830184613992565b81810360a083015261448581614401565b90509695505050505050565b7f596f7572207065742773206c6576656c20697320616c72656164792030000000600082015250565b60006144c7601d836137c0565b91506144d282614491565b602082019050919050565b600060c08201905081810360008301526144f78188614230565b90506145066020830187613992565b61451360408301866143c9565b6145206060830185613992565b61452d6080830184613992565b81810360a083015261453e816144ba565b90509695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061458482613867565b915061458f83613867565b92508261459f5761459e61454a565b5b828204905092915050565b60006145b582613867565b91506145c083613867565b92508282026145ce81613867565b915082820484148315176145e5576145e4613f81565b5b5092915050565b7f596f7520646f6e2774206861766520656e6f75676820657870657269656e636560008201527f20706f696e747320746f2062757920746869732070726f64756374696f6e2100602082015250565b6000614648603f836137c0565b9150614653826145ec565b604082019050919050565b600060a082019050614673600083018761378b565b81810360208301526146848161463b565b90506146936040830186613992565b6146a06060830185613992565b6146ad6080830184613992565b95945050505050565b7f5075726368617365205375636365737366756c00000000000000000000000000600082015250565b60006146ec6013836137c0565b91506146f7826146b6565b602082019050919050565b600060a082019050614717600083018761378b565b8181036020830152614728816146df565b90506147376040830186613992565b6147446060830185613992565b6147516080830184613992565b95945050505050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026147a77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261476a565b6147b1868361476a565b95508019841693508086168417925050509392505050565b60006147e46147df6147da84613867565b61439d565b613867565b9050919050565b6000819050919050565b6147fe836147c9565b61481261480a826147eb565b848454614777565b825550505050565b600090565b61482761481a565b6148328184846147f5565b505050565b5b818110156148565761484b60008261481f565b600181019050614838565b5050565b601f82111561489b5761486c8161421b565b6148758461475a565b81016020851015614884578190505b6148986148908561475a565b830182614837565b50505b505050565b600082821c905092915050565b60006148be600019846008026148a0565b1980831691505092915050565b60006148d783836148ad565b9150826002028217905092915050565b6148f0826137b5565b67ffffffffffffffff81111561490957614908613af7565b5b6149138254613dfe565b61491e82828561485a565b600060209050601f831160018114614951576000841561493f578287015190505b61494985826148cb565b8655506149b1565b601f19841661495f8661421b565b60005b8281101561498757848901518255600182019150602085019450602081019050614962565b868310156149a457848901516149a0601f8916826148ad565b8355505b6001600288020188555050505b505050505050565b7f53657420706574206e616d65207375636365737366756c6c7900000000000000600082015250565b60006149ef6019836137c0565b91506149fa826149b9565b602082019050919050565b60006020820190508181036000830152614a1e816149e2565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000614a4c82614a25565b614a568185614a30565b9350614a668185602086016137d1565b614a6f816137fb565b840191505092915050565b6000608082019050614a8f60008301876138fc565b614a9c60208301866138fc565b614aa96040830185613992565b8181036060830152614abb8184614a41565b905095945050505050565b600081519050614ad581613726565b92915050565b600060208284031215614af157614af06136f0565b5b6000614aff84828501614ac6565b91505092915050565b600081905092915050565b6000614b1e826137b5565b614b288185614b08565b9350614b388185602086016137d1565b80840191505092915050565b6000614b508285614b13565b9150614b5c8284614b13565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220d0cce68186d3394c2e55dee824804868213402278f158c86bcd43c5422e3bc0264736f6c63430008180033697066733a2f2f516d583969473658764e3979777673427768656975647958635375576f4a5046755a564846775056644347463263697066733a2f2f516d634d5636566631666f4c714d43337946623567703865667456376765463778787a6f6b617651514536396764697066733a2f2f516d655175783761484761513355676d69525746524c5757425945785a436f597167454e77716f737a706f35485a697066733a2f2f516d634b45417237393374375550566e704c6b4b6453584255347777443431696b7063724d79747752454e755538697066733a2f2f516d634347325172686b796941433845717455706a756e37545565464e41415467674e774c654a4565443875624d",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101da5760003560e01c80636c9230db11610104578063a26a7d5a116100a2578063cc903eee11610071578063cc903eee1461050c578063e137f7c014610528578063e985e9c514610544578063f2fde38b14610574576101da565b8063a26a7d5a1461045d578063b88d4fde14610490578063c87b56dd146104ac578063c8c79a9b146104dc576101da565b806382ef2d9e116100de57806382ef2d9e146103e95780638da5cb5b1461040557806395d89b4114610423578063a22cb46514610441576101da565b80636c9230db146103a557806370a08231146103af578063715018a6146103df576101da565b806323b872dd1161017c5780634ae479401161014b5780634ae479401461031d5780634f6ccce7146103275780635fe36f0a146103575780636352211e14610375576101da565b806323b872dd146102ab5780632f745c59146102c75780633a7b6995146102f757806342842e0e14610301576101da565b8063095ea7b3116101b8578063095ea7b31461025d5780630fdd153e146102795780631249c58b1461028357806318160ddd1461028d576101da565b806301ffc9a7146101df57806306fdde031461020f578063081812fc1461022d575b600080fd5b6101f960048036038101906101f49190613752565b610590565b604051610206919061379a565b60405180910390f35b6102176105a2565b6040516102249190613845565b60405180910390f35b6102476004803603810190610242919061389d565b610634565b604051610254919061390b565b60405180910390f35b61027760048036038101906102729190613952565b610650565b005b610281610666565b005b61028b6106f2565b005b610295610b28565b6040516102a291906139a1565b60405180910390f35b6102c560048036038101906102c091906139bc565b610b35565b005b6102e160048036038101906102dc9190613952565b610c37565b6040516102ee91906139a1565b60405180910390f35b6102ff610ce0565b005b61031b600480360381019061031691906139bc565b610ea1565b005b610325610ec1565b005b610341600480360381019061033c919061389d565b611018565b60405161034e91906139a1565b60405180910390f35b61035f61108e565b60405161036c91906139a1565b60405180910390f35b61038f600480360381019061038a919061389d565b6110d5565b60405161039c919061390b565b60405180910390f35b6103ad6110e7565b005b6103c960048036038101906103c49190613a0f565b6115e2565b6040516103d691906139a1565b60405180910390f35b6103e761169c565b005b61040360048036038101906103fe919061389d565b6116b0565b005b61040d611834565b60405161041a919061390b565b60405180910390f35b61042b61185e565b6040516104389190613845565b60405180910390f35b61045b60048036038101906104569190613a68565b6118f0565b005b6104776004803603810190610472919061389d565b611906565b6040516104879493929190613aa8565b60405180910390f35b6104aa60048036038101906104a59190613c22565b611936565b005b6104c660048036038101906104c1919061389d565b61195b565b6040516104d39190613845565b60405180910390f35b6104f660048036038101906104f1919061389d565b61196d565b60405161050391906139a1565b60405180910390f35b6105266004803603810190610521919061389d565b611b7d565b005b610542600480360381019061053d9190613d46565b611f25565b005b61055e60048036038101906105599190613d8f565b611faa565b60405161056b919061379a565b60405180910390f35b61058e60048036038101906105899190613a0f565b61203e565b005b600061059b826120c4565b9050919050565b6060600080546105b190613dfe565b80601f01602080910402602001604051908101604052809291908181526020018280546105dd90613dfe565b801561062a5780601f106105ff5761010080835404028352916020019161062a565b820191906000526020600020905b81548152906001019060200180831161060d57829003601f168201915b5050505050905090565b600061063f82612125565b50610649826121ad565b9050919050565b610662828261065d6121ea565b6121f2565b5050565b42600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610258601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b6064600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107f9577f2b77007e62eec21381298934453ce192e21a0e5ab4cd1ce2ce474690be72f70c6001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516107ec93929190613ea1565b60405180910390a1610b26565b6001610804336115e2565b106108c8577f2b77007e62eec21381298934453ce192e21a0e5ab4cd1ce2ce474690be72f70c6001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516108bb93929190613f37565b60405180910390a1610b25565b6000601660008154809291906108dd90613fb0565b9190505590506108ed3382612204565b61098181601780546108fe90613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461092a90613dfe565b80156109775780601f1061094c57610100808354040283529160200191610977565b820191906000526020600020905b81548152906001019060200180831161095a57829003601f168201915b5050505050612222565b80601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109cd610666565b6064600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a1d9190613ff8565b925050819055506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f2b77007e62eec21381298934453ce192e21a0e5ab4cd1ce2ce474690be72f70c6000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051610b1b93929190614078565b60405180910390a1505b5b565b6000600880549050905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba75760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610b9e919061390b565b60405180910390fd5b6000610bbb8383610bb66121ea565b61227e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c31578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610c28939291906140c2565b60405180910390fd5b50505050565b6000610c42836115e2565b8210610c875782826040517fa57d13dc000000000000000000000000000000000000000000000000000000008152600401610c7e9291906140f9565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b6001601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d309190614122565b925050819055506064600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d879190614122565b925050819055506001601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dde9190614122565b925050819055507f0434ee65d635048f87115011189d3d9e02f5938073e5d9fc91225507f63680546000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051610e97939291906141a2565b60405180910390a1565b610ebc83838360405180602001604052806000815250611936565b505050565b60005b6064600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610fc257600190506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f5f9190614122565b925050819055506064600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fb69190613ff8565b92505081905550610ec4565b801561101557611010601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b0565b600090505b50565b6000611022610b28565b8210611068576000826040517fa57d13dc00000000000000000000000000000000000000000000000000000000815260040161105f9291906140f9565b60405180910390fd5b6008828154811061107c5761107b6141ec565b5b90600052602060002001549050919050565b6000601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b60006110e082612125565b9050919050565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540361113357600080fd5b6000429050600061118d600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836111889190613ff8565b61196d565b905081600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008103611359577fef86f3524cdf8f57adffc9c73399f445efb6d1a16f93adb03513a84b43fb59b1601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460405161134c959493929190614326565b60405180910390a16115de565b600181036114a1577fef86f3524cdf8f57adffc9c73399f445efb6d1a16f93adb03513a84b43fb59b1601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051611494959493929190614424565b60405180910390a16115dd565b7fef86f3524cdf8f57adffc9c73399f445efb6d1a16f93adb03513a84b43fb59b1601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516115d49594939291906144dd565b60405180910390a15b5b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116555760006040517f89c62b6400000000000000000000000000000000000000000000000000000000815260040161164c919061390b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6116a4612294565b6116ae600061231b565b565b6000600d600083815260200190815260200160002080546116d090613dfe565b80601f01602080910402602001604051908101604052809291908181526020018280546116fc90613dfe565b80156117495780601f1061171e57610100808354040283529160200191611749565b820191906000526020600020905b81548152906001019060200180831161172c57829003601f168201915b5050505050905060008151036117e7576017805461176690613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461179290613dfe565b80156117df5780601f106117b4576101008083540402835291602001916117df565b820191906000526020600020905b8154815290600101906020018083116117c257829003601f168201915b505050505090505b611830601460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482612222565b5050565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461186d90613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461189990613dfe565b80156118e65780601f106118bb576101008083540402835291602001916118e6565b820191906000526020600020905b8154815290600101906020018083116118c957829003601f168201915b5050505050905090565b6119026118fb6121ea565b83836123e1565b5050565b60156020528060005260406000206000915090508060000154908060010154908060020154908060030154905084565b611941848484610b35565b61195561194c6121ea565b85858585612550565b50505050565b606061196682612701565b9050919050565b6000806018603c80856119809190614579565b61198a9190614579565b61199491906145aa565b905080601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115611a3d5780601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a2c9190613ff8565b925050819055506000915050611b78565b6000601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410611b72576001601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611b199190613ff8565b92505081905550611b68601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546116b0565b6001915050611b78565b60029150505b919050565b6015600082815260200190815260200160002060010154600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015611cda577f8e1be9a57e40f7a0b713d827da1a5e7110272d1cef8d9c1fb553dfa0711154086001600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051611ccd949392919061465e565b60405180910390a1611f22565b6015600082815260200190815260200160002060010154600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d3f9190613ff8565b925050819055506015600082815260200190815260200160002060020154600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611dab9190614122565b925050819055506015600082815260200190815260200160002060030154601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611e179190614122565b92505081905550611e26610ec1565b7f8e1be9a57e40f7a0b713d827da1a5e7110272d1cef8d9c1fb553dfa0711154086000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054604051611f199493929190614702565b60405180910390a15b50565b80601360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209081611f7191906148e7565b507f334c6972d7f5d47de6a757e53999c131629d1c23ad402e5ff5a6619398a8d7a9604051611f9f90614a05565b60405180910390a150565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b612046612294565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036120b85760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016120af919061390b565b60405180910390fd5b6120c18161231b565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061211e575061211d82612814565b5b9050919050565b6000806121318361288e565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036121a457826040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161219b91906139a1565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6121ff83838360016128cb565b505050565b61221e828260405180602001604052806000815250612a90565b5050565b80600a6000848152602001908152602001600020908161224291906148e7565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce78260405161227291906139a1565b60405180910390a15050565b600061228b848484612ab4565b90509392505050565b61229c6121ea565b73ffffffffffffffffffffffffffffffffffffffff166122ba611834565b73ffffffffffffffffffffffffffffffffffffffff1614612319576122dd6121ea565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401612310919061390b565b60405180910390fd5b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361245257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401612449919061390b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051612543919061379a565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156126fa578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016125af9493929190614a7a565b6020604051808303816000875af19250505080156125eb57506040513d601f19601f820116820180604052508101906125e89190614adb565b60015b61266f573d806000811461261b576040519150601f19603f3d011682016040523d82523d6000602084013e612620565b606091505b50600081510361266757836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161265e919061390b565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146126f857836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016126ef919061390b565b60405180910390fd5b505b5050505050565b606061270c82612125565b506000600a6000848152602001908152602001600020805461272d90613dfe565b80601f016020809104026020016040519081016040528092919081815260200182805461275990613dfe565b80156127a65780601f1061277b576101008083540402835291602001916127a6565b820191906000526020600020905b81548152906001019060200180831161278957829003601f168201915b5050505050905060006127b7612bd1565b905060008151036127cc57819250505061280f565b6000825111156128015780826040516020016127e9929190614b44565b6040516020818303038152906040529250505061280f565b61280a84612be8565b925050505b919050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612887575061288682612c51565b5b9050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806129045750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15612a3857600061291484612125565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561297f57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561299257506129908184611faa565b155b156129d457826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016129cb919061390b565b60405180910390fd5b8115612a3657838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b612a9a8383612d33565b612aaf612aa56121ea565b6000858585612550565b505050565b600080612ac2858585612e2c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612b0657612b0184613046565b612b45565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612b4457612b43818561308f565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603612b8757612b828461317a565b612bc6565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612bc557612bc4858561324b565b5b5b809150509392505050565b606060405180602001604052806000815250905090565b6060612bf382612125565b506000612bfe612bd1565b90506000815111612c1e5760405180602001604052806000815250612c49565b80612c28846132d6565b604051602001612c39929190614b44565b6040516020818303038152906040525b915050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612d1c57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80612d2c5750612d2b826133a4565b5b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612da55760006040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401612d9c919061390b565b60405180910390fd5b6000612db38383600061227e565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612e275760006040517f73c6ac6e000000000000000000000000000000000000000000000000000000008152600401612e1e919061390b565b60405180910390fd5b505050565b600080612e388461288e565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612e7a57612e7981848661340e565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612f0b57612ebc6000856000806128cb565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612f8e576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b600061309a836115e2565b90506000600760008481526020019081526020016000205490506000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508282146131465760008160008581526020019081526020016000205490508082600085815260200190815260200160002081905550826007600083815260200190815260200160002081905550505b6007600085815260200190815260200160002060009055806000848152602001908152602001600020600090555050505050565b6000600160088054905061318e9190613ff8565b90506000600960008481526020019081526020016000205490506000600883815481106131be576131bd6141ec565b5b9060005260206000200154905080600883815481106131e0576131df6141ec565b5b90600052602060002001819055508160096000838152602001908152602001600020819055506009600085815260200190815260200160002060009055600880548061322f5761322e614b68565b5b6001900381819060005260206000200160009055905550505050565b60006001613258846115e2565b6132629190613ff8565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b6060600060016132e5846134d2565b01905060008167ffffffffffffffff81111561330457613303613af7565b5b6040519080825280601f01601f1916602001820160405280156133365781602001600182028036833780820191505090505b509050600082602083010190505b600115613399578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161338d5761338c61454a565b5b04945060008503613344575b819350505050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b613419838383613625565b6134cd57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361348e57806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161348591906139a1565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016134c49291906140f9565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310613530577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816135265761352561454a565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061356d576d04ee2d6d415b85acef810000000083816135635761356261454a565b5b0492506020810190505b662386f26fc10000831061359c57662386f26fc1000083816135925761359161454a565b5b0492506010810190505b6305f5e10083106135c5576305f5e10083816135bb576135ba61454a565b5b0492506008810190505b61271083106135ea5761271083816135e0576135df61454a565b5b0492506004810190505b6064831061360d57606483816136035761360261454a565b5b0492506002810190505b600a831061361c576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156136dd57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061369e575061369d8484611faa565b5b806136dc57508273ffffffffffffffffffffffffffffffffffffffff166136c4836121ad565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61372f816136fa565b811461373a57600080fd5b50565b60008135905061374c81613726565b92915050565b600060208284031215613768576137676136f0565b5b60006137768482850161373d565b91505092915050565b60008115159050919050565b6137948161377f565b82525050565b60006020820190506137af600083018461378b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156137ef5780820151818401526020810190506137d4565b60008484015250505050565b6000601f19601f8301169050919050565b6000613817826137b5565b61382181856137c0565b93506138318185602086016137d1565b61383a816137fb565b840191505092915050565b6000602082019050818103600083015261385f818461380c565b905092915050565b6000819050919050565b61387a81613867565b811461388557600080fd5b50565b60008135905061389781613871565b92915050565b6000602082840312156138b3576138b26136f0565b5b60006138c184828501613888565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006138f5826138ca565b9050919050565b613905816138ea565b82525050565b600060208201905061392060008301846138fc565b92915050565b61392f816138ea565b811461393a57600080fd5b50565b60008135905061394c81613926565b92915050565b60008060408385031215613969576139686136f0565b5b60006139778582860161393d565b925050602061398885828601613888565b9150509250929050565b61399b81613867565b82525050565b60006020820190506139b66000830184613992565b92915050565b6000806000606084860312156139d5576139d46136f0565b5b60006139e38682870161393d565b93505060206139f48682870161393d565b9250506040613a0586828701613888565b9150509250925092565b600060208284031215613a2557613a246136f0565b5b6000613a338482850161393d565b91505092915050565b613a458161377f565b8114613a5057600080fd5b50565b600081359050613a6281613a3c565b92915050565b60008060408385031215613a7f57613a7e6136f0565b5b6000613a8d8582860161393d565b9250506020613a9e85828601613a53565b9150509250929050565b6000608082019050613abd6000830187613992565b613aca6020830186613992565b613ad76040830185613992565b613ae46060830184613992565b95945050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b613b2f826137fb565b810181811067ffffffffffffffff82111715613b4e57613b4d613af7565b5b80604052505050565b6000613b616136e6565b9050613b6d8282613b26565b919050565b600067ffffffffffffffff821115613b8d57613b8c613af7565b5b613b96826137fb565b9050602081019050919050565b82818337600083830152505050565b6000613bc5613bc084613b72565b613b57565b905082815260208101848484011115613be157613be0613af2565b5b613bec848285613ba3565b509392505050565b600082601f830112613c0957613c08613aed565b5b8135613c19848260208601613bb2565b91505092915050565b60008060008060808587031215613c3c57613c3b6136f0565b5b6000613c4a8782880161393d565b9450506020613c5b8782880161393d565b9350506040613c6c87828801613888565b925050606085013567ffffffffffffffff811115613c8d57613c8c6136f5565b5b613c9987828801613bf4565b91505092959194509250565b600067ffffffffffffffff821115613cc057613cbf613af7565b5b613cc9826137fb565b9050602081019050919050565b6000613ce9613ce484613ca5565b613b57565b905082815260208101848484011115613d0557613d04613af2565b5b613d10848285613ba3565b509392505050565b600082601f830112613d2d57613d2c613aed565b5b8135613d3d848260208601613cd6565b91505092915050565b600060208284031215613d5c57613d5b6136f0565b5b600082013567ffffffffffffffff811115613d7a57613d796136f5565b5b613d8684828501613d18565b91505092915050565b60008060408385031215613da657613da56136f0565b5b6000613db48582860161393d565b9250506020613dc58582860161393d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680613e1657607f821691505b602082108103613e2957613e28613dcf565b5b50919050565b7f596f75206e656564206174206c656173742031303020657870657269656e636560008201527f20706f696e747320746f20676574206120706574210000000000000000000000602082015250565b6000613e8b6035836137c0565b9150613e9682613e2f565b604082019050919050565b6000608082019050613eb6600083018661378b565b8181036020830152613ec781613e7e565b9050613ed66040830185613992565b613ee36060830184613992565b949350505050565b7f4120706572736f6e206f6e6c792063616e2068617665206f6e65207065742100600082015250565b6000613f21601f836137c0565b9150613f2c82613eeb565b602082019050919050565b6000608082019050613f4c600083018661378b565b8181036020830152613f5d81613f14565b9050613f6c6040830185613992565b613f796060830184613992565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613fbb82613867565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613fed57613fec613f81565b5b600182019050919050565b600061400382613867565b915061400e83613867565b925082820390508181111561402657614025613f81565b5b92915050565b7f43726561742070657473207375636365737366756c6c79210000000000000000600082015250565b60006140626018836137c0565b915061406d8261402c565b602082019050919050565b600060808201905061408d600083018661378b565b818103602083015261409e81614055565b90506140ad6040830185613992565b6140ba6060830184613992565b949350505050565b60006060820190506140d760008301866138fc565b6140e46020830185613992565b6140f160408301846138fc565b949350505050565b600060408201905061410e60008301856138fc565b61411b6020830184613992565b9392505050565b600061412d82613867565b915061413883613867565b92508282019050808211156141505761414f613f81565b5b92915050565b7f5369676e20696e207375636365737366756c0000000000000000000000000000600082015250565b600061418c6012836137c0565b915061419782614156565b602082019050919050565b60006080820190506141b7600083018661378b565b6141c46020830185613992565b6141d16040830184613992565b81810360608301526141e28161417f565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008190508160005260206000209050919050565b6000815461423d81613dfe565b61424781866137c0565b945060018216600081146142625760018114614278576142ab565b60ff1983168652811515602002860193506142ab565b6142818561421b565b60005b838110156142a357815481890152600182019150602081019050614284565b808801955050505b50505092915050565b7f706c6561736520617474656e74696f6e20796f75722070657420656d6f74696f60008201527f6e21000000000000000000000000000000000000000000000000000000000000602082015250565b60006143106022836137c0565b915061431b826142b4565b604082019050919050565b600060c08201905081810360008301526143408188614230565b905061434f6020830187613992565b61435c6040830186613992565b6143696060830185613992565b6143766080830184613992565b81810360a083015261438781614303565b90509695505050505050565b6000819050919050565b6000819050919050565b60006143c26143bd6143b884614393565b61439d565b613867565b9050919050565b6143d2816143a7565b82525050565b7f4c6576656c207375627374726163742031000000000000000000000000000000600082015250565b600061440e6011836137c0565b9150614419826143d8565b602082019050919050565b600060c082019050818103600083015261443e8188614230565b905061444d6020830187613992565b61445a60408301866143c9565b6144676060830185613992565b6144746080830184613992565b81810360a083015261448581614401565b90509695505050505050565b7f596f7572207065742773206c6576656c20697320616c72656164792030000000600082015250565b60006144c7601d836137c0565b91506144d282614491565b602082019050919050565b600060c08201905081810360008301526144f78188614230565b90506145066020830187613992565b61451360408301866143c9565b6145206060830185613992565b61452d6080830184613992565b81810360a083015261453e816144ba565b90509695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061458482613867565b915061458f83613867565b92508261459f5761459e61454a565b5b828204905092915050565b60006145b582613867565b91506145c083613867565b92508282026145ce81613867565b915082820484148315176145e5576145e4613f81565b5b5092915050565b7f596f7520646f6e2774206861766520656e6f75676820657870657269656e636560008201527f20706f696e747320746f2062757920746869732070726f64756374696f6e2100602082015250565b6000614648603f836137c0565b9150614653826145ec565b604082019050919050565b600060a082019050614673600083018761378b565b81810360208301526146848161463b565b90506146936040830186613992565b6146a06060830185613992565b6146ad6080830184613992565b95945050505050565b7f5075726368617365205375636365737366756c00000000000000000000000000600082015250565b60006146ec6013836137c0565b91506146f7826146b6565b602082019050919050565b600060a082019050614717600083018761378b565b8181036020830152614728816146df565b90506147376040830186613992565b6147446060830185613992565b6147516080830184613992565b95945050505050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026147a77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261476a565b6147b1868361476a565b95508019841693508086168417925050509392505050565b60006147e46147df6147da84613867565b61439d565b613867565b9050919050565b6000819050919050565b6147fe836147c9565b61481261480a826147eb565b848454614777565b825550505050565b600090565b61482761481a565b6148328184846147f5565b505050565b5b818110156148565761484b60008261481f565b600181019050614838565b5050565b601f82111561489b5761486c8161421b565b6148758461475a565b81016020851015614884578190505b6148986148908561475a565b830182614837565b50505b505050565b600082821c905092915050565b60006148be600019846008026148a0565b1980831691505092915050565b60006148d783836148ad565b9150826002028217905092915050565b6148f0826137b5565b67ffffffffffffffff81111561490957614908613af7565b5b6149138254613dfe565b61491e82828561485a565b600060209050601f831160018114614951576000841561493f578287015190505b61494985826148cb565b8655506149b1565b601f19841661495f8661421b565b60005b8281101561498757848901518255600182019150602085019450602081019050614962565b868310156149a457848901516149a0601f8916826148ad565b8355505b6001600288020188555050505b505050505050565b7f53657420706574206e616d65207375636365737366756c6c7900000000000000600082015250565b60006149ef6019836137c0565b91506149fa826149b9565b602082019050919050565b60006020820190508181036000830152614a1e816149e2565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000614a4c82614a25565b614a568185614a30565b9350614a668185602086016137d1565b614a6f816137fb565b840191505092915050565b6000608082019050614a8f60008301876138fc565b614a9c60208301866138fc565b614aa96040830185613992565b8181036060830152614abb8184614a41565b905095945050505050565b600081519050614ad581613726565b92915050565b600060208284031215614af157614af06136f0565b5b6000614aff84828501614ac6565b91505092915050565b600081905092915050565b6000614b1e826137b5565b614b288185614b08565b9350614b388185602086016137d1565b80840191505092915050565b6000614b508285614b13565b9150614b5c8284614b13565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220d0cce68186d3394c2e55dee824804868213402278f158c86bcd43c5422e3bc0264736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

  ],
  
  //  RPC节点
  rpcUrl: 'https://sepolia.infura.io/v3/1753e902a5d243499b272f4f7309ab87'
};

// 自动初始化
const nftService = new NFTService({
  contractAddress: CONTRACT_CONFIG.address,
  contractABI: CONTRACT_CONFIG.abi,
  rpcUrl: CONTRACT_CONFIG.rpcUrl
});

console.log('🎉 NFT SDK 已自动初始化');
console.log('合约地址:', CONTRACT_CONFIG.address);

//导出给前端的接口


export const getUserNFTs = async (userAddress: string): Promise<NFTInfo[]> => {
  if (!userAddress || !userAddress.startsWith('0x')) {
    console.error('无效的用户地址:', userAddress);
    return [];
  }
  
  console.log(`🔄 正在获取用户 ${userAddress.slice(0, 8)}... 的NFT`);
  return await nftService.getUserNFTs(userAddress);
};

/**
 * 获取单个NFT图片URL
 * @param tokenId NFT的ID
 * @returns 图片URL（如果失败返回空字符串）
 */
export const getNFTImage = async (tokenId: number): Promise<string> => {
  return await nftService.getNFTImage(tokenId);
};

/**
 * 批量获取NFT图片URL
 */
export const getNFTImages = async (
  tokenIds: number[]
): Promise<Array<{ tokenId: number; imageUrl: string }>> => {
  const results = [];
  
  for (const tokenId of tokenIds) {
    try {
      const imageUrl = await nftService.getNFTImage(tokenId);
      results.push({ tokenId, imageUrl });
    } catch (error) {
      console.error(`Token ${tokenId} 获取失败:`, error);
      results.push({ tokenId, imageUrl: '' });
    }
  }
  
  return results;
};

/**
 * 生成NFT页面链接
 */
export const generateNFTLink = (tokenId: number): string => {
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://your-app.com';
  
  return `${baseUrl}/nft/${tokenId}`;
};

/**
 * 生成OpenSea链接
 */
export const generateOpenSeaLink = (tokenId: number): string => {
  return `https://opensea.io/assets/ethereum/${CONTRACT_CONFIG.address}/${tokenId}`;
};

/**
 * 获取合约地址（给前端使用）
 */
export const getContractAddress = (): string => {
  return CONTRACT_CONFIG.address;
};

/**
 * 检查地址是否有效
 */
export const isValidAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// 导出.
export default {
  getUserNFTs,
  getNFTImage,
  getNFTImages,
  generateNFTLink,
  generateOpenSeaLink,
  getContractAddress,
  isValidAddress
};