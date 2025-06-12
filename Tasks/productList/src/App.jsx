import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [serial, setSerial] = useState(1);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productName.trim() || !productPrice.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    const newProduct = {
      id: serial,
      name: productName.trim(),
      basePrice: parseFloat(productPrice),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setSerial(serial + 1);
    setProductName("");
    setProductPrice("");
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleIncrease = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const handleDecrease = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  const handleReset = () => {
    setProductName("");
    setProductPrice("");
  };

  return (
    <div className="container">
      <h1>Product Entry</h1>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <div className="buttons">
          <button type="submit">Add Product</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {products.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>₹{(p.basePrice * p.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleDecrease(p.id)}>➖</button>
                  <span className="quantity">{p.quantity}</span>
                  <button onClick={() => handleIncrease(p.id)}>➕</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(p.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
