import React from 'react';
import './CarCard.css';
import Data from '../../Data';
const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-info">
                <div className='new'><p>New</p></div>
                <h3>{car.name}</h3>
                <p>{car.price}</p>
                <p>{car.place}</p>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div><p>{car.year}</p></div>
                    <div><p>{car.style}</p></div>
                    <div><p>{car.energy}</p></div>
                    <div><p>{car.seat} seats</p></div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;

