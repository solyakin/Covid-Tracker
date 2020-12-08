import React from 'react';
import '../display/display.css';

const Display = ({index, value}) => (

    <div className = "display">
        <div className="item">
                <p><span>{value.toLocaleString("en")}</span></p>
                <p>{index}</p> 
        </div>
            
    </div>
)
    

export default Display;