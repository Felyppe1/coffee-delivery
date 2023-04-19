import { ReactNode, createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Teste from '../assets/coffees/americano.svg'

interface CartInfoProps {
    isInCart: true | false
    quantityInCart: number
    priceInCart: number
}
export interface Product {
    id: string
    name: string
    image: string
    tags: string[]
    description: string
    price: number
    quantity: number
    cartInfo: CartInfoProps
}

interface ProductsContextProps {
    productsList: Product[]
    addToCart: (id: string) => void
    formatPrice: (price: number) => string
    increaseQuantityHome: (id: string) => void
    decreaseQuantityHome: (id: string) => void
    increaseQuantityCart: (id: string) => void
    decreaseQuantityCart: (id: string) => void
    deleteCartProduct: (id: string) => void
}
export const ProductsContext = createContext({} as ProductsContextProps)

interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
    const [ productsList, setProductsList ] = useState([
        {
            id: uuidv4(),
            name: "Expresso Tradicional",
            image: "",
            tags: ["Tradicional"],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Expresso Americano",
            image: "",
            tags: ["Tradicional"],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 8.00,            
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Expresso Cremoso",
            image: "",
            tags: ["Tradicional"],
            description: "Café expresso tradicional com espuma cremosa",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Expresso Gelado",
            image: "",
            tags: ["Tradicional", "Gelado"],
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: 10.90,            
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Café com Leite",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: 9.00,            
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Latte",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: 11.00,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Capuccino",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Macchiato",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Mocaccino",
            image: "",
            tags: ["Tradicional", "Com Leite"],
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Chocolate Quente",
            image: "",
            tags: ["Especial", "Com Leite"],
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: 12.00,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Cubano",
            image: "",
            tags: ["Especial", "Alcoólico", "Gelado"],
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Havaiano",
            image: "",
            tags: ["Especial"],
            description: "Bebida adocicada preparada com café e leite de coco",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Árabe",
            image: "",
            tags: ["Especial"],
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: 9.90,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        },
        {
            id: uuidv4(),
            name: "Irlandês",
            image: "",
            tags: ["Especial", "Alcoólico"],
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: 11.00,
            quantity: 1,
            cartInfo: {
                isInCart: false,
                quantityInCart: 0,
                priceInCart: 0
            }
        }
    ])

    function addToCart(id: string) {
        const changedProductsList = productsList.filter(product => {
            if (id == product.id) {
                product.cartInfo.isInCart = true
                product.cartInfo.quantityInCart += product.quantity
                product.cartInfo.priceInCart += (product.price * product.quantity)
                product.quantity = 1
            }
            return product
        })

        setProductsList(changedProductsList)
    }

    function formatPrice(price: number) {
        let formatedPrice = price.toString()
        if (formatedPrice.indexOf('.') == -1) {
            return formatedPrice + ',00'
        }
        else {
            return price.toFixed(2)
        }
    }

    function increaseQuantityHome(id: string) {
        const productsListChanged = productsList.filter(product => {
            if (id == product.id) {
                product.quantity = product.quantity + 1
            }
            return product
        })

        setProductsList(productsListChanged)
    }

    function decreaseQuantityHome(id: string) {
        const productsListChanged = productsList.filter(product => {
            if (id == product.id) {
                if (product.quantity > 1) {
                    product.quantity = product.quantity - 1
                }
            }
            return product
        })

        setProductsList(productsListChanged)
    }

    function increaseQuantityCart(id: string) {
        const productsListModified = productsList.filter(product => {
            if (id == product.id) {
                product.cartInfo.quantityInCart += 1
                product.cartInfo.priceInCart += Number(product.price.toFixed(2)) //Pra n guardar um número tipo 3.88888889 (Ainda assim preciso formatar o número na hora de mostrar na tela pq ele guarda o número como 8 ou 8.9 por exemplo...)
            }
            return product
        })

        setProductsList(productsListModified)
    }

    function decreaseQuantityCart(id: string) {
        const productsListModified = productsList.filter(product => {
            if (id == product.id) {
                if (product.cartInfo.quantityInCart > 1) {
                    product.cartInfo.quantityInCart -= 1
                    product.cartInfo.priceInCart -= Number(product.price.toFixed(2))
                }
            }
            return product
        })

        setProductsList(productsListModified)
    }

    function deleteCartProduct(id: string) {
        const productsListModified = productsList.filter(product => {
            if (id == product.id) {
                product.cartInfo.isInCart = false
                product.cartInfo.priceInCart = 0
                product.cartInfo.quantityInCart = 0
            }
            return product
        })

        setProductsList(productsListModified)
    }
    

    

    

    return (
        <ProductsContext.Provider 
            value={{ 
                productsList,
                addToCart,
                formatPrice,
                increaseQuantityHome,
                decreaseQuantityHome,
                increaseQuantityCart,
                decreaseQuantityCart,
                deleteCartProduct
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}