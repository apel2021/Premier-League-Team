import React, { useEffect, useState } from 'react';
import AllLeagues from '../All-Leagues/AllLeagues';
import './Home.css';


const Home = () => {

  const [leagues, setLeagues] = useState([]);
       
  
  // console.log(leagues);
//  const first10 = leagues.slice(0, 9);
 

 
    useEffect(() => {
         
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setLeagues(data.teams))
    }, [])


    

    return (
    
      <div style={{background:'purple'}}>
        {/* <h1>This is home</h1>
        
        
        <h2>Leagues are: {first10.length}</h2> */}

        <div className='all-lg'>
              {
                leagues.map(league => <AllLeagues key={league.idTeam} league={league}></AllLeagues>)
                
              }
        </div>
        

      </div>




    );
};

export default Home;