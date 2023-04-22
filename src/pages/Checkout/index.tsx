import { BuyerInfos } from "./components/BuyerInfos";
import { CheckoutContainer } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Cart } from "./components/Cart";
import { useContext, useState } from "react";
import { /* PaymentFormData, PaymentFormValidationSchema, */ ProductsContext } from "../../contexts/ProductsContext";

const PaymentFormValidationSchema = zod.object({ //É um objeto pq ele retorna um objeto
    cep: zod.string().min(1, 'Digite um CEP válido'),
    rua: zod.string().min(1),
    numero: zod.string().min(1),
    complemento: zod.string().min(1),
    bairro: zod.string().min(1),
    cidade: zod.string().min(1),
    uf: zod.string().length(2)
})

export type PaymentFormData = zod.infer<typeof PaymentFormValidationSchema> //FormContext só funciona com a tipagem

export function Checkout() {
    /* const { selectedPaymentMethod, confirmPayment, paymentForm } = useContext(ProductsContext) */

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

    

    /* const { register, handleSubmit } = paymentForm */

    function handleConfirmPayment(data: PaymentFormData) {
        //console.log(PaymentFormValidationSchema.safeParse({...data}))
        if (selectedPaymentMethod != 0 && PaymentFormValidationSchema.safeParse({...data})) {
            /* confirmPayment(data) */
            window.location.href = '/success' 
        }
    }

    return (
        <CheckoutContainer onSubmit={handleSubmit(handleConfirmPayment)}>
            <FormProvider {...paymentForm}>
                <BuyerInfos selectedPaymentMethod={selectedPaymentMethod} handleSelectPaymentMethod={handleSelectPaymentMethod}/>
                <Cart selectedPaymentMethod={selectedPaymentMethod} />
            </FormProvider>
        </CheckoutContainer>
    )
}