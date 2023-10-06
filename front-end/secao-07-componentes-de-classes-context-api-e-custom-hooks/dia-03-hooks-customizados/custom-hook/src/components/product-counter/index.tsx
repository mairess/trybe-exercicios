type ProductCounterProps = {
    productName: string; 
    quantity: number;
    addProduct: () => void;
    removeProduct: () => void;
}

function ProductCounter({
    productName, 
    quantity,
    addProduct,
    removeProduct,
} : ProductCounterProps) {
    return (
        <div>
            <p>{productName}</p>
            <div>
                <button onClick={ removeProduct } title={ `Remover ${productName}` }>
                    -
                </button>
                    <span>{quantity}</span>
                <button onClick={ addProduct} title={ `Adicionar ${productName}` }>
                    +
                </button>
            </div>
        </div>
    )
}

export default ProductCounter;
