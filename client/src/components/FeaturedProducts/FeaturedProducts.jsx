import React, { useEffect } from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import { useState } from "react";
import axios from "axios"

const FeaturedProducts = ({ type }) => {

    const [data, setData] = useState ([])
      
      useEffect(() => {
        const fetchData = async () => {
          try{
            const res = await axios.get(process.env.REACT_APP_API_URL+"/products",{
              headers:{
                Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
              }
            });
            setData(res.data.data)
          }catch(err){
            console.log(err);
          }
        }
        fetchData();
      },[])

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