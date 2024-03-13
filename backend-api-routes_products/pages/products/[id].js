import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = useSWR(`/api/products/${id}`, fetcher);
  console.log(product);
  //const joke = jokes.find((joke) => joke.id === id);

  if (!product) {
    return <>product not found..</>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
