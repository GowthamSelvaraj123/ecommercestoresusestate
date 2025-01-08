import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import cartIcon from '../../asset/img/core-img/cart.png';

export default function CartNav(props) {
  return (
    <div class="cart-nav">
        <div class="amado-navbar-toggler">
        {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-0">
            <Navbar.Toggle className="mb-0 mt-2" aria-controls={`offcanvasNavbar-expand-${expand}`}><img src={cartIcon}></img>Cart({props.addCartCount})</Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h4>Product Count: {props.addCartCount}</h4>
                <ul>
                  {props.cartItems.map((item) => (<li>{item.title}</li>)
                  )}
                </ul>
                <h6>Total: ${props.cartTotal}</h6>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
      ))}
        </div>
                </div>
  )
}
