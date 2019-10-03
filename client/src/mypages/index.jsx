import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getUser } from "../actions/userAction";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Name", field: "NAME"
      }, {
        headerName: "Number", field: "NUMBER"
      }]
    }
  }

  componentDidMount() {
    console.log('didmount');
    console.log('------->>', this.props.user);

    this.props.getUser();
    console.log('------->>', this.props.user);
  }

  render() {
    console.log('ccc', this.props.user);
    return (
      <React.Fragment>
        <button onClick={this.props.onClick}>clickme</button>
        <div style={{ height: '150px', width: '600px' }} className="ag-theme-balham">
    <AgGridReact
        columnDefs={this.state.columnDefs}
        rowData={this.props.user.data}>
    </AgGridReact>
</div>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.props.user.data}>
        </AgGridReact>
      </React.Fragment>
    );
  }
}

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state,
  user: state.user.get('user'),
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  // stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(MyButton);

