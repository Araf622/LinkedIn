import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // return (
  //     <Navbar bg="dark" variant="dark" expand="lg">
  //     <Container>
  //       <Navbar.Brand>My App</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link as={Link} to="/Homepage">
  //             Homepage
  //           </Nav.Link>
  //           <Nav.Link as={Link} to="/Notifications">
  //             Notifications
  //           </Nav.Link>
  //         </Nav>
  //         <Nav>
  //           <Nav.Link as={Link} to="/Login">
  //             Logout
  //           </Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // )
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.removeItem('accessToken');
    navigate('/Login');
  }

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn btn-link text-reset me-3"
    >
      {children}
    </button>
  ));
  
  

  return (

    // <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"100px"}}>

          {/* <!-- Navbar brand --> */}
          {/* <!-- Left links --> */}

          <i class="fa-brands fa-linkedin fa-2xl" style={{marginLeft:'40px', color:'#1751b5'}}></i>

          {/* <!-- Left links --> */}

        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div class="d-flex align-items-center">

          {/* <!-- Notifications --> */}
          <button className="btn btn-link text-reset me-3">
            <i className="fas fa-bell fa-2xl"></i>
            <span className="badge rounded-pill badge-notification bg-danger" style={{ position: 'relative', top: '-15px', right: '12px' }}></span>
          </button>

          {/* <!-- Profile --> */}
          {/* <button onClick={logout} className="btn btn-link text-reset me-3">
            <i className="fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger" style={{ position: 'relative', top: '-15px', right: '5px' }}>1</span>
          </button> */}
           <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="profile-dropdown">
            <i class="fa-solid fa-user fa-2xl" style={{color: '#1c3754'}}></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
          
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    // <!-- Navbar -->
  )
}

export default Header




