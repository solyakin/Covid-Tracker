import React from 'react';
import Header from '../components/header/header'
import Body from '../components/body/body';
// import Signin from './component/form/form';
// import Register from './component/register/register';

class Page extends React.Component{
    constructor(){
        super();
        this.state = {
            route : 'signin'
        };
        this.onRouteChange = this.onRouteChange.bind(this);
    }

    onRouteChange(route){
        this.setState({route : route})
    }

    render(){

        return(
            <div className ='page'>
                <Header />
                <Body/>
                {/* {this.state.route === 'home' ?
                    <Body />
                :(
                    this.state.route === 'signin' ?
                    <Signin onRouteChange = {this.onRouteChange}/>
                    :
                    <Register onRouteChange = {this.onRouteChange}/>
                )                
                } */}
            </div>
        )
    }
};

export default Page;