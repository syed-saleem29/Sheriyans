import { createContext } from 'react'
import { getAllProductData } from '../api/productapi'
import { useEffect } from 'react'
import { useState } from 'react'

export const ProductContextData = createContext()

const ProductContext = ({children}) => {

    const [ProductData, setProductData] = useState([])

    const setData = async ()=>{
        setProductData(await getAllProductData())
    }

    useEffect(()=>{
        setData()
    },[])


  return (
    <div>
        <ProductContextData.Provider value={ProductData}>
            {children}
        </ProductContextData.Provider>

    </div>
  )
}

export default ProductContext