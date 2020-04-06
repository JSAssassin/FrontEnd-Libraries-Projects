import React,{Component} from 'react';
import './App.css';
import DrumPad from './DrumPad';

class App extends Component {

render() {
  return (
    <div id="drum-machine" className="App">
      <DrumPad />
    </div>
  );
}

}

export default App;
