import React from 'react';
import PropTypes from 'prop-types';

class MyButton extends React.Component {
    
    render() {
        return (
            <button onClick={this.props.onClick}>clickme</button>
        //   <div>
        //     <h1>Hello, world!</h1>
        //     <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        //   </div>
        );
      }
      
}

const mapStateToProps = state => ({
    ...state, 
    onClick: PropTypes.func
  });
  
export default MyButton;
