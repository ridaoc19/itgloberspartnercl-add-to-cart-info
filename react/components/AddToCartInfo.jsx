import React from "react";
import { useProduct } from 'vtex.product-context'

export default function AddToCartInfo() {
    const productInfo = useProduct()
    console.log("ejemplo",productInfo)
    return( <div>maximiliano</div>)
}
