import { DeliveryInfosContainer, SuccessContainer } from "./styles"
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import CheckoutImg from '../../assets/checkout-success-img.svg'

export function Success() {
    let rua = 'Deputado José Luiz Ertal'
    let numero = '20'
    let bairro = 'Cafubá'
    let cidade = 'Niterói'
    let uf = 'RJ'


    return (
        <SuccessContainer>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que o café logo chegará até você</p>
            </div>
            <div>
                <DeliveryInfosContainer>
                    <div>
                        <MapPin id="map" size={32} weight="fill"/>
                        <div>
                            <p>Entrega em <span>{rua}, {numero}</span></p>
                            <p>{bairro} - {cidade}, {uf}</p>
                        </div>
                    </div>
                    <div>
                        <Timer id="timer" size={32} weight="fill"/>
                        <div>
                            <p>Previsão de entrega</p>
                            <span>20 min - 30 min</span>
                        </div>
                    </div>
                    <div>
                        <CurrencyDollar id='money' size={32} weight="fill"/>
                        <div>
                            <p>Pagamento na entrega</p>
                            <span>Cartão de Crédito</span>
                        </div>
                    </div>
                </DeliveryInfosContainer>
                <img src={CheckoutImg} alt="" />
            </div>
        </SuccessContainer>
    )
}