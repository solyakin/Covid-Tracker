import React from 'react';
import '../body/body.css';
import Allcountries from '../Allcountries/allcountries';
import Display from '../display/display';
import CountriesWithTopCases from '../topcase/topcase';
import Footer from '../footer/footer';
import landingImage from '../body/alert.jpg';
import Definition from '../Definition/definiton';

class Body extends React.Component{
    constructor(){
        super();
        this.state = {
            value : '',
            searchs : [],
            global : [],
            topCases : []
        };
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.preventDefault()
        this.setState({value : e.target.value});
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state.value);
        console.log(this.state.searchs);
    }

    getUpdate(){
        fetch("https://api.covid19api.com/summary")
        .then(res => {
        return res.json();
        })
        .then(data =>{
        this.setState({ global : data.Global });
        let topCase = [];
        data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);

        for (let i = 0; i < 5; i++) {
            topCase.push(data.Countries[i]);
            this.setState({topCases : topCase})
        }

        // if(data.Message === 'caching in progress'){
        //     alert(`collating today's result. please check back later!`)
        // } else{
        //     data.Countries.map(result => {
        //     console.log(result)
        //     })
            
        })
        
        .catch((error) => errorAlert())

        const errorAlert = () =>{
        alert("unable to fetch data. check your internet connection and try again")
        }
    }

    getCountry(country){
        fetch("https://api.covid19api.com/summary")
        .then(res => {
        return res.json();
        })
        .then(data =>{
        this.setState({ searchs : data.Countries }, function(){
            console.log(data)
        })

        })
    }

    componentDidMount(){
        this.getUpdate();
        this.getCountry();
    }

    render(){

        return(
            <div className = 'homepage'>
                <div className="landingpage" style = {{backgroundImage : `url(${landingImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: "top", backgroundSize: 'cover'}}>
                    {/* <h3 className="hide">CovidTracker</h3> */}
                    <input type="search" placeholder = "search countries" value = {this.state.value}
                    onChange = {this.handleChange}/>
                    {/* create a front page with the input behind it, use a atlas map as background */}
                    <input type="button" value="submit" onClick = {this.handleSubmit}/>
                    
                </div>
    
                <div className="query">
                    <h1 className="global-heading">Global Record as of Today</h1>
                    <div className="container">
                        <div className="global">
                        { 
                        Object.entries(this.state.global).map(([key, value]) => (
                            <Display key={key.id} index ={key} value={value}  />
                        )) 
                        }
                        </div>
                    </div>

                    <div className="container">
                        <div className="topcases">
                            <h1>Countries with Top Cases</h1>
                            <div className="topcase_card">
                                {
                                    Object.entries(this.state.topCases).map(([key, value]) => (
                                        // console.log(key, value)
                                        <CountriesWithTopCases key = {key.id} index = {key} value = {value}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>     
                    <Allcountries/>
                    <Definition/>                                
                </div>
                <Footer/> 
                <div className="creator">
                    <h3>Developed by <span>solomon Akinlade</span></h3>
                </div>   
            </div>
        )
    } 
}

export default Body;