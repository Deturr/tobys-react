import React from 'react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      myString: '',
      myColor: 'red',
   }
    this.getNumbers();
  }
  
  getNumbers() {
    for (var i=0; i < 10; i++) {
      this.state.myString = this.state.myString + "*";
    }
  }
  changeColor() {
    if ( this.state.myColor === "red") {
      this.setState({ 'myColor': 'green'} );
    } else {
      this.setState({ 'myColor': 'red'} );
    }
  }

  AddStar() {
    this.setState({ myString: this.state.myString + "*" });
  }
  
  render() {
    return (
      <div className={"App "+this.state.myColor}>
        {this.state.myString}
        <br />
<button onClick={() => this.changeColor() } >Change Color</button> <br></br>
<button onClick={() => this.AddStar() } >Add Star</button>
      </div>
    );
  }

}

export default App;