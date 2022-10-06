import React, { useContext } from 'react'
import { store } from '../Apprest';

const confirmedOrders=[]
function Card1(props) {
    console.log("this is orderstatus"+props.order_status);


    const [filter,setFilter,table,setTable,orderItems,setOrderItems]=useContext(store);
  return (
    <div>
        <center>
        
         <div className='container'style={{padding:100}}>
            <div >
              <div >
                    <div className='card' style={{width:"20rem",padding:"3px"}}>
                        <img  className="card-img-top" src={props.url} alt='not available'/>
                        <div className="card-body">
                            <h3 className="card-title" style={{background:"yellow"}}>{props.name}</h3>
                            <h5 className="card-text">Rs.{props.price}</h5>
                            {/* <button className='btn btn-primary'onClick={(e)=>{ confirmedOrders.push(props.name);console.log("this is confirmed"+confirmedOrders)}}>Order{table}</button> */}                                      
                            {<button className='btn btn-primary'onClick={(e)=>{ setOrderItems([...orderItems,props.name]);console.log("ordered items"+orderItems)}}>{props.order_status?"cancel":"Order"}</button>}
                            {table}
                        </div>

                    </div>
                </div>
            </div>

        </div>
        </center>
    </div>
  )
}

export default Card1