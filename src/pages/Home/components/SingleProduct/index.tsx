import { AddToCartContainer, ProductContainer, ProductQuantityDiv } from "./styles";
import coffeeImg from '../../../../assets/coffees/expresso.svg'
import { Plus, Minus, ShoppingCartSimple, TestTube } from 'phosphor-react'
import { ProductQuantity } from "../../../../components/ProductQuantity";
import { useContext } from "react";
import { Product, ProductsContext } from "../../../../contexts/ProductsContext";


interface SingleProductProps {
    id: string
    name: string
    image: string
    tags: string[]
    description: string
    price: number
    isInCart: boolean
    quantity: number
}

export function SingleProduct({ id, name, image, tags, description, price, isInCart, quantity }: SingleProductProps) {
    const { addToCart, formatPrice, increaseQuantityHome, decreaseQuantityHome } = useContext(ProductsContext)

    return (
        <ProductContainer>
            <img src={coffeeImg} alt="" />
            <div>
                {tags.map(tag => {
                    return (
                        <p>{tag}</p>
                    )
                })}
            </div>
            <p>{name}</p>
            <p>{description}</p>
            <AddToCartContainer>
                <p>R$ <span>{formatPrice(price)}</span></p>
                <div>
                    <ProductQuantityDiv>
                        <button><Minus onClick={() => decreaseQuantityHome(id)} size={16}/></button>
                        
                        <p>{quantity}</p>

                        <button><Plus onClick={() => increaseQuantityHome(id)} size={16}/></button>
                    </ProductQuantityDiv>
                    <button onClick={() => addToCart(id)}>
                        <ShoppingCartSimple size={18} weight="fill" />
                    </button>
                </div>
            </AddToCartContainer>
        </ProductContainer>
    )
}