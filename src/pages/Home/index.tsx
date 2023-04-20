import { Section1, Section1Container1, Section1Container2, Section2 } from "./styles";
import Section1Img from "../../assets/main-first-session-img.svg"
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { SingleProduct } from "./components/SingleProduct";
import {v4 as uuidv4} from 'uuid'
import { useContext } from 'react'
import { ProductsContext } from "../../contexts/ProductsContext";

export function Home() {
    const { productsList } = useContext(ProductsContext)

    return (
        <>
        <Section1>
            <div>
                <Section1Container1>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </Section1Container1>
                <Section1Container2>
                    <div>
                        <ShoppingCart id='shoppingCart' size={32} weight="fill" />
                        <p>Compra simples e segura</p>
                    </div>
                    <div>
                        <Package size={32} id='package' weight="fill" />
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div>
                        <Timer size={32} id='timer' weight="fill" />
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div>
                        <Coffee size={32} id='coffee' weight="fill" />
                        <p>O café chega fresquinho até você</p>
                    </div>
                </Section1Container2>
            </div>
            <img src={Section1Img} alt="" />
        </Section1>
        <Section2>
            <h2>Nossos Cafés</h2>
            <div>
                {productsList.map(product => {
                    return (
                        <SingleProduct 
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            tags={product.tags}
                            description={product.description}
                            price={product.price}
                            isInCart={product.cartInfo.isInCart}
                            quantity={product.quantity}
                        />
                    )
                })}
            </div>
        </Section2>
        </>
    )
}