import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../requests';
import classes from './Banner.module.css';

const Banner = () => {
    const [movie,setMovie]=useState([]);
    const [fullDescription,setFullDesctipion]=useState(false);

    useEffect(()=>{
       async function fetchData(){
         const request=await axios.get(requests.fetchNetflixOriginals);
         setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
         return request;
       }
       fetchData();
    },[])

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }

    function descriptionHandler(){
        setFullDesctipion(prevState=>!prevState);
    }


  return (
    <header className={classes.banner}
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}>
      <div className={classes.banner__contents}>
        <h1 className={classes.banner__title}>{movie?.title||movie?.name||movie?.original_name}</h1>
        <div className={classes.banner__buttons}>
            <button className={classes.banner__button}>Play</button>
            <button className={classes.banner__button}>My List</button>
        </div>
        <h1 className={classes.banner__description} onClick={descriptionHandler}>{fullDescription? movie?.overview:truncate(movie?.overview,150)}</h1>
      </div>
      <div className={classes.banner__fadeBottom}> </div>
    </header>
  )
}

export default Banner
