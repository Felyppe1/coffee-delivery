import { Minus, Plus, Trash } from "phosphor-react";
import { ProductButtonsDiv, ProductQuantityDiv, SingleProductCartDiv } from "./styles";
import { useContext } from "react";
import { ProductsContext } from "../../../../../../contexts/ProductsContext";

interface SingleProductCartProps {
    id: string
    name: string
    image: string
    price: number
    quantityInCart: number
    isInCart: boolean
    priceInCart: number
}

export function SingleProductCart({id, name, image, price, quantityInCart, isInCart, priceInCart}: SingleProductCartProps) {
    const { formatPrice, increaseQuantityCart, decreaseQuantityCart, deleteCartProduct } = useContext(ProductsContext)

    return (
        <SingleProductCartDiv>
            <div>
                <img src={image} alt="" />
                <ProductButtonsDiv>
                    <p>{name}</p>
                    <div>
                        <ProductQuantityDiv>
                            <button><Minus onClick={() => decreaseQuantityCart(id)} size={16}/></button>
                            
                            <p>{quantityInCart}</p>

                            <button><Plus onClick={() => increaseQuantityCart(id)} size={16}/></button>
                            
                        </ProductQuantityDiv>
                        <button onClick={() => deleteCartProduct(id)}>
                            <Trash size={16} />
                            <p>REMOVER</p>
                        </button>
                    </div>
                </ProductButtonsDiv>
            </div>
            <p>R$ {formatPrice(priceInCart)}</p>
        </SingleProductCartDiv>
    )
}