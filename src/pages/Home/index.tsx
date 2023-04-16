import { Section1, Section1Container1, Section1Container2, Section2 } from "./styles";
import Section1Img from "../../assets/main-first-session-img.svg"
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { SingleProduct } from "./components/SingleProduct";
import {v4 as uuidv4} from 'uuid'

export function Home() {
    const productsList = [
        {
            name: "Expresso Tradicional",
            image: "",
            tags: ["Tradicional"],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: "9,90"
        },
        {
            name: "Expresso Americano",
            image: "",
            tags: ["Tradicional"],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: "9,90"
        },
        {
            name: "Expresso Cremoso",
            image: "",
            tags: ["Tradicional"],
            description: "Café expresso tradicional com espuma cremosa",
            price: "9,90"
        },
        {
            name: "Expresso Gelado",
            image: "",
            tags: ["Tradicional", "Gelado"],
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: "9,90"
        },
        {
            name: "Café com Leite",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: "9,90"
        },
        {
            name: "Latte",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: "9,90"
        },
        {
            name: "Capuccino",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: "9,90"
        },
        {
            name: "Macchiato",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: "9,90"
        },
        {
            name: "Mocaccino",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: "9,90"
        },
        {
            name: "Chocolate Quente",
            image: "",
            tags: ["Especial", "Com Leite"],
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: "9,90"
        },
        {
            name: "Cubano",
            image: "",
            tags: ["Especial", "Alcoólico", "Gelado"],
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: "9,90"
        },
        {
            name: "Havaiano",
            image: "",
            tags: ["Especial"],
            description: "Bebida adocicada preparada com café e leite de coco",
            price: "9,90"
        },
        {
            name: "Árabe",
            image: "",
            tags: ["Especial"],
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: "9,90"
        },
        {
            name: "Irlandês",
            image: "",
            tags: ["Especial", "Alcoólico"],
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: "9,90"
        }
    ]

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
                        <div>
                            <ShoppingCart id='shoppingCart' size={32} weight="fill" />
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <Package size={32} weight="fill" />
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Timer size={32} weight="fill" />
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <Coffee size={32} weight="fill" />
                            <p>O café chega fresquinho até você</p>
                        </div>
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
                        />
                    )
                })}
            </div>
        </Section2>
        </>
    )
}