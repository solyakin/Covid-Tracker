import React from 'react';
import '../Definition/definition.css';
import virus from '../body/virus.png';
import logo from '../body/doctor.png';
import facemask from '../body/facemask.jpg';
import noface from '../body/noface.jpg';
import handshake from '../body/handshake.png';
import socialdistance from '../body/socialdistance.jpg';
import washhands from '../body/washhands.jpg';
import stayathome from '../body/stayathome.jpg';
import maskman from '../body/mask-man.png';

const Definition = () =>{
    return(
        <div>
        
            <div className="definition">
                <div className="virus_image">
                    <h1>What is COVID-19?</h1>
                    <img src= {virus} alt="virus_image"/>
                </div>
                <div className="content">                            
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                        Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
                    <h2>How it spread</h2>
                    <p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
                        You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</p>
                </div>
                
            </div>

            <div className="container">
                <div className="info_card">
                    <div className="info">
                        <h1>what are the symptoms?</h1>
                        <p>People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment. More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.</p>

                        <div>
                            <div className="symptoms_card">
                                <h2>Most Common Symptoms</h2>
                                <ul>
                                    <li>Dry Cough</li>
                                    <li>Fever</li>
                                    <li>Tiredness</li>
                                </ul>
                            </div>
                            
                            <div className="symptoms_card">
                                <h2>Less Common Symptoms</h2>
                                <ul>
                                    <li>aches and pain</li>
                                    <li>sore throat</li>
                                    <li>diarrhoea</li>
                                    <li>conjuctivitis</li>
                                    <li>headache</li>
                                    <li>loss of tatse and smell</li>
                                    <li>a rash on the skin or discoloration of finger or toes</li>
                                </ul>
                            </div>
                            
                            <div className="symptoms_card">
                                <h2>Serious Symptoms</h2>
                                <ul>
                                    <li>difficulty breathing or shortness of breath</li>
                                    <li>chest pain or  pressure</li>
                                    <li>loss of speech or movement</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                <div className="image">
                    <img src = {logo} alt ="doctors"/>
                </div>
                </div>

            </div>

            <div className="container">
                <div className="prevention">
                    <h1>Preventions</h1>
                    <h2>Wear a mask. 
                        <span> Save lives.</span>
                    </h2>

                    <div className="prevention_card">
                        <div className="maskedman">
                            <img src={maskman} alt="masked-man"/>
                        </div>

                        <div className="images_detail">
                            <div className = "image_card-1">
                                <img src= {facemask} alt="facemask"/>
                                <h3>wear a mask</h3>
                            </div>
                            
                            <div className = "image_card-2">
                                <img src= {noface} alt="noface"/>
                                <h3>Do not touch your face</h3>
                            </div>
                            
                            <div className = "image_card-3">
                            <img src= {handshake} alt="handshake"/>
                            <h3>Avoid Handshakes</h3>
                            </div>
                            
                            <div className = "image_card-4">
                            <img src= {stayathome} alt="stayathome"/>
                            <h3>Stay at home</h3>
                            </div>
                            
                            <div className = "image_card-5">
                            <img src= {washhands} alt="washhands"/>
                            <h3>Wash your hands</h3>
                            </div>
                            
                            <div className = "image_card-6">
                            <img src= {socialdistance} alt="socialdistance"/>
                            <h3>Maintain social distance</h3>
                            </div>
                        </div>
                    </div>           
                </div>
            </div>

        </div>   
    );
}

export default Definition;