import { Row, ButtonRemove, ButtonAdd } from './styles';

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
        <Row>
            <p>{productName}</p>
            <div>
                <ButtonRemove onClick={ removeProduct } title={ `Remover ${productName}` }>
                    -
                </ButtonRemove>
                    <span>{quantity}</span>
                <ButtonAdd onClick={ addProduct} title={ `Adicionar ${productName}` }>
                    +
                </ButtonAdd>
            </div>
        </Row>
    )
}

export default ProductCounter;
