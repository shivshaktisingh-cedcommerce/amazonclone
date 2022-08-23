import React,{useContext} from "react";
import "./Home.css";
import { Product } from "./Product";
import Data from "./Data";
import {UserContext} from "./Mycontext";

export const Home = () => {
   const obj = useContext(UserContext);
   
   // Adding product to cart
   const addToCart=(id)=>{
      var flag=0;
      obj.product.map((i)=>{
       if(i.id === id){
            flag=1;
         }
      })
      if(flag === 1){
         alert("Product already exist in your cart!");
      }
      else{
         Data.map((i)=>{
            if(i.id === id){
               obj.setproduct([...obj.product,i]);
            }
         })
      }
   }

  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg"
        alt="img"
      />

      <div className="home_row">
        <Product
          id="1"
          title="Shop & Pay | Earn rewards daily"
          image=" https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg"
        />
        <Product
          id="1"
          title="Top picks for your home"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
        />
        <Product
          id="1"
          title="Up to 70% off | Clearance store"
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
        />
      </div>
      <h1 className="top_deals">Top Deals</h1>
      <div className="home_product">
        {Data.map((i) => {
          return (
            <>
              <div className="product1">
                <img src={i.image} alt="" />
                <div className="product-info">
                  <h2>{i.name}</h2>
                  <h2>&#8377; {i.price}</h2>
                  <p>FREE Delivery by Amazon</p>
                  <p><span><i class="fa fa-check" aria-hidden="true" style={{color:"#FFD814"}}></i> </span><span style={{color:"#2191C1"}}>prime</span></p>
                  <div className="product_rating">
                    {Array(i.rating)
                      .fill()
                      .map((_) => (
                        <p>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#FFA41C" }}
                          ></i>
                        </p>
                      ))}
                  </div>
                </div>

                <button onClick={()=>addToCart(i.id)}>Add to Cart</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
