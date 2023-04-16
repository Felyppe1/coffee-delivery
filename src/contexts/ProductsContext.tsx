import { ReactNode, createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

interface Product {
    id: string;
    name: string;
    image: string;
    tags: string[];
    description: string;
    price: string;
}
interface CartProduct {
    id: string
    name: string
    image: string
    price: string
}
interface ProductsContextProps {
    productsList: Product[]
    cartList: CartProduct[]
    setCartProduct: (id: string, name: string, image: string, price: string) => void
}
export const ProductsContext = createContext({} as ProductsContextProps)



/* interface CartContextProps {
    cartList: CartProduct[]
}
export const CartContext = createContext({
    cartList: []
} as CartContextProps) */


interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [ cartList, setCartList ] = useState<CartProduct[]>([])  //Tipagem da variável do Estado

    function setCartProduct(id: string, name: string, image: string, price: string) {
        setCartList([...cartList, {id, name, image, price}])
    }

    const productsList = [
        {
            id: uuidv4(),
            name: "Expresso Tradicional",
            image: "",
            tags: ["Tradicional"],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Expresso Americano",
            image: "",
            tags: ["Tradicional"],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: "8,00"
        },
        {
            id: uuidv4(),
            name: "Expresso Cremoso",
            image: "",
            tags: ["Tradicional"],
            description: "Café expresso tradicional com espuma cremosa",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Expresso Gelado",
            image: "",
            tags: ["Tradicional", "Gelado"],
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: "10,90"
        },
        {
            id: uuidv4(),
            name: "Café com Leite",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: "9,00"
        },
        {
            id: uuidv4(),
            name: "Latte",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: "11,00"
        },
        {
            id: uuidv4(),
            name: "Capuccino",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Macchiato",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Mocaccino",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Chocolate Quente",
            image: "",
            tags: ["Especial", "Com Leite"],
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: "12,00"
        },
        {
            id: uuidv4(),
            name: "Cubano",
            image: "",
            tags: ["Especial", "Alcoólico", "Gelado"],
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Havaiano",
            image: "",
            tags: ["Especial"],
            description: "Bebida adocicada preparada com café e leite de coco",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Árabe",
            image: "",
            tags: ["Especial"],
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: "9,90"
        },
        {
            id: uuidv4(),
            name: "Irlandês",
            image: "",
            tags: ["Especial", "Alcoólico"],
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: "13,00"
        }
    ]

    return (
        <ProductsContext.Provider 
            value={{ 
                productsList,
                cartList,
                setCartProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}