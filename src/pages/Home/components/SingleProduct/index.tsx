import { AddToCartContainer, ProductContainer } from "./styles";
import coffeeImg from '../../../../assets/coffees/expresso.svg'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { ProductQuantity } from "../../../../components/ProductQuantity";


interface SingleProductProps {
    id: string
    name: string
    image: string
    tags: string[]
    description: string
    price: string
}

export function SingleProduct({id, name, image, tags, description, price}: SingleProductProps) {
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
                <p>R$ <span>{price}</span></p>
                <div>
                    {/* <div>
                        <Minus size={16}/>
                        <p>1</p>
                        <Plus size={16}/>
                    </div> */}
                    <ProductQuantity />
                    <button>
                        <ShoppingCartSimple size={18} weight="fill" />
                    </button>
                </div>
            </AddToCartContainer>
        </ProductContainer>
    )
}