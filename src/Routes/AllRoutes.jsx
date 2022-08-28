import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Category } from '../components/allCatagory'
import { SignInPage } from '../components/auth'
import { CartPage } from '../components/CartPage'
import { Confirm } from '../components/Confirm'
import { CycleDetail } from '../components/CycleDetail'
import { Footer } from '../components/Footer'
import { KitchenDetail } from '../components/KitchenDetail'
import { LandingPage } from '../components/landingPage'
import { LaptopDetail } from '../components/LaptopDetail'
import { Mobile } from '../components/mobile'
import { MobileDetail } from '../components/MobileDetail'
import { Cart } from '../components/pages/Cart'
import { Payment } from '../components/Payment'
import { Product } from '../components/product'
import { ProductDetail } from '../components/ProductDetail'
import { ScienceDetail } from '../components/ScienceDetail'
import { Shipping } from '../components/Shipping'

function AllRoutes() {
  return (
    <div>
       <Routes>
    <Route path="/auth" element={<SignInPage/>}></Route>
    <Route path="" element={<LandingPage/>}></Route>
  
        
        <Route path="/catagorys" element={<Category />}></Route>
        
        <Route path="/product/:id" element={<ProductDetail />}></Route>

        <Route path="/productDetails/cart/:id" element={<Cart/>}></Route>

        <Route path='/cartPage' element={<CartPage />}></Route>
        <Route path='/KitchenDetail/:id' element={<KitchenDetail/>}></Route>
        <Route path='/LaptopDetail/:id' element={<LaptopDetail />}></Route>
        <Route path='/ScienceDetail/:id' element={<ScienceDetail />}></Route>
        <Route path='/MobileDetail/:id' element={<MobileDetail />}></Route>
        <Route path="/CycleDetail/:id" element={<CycleDetail/>}></Route>
        <Route path="/shipping" element={<Shipping/>}></Route>
        <Route path="/order" element={<Confirm/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/mobile" element={<Mobile/>}></Route>
        <Route path="/product" element={<Product/>}></Route>

     
    </Routes>
    <Footer/>
    </div>
  )
}

export default AllRoutes
