import { BuyerInfos } from "./components/BuyerInfos";
import { Cart } from "./components/Cart";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <BuyerInfos />
            <Cart />
        </CheckoutContainer>
    )
}