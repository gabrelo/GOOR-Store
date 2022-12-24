import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/8764344/pexels-photo-8764344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/458698/pexels-photo-458698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic Tshirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/8764344/pexels-photo-8764344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/458698/pexels-photo-458698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic Tshirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
       {
            id: 3,
            img: "https://images.pexels.com/photos/8764344/pexels-photo-8764344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/458698/pexels-photo-458698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic Tshirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
       },
       {
            id: 4,
            img: "https://images.pexels.com/photos/8764344/pexels-photo-8764344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/458698/pexels-photo-458698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic Tshirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
          }
    ]
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque error ducimus, labore temporibus suscipit quaerat possimus architecto earum velit quasi 
          voluptatibus sint eius assumenda molestiae sunt similique iusto quis.
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts