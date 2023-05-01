import { DeliveryInfosContainer, SuccessContainer } from "./styles"
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import CheckoutImg from '../../assets/checkout-success-img.svg'

export function Success() {
    let rua = 'Deputado José Luiz Ertal'
    let numero = '20'
    let bairro = 'Cafubá'
    let cidade = 'Niterói'
    let uf = 'RJ'

    const localStorageToArray = localStorage.getItem('@coffee-delivery:buyer-infos-1.0.0')
    let convertedArray
    if (localStorageToArray) {
        convertedArray = JSON.parse(localStorageToArray)
    }

    const paymentMethod = localStorage.getItem('@coffee-delivery:payment-method-1.0.0')
    


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
                            <p>Entrega em <span>{convertedArray.data.rua}, {convertedArray.data.numero}</span></p>
                            <p>{convertedArray.data.bairro} - {convertedArray.data.cidade}, {convertedArray.data.uf}</p>
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
                            <span>{paymentMethod}</span>
                        </div>
                    </div>
                </DeliveryInfosContainer>
                <img src={CheckoutImg} alt="" />
            </div>
        </SuccessContainer>
    )
}