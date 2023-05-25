import React from 'react';
import './Slider.css';

function Slider({onChange}) {
    return (
        <div className="slider-container">
            <input
                type="range"
                min="1"
                max="100"
                className="slider"
                onChange={onChange}
            />
        </div>
    );
}

export default Slider;