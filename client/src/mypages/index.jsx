import React from 'react';
import PropTypes from 'prop-types';

class MyButton extends React.Component {
    
    render() {
      console.log('ccc', this.props)
        return (
            <button onClick={this.props.onClick}>clickme</button>
        //   <div>
        //     <h1>Hello, world!</h1>
        //     <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        //   </div>
        );
      }
      
}
MyButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

  
export default MyButton;
