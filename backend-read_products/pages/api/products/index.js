// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.find();
    console.log("poduct:", product);
    return response.status(200).json(product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
