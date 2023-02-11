import React, { useState } from "react";

const FormTable = ({ callback }) => {
  const [formData, setFormData] = useState({});

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveData = () => {
    fetch("https://lobster-app-ddwng.ondigitalocean.app/product/add_new", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
      },
      body: JSON.stringify(formData)
    })
      .then((data) => data.json())
      .then((res) => {
        callback();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    saveData();
  };

  return (
    <div>
      <form
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Create New Product</h1>
        <div className="form">
          <input
            name="product_name"
            type="text"
            placeholder="Product Name"
            onChange={(e) => {
              handleFormChange(e);
            }}
          />
          <input
            type="text"
            name="original_price"
            placeholder="Original Price"
            onChange={(e) => {
              handleFormChange(e);
            }}
          />
          <input
            type="text"
            name="sale_price"
            placeholder="Sale Price"
            onChange={(e) => {
              handleFormChange(e);
            }}
          />
          <input
            type="text"
            name="product_type"
            placeholder="Product Type"
            onChange={(e) => {
              handleFormChange(e);
            }}
          />
          <textarea
            name="description"
            onChange={(e) => {
              handleFormChange(e);
            }}
            placeholder="Description"
          ></textarea>
          <button type="button" className="btn-primary">
            Create{" "}
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormTable;
