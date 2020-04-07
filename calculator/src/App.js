import React from 'react';
import './App.css';
import Button from './Buttons';
import Screen from './Screen';

class App extends React.Component {
  state = {
    currentNum: '0',
    operatorFlag: false,
    decimalFlag: false,
  };

  handleClick = (buttonName) => {
    let currentNum = this.state.currentNum;
    let operatorFlag = this.state.operatorFlag;
    let decimalFlag = this.state.decimalFlag;
    switch (true) {
      case buttonName === '0' ||
        buttonName === '1' ||
        buttonName === '2' ||
        buttonName === '3' ||
        buttonName === '4' ||
        buttonName === '5' ||
        buttonName === '6' ||
        buttonName === '7' ||
        buttonName === '8' ||
        buttonName === '9':
        if (currentNum !== '0') {
          currentNum += buttonName;
          operatorFlag = false;
        } else {
          currentNum = buttonName;
        }
        break;

      case buttonName === '+' ||
        buttonName === '-' ||
        buttonName === '*' ||
        buttonName === '/':
        if (!operatorFlag) {
          currentNum += buttonName;
          // operatorFlag = true;
          this.setState({
            decimalFlag : false
          })
        } else {
          const newNum = currentNum.slice(0, currentNum.length - 1);
          currentNum = newNum;
          currentNum += buttonName;
        }
        break;

      case buttonName === 'AC':
        currentNum = '0';
        operatorFlag = false;
        this.setState({
          decimalFlag : false
        })
        break;

      case buttonName === '=':
        currentNum = eval(currentNum.match(/[+/*]?-?\d+\.?\d*/g).join(''));
        operatorFlag = false;

        break;
      case buttonName === '.':
        if(!decimalFlag){
          currentNum += '.';
          this.setState({
            decimalFlag : true
          })
        }
        operatorFlag = false;

        break;
    }
    this.setState({
      currentNum,
      operatorFlag,
    });
  };

  render() {
    return (
      <div id="calcGrid" className="App">
        <Screen id="display" currentNum={this.state.currentNum} />
        <Button id="zero" name="0" handleClick={this.handleClick} />
        <Button id="one" name="1" handleClick={this.handleClick} />
        <Button id="two" name="2" handleClick={this.handleClick} />
        <Button id="three" name="3" handleClick={this.handleClick} />
        <Button id="four" name="4" handleClick={this.handleClick} />
        <Button id="five" name="5" handleClick={this.handleClick} />
        <Button id="six" name="6" handleClick={this.handleClick} />
        <Button id="seven" name="7" handleClick={this.handleClick} />
        <Button id="eight" name="8" handleClick={this.handleClick} />
        <Button id="nine" name="9" handleClick={this.handleClick} />
        <Button id="add" name="+" handleClick={this.handleClick} />
        <Button id="subtract" name="-" handleClick={this.handleClick} />
        <Button id="multiply" name="*" handleClick={this.handleClick} />
        <Button id="divide" name="/" handleClick={this.handleClick} />
        <Button id="decimal" name="." handleClick={this.handleClick} />
        <Button id="equals" name="=" handleClick={this.handleClick} />
        <Button id="clear" name="AC" handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
