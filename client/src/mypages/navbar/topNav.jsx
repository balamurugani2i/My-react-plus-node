import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import  BaseTable from '../baseTable/index';
import  MyButton from '../index';


class TopNav extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href=''>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href=''><Link to='/home'>Home1</Link></Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-info'>Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route exact path='/' component={BaseTable} />
          <Route path='/home' component={MyButton} />
          {/* <Route path="/users/:id" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
        </Switch>
        </div>
      </Router>
    );
  }
}

export default TopNav;
