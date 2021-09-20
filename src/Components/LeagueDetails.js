import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react/cjs/react.development';

const LeagueDetails = () => {
    const {asdf}=useParams();
    const [leagueDetails,setLeagueDetails]=useState({})
    const {strLeague,intFormedYear,strCountry,strGender,strSport,strDescriptionEN}=leagueDetails;
    useEffect(()=>{      
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${asdf}`)
        .then(req=>req.json())
        .then(data=>setLeagueDetails(data.leagues[0]));
    },[asdf])
  

    return (
        <div>
            <div className="header" style={{marginBottom:"0"}}>
            <h1>League :- {strLeague}</h1>
            </div>
            <div className="header3" style={{marginBottom:"0"}}>
               <div>
               <h2>Founded :- {intFormedYear}</h2>
                <h2>strCountry :- {strCountry}</h2>
                <h2>strSport :- {strSport}</h2>
                <h2>strGender :- {strGender}</h2>
                <Link to="/home"><button className="btn">Back to Home</button></Link>
               </div>
               <div>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quis ipsam soluta perspiciatis exercitationem? At quam natus voluptas facere harum, a veniam rerum aspernatur! Assumenda quae itaque accusamus! Explicabo, distinctio.lorem lorem ipsum dolor sit amet, consectetur adip</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quis ipsam soluta perspiciatis exercitationem? At quam natus voluptas facere harum, a veniam rerum aspernatur! Assumenda quae itaque accusamus! Explicabo, distinctio.lorem lorem ipsum dolor sit amet, consectetur adip</p>
               </div>
            </div>
            <div className="header6" style={{marginTop:"0"}}>
                <p style={{fontSize:"20px",lineHeight:"30px"}}> <strong>strDescriptionEN :</strong> - <br /> {strDescriptionEN } {strDescriptionEN}</p>
            </div>
        </div>
    );
};

export default LeagueDetails;