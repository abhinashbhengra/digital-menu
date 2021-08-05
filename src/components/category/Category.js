import { Button,Image,Card } from 'react-bootstrap';
import React from 'react'
import { useHistory } from "react-router-dom";
import { createBrowserHistory as history } from 'history';
import "./category.css"
import { Component } from 'react';
import Topbar from '../topbar/Topbar'
 

 const Category = () => {
   
  const history = useHistory();

    return (

      <div>
        <Topbar/>
        
          <div className="Container1">
            <div className="card" onClick={()=>history.push('/Pizza')}>
              <div className="imgbx">
                <img src="./img/pizza.png"/>
              </div>
              <div className="content">
                <h2>Pizza</h2>
              </div>
            </div>
            <div className="card" onClick={()=>history.push('/Burger')}>
              <div className="imgbx">
                <img src="./img/Burger00.png"/>
              </div>
              <div className="content">
                <h2>Burger</h2>
              </div>
            </div>
            <div className="card" onClick={()=>history.push('/Sandwich')}>
              <div className="imgbx">
                <img src="./img/pizza.png"/>
              </div>
              <div className="content">
                <h2>Sandwich</h2>
              </div>
            </div>
            <div className="card" onClick={()=>history.push('/Mojito')}>
              <div className="imgbx">
                <img src="./img/pizza.png"/>
              </div>
              <div className="content">
                <h2>Mojito</h2>
              </div>
            </div>
            <div className="card" onClick={()=>history.push('/Coldcoffee')}>
              <div className="imgbx">
                <img src="./img/pizza.png"/>
              </div>
              <div className="content">
                <h2>Cold Coffee</h2>
              </div>
            </div>
            <div className="card" onClick={()=>history.push('/Shakes')}>
              <div className="imgbx">
                <img src="./img/pizza.png"/>
              </div>
              <div className="content">
                <h2>Shakes</h2>
              </div>
            </div>
            <div className="card" onClick={()=>history.push('/HotBeverages')}>
              <div className="imgbx">
                <img src="./img/pizza.png"/>
              </div>
              <div className="content">
                <h2>Hot Beverages</h2>
              </div>
            </div>
          </div>
      </div>
  )
} 

export default Category;