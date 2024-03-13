import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;

  if (!products) {
    return <div>loading...</div>;
  }

  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              Name: {product.name}, Description: {product.description}, Price:{" "}
              {product.price}
              {product.currency}, category: {product.category}
            </li>
          );
        })}
      </ul>
    </>
  );
}
