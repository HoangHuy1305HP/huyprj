import React from 'react';
import '../Css/FilterSidebar.css';

const FilterSidebar = () => {
    return (
        <div className="filter-sidebar">
            <div className='Filter'>
            <h2 className='underline'>Filter</h2>
            </div>
            <div className="filter-section">
                <input type="text" placeholder="Search" className="filter-search" />
            </div>
            <div className="filter-section2">
                
                
                
                <div className="filter-options">
                <select className='year-select'>
                    <option value=''>Year</option>
                </select>
                    <label><input type="checkbox" /> 2016</label>
                    <label><input type="checkbox" /> 2017</label>
                    <label><input type="checkbox" /> 2018</label>
                    <label><input type="checkbox" /> 2019</label>
                    <a href="#" className="see-more">See More</a>
                </div>
                
                
            </div>
            <div className="filter-section3">
            <select className='brand-select'>
                    <option value=''>Brand</option>
                </select>
                <input type="text" placeholder="Search here" className="filter-search2" />
                <div className="filter-options">
                    <label><input type="checkbox" /> Audi</label>
                    <label><input type="checkbox" /> BMW</label>
                    <label><input type="checkbox" /> Chevrolet</label>
                    <label><input type="checkbox" /> Ford</label>
                    <a href="#" className="see-more2">See More</a>
                </div>
            </div>
            <div className="filter-section">
            <select className='Modal-select'>
                    <option value=''>Modal</option>
                </select>
                
                <div className="filter-options">
                <select className='bodytype-select'>
                    <option value=''>Body Type</option>
                </select>
                <select className='Modal-select'>
                    <option value=''>Transmission</option>
                </select>
                <select className='Modal-select'>
                    <option value=''>Fuel Type</option>
                </select>
                <select className='Modal-select'>
                    <option value=''>Drivetrain</option>
                </select>
                <select className='Modal-select'>
                    <option value=''>Passenger Capacity</option>
                </select>
                <select className='Modal-select'>
                    <option value=''>Exetior Color</option>
                </select>
                
                </div>
            </div>
            
            
            <div className="filter-section">
                <h3>Price Range</h3>
                <input type="range" min="0" max="3000000" className="price-range" />
                <div className="price-range-labels">
                    <span>$0</span>
                    <span>$3,000,000</span>
                </div>
            </div>
            <button className="reset-filter">Reset Filter</button>
        </div>
    );
};


export default FilterSidebar