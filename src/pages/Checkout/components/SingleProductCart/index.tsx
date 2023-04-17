import { Minus, Plus, Trash } from "phosphor-react";
import { ProductQuantity } from "../../../../components/ProductQuantity";
import CoffeeImg from "../../../../assets/coffees/expresso.svg"
import { ProductButtonsDiv, SingleProductCartDiv } from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../../../contexts/ProductsContext";

interface SingleProductCartProps {
    id: string
    name: string
    image: string
    price: string
    quantity: number
}

export function SingleProductCart() {

    return (
        <SingleProductCartDiv>
            <div>
                <img src={CoffeeImg} alt="" />
                <ProductButtonsDiv>
                    <p>{/* {name} */}Nome</p>
                    <div>
                        <ProductQuantity />
                        <button /* onClick={() => deleteCartProduct(id)} */>
                            <Trash size={16} />
                            <p>REMOVER</p>
                        </button>
                    </div>
                </ProductButtonsDiv>
            </div>
            <p>R$ {/* {price} */}9,90</p>
        </SingleProductCartDiv>
    )
}