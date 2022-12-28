import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://www.pexels.com/pt-br/foto/mulher-de-casaco-de-la-xadrez-azul-e-branco-segurando-uma-bolsa-verde-e-vermelha-932405/",
            title: "Long Sleeve Graphic T-shirt",
            desc:"Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];
  return (
    <div className="cart">
        <h1>Products in your cart</h1>
    {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className="price">
                    1 x ${item.price}
                </div>
            </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
    ))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">Reset Cart</span>

    </div>
  )
}

export default Cart