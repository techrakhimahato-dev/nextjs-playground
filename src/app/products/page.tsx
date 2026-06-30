import { metadata } from 'next';

type Props = {
    params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<metadata> => {
    const { productId } = await params;
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Product: ${productId}`);
        }, 1000);
    return {
        title: `Product: ${productId}`,
        description: `Details for product with ID: ${productId}`,
    };
};

export default async function ProductList({
    params,
}: {
    params: Promise<{ productId: string }>;
}   ) {
    const { productId } = await params;
    return <h1>Product List for Product ID: {productId}</h1>;
}