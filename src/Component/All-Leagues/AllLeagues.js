import React from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './AllLeague.css';
import {Link} from 'react-router-dom';



const AllLeagues = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.league;
    
    
    return (
        <div className='all-league'>
            <br/>
            <br/><br/>
        
            <img src={strTeamBadge} alt=""/>
            <h3>{strTeam}</h3>
            <h5>Sports type: {strSport}</h5>

            <Link to={`/team/${idTeam}`}>
            
                     <Button  variant="primary" > Details <FontAwesomeIcon icon={faAngleDoubleRight} /> </Button>
            </Link>
            
           

        </div>
    );
};

export default AllLeagues;