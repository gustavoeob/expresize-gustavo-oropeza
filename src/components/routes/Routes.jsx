import React from 'react'
import Navbar from '../views/navbar/NavBar'
import Home from '../views/home/Home'
import ItemDetailContainer from '../pages/itemDetail/itemDetailContainer/ItemDetailContainer'
import Footer from '../views/footer/Footer'
import {BrowserRouter, Route, Routes as Routing} from 'react-router-dom'
import {CartProvider} from '../../context/CartContext'
import Cart from '../cart/cart/Cart'
import NotFound from '../pages/notFound/NotFound'


const Routes = () => {

  return (
        <>


            <div className="App">
                <CartProvider>
                    <BrowserRouter>
                        <Navbar/>
                        <Routing>
                            <Route path="*" element={<NotFound />} />
                            <Route path="/" element={<Home />} />
                            <Route path='/course/:id' element={<ItemDetailContainer/>}/>
                            <Route path='/cart' element={<Cart/>} /> 
                        </Routing>
                        <Footer/>
                    </BrowserRouter>
                </CartProvider>

            </div>
        </>
    )
}

export default Routes