import { HeaderContainer, RightNavDiv } from "./styles";
import Logo from "../../assets/logo.svg"
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

interface DetailsProps {
    country_code: string
    country_name: string
    city: string 
    postal: string
    latitude: string
    longitude: string
    IP: string
    state: string
}

export function Header() {
    const { productsList } = useContext(ProductsContext)

    let productsTotalInCart = 0 
    productsList.forEach(product => {
        if (product.cartInfo.isInCart) {
            productsTotalInCart += 1
        }
    })

    const [ details, setDetails ] = useState<DetailsProps>()

    useEffect(() => {
        fetch("https://geolocation-db.com/json/1a3d6220-e74a-11ed-b796-7df82bd65231")
            .then( response => response.json() )
                .then( data => {
                    setDetails(data)
                })
                .catch( error => {
                    console.log(error)
                })
            .catch( error => {
                console.log(error)
        })
    }, [])

    return (
        <HeaderContainer>
            <nav>
                <NavLink to='/' title='Página Principal'>
                    <img src={Logo} alt="" />
                </NavLink>
                <RightNavDiv>
                    <div>
                        <MapPin size={22} weight="fill" />

                        { details ? ( <p>{details.city}, {details.state}</p> ) : ('')}
                    </div>
                    <NavLink to='/checkout' title='Checkout'>
                        <div>
                            <ShoppingCart size={22} weight="fill" />
                            {(productsTotalInCart != 0) ? <p>{productsTotalInCart}</p> : <></>}
                        </div>
                    </NavLink>
                </RightNavDiv>
            </nav>
        </HeaderContainer>
    )
}