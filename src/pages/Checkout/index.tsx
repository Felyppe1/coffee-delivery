import { BuyerInfos } from "./components/BuyerInfos";
import { CheckoutContainer } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Cart } from "./components/Cart";
import { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

const PaymentFormValidationSchema = zod.object({ //É um objeto pq ele retorna um objeto
    cep: zod.string().min(1, 'Digite um CEP válido'),
    rua: zod.string().min(1),
    numero: zod.string().min(1),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1),
    cidade: zod.string().min(1),
    uf: zod.string().length(2)
})

export type PaymentFormData = zod.infer<typeof PaymentFormValidationSchema> //FormContext só funciona com a tipagem

export function Checkout() {
    const { productsList} = useContext(ProductsContext)

    const paymentForm = useForm<PaymentFormData>({ //objeto de configurações
        resolver: zodResolver(PaymentFormValidationSchema), 
        defaultValues: {
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            uf: ''
        }
    })

    const { register, handleSubmit } = paymentForm

    const [ selectedPaymentMethod, setSelectedPaymentMethod ] = useState(0) //useState retorna uma ARRAYYYYYYYYYYYY
    

    function handleSelectPaymentMethod(id: number) {
        setSelectedPaymentMethod(state => {
            if (state == id) {
                return 0
            }
            else {
                return id
            }
        })

        return selectedPaymentMethod
    }

    const navigate = useNavigate()

    function handleConfirmPayment(data: PaymentFormData) {
        let isThereInCart 
        productsList.forEach(product => {
            if (product.cartInfo.isInCart == true) {
                isThereInCart = true
            }
        })
        
        let dataFromForm = PaymentFormValidationSchema.safeParse({...data})
        if (selectedPaymentMethod != 0 && dataFromForm && isThereInCart) {
            let selectedPaymentMethodName
            if (selectedPaymentMethod == 1) {
                selectedPaymentMethodName = 'Cartão de Crédito'
            } 
            else if (selectedPaymentMethod == 2) {
                selectedPaymentMethodName = 'Cartão de Débito'
            } else {
                selectedPaymentMethodName = 'Dinheiro'
            }

            const arrayToLocalStorage = JSON.stringify(dataFromForm)
            localStorage.setItem('@coffee-delivery:buyer-infos-1.0.0', arrayToLocalStorage)
            localStorage.setItem('@coffee-delivery:payment-method-1.0.0', selectedPaymentMethodName)

            productsList.filter(product => {
                if (product.cartInfo.isInCart) {
                    product.cartInfo.isInCart = false
                }
            })

            navigate('/success')
        }
    }

    return (
        <CheckoutContainer onSubmit={handleSubmit(handleConfirmPayment)}>
            <FormProvider {...paymentForm}>
                <BuyerInfos selectedPaymentMethod={selectedPaymentMethod} handleSelectPaymentMethod={handleSelectPaymentMethod}/>
                <Cart /* selectedPaymentMethod={selectedPaymentMethod} */ />
            </FormProvider>
        </CheckoutContainer>
    )
}