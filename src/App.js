import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Game/Main'
import Game from './Game/Main';
import { render } from '@testing-library/react';
import Button from './Game/Button';
import DepositButton from './Game/Deposit';

class App extends React.Component{
  bank1;
  bank2;
  bank3;
  constructor(props){
    super(props);
    this.bank1 = new Main();
    
  }

  componentDidMount() {
    setInterval(() => {
      this.bank1.Update();
      this.setState({});

    }, 1000)
  }
   
  render() {
  return (

    <div className="App  "> 
     
      <header className="App-header">
        <div className=""> currentMoney<div className=""> {this.bank1.currentMoney}</div></div>
        <div className="CurrentBank"> Bank<div className="BankName"> {(this.bank1.currentBank)}</div></div>
        <div>in bank money {this.bank1.inBankMoney}</div>
        <DepositButton
          main = {this.bank1}
        />
        <p>

          <h3>
          Welcome to Click 'n Earn Game
          </h3>
        Firstly this is bank game.
        <br/>
         Choose your bank, deposit your money and earn easy.
        </p>
        <h2> Select Bank</h2>
        {console.log(this.bank1.remainingTime)}
        <div> 
          <Button Main={this.bank1} Number={0} Name={this.bank1.banks[0].bankName} />
          <Button Main={this.bank1} Number={1} Name={this.bank1.banks[1].bankName} />
          <Button Main={this.bank1} Number={2} Name={this.bank1.banks[2].bankName} />
        </div>
      </header>

    </div>
  );
  }
}

export default App;
