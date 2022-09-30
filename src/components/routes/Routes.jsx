import React from 'react'
import Navbar from '../views/navbar/NavBar'
import Home from '../views/home/Home'
import ItemDetailContainer from '../pages/itemDetail/itemDetailContainer/ItemDetailContainer'
import Footer from '../views/footer/Footer'
import {BrowserRouter, Route, Routes as Routing} from 'react-router-dom'
import {CartProvider} from '../../context/CartContext'
import Cart from '../cart/cart/Cart'
import NotFound from '../pages/notFound/NotFound'
import Help from '../pages/help/Help'
import OurMission from '../pages/navbarLinks/ourMission/OurMission'
import ItemListContainer from '../pages/itemView/itemListContainer/ItemListContainer'
import ForBusiness from '../pages/navbarLinks/forBusiness/ForBusiness'
import Blog from '../pages/navbarLinks/blog/Blog'
import Pricing from '../pages/navbarLinks/pricing/Pricing'


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
                            <Route path="/courses" element={<ItemListContainer />} />
                            <Route path="/our-mission" element={<OurMission />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="/for-business" element={<ForBusiness />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path='/course/:id' element={<ItemDetailContainer/>}/>
                            <Route path='/cart' element={<Cart/>} /> 
                            <Route path='/help' element={<Help/>} /> 
                        </Routing>
                        <Footer/>
                    </BrowserRouter>
                </CartProvider>
            </div>
        </>
    )
}

export default Routes