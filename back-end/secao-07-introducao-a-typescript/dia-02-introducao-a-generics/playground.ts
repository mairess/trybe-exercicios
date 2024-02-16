type Product = {
    barcode: string,
    price: number,
  };

function getProduct() {
  const product: Product = {
      barcode: '123c456b789a', // Error: Property 'barcode' does not exist on type '{}'.
      price: 15
  };
  return product;
}

console.log(getProduct());