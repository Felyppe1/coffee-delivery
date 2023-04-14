import { AddToCartContainer, ProductContainer } from "./styles";
import coffeeImg from '../../../../assets/coffees/expresso.svg'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'

export function SingleProduct() {
    return (
        <ProductContainer>
            <img src={coffeeImg} alt="" />
            <div>
                <p>Tradicional</p>
            </div>
            <p>Expresso Tradicional</p>
            <p>O tradicional café feito com água quente e café moído</p>
            <AddToCartContainer>
                <p>R$ <span>9,90</span></p>
                <div>
                    <div>
                        <Minus size={16}/>
                        <p>1</p>
                        <Plus size={16}/>
                    </div>
                    <button>
                        <ShoppingCartSimple size={18} weight="fill" />
                    </button>
                </div>
            </AddToCartContainer>
        </ProductContainer>
    )
}