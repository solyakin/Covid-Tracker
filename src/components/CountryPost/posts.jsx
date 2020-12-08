import React from 'react';
import '../CountryPost/post.css';

const Posts = ({posts}) =>{
    console.log(posts)
    return(
        <div className="posts">
            <div className="country-records">
                <table className="heading">
                    <tr>
                        <th>Country</th>
                        <th>New Confirmed</th>
                        <th>New Deaths</th>
                        <th>New Recovered</th>
                        <th>Total Confirmed</th>
                        <th>Total Deaths</th>
                        <th>Total Recovered</th>
                    </tr>
                </table>
            </div>
            {
                posts.map(post =>(
                    <div className='country-data'>
                        {/* <table> */}
                            <tr>
                                <td className="country-name">{post.Country}</td>
                                <td>{post.NewConfirmed.toLocaleString("en")}</td>
                                <td>{post.NewDeaths.toLocaleString("en")}</td>
                                <td>{post.NewRecovered.toLocaleString("en")}</td>
                                <td>{post.TotalConfirmed.toLocaleString("en")}</td>
                                <td>{post.TotalDeaths.toLocaleString("en")}</td>
                                <td>{post.TotalRecovered.toLocaleString("en")}</td>
                            </tr>  
                        {/* </table>  */}
                    </div>  
                ))
            }
            
        </div>
    )
}

export default Posts;