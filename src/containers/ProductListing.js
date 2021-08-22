import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from '../redux/actions/productActions'
import axios from 'axios';


function ProductListing() {
// to fetch the product that we have in the redux-store 
// to acces the redux store we need 
const products = useSelector(state => state.allProducts.products)
console.log(products, 'use-selector-allProduct');
const dispatch=useDispatch()


useEffect(()=>{
    const fetchProd=async ()=>{
        const res= await axios
        .get("https://fakestoreapi.com/products")
        .catch(err=>{
            console.log(err,' --Error')
        });
        dispatch(setProducts(res.data))
        
    }
    console.log(fetchProd());
},[dispatch])
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
