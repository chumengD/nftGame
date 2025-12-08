// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Pets is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    mapping(address => uint256) last_Time;
    mapping(uint256 => string) petsUri;
    mapping(address => uint256) user_Exp;
    mapping(address => uint256) pet_Exp;
    mapping(address => uint256) pet_Happy;
    mapping(address => uint256) pet_Level;
    mapping(address => uint256) add_user_exp_cnt;
    
    struct Production {
        uint256 id;
        uint256 price;
        uint256 nutrition;
        uint256 happy_value;
    }
    mapping(uint256 => Production) public production;

    struct MintResult{
        bool isError;
        string message;
    }//
    struct shoppingResult{
        bool isError;
        string message;
        uint256 current_user_Exp;
        uint256 current_pet_Exp;
        uint256 current_pet_Level;
    }//
    struct add_user_expResult{
        bool isError;
        uint256 current_user_Exp;
        string message;
    }//
    struct happy_calculateResult{
        uint256 current_pet_Happy;
        uint256 current_pet_Exp;
        uint256 current_pet_Level;
        string message;
    }//
    uint256 private _nextTokenId;
    mapping(address => uint256) user_TokenId;
    string uri = "ipfs://QmPKZg5bJ23JbeNpczpNN28ssvYfcjj2BJrftv3WJdsdTL";

    //初始化商品
    function init_product() internal {
        production[1] = Production(1, 100, 10, 200);
        production[2] = Production(2, 200, 25, 300);
        production[3] = Production(3, 300, 70, 400);
    }
    //初始化uri
    function init_petsUri() internal {
        petsUri[1] = "";
        petsUri[2] = "";
        petsUri[3] = "";
    }

    constructor(address initialOwner)
        ERC721("Pets", "pet")
        Ownable(initialOwner)
    {
        init_product();
        init_petsUri();
    }
    // 签到函数
    function add_user_exp() public returns(add_user_expResult memory){
        if(add_user_exp_cnt[msg.sender]>=1){
            return add_user_expResult({
                isError: true,
                current_user_Exp: user_Exp[msg.sender],
                message: "You have signed in today!"
            });
        }
        add_user_exp_cnt[msg.sender] += 1;
        user_Exp[msg.sender] += 200;
        return add_user_expResult({
            isError: false,
            current_user_Exp: user_Exp[msg.sender],
            message: "Sign in successfully!"
        });
    }
    //返回历史索引
    function get_history() public view returns(uint256 idx){
        idx = pet_Level[msg.sender];
        return idx;
    }
    //更新uri函数
    function updateUri(uint256 level) public {
        string memory newUri = petsUri[level];
        if(bytes(newUri).length == 0){
            newUri = uri;
        }
        _setTokenURI(user_TokenId[msg.sender],newUri);
    }
    //宠物升级函数
    function add_pet_level() public{
        while(pet_Exp[msg.sender]>=100){
            pet_Level[msg.sender] += 1;
            pet_Exp[msg.sender] -= 100;
        }
        updateUri(pet_Level[msg.sender]);
    }

    //商店购买函数
    function shopping(uint256 _id) public returns (shoppingResult memory){
        if(user_Exp[msg.sender] < production[_id].price){
            return shoppingResult({
                isError: true,
                message: "You don't have enough experience points to buy this production!",
                current_user_Exp: 0,
                current_pet_Exp: 0,
                current_pet_Level: 0
            });
        }
        user_Exp[msg.sender] -= production[_id].price;
        pet_Exp[msg.sender] += production[_id].nutrition;
        pet_Happy[msg.sender] += production[_id].happy_value;
        add_pet_level();
        return shoppingResult({
            isError: false,
            message: "Purchase Successful",
            current_user_Exp: user_Exp[msg.sender],
            current_pet_Exp: pet_Exp[msg.sender],
            current_pet_Level: pet_Level[msg.sender]
        });
    }
    //初始化获取时间
    function startgetCurrentTimestamp() public{
        last_Time[msg.sender] = block.timestamp;
        pet_Happy[msg.sender] = 600;
    }
    //制造宠物函数
    function mint() public returns (MintResult memory){
        if(user_Exp[msg.sender]<100){
            return MintResult({
                isError: true,
                message: "You need at least 100 experience points to get a pet!"
            });
        }
        if(balanceOf(msg.sender)>=1){
            return MintResult({
                isError: true,
                message: "A person only can have one pet!"
            });
        }
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        user_TokenId[msg.sender] = tokenId;
        startgetCurrentTimestamp();
        return MintResult({
            isError: false,
            message: "Creat pets successfully!"
        });
    }
    //计算宠物快乐度函数
    function happy_calculate(uint256 time_Pass) public returns(uint256 x){
        uint256 value = time_Pass/60/60*24;
        if(pet_Happy[msg.sender]>value){
            pet_Happy[msg.sender] -= value;
            return 0;
        }else{
            pet_Happy[msg.sender] = 0;
            if(pet_Level[msg.sender]>=1){
                pet_Level[msg.sender] -= 1;
                updateUri(pet_Level[msg.sender]);
                return 1;   
            }else{
                return 2;
            }  
        }
    }
    //获取时间
    function getCurrentTimestamp() public returns(happy_calculateResult memory){
        if(last_Time[msg.sender]==0) revert();
        uint256 now_Time = block.timestamp;
        uint256 x=happy_calculate(now_Time-last_Time[msg.sender]);
        last_Time[msg.sender] = now_Time;
        if(x==0){
            return happy_calculateResult({
                current_pet_Happy: pet_Happy[msg.sender],
                current_pet_Exp: pet_Exp[msg.sender],
                current_pet_Level: pet_Level[msg.sender],
                message: "please attention your pet emotion!"
            });
        }else if(x==1){
            return happy_calculateResult({
                current_pet_Happy: 0,
                current_pet_Exp: pet_Exp[msg.sender],
                current_pet_Level: pet_Level[msg.sender],
                message: "Level substract 1"
            });
        }else{
            return happy_calculateResult({
                current_pet_Happy: 0,
                current_pet_Exp: pet_Exp[msg.sender],
                current_pet_Level: pet_Level[msg.sender],
                message: "Your pet's level is already 0"
            });
        }
    }

    //必要函数
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}