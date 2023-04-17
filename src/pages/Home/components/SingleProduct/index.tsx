import { AddToCartContainer, ProductContainer } from "./styles";
import coffeeImg from '../../../../assets/coffees/expresso.svg'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { ProductQuantity } from "../../../../components/ProductQuantity";
import { useContext } from "react";
import { CartProduct, Product, ProductsContext } from "../../../../contexts/ProductsContext";


interface SingleProductProps {
    id: string
    name: string
    image: string
    tags: string[]
    description: string
    price: string
}

export function SingleProduct() {

    return (
        <ProductContainer>
            <img src={coffeeImg} alt="" />
            <div>
                {/* {tags.map(tag => {
                    return (
                        <p>{tag}</p>
                    )
                })} */}
                <p>Tradicional</p>
            </div>
            <p>{/* {name} */}Nome</p>
            <p>{/* {description} */}Descricao</p>
            <AddToCartContainer>
                <p>R$ <span>{/* {price} */}9,90</span></p>
                <div>
                    <ProductQuantity />
                    <button /* onClick={() => addCartProduct()} */>
                        <ShoppingCartSimple size={18} weight="fill" />
                    </button>
                </div>
            </AddToCartContainer>
        </ProductContainer>
    )
}