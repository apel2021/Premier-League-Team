import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{position:'relative' , background:'purple'}}>

            <img style={{width:'100%', height:'500px', opacity:'0.5'}} src={`https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?k=6&m=949190756&s=612x612&w=0&h=dNek5l5xc68G0gCZv-fe0vHP8kjDpAYFrRnSPh8iLyc=`} alt=""/>
            <div style={{position:'absolute', bottom:'300px', left:'35%'}}>
                <h1 style={{color:'white'}}><strong>English Premier League</strong></h1>
            </div>
        </div>
    );
};

export default Header;