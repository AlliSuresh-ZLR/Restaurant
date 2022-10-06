import React, { useContext } from 'react'
// import { store } from './Apprest';
import Card from './container/Card'
import Header from './container/Header'
import {store} from '../Restaurant/Apprest'
import Card1 from './container/Card1'
import fdata from './FoodData.json'
import {confirmedOrders} from './Apprest'
import { useLocation } from 'react-router-dom'

function Order() {
  const [filter,setFilter,table,setTable,orderItems,setOrderItems]=useContext(store);
  console.log("hello"+confirmedOrders);
  const location =useLocation();
  console.log("location state"+location.state);
   return (
    <div>
        <center>
            <Header/>

            {/* {orderItems.map((orderedItem)=><Card1/>)} */}
            {/* {location.state.map((orders,index)=>< Card1 key={index} /> )} */}
            {fdata.filter((item)=>location.state.includes(item.name)).map((item,index) => <Card1 key={index} order_status={true} name={item.name} price={item.price} url={item.url} />)}
            
        </center>
    </div>
  )
}

export default Order