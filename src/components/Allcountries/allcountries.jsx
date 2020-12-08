import React from 'react';
import { Component } from 'react';
import Paginating from '../pagination/paginating';
import Posts from '../CountryPost/posts';


class Allcountries extends Component {
    constructor(props){
        super(props);{
            this.state = {
                posts : [],
                currentPage : 1,
                postPerPage : 10
            };
            this.nextPage = this.nextPage.bind(this);
        }
    }

    nextPage(pageNumber){
        this.setState({currentPage : pageNumber});
    }

    getCountry(country){
        fetch("https://api.covid19api.com/summary")
        .then(res => {
        return res.json();
        })
        .then(data =>{
        this.setState({ posts : data.Countries }, function(){
            console.log(data)
        })

        })
    }

    componentDidMount(){
        this.getCountry();
    }
    render(){
        // console.log(this.state.posts)
        const {currentPage , posts, postPerPage} = this.state;
        const indexOfLastPost = currentPage * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        console.log(indexOfFirstPost, indexOfLastPost)
        const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
        console.log(currentPost);

        return(
            <div>
                <Posts posts={currentPost}/>
                <Paginating postPerPage={postPerPage} totalPost={posts.length} nextPage={this.nextPage}/>
            </div>
        )
    }
}

export default Allcountries;