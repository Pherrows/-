import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  return (
    <>
    <header>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#" onClick={() => {navigate('/')}}>Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/')}}>홈</Nav.Link>
          <Nav.Link onClick={() => {navigate('/cart')}}>장바구니</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </header>

    <Outlet />

      {/* <footer>푸터 영역</footer> */}
    </>
  );
}

export default Header;