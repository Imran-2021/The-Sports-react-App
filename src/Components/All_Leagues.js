import React from 'react';
import { Link } from 'react-router-dom';
import "./All_league.css"
const AllLeagues = ({team}) => {
    const {strLeague,idLeague,strSport,strLeagueAlternate}=team;
    return (
        <div className="header2">
            <p>Team-Id :- {idLeague}</p>
            <p>StrLeague :- {strLeague}</p>
            <p>StrSport :- {strSport}</p>
            <p>StrLeagueAlternate :- {strLeagueAlternate}</p>
            <Link to={`/league/${idLeague}`}><button className="btn">See more Details</button></Link>
        </div>
    );
};

export default AllLeagues;