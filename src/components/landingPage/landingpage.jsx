import React from 'react';

const LandingPage = ({value, search}) =>(
    <div className="landingpage">
        <input type="search" placeholder = "enter search here" value = {this.state.value}
        onChange = {this.handleChange}/>
        {/* create a front page with the input behind it, use a atlas map as background */}
        <input type="button" value="submit" onClick = {this.handleSubmit}/>
        <h1 className="heading">Global Record as of Today</h1>
    </div>
);

export default LandingPage;