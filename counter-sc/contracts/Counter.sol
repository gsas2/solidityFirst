// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Counter {
  uint public counter = 50;

  function increase() public returns (uint) {
    return ++counter;
  }

  function decrease() public returns (uint) {
    return --counter;
  }
}
