
import { notFound } from "next/navigation";

export default async function ProductList({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 100) {
    notFound();
  }

  return (
    <h1>
      Details of the product: {productId}
      <br />
      Details of the review: {reviewId}
    </h1>
  );
}