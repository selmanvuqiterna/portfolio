import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My personal projects</h1>
        <p className="pl-desc">
          In this part of the  portfolio I will show some of my best solo projects that I developed while I was learning coding.
          (clickable cards)
        
        </p>
        <strong>NOTE</strong><p>All these websites are not made by me, I didnt host my own ones so thats why I took these websites as an example</p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
