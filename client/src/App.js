import React from 'react';
import { connect } from "react-redux";
import { startAction } from "./actions/startAction";


import './App.css';
import MyButton from './mypages/index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'hello all'}
  }
  render() {
    console.log("check prpos ", this.props)
    return (
    
      <div className="App">
      <p>gfhhdf {this.state.text }</p>
        <MyButton onClick={() => this.setState({
          text:'gdfhjgh'
        })}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state, 
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  // stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
