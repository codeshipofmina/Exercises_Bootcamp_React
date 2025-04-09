import { useEffect, useState } from "react";
import "../App.css";

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

const FakeStore = () => {
  useEffect(function () {
    // rendern der produkte passiert nur einmal, ohne useEffect laufe ich in eine schleife.
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const [products, setProducts] = useState<Product[]>([]);
  return (
    <div>
      <h1>Fake Shop API</h1>
      <ul>
        {products.map((singleProduct) => {
          console.log(singleProduct);
          return singleProduct.title;
        })}
      </ul>
    </div>
  );
};

export default FakeStore;
