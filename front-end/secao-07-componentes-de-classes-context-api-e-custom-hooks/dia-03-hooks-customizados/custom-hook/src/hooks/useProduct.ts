import { useState } from 'react';

function useProduct(limit: number) {
  const [productQty, setProductQty] = useState(0);

  const addProduct = () => {
    if (productQty >= limit) {
      setProductQty(limit);
    } else {
      setProductQty((prevProductQty) => prevProductQty + 1);
    }
  };

  const removeProduct = () => {
    if (productQty <= 0) {
      setProductQty(0);
    } else {
      setProductQty((prevProductQty) => prevProductQty - 1);
    }
  };

  return {
    productQty,
    addProduct,
    removeProduct,
  };
}

export default useProduct;
