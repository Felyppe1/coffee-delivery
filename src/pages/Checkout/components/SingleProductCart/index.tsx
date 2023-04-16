import { Minus, Plus, Trash } from "phosphor-react";
import { ProductQuantity } from "../../../../components/ProductQuantity";
import CoffeeImg from "../../../../assets/coffees/expresso.svg"
import { ProductButtonsDiv, SingleProductCartDiv } from "./styles";

export function SingleProductCart() {
    return (
        <SingleProductCartDiv>
            <div>
                <img src={CoffeeImg} alt="" />
                <ProductButtonsDiv>
                    <p>Expresso Tradicional</p>
                    <div>
                        <ProductQuantity />
                        <button>
                            <Trash size={16} />
                            <p>REMOVER</p>
                        </button>
                    </div>
                </ProductButtonsDiv>
            </div>
            <p>R$ 9,90</p>
        </SingleProductCartDiv>
    )
}