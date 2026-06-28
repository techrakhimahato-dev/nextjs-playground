export default async function ProductList({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <h1>Details of the product: {productId}</h1>;
}