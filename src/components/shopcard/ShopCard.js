import React from 'react'

export default function ShopCard(props) {
  return (
    <>
                                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div class="single-product-wrapper">
                            <div class="product-img">
                                <img src={props.image} alt="" />
                                <img class="hover-img" src={props.image} alt="" />
                            </div>
                            <div class="product-description d-flex align-items-center justify-content-between">
                                <div class="product-meta-data">
                                    <div class="line"></div>
                                    <p class="product-price">$ {props.price}</p>
                                    <a href="product-details.html">
                                        <h6>{props.title}</h6>
                                    </a>
                                </div>
                                <div class="ratings-cart text-right">
                                    <div class="ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div class="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}
