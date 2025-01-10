import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

const products = [
  {
    image:
      "https://www.exoticcarhacks.com/wp-content/uploads/2024/02/Wx7jPdTT-scaled.jpeg",
    name: "Lambo Huracan",
    price: "300000",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2023-lamborghini-urus-performante-0476-644a6d5d75484.jpg?crop=0.663xw:0.560xh;0.131xw,0.281xh&resize=2048:*",
    name: "Lambo Urus",
    price: "400000",
  },
  {
    image:
      "https://www.topgear.com/sites/default/files/2024/05/18-Lamborghini-Revuelto-review-UK-2024.jpg",
    name: "Lambo Revuelto",
    price: "600000",
  },
  {
    image:
      "https://ymimg1.b8cdn.com/resized/article/9289/pictures/12706911/listing_main_2025_Porsche_911_Carrera_GTS_Hybrid_rear.jpg",
    name: "Porsche 911",
    price: "150000",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [title, setTitle] = useState("Shopping Cart Project");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((product, id) => index !== id));
  };

  return (
    <Router>
      <div className="container">
        <h2>{title}</h2>

        <nav>
          <Link to="/">Products</Link> <Link to="/cart">Shopping Cart</Link>
        </nav>
        <div className="box">
          <Routes>
            <Route
              path="/"
              element={
                <ProductsList addToCart={addToCart} products={products} />
              }
            />
            <Route
              path="/cart"
              element={<Cart removeFromCart={removeFromCart} cart={cart} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
