import React from "react";
import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm'


export default function AddToCartInfo() {

  const productInfo = useProduct() // "vtex.checkout-resources": "0.x",


  const { orderForm: { items } } = useOrderForm() //   "vtex.order-manager": "0.x": pedido que esta en el carrito

  // console.log("ejemplo", productInfo)

  return (
    <div>
      {items?.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.imageUrls.at1x} alt="" />
            <p>{item.name}</p>
            <p>{item.id}</p>
            <p>S/{item.price / 100}</p>
            <p>Cant: {item.quantity}</p>
          </div>
        )
      })}
      <hr />
      <div>
        <p>Tienes {items.length} productos en el carrito</p>
        {/* <p>Total ${total}</p> */}
      </div>
    </div>
    )
}
