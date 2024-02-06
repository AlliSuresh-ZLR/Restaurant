import React, { useState, useContext, createContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Order from "./Order";
// import {store} from './restcontext/context'
export const store = createContext();
export const confirmedOrders = [];

function Apprest() {
  const [filter, setFilter] = useState("All Items");
  const [table, setTable] = useState();
  const [orderItems, setOrderItems] = useState([]);

  return (
    <div>
      <center>
        <store.Provider
          value={[
            filter,
            setFilter,
            table,
            setTable,
            orderItems,
            setOrderItems,
          ]}
        >
          <BrowserRouter>
            <Link to="/home" state={orderItems}>
              Home
            </Link>
            <br />
            <Link to="/order" state={orderItems}>
              orders
            </Link>
            <br />
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route kexact path="/order" element={<Order />} />
            </Routes>
          </BrowserRouter>
        </store.Provider>
      </center>
    </div>
  );
}

export default Apprest;
