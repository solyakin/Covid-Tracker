import React from 'react';
import '../topcase/topcase.css';

const CountriesWithTopCases = ({index, value})=>{
    // console.log(value,index)
    return(
    <div className="items">
        <h1>
            {value.Country}
        </h1>
        <div className="items_list">
            <p><b>New Confirmed</b> <span>{value.NewConfirmed.toLocaleString("en")}</span> </p>
            <p><b>New Deaths</b>  <span>{value.NewDeaths.toLocaleString("en")}</span> </p>
            <p><b>New Recovered</b> <span>{value.NewRecovered.toLocaleString("en")}</span> </p>
            <p><b>Total Confirmed</b> <span>{value.TotalConfirmed.toLocaleString("en")}</span> </p>
            <p><b>Total Deaths</b> <span>{value.TotalDeaths.toLocaleString("en")}</span> </p>
            <p><b>Total Recovered</b> <span>{value.TotalRecovered.toLocaleString("en")}</span> </p>
        </div>
        
    </div>
)}

export default CountriesWithTopCases;