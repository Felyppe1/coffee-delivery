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
}

export function SingleProductCart({id, name, image, price}: SingleProductCartProps) {
    const { setCartProduct } = useContext(ProductsContext)

    function handleDeleteProductFromCart(id: string) {
        console.log(id)  //USAR useReducer
    }

    return (
        <SingleProductCartDiv>
            <div>
                <img src={CoffeeImg} alt="" />
                <ProductButtonsDiv>
                    <p>{name}</p>
                    <div>
                        <ProductQuantity />
                        <button onClick={() => handleDeleteProductFromCart(id)}>
                            <Trash size={16} />
                            <p>REMOVER</p>
                        </button>
                    </div>
                </ProductButtonsDiv>
            </div>
            <p>R$ {price}</p>
        </SingleProductCartDiv>
    )
}