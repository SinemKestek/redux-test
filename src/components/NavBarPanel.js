

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {Link} from 'react-router-dom';




const NavBar = ()=>{
 const cartProducts=useSelector(state=>state.cart);


    return (
        
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Practice</Navbar.Brand>
      
       <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          
        
          </Nav>
          <Navbar.Toggle/>
            <NavbarCollapse className='justify-content-end'>
            <Navbar.Text>
          <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
          </Navbar.Text>
            </NavbarCollapse>
       
      </Container>
    </Navbar>

       
    )

}
export default NavBar;