import { Minus, Plus } from "phosphor-react";
import { ProductQuantityDiv } from "./styles";

export function ProductQuantity() {
    return (
        <ProductQuantityDiv>
            <Minus size={16}/>
            <p>{/* {quantity} */}1</p>
            <Plus size={16}/>
        </ProductQuantityDiv>
    )
}