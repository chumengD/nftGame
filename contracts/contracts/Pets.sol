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
    mapping(address => string) pet_name;

    struct Production {
        uint256 id;
        uint256 price;
        uint256 nutrition;
        uint256 happy_value;
    }
    mapping(address => uint256) user_TokenId;
    mapping(uint256 => Production) public production;
    uint256 private _nextTokenId;
    
    string uri = "ipfs://QmX9iG6XvN9ywvsBwheiudyXcSuWoJPFuZVHFwPVdCGF2c";

    //初始化商品
    function init_product() internal {
        production[1] = Production(1, 100, 10, 200);
        production[2] = Production(2, 200, 25, 300);
        production[3] = Production(3, 300, 70, 400);
    }
    //初始化uri
    function init_petsUri() internal {
        petsUri[1] = "ipfs://QmX9iG6XvN9ywvsBwheiudyXcSuWoJPFuZVHFwPVdCGF2c";
        petsUri[2] = "ipfs://QmcCG2QrhkyiAC8EqtUpjun7TUeFNAATggNwLeJEeD8ubM";
        petsUri[3] = "ipfs://QmcKEAr793t7UPVnpLkKdSXBU4wwD41ikpcrMytwRENuU8";
        petsUri[4] = "ipfs://QmcMV6Vf1foLqMC3yFb5gp8eftV7geF7xxzokavQQE69gd";
        petsUri[5] = "ipfs://QmeQux7aHGaQ3UgmiRWFRLWWBYExZCoYqgENwqoszpo5HZ";
    }

    constructor(address initialOwner)
        ERC721("Pets", "pet")
        Ownable(initialOwner)
    {
        init_product();
        init_petsUri();
    }
    // 签到函数
    event add_user_exp_Event(bool isError, uint256 current_user_Exp, uint256 count, string message);
    function add_user_exp() public{
        add_user_exp_cnt[msg.sender] += 1;
        user_Exp[msg.sender] += 100;
        add_user_exp_cnt[msg.sender] +=1;
        emit add_user_exp_Event(false, user_Exp[msg.sender], add_user_exp_cnt[msg.sender],"Sign in successful");
    }

    //返回历史索引
    function get_history() public view returns(uint256){
        return pet_Level[msg.sender];
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
        bool leveledUp = false;
        while(pet_Exp[msg.sender]>=100){
            leveledUp = true;
            pet_Level[msg.sender] += 1;
            pet_Exp[msg.sender] -= 100;
        }
        if(leveledUp){
            updateUri(pet_Level[msg.sender]);
            leveledUp = false;
        }
    }

    //商店购买函数
    event shopping_Event(bool isError, string message, uint256 current_user_Exp, uint256 current_pet_Exp, uint256 current_pet_Level);
    function shopping(uint256 _id) public{
        if(user_Exp[msg.sender] < production[_id].price){
            emit shopping_Event(true, "You don't have enough experience points to buy this production!", user_Exp[msg.sender], pet_Exp[msg.sender], pet_Level[msg.sender]);
        }else{
            user_Exp[msg.sender] -= production[_id].price;
            pet_Exp[msg.sender] += production[_id].nutrition;
            pet_Happy[msg.sender] += production[_id].happy_value;
            add_pet_level();
            emit shopping_Event(false, "Purchase Successful", user_Exp[msg.sender], pet_Exp[msg.sender], pet_Level[msg.sender]);
        }
    }
    
    //初始化获取时间
    function startgetCurrentTimestamp() public{
        last_Time[msg.sender] = block.timestamp;
        pet_Happy[msg.sender] = 600;
    }

    //制造宠物函数
    event mint_Event(bool isError, string message,uint256 current_user_Exp,uint256 current_pet_Level);
    function mint() public{
        if(user_Exp[msg.sender]<100){
            emit mint_Event(true, "You need at least 100 experience points to get a pet!", user_Exp[msg.sender],pet_Level[msg.sender]);
        }else if(balanceOf(msg.sender)>=1){
            emit mint_Event(true, "A person only can have one pet!",user_Exp[msg.sender],pet_Level[msg.sender]);
        }else{
            uint256 tokenId = _nextTokenId++;
            _safeMint(msg.sender, tokenId);
            _setTokenURI(tokenId, uri);
            user_TokenId[msg.sender] = tokenId;
            startgetCurrentTimestamp();
            user_Exp[msg.sender] -= 100;
            pet_Level[msg.sender] = 1;
            emit mint_Event(false, "Creat pets successfully!",user_Exp[msg.sender],pet_Level[msg.sender]);
        }
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
    event getCurrentTimestamp_Event(string current_pet_name,uint256 current_user_Exp, uint256 current_pet_Happy, uint256 current_pet_Exp, uint256 current_pet_Level, string message);
    function getCurrentTimestamp() public{
        if(last_Time[msg.sender]!=0){
            uint256 now_Time = block.timestamp;
            uint256 x=happy_calculate(now_Time-last_Time[msg.sender]);
            last_Time[msg.sender] = now_Time;
            if(x==0){
                emit getCurrentTimestamp_Event(pet_name[msg.sender],user_Exp[msg.sender], pet_Happy[msg.sender], pet_Exp[msg.sender], pet_Level[msg.sender], "please attention your pet emotion!");
            }else if(x==1){
                emit getCurrentTimestamp_Event(pet_name[msg.sender],user_Exp[msg.sender], 0, pet_Exp[msg.sender], pet_Level[msg.sender], "Level substract 1");
            }else{
                emit getCurrentTimestamp_Event(pet_name[msg.sender],user_Exp[msg.sender], 0, pet_Exp[msg.sender], pet_Level[msg.sender], "Your pet's level is already 0");
            }
        }else{
            emit getCurrentTimestamp_Event(pet_name[msg.sender],user_Exp[msg.sender], pet_Happy[msg.sender], pet_Exp[msg.sender], pet_Level[msg.sender], "You don't have a pet yet!");
        }
    }

    //获得宠物名称
    event set_pet_name_Event(string message);
    function set_pet_name(string memory in_name) public{
        pet_name[msg.sender] = in_name;
        emit set_pet_name_Event("Set pet name successfully");
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