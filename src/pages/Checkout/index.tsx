import { BuyerInfos } from "./components/BuyerInfos";
import { Cart } from "./components/Cart";
import { CheckoutContainer } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export function Checkout() {
    return (
        <CheckoutContainer>
            <BuyerInfos />
            <Cart />
        </CheckoutContainer>
    )
}