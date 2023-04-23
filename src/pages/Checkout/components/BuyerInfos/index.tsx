import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { BuyerInfosContainer, FillInInfosContainer, PaymentMethodContainer } from "./styles";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { useContext, useState } from "react";
import { defaultTheme } from "../../../../styles/themes/default";
import { ProductsContext } from "../../../../contexts/ProductsContext";

interface BuyerInfosProps {
    selectedPaymentMethod: number
    handleSelectPaymentMethod: (id: number) => number
}

interface SelectedPaymentMethodProps {
    selectedPaymentMethod: number
}

export function BuyerInfos({ selectedPaymentMethod, handleSelectPaymentMethod }: BuyerInfosProps) {
    const { register } = useFormContext()

    /* const { selectedPaymentMethod, handleSelectPaymentMethod } = useContext(ProductsContext) */

    return (
        <BuyerInfosContainer>
            <p>Complete seu pedido</p>
            <div>
                <FillInInfosContainer>
                    <div>
                        <MapPinLine size={22} />
                        <div>
                            <p>Endereço de Entrega</p>
                            <p>Informe o endereço onde deseja receber o seu pedido</p>
                        </div>
                    </div>
                    <div>
                        <input type="text" title='cep' placeholder="CEP" {...register('cep')} />
                        <input type="text" title='rua' placeholder="Rua" {...register('rua')}/>
                        <input type="text" title='numero' placeholder="Número" {...register('numero')}/>
                        <input type="text" title='complemento' placeholder="Complemento" {...register('complemento')}/>
                        <input type="text" title='bairro' placeholder="Bairro" {...register('bairro')}/>
                        <input type="text" title='cidade' placeholder="Cidade" {...register('cidade')}/>
                        <input type="text" title='uf' placeholder="UF" {...register('uf')}/>
                    </div>
                </FillInInfosContainer>

                <PaymentMethodContainer>
                    <div>
                        <CurrencyDollar size={22} />
                        <div>
                            <p>Pagamentos</p>
                            <p>O pagamento é feito na entrega, escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                    <div>
                        <button 
                            type="button" 
                            onClick={() => handleSelectPaymentMethod(1)} 
                            style={{
                                outline: (selectedPaymentMethod == 1) ? `2px solid ${defaultTheme.purple}` : ''
                            }}
                        >

                            <CreditCard size={16} />
                            <p>CARTÃO DE CRÉDITO</p>

                        </button>
                        <button 
                            type="button" 
                            onClick={() => handleSelectPaymentMethod(2)}
                            style={{
                                outline: (selectedPaymentMethod == 2) ? `2px solid ${defaultTheme.purple}` : ''
                            }}
                        >

                            <Bank size={16} />
                            <p>CARTÃO DE DÉBITO</p>

                        </button>
                        <button 
                            type="button" 
                            onClick={() => handleSelectPaymentMethod(3)}
                            style={{
                                outline: (selectedPaymentMethod == 3) ? `2px solid ${defaultTheme.purple}` : ''
                            }}
                        >

                            <Money size={16} />
                            <p>DINHEIRO</p>

                        </button>
                    </div>
                </PaymentMethodContainer>
            </div>
        </BuyerInfosContainer>
    )
}