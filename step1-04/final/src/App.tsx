import React from 'react';
import { Counter } from './components/Counter';

export class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <h2>My App</h2>
        <Counter text="Chickens" />
        <Counter text="Ducks" />
      </div>
      
      
      
       <div className="12">
        <h2>react</h2>
        <Counter text="panda" />
        <Counter text="pig" />
      </div>
      
      
      
       <div className="Blank">
        <h212</h2>
        <Counter text="45" />
        <Counter text="212" />
      </div>
    );
  }
}
