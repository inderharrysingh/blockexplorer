import { Alchemy, Network } from 'alchemy-sdk';
import { useState } from 'react';


import DropBox  from './DropBox';
import './App.css';
import  SearchBar  from './SearchBar.js';
import Table from './Table.js';


const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};



const alchemy = new Alchemy(settings);

function App() {
  const [block, setblock] = useState("");
  const [tx, settx] = useState("");
  const [data, setdata] = useState({});
  const [task, settask] = useState(0)
  const  [balance, setbalance] = useState("")
  

  

 

  async function findBlock(){
    const blockdata = await alchemy.core.getBlock(block);
    delete blockdata.transactions;
    setblock("");
    setdata(blockdata);
  } 

  async function findBalance(){
    const bal = await alchemy.core.getBalance(balance);
    setbalance("");
    setdata(bal);
    console.log("balance " + data);
  }

  async function findtx(){
    const info = await alchemy.core.getTransaction(tx);
    settx("");
    delete info.data;
    setdata(info);
  }

  async function findlatest(){
    const info = await alchemy.core.getBlockNumber();
    setdata({ "Latest Block" : info});
  }



  const dropboxData  = [
  {
    method : "Find Balance",
    placeholder : "Account Address",
    value : balance,
    setvalue : setbalance,
    fn : findBalance,
  },
  {
    method : " Find Block",
    placeholder : "Tx Hash or Block Number",
    value : block,
    setvalue : setblock,
    fn : findBlock,
  },
  {
    method : "Find Transaction",
    placeholder : "Tx Hash",
    value : tx,
    setvalue : settx,
    fn : findtx,
  },

  {
    method : "Find Latest Block ",
    placeholder : "Click Search",
    value : "",
    setvalue : "",
    fn : findlatest,
  }


]

        return ( 
        <>
        <div className='app'>
        <h1>Ex~~Plorer</h1>
        <DropBox settask={settask}  object={dropboxData}/>
       <SearchBar placeholder={dropboxData[task].placeholder} value={dropboxData[task].value} setValue={dropboxData[task].setvalue} fn={dropboxData[task].fn} />
        <div>{ Object.keys(data).length !== 0 }</div>
        <Table object={data} />
        </div>
    
        </>);

}

export default App;
