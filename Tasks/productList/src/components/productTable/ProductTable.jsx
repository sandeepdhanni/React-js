import React, { useState } from "react";
import "./ProductTable.css";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

function ProductTable() {
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

  const rows = products.map((p) => ({
    id: p.id,
    name: p.name,
    totalPrice: (p.basePrice * p.quantity).toFixed(2),
    quantity: p.quantity,
  }));

  const columns = [
    { field: "id", headerName: "S.No", width: 80 },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "totalPrice", headerName: "Total Price (₹)", width: 180 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
      renderCell: (params) => (
        <>
          <button onClick={() => handleDecrease(params.row.id)}>➖</button>
          <span style={{ margin: "0 10px" }}>{params.row.quantity}</span>
          <button onClick={() => handleIncrease(params.row.id)}>➕</button>
        </>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row.id)}>🗑️</button>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

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
        <Paper sx={{ height: 400, width: "100%", mt: 3 }}>
         <DataGrid
  rows={rows}
  columns={columns}
  initialState={{ pagination: { paginationModel } }}
  pageSizeOptions={[5, 10]}
  checkboxSelection
  sx={{
    border: 0,
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      fontSize: "16px",
       textAlign: "center",
  width: "100%"
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#f5f5f5",
    }
  }}
/>
        </Paper>
      )}
    </div>
  );
}

export default ProductTable;
