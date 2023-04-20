import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { BuyerInfosContainer, FillInInfosContainer, PaymentMethodContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

const PaymentFormValidationSchema = zod.object({ //É um objeto pq ele retorna um objeto
    cep: zod.string(),
    rua: zod.string(),
    numero: zod.string(),
    complemento: zod.string(),
    bairro: zod.string(),
    cidade: zod.string(),
    uf: zod.string()
})

export function BuyerInfos() {
    const paymentForm = useForm({ //objeto de configurações
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

    function testando() {
        console.log('teste')
    }

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
                    <form onSubmit={handleSubmit(testando)}>
                        <input type="text" title='cep' placeholder="CEP" {...register('cep')} />
                        <input type="text" placeholder="Rua" {...register('rua')}/>
                        <div> 
                            <input type="text" placeholder="Número" {...register('numero')}/>
                            <input type="text" title='complemento' placeholder="Complemento" {...register('complemento')}/>
                        </div>
                        <div>
                            <input type="text" placeholder="Bairro" {...register('bairro')}/>
                            <input type="text" title='cidade' placeholder="Cidade" {...register('cidade')}/>
                            <input type="text" title='uf' placeholder="UF" {...register('uf')}/>
                        </div>
                        <button type="submit"></button>
                    </form>
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
                        <button>
                            <CreditCard size={16} />
                            <p>CARTÃO DE CRÉDITO</p>
                        </button>
                        <button>
                            <Bank size={16} />
                            <p>CARTÃO DE DÉBITO</p>
                        </button>
                        <button>
                            <Money size={16} />
                            <p>DINHEIRO</p>
                        </button>
                    </div>
                </PaymentMethodContainer>
            </div>
        </BuyerInfosContainer>
    )
}