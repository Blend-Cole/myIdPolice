import { Suspense } from "react";
import { ProductDetails } from "./ProductDetails.client";

export const FeaturedProduct = ({ product }) => {

  return (
    <div className="border-2 border-black">
      <div>
        <h3 className="bg-yellow-300 p-4">STEP 1: Click on a Box Below</h3>
        <Suspense>
          <ProductDetails product={product} />
        </Suspense>
      </div>
    </div>
  );
};