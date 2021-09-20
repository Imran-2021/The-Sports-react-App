import React, { useEffect, useState } from 'react';
import AllLeagues from './All_Leagues';

const Home = () => {
    const [team, setTeam]=useState([])
    useEffect(()=>{
        const url1 = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
        fetch(url1)
        .then(req=>req.json())
        .then(data=>setTeam(data.leagues.slice(0, 15)))
    },[])
    
    return (
        <div>
            <div className="header">
                <h1>The Sports React App</h1>
            </div>
            <div className="leagues">
            {
                team.map(tm =><AllLeagues key={tm.idLeague} team={tm}/>)
            }
            </div>
        </div>
    );
};

export default Home;