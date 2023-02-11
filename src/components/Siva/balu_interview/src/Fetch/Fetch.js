import React, { useEffect, useState } from "react";
import FormTable from "../Form/FormTable";
// import './fetch/Fetch.css';
function Fetch() {
  const [response, setResponse] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const getData = () => {
    fetch("https://lobster-app-ddwng.ondigitalocean.app/product/list",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
        }
      })
      .then((data) => data.json())
      .then((res) => {
        setResponse(res.message);
        setDisplayData(res.message);
        console.log(res.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const onSearch = (e) => {
    setDisplayData(
      response.filter((ele) => ele.product_name.includes(e.target.value))
    );
  };

  return (
    <div className="main-tb">
      <FormTable
        callback={() => {
          getData();
        }}
      />
      <div className="Tb-data">
        <h2>All Products</h2>
        <input placeholder="Search" onChange={onSearch} />
      </div>
      <div className="Tb-content">
        <table>
          <thead>
            <tr>
              <td>Product ID</td>
              <td>Product Name</td>
              <td>Original Price</td>
              <td>Sale Price</td>
              <td>Product Type</td>
              <td>Product Description</td>
              <td>Date and Time</td>
            </tr>
          </thead>
          <tbody>
            {displayData.map((res, index) => {
              return (
                <tr key={`row-${index}`}>
                  <td>{res._id}</td>
                  <td>{res.product_name}</td>
                  <td>{res.original_price}</td>
                  <td>{res.sale_price}</td>
                  <td>{res.product_type}</td>
                  <td>{res.description}</td>
                  <td>{res.date_n_time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Fetch;
