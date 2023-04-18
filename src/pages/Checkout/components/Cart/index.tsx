import { useContext } from "react";
import { SingleProductCart } from "./components/SingleProductCart";
import { CartContainer, ConfirmButton, PricesDiv } from "./styles";
import { ProductsContext } from "../../../../contexts/ProductsContext";

export function Cart() {
    const { productsList } = useContext(ProductsContext)

    return (
        <CartContainer>
            <p>Cafés selecionados</p>
            <div>
                {productsList.map(product => {
                    if (product.cartInfo.isInCart) {
                        return (
                            <SingleProductCart 
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                quantityInCart={product.cartInfo.quantityInCart}
                                isInCart={product.cartInfo.isInCart}
                                priceInCart={product.cartInfo.priceInCart}
                            />
                        )
                    }
                })}
                {/* <SingleProductCart /> */}
                <PricesDiv>
                    <div>
                        <p>Total de itens</p>
                        <p>R$ 9,90</p>
                    </div>
                    <div>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>R$ 13,40</p>
                    </div>
                </PricesDiv>
                <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
            </div>
            
        </CartContainer>
    )
}