import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getUser } from '../../actions/userAction';

class BaseTable extends React.Component {
  
    componentDidMount() {
        this.props.getUser();
    }
  
    render() {
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.data &&
              this.props.users.data.map(user => {
                return (
                  <tr>
                    <td>{user.NAME}</td>
                    <td>{user.NUMBER}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

BaseTable.propTypes = {
  users: PropTypes.object
};

const mapStateToProps = state => ({
  ...state,
  users: state.user.get('user')
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseTable);
