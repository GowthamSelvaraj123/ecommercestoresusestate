import React from 'react'

export default function HomeCard(props) {
  return (
    <>
    <div className="single-products-catagory clearfix col-lg-4 p-0">
    <a href={props.url}>
        <img src={props.imageurl} alt={props.imagealt} />
        <div class="hover-content">
            <div class="line"></div>
            <p>From ${props.price}</p>
            <h4>{props.title}</h4>
            <button className='btn amado-btn active mt-15 p-10' onClick={props.onClick}>Add To Cart</button>
        </div>
    </a>
</div>
</>
  )
}
