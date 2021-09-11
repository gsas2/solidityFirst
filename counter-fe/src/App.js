import { useEffect, useState } from 'react';
import { useWeb3, useContract } from './hooks/web3';
import counterAbi from './contracts/counter.json';

const provider = process.env.REACT_APP_PROVIDER;
const account = process.env.REACT_APP_ACCOUNT;
const counterAddress = process.env.REACT_APP_COUNTER_CONTRACT_ADDRESS;

const App = () => {
  const web3 = useWeb3(provider, account);
  const counterContract = useContract(web3, counterAbi, counterAddress);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    const getCounterValue = async () => {
      const counter = await counterContract.methods.counter().call();
      setCounter(counter);
    };
    getCounterValue();
  }, [counterContract]);

  const increaseHandler = async () => {
    await counterContract.methods.increase().send({ from: account });
    setCounter(await counterContract.methods.counter().call());
  }

  const decreaseHandler = async () => {
    await counterContract.methods.decrease().send({ from: account });
    setCounter(await counterContract.methods.counter().call());
  }

  return (
    <div className="App">
      <h2>My First Smart Contract: Counter</h2>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
      <div>Counter: {counter}</div>
    </div>
  );
}

export default App;
