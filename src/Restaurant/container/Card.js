import React, { useContext } from 'react'
import fdata from '../FoodData.json'
import { store } from '../Apprest'
import Card1 from './Card1'


function Card() {
  const [filter, setFilter] = useContext(store);
  return (

    <div >
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" ,justifyContent:"space-around"}}>
        {
          // fdata.length>0 ?
          // <div className='container'>
          //     <div className='row'>
          //       { fdata.filter((item)=>item.type===filter).map((item,index)=><div key={index} className='col-md-4'>
          //             <div className='card' style={{width:"20rem",padding:"3px"}}>
          //                 <img src={item.url} className="card-img-top"  alt='not available'/>
          //                 <div className="card-body">
          //                     <h3 className="card-title" style={{background:"yellow"}}>{item.name}</h3>
          //                     <h5 className="card-text">Rs.{item.price}</h5>
          //                     <button className='btn btn-primary'>Order</button>


          //                 </div>

          //             </div>
          //         </div>)}
          //     </div>

          // </div>:""

          fdata.filter((item) => filter !== "All Items" ? item.type === filter : item).map((item,index) => <Card1 key={index} order_status={false} name={item.name} price={item.price} url={item.url} />)

        }
      </div>
    </div>


  )
}

export default Card