import React from 'react'
import BrandImg from '../../asset/img/core-img/logo2.png';

export default function Footer() {
  return (
    <>
     <footer class="footer_area clearfix">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-lg-4">
                    <div class="single_widget_area">
                        <div class="footer-logo mr-50">
                            <a href="index.html"><img src={BrandImg} alt="" /></a>
                        </div>
                        <p class="copywrite">Copyright</p>
                    </div>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="single_widget_area">
                        <div class="footer_menu d-flex justify-content-end">
                            <nav class="navbar navbar-expand-lg justify-content-end">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                                <div class="collapse navbar-collapse" id="footerNavContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="shop.html">Shop</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="product-details.html">Product</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="cart.html">Cart</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="checkout.html">Checkout</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
