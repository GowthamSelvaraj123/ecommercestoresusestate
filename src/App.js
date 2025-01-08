import './App.css';
import Search from './components/search/Search';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileNav from './components/mobilenav/MobileNav';
import Brand from './components/brand/Brand';
import Menu from './components/menu/Menu';
import favorIcon from './asset/img/core-img/favorites.png';
import searchIcon from './asset/img/core-img/search.png';
import { faPinterestP, faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from './components/button/Button';
import CartNav from './components/cartnav/CartNav';
import Footer from './components/footer/Footer';
import NewsLetter from './components/newsletter/NewsLetter';
import { useState } from 'react';
import Router from './Router';
import Home from './page/Home';
import Layout from './page/Layout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setCartTotal] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
    setCartTotal(total + product.price);
  };
  return (
    <div className="App">
      <div class="main-content-wrapper d-flex clearfix">
        <Search />
        <MobileNav />
        <header className="header-area clearfix">
          <div class="nav-close">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            <Brand></Brand>
            <Menu menu={[{ menuname: 'Home'}, { menuname: 'Shop'}, { menuname: 'Product'}, { menuname: 'Cart'}, { menuname: 'Checkout'}]} customName='amado-nav'></Menu>
            <Button styleClassname='btn amado-btn mb-15' title="Discount"></Button>
            <Button styleClassname='btn amado-btn active' title="New This Week"></Button>
            <CartNav cartItems={cartItems} addCartCount={cartCount} cartTotal={total} />
            <Menu menu={[{ menuname: 'Checkout', menuicon:favorIcon}, { menuname: 'Search', menuicon:searchIcon}]} customName='cart-fav-search'></Menu>
            <Menu menu={[{fontAwesomeIconEnable:faPinterestP}, {fontAwesomeIconEnable:faInstagram}, {fontAwesomeIconEnable:faFacebookF}, {fontAwesomeIconEnable:faTwitter}]} customName='social-info' MenuStyleClass='d-flex flex-row'></Menu>
        </header>
        <Router addToCart={addToCart}></Router>
        </div>
        <NewsLetter />
        <Footer />
    </div>
  );
  
}
export default App;
