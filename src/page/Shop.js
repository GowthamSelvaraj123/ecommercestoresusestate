import React from 'react'
import ShopSidebar from '../components/shopsidebar/ShopSidebar';
import ShopCard from '../components/shopcard/ShopCard';
import ModernChair from '../asset/img/bg-img/1.jpg';
import MinimalisticPlantPot from '../asset/img/bg-img/2.jpg';
import ModernChair2 from '../asset/img/bg-img/3.jpg';
import NightStand from '../asset/img/bg-img/4.jpg';
import PlantPot from '../asset/img/bg-img/5.jpg';
import SmallTable from '../asset/img/bg-img/6.jpg';
import HomeDeco from '../asset/img/bg-img/7.jpg';
import MetallicChair2 from '../asset/img/bg-img/8.jpg';

export default function Shop() {
  const productData = [{imageurl:ModernChair, alt:'modern-chair', price:180, title:"Modern Chair"}, 
    {imageurl:MinimalisticPlantPot, alt:'minimalistic-plant-pot', price:160, title:"Minimalistic Plant Pot"}, 
    {imageurl:ModernChair2, alt:'modern-chair', price:180, title:"Modern Chair"},
    {imageurl:NightStand, alt:'ModernChair', price:80, title:"Night Stand"},
    {imageurl:PlantPot, alt:'ModernChair', price:205, title:"Plant Pot"},
    {imageurl:HomeDeco, alt:'ModernChair', price:450, title:"Metallic Chair"},
    {imageurl:SmallTable, alt:'ModernChair', price:430, title:"Small Table"},
    {imageurl:MetallicChair2, alt:'ModernChair', price:900, title:"Metallic Chair"},
    {imageurl:ModernChair, alt:'ModernChair', price:600, title:"Modern Rocking Chair"},];
  return (
    <>
      <ShopSidebar></ShopSidebar>
      <div class="amado_product_area section-padding-100">
      <div class="container-fluid">
      <div class="row">
      {productData.map((item) => <ShopCard price={item.price} title={item.title} image={item.imageurl}></ShopCard>)}
      </div>
      </div>
      </div>  
    </>
  )
}
