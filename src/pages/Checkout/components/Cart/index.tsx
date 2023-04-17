import { useContext } from "react";
import { SingleProductCart } from "../SingleProductCart";
import { CartContainer, ConfirmButton, PricesDiv } from "./styles";
import { ProductsContext } from "../../../../contexts/ProductsContext";

export function Cart() {
    return (
        <CartContainer>
            <p>Cafés selecionados</p>
            <div>
                <SingleProductCart />
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