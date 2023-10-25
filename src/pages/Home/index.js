import React from "react";
import Slider from "../../components/carousels";
import DivWithSections from "../../components/divs";
import ProductSlider from "../../components/product-slider";
import New from "../../components/new";
import Clients from "../../components/clients";
import AboutComponent from "../../components/about";

export default function Home() {
  return (
    <div>
      <Slider />
      <DivWithSections />
      <h2 style={{textAlign:"left", paddingLeft:"60px"}}><b>FEATURED PRODUCTS</b></h2>
      <ProductSlider />
      <AboutComponent />
      <h2 style={{textAlign:"left", paddingLeft:"60px", paddingTop:"20px"}}><b>BEST SELLER</b></h2>
      <ProductSlider />
      <New />
      <Clients />
    </div>
  );
}
