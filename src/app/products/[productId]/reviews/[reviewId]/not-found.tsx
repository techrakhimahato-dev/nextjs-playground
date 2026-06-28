"use client";

import { usePathname } from "next/navigation"; 

export default function NotFound() { 
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h1>Review Not Found</h1>
            <p>
                The review with ID <strong>{reviewId}</strong> for product with ID <strong>{productId}</strong> was not found.
            </p>
        </div>  
    );
}