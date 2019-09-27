import React from 'react';
import { connect } from "react-redux";
import { getUser } from "./actions/userAction";
import PropTypes from 'prop-types';


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
      <span style={{background:"red"}}>gfhhdf </span>
      <p>{this.state.text }</p>
        <MyButton onClick={() => this.props.getUser()}
           />
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  ...state,
  user: state.user.get('user'),
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  // stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
