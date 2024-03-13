import { getAllProducts } from "../../../services/productServices"; // Update the path as per your project structure

export default function handler(request, response) {
  const products = getAllProducts();
  response.status(200).json(products);
}
