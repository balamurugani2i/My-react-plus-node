import React from 'react';
import { connect } from "react-redux";
import { createUser } from "./actions/userAction";
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
      <p>gfhhdf {this.state.text } {this.props.user}</p>
        <MyButton onClick={() => this.props.createUser()}
           />
      </div>
    );
  }
}

App.propTypes = {
  createUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  ...state,
  user: state.user.get('user'),
});

const mapDispatchToProps = dispatch => ({
  createUser: () => dispatch(createUser()),
  // stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
