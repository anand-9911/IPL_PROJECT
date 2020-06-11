import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navigation = ({ logout, auth: { isAuth, isAdmin } }) => {
  const authLinks = () => {
    return (
      <>
        <Navbar bg='light' expand='lg' sticky='top'>
          <Link to='/overview'>
            <img
              src={logo}
              alt='logo of ipl'
              style={{ width: '100px', height: '70px' }}
            />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link>
                <Link to='/overview'>Overview</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/teams'>Teams</Link>
              </Nav.Link>
              <NavDropdown title='Compare' id='basic-nav-dropdown'>
                <NavDropdown.Item>
                  <Link to='/team1-vs-team2'>Team 1 Vs Team 2</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/player1-vs-player2'>Player 1 Vs Player 2</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {isAdmin && (
                <>
                  <NavDropdown title='Admin' id='basic-nav-dropdown'>
                    <NavDropdown.Item>
                      <Link to='/modify-users'>Modify Users</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to='/modify-teams'>Modify Teams</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
          <Nav.Link>
            <i class='fas fa-sign-out-alt' onClick={(e) => logout()}>
              LogOut
            </i>
          </Nav.Link>
        </Navbar>
      </>
    );
  };

  const nonAuthLinks = () => {
    return (
      <>
        <Navbar bg='light' expand='lg' sticky='top'>
          <Link to='/home'>
            <img
              src={logo}
              alt='logo of ipl'
              style={{ width: '100px', height: '70px' }}
            />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link>
                <Link to='/home'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/teams'>Teams</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link>
            <Link to='/register'>
              <i class='fas fa-cash-register'>Register</i>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/login'>
              <i class='fas fa-sign-out-alt'>Login</i>
            </Link>
          </Nav.Link>
        </Navbar>
      </>
    );
  };

  return <>{isAuth ? authLinks() : nonAuthLinks()}</>;
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(Navigation);
