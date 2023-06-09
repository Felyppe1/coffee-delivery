import { useContext } from "react";
import { SingleProductCart } from "./components/SingleProductCart";
import { CartContainer, ConfirmButton, PricesDiv } from "./styles";
import { ProductsContext } from "../../../../contexts/ProductsContext";
import { v4 as uuidv4 } from 'uuid'

export function Cart() {

    const { productsList, formatPrice } = useContext(ProductsContext)

    let allProductsValue = 0
    productsList.forEach(product => {
        if (product.cartInfo.isInCart) {
            allProductsValue += product.cartInfo.priceInCart
        }
    })

    return (
        <CartContainer>
            <p>Cafés selecionados</p>
            <div>
                {productsList.map(product => {
                    if (product.cartInfo.isInCart) {
                        const cont = uuidv4()
                        return (
                            <SingleProductCart 
                                key={cont}
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
                <PricesDiv>
                    <div>
                        <p>Total de itens</p>
                        <p>R$ {formatPrice(allProductsValue)}</p>
                    </div>
                    <div>
                        <p>Entrega</p>
                        <p>R$ 5,00</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>R$ {formatPrice(allProductsValue + 5)}</p>
                    </div>
                </PricesDiv>
                <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
            </div>
            
        </CartContainer>
    )
}