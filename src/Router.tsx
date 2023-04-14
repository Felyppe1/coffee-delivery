import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/checkout' element={<Checkout />}/>
            </Route>
            
            {/* <Route path='/admin'>   Se tivesse mais de 1 layout pra outro tipo de página, faria desse jeito
                <Route path='/info'/>
            </Route> */}
        </Routes>
    )
}