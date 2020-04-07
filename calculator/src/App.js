import React from 'react';
import './App.css';
import Button  from './Buttons';
import Screen from './Screen';

class App extends React.Component {
  state = {
    currentNum: '',
    secondNum: '',
    op: '',
  };

  addInput = (num) => {
    let op = this.state.op;
    let currentNum = this.state.currentNum;
    let secondNum = this.state.secondNum;

    if (op === '') {
      currentNum += num;
    } else {
      secondNum += num;
    }

    this.setState({
      currentNum: currentNum,
      secondNum: secondNum,
    });
    console.log(this.state);
  };

  clear = () => {
    this.setState({
      currentNum: '',
      secondNum: '',
      op: '',
    });
  };

  selectOp = (nextop) => {
    this.calculate()
    this.setState({
      op: nextop,
    });
  };

  addDecimal = () => {
    let op = this.state.op;
    let currentNum = this.state.currentNum;
    let secondNum = this.state.secondNum;

    if(op === ''){
      if(!currentNum.includes('.')){
        currentNum += '.';
        this.setState({
          currentNum : currentNum
        })
      }
    } else {
      if(!secondNum.includes('.')){
        secondNum += '.';
        this.setState({
          secondNum : secondNum
        })
      }
    }
  }
  calculate = () => {
    switch(this.state.op){
      case '+':{
        let currentNum = Number(this.state.currentNum) + Number(this.state.secondNum);
        this.setState({
          currentNum:currentNum,
          secondNum: '',
          op: '',
        })
        break;
      }
      case '-':{
        let currentNum = Number(this.state.currentNum) - Number(this.state.secondNum);
        this.setState({
          currentNum:currentNum,
          secondNum: '',
          op: '',
        })
        break;
      }
      case 'x':{
        let currentNum = Number(this.state.currentNum) * Number(this.state.secondNum);
        this.setState({
          currentNum:currentNum,
          secondNum: '',
          op: '',
        })
        break;
      }

      case '/':{
        let currentNum = Number(this.state.currentNum) / Number(this.state.secondNum);
        this.setState({
          currentNum:currentNum,
          secondNum: '',
          op: '',
        })
        break;
      }
    }
  }


  render() {
    return (
      <div id="calcGrid" className="App">
        <Screen id="display" currentNum={this.state.currentNum}/>
        <Button id="zero" name={0} handleClick={this.addInput} />
        <Button id="one" name={1} handleClick={this.addInput} />
        <Button id="two" name={2} handleClick={this.addInput} />
        <Button id="three" name={3} handleClick={this.addInput} />
        <Button id="four" name={4} handleClick={this.addInput} />
        <Button id="five" name={5} handleClick={this.addInput} />
        <Button id="six" name={6} handleClick={this.addInput} />
        <Button id="seven" name={7} handleClick={this.addInput} />
        <Button id="eight" name={8} handleClick={this.addInput} />
        <Button id="nine" name={9} handleClick={this.addInput} />
        <Button id="add" name="+" handleClick={this.selectOp} />
        <Button id="subtract" name="-" handleClick={this.selectOp} />
        <Button id="multiply" name="x" handleClick={this.selectOp} />
        <Button id="divide" name="/" handleClick={this.selectOp} />
        <Button id="decimal" name="." handleClick={this.addDecimal} />
        <Button id="equals" name="=" handleClick={this.calculate}/>
        <Button id="clear" name="AC" handleClick={this.clear} />
      </div>
    );
  }
}

export default App;
