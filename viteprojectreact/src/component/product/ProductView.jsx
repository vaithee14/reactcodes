import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductView() {
  const [product, setProduct] = useState([]);
  console.log(product, "product");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/products/get/usersproducts"
        );
        setProduct(response.data); // Assuming response.data contains an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run only once

  return (
    <>
      <table border={"2px"} cellPadding={20}>
        <tr>
          <th>S:no</th>
          <th>Product name</th>
          <th>Price</th>
          <th>Total stock</th>
          <th>Active</th>
        </tr>
        {product.map((data, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{data.productName}</td>
            <td>{data.price}</td>
            <td>{data.stock}</td>
            <td>sfsdf</td>
          </tr>
        ))}
      </table>
    </>
  );
}
