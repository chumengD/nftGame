// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleStorage {
    uint256 public a;
    
    function setA(uint256 _a) public {
        a = _a;
        // 没有返回值 - 交易执行成功就是成功
    }
    
    function getA() public view returns (uint256) {
        return a; // 这个返回值会传递给调用者
    }
    
    function incrementA() public {
        a += 1;
        // 没有返回值 - 交易执行成功就是成功
    }
}