import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import male from '../../image/male.png';
import female from '../../image/female.png';
import facebook from "../../image/Facebook.png";
import twitter from "../../image/Twitter.png";
import instagram from "../../image/YouTube.png";

import {
    faUniversity,
    faFlag,
    faFutbol,
    faVenusDouble,
  } from "@fortawesome/free-solid-svg-icons";
//   import {
//     faYoutube,
//     faInstagram,
//     // faFacebook,
//   } from "@fortawesome/free-solid-svg-icons";

const LeagueDetails = () => {
    const {teamID} = useParams();
    const [details, setDetails] = useState([]);
    

     const {
        strTeam,
        strTeamBadge,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strStadiumDescription
       
    } = details;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.teams[0]))
    }, [teamID])

   
    const image = () =>{
        if(strGender === 'Male'){
            return male ;
     }else{
         return female;
     }
    }

    
    return (

        

        <section style={{background:'purple'}}>

                <div style={{position:'relative'}}>
                            <img style={{width:'100%', height:'500px', opacity:'0.5'}} src={`https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?k=6&m=949190756&s=612x612&w=0&h=dNek5l5xc68G0gCZv-fe0vHP8kjDpAYFrRnSPh8iLyc=`} alt=""/>
                            <div style={{position:'absolute', bottom:'100px', left:'40%'}}>
                                  <img style ={{width:'300px'}} src={strTeamBadge} alt=""/>
                            </div>
                 </div>




             <div className="team-container" style={{marginTop:'20px' , display:'flex'}}>
                    <div className="team-details" style={{color:'white', marginLeft:'20px'}}>
                            
                            <h1>{strTeam}</h1>
                            <h3> <FontAwesomeIcon icon={faUniversity} /> Founded: {intFormedYear}</h3>
                            <h3> <FontAwesomeIcon icon={faFutbol} /> Sport type: {strSport}</h3>
                            <h2> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h2>
                            <h3> <FontAwesomeIcon icon={faVenusDouble} /> Gender: {strGender}</h3>
                    </div>

                    <div className="team-img">
                        <img style={{width:'600px', height:'350px', marginLeft:'560px'}} src={image()} alt=""/>
                    </div>


             </div>
             <br/><br/>
               
            <p style={{color:'white',  marginLeft:'20px', marginRight:'20px'}}>{strStadiumDescription}</p>
             <br/>
            <div style={{display:'flex', marginLeft:'550px', height:'100px' , width:'100px' }}>
               
                   <img src={facebook} alt=""/>
                   <img src={twitter} alt=""/>
                   <img src={instagram} alt=""/>
            </div>
         
        </section>

        


        
         
        
    );
};

export default LeagueDetails;