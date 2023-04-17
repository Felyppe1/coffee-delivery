import { HeaderContainer, RightNavDiv } from "./styles";
import Logo from "../../assets/logo.svg"
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <NavLink to='/' title='Página Principal'>
                    <img src={Logo} alt="" />
                </NavLink>
                <RightNavDiv>
                    <div>
                        <MapPin size={22} weight="fill" />
                        <p>Niterói, RJ</p>
                    </div>
                    <NavLink to='/checkout' title='Checkout'>
                        <div>
                            <ShoppingCart size={22} weight="fill" />
                            <p>{/* {totalProductsInCart} */}1</p>
                        </div>
                    </NavLink>
                </RightNavDiv>
            </nav>
        </HeaderContainer>
    )
}