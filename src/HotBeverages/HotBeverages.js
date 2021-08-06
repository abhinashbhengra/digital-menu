import React, {Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import '../Pizza/pizza.css'

const HotBeverages = () => {
        return (
            <div className="container1">
                <div className="list">
                    <div className="item">Cadbury Hot Chocolate</div>
                    <div className="item">Rs.75</div>
                </div>
                <div className="list">
                    <div className="item">Tea</div>
                     <div className="item">Rs.40</div>
                </div>
                <div className="list">
                    <div className="item">Cappucino</div>
                     <div className="item">Rs.50</div>
                </div>
                <div className="list">
                    <div className="item">Flat White</div>
                    <div className="item">Rs.45</div>
                </div>
                <div className="list">
                    <div className="item">Macchiato</div>
                    <div className="item">Rs.55</div>
                </div>
                <div className="list">
                    <div className="item">Latte</div>
                    <div className="item">Rs.60</div>
                </div>
                <div className="list">
                    <div className="item">Mocha</div>
                    <div className="item">Rs.70</div>
                </div>
            </div>
            
        )
}

export default HotBeverages;