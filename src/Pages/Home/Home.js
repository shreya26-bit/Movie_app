import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { fetchdataapi } from '../../apis/movieapi';
import { Link } from 'react-router-dom';
import "./Home.css"
import MovieList from '../../Components/MovieList/MovieList'; 


function Home() {
 const [popularMovie,setPopularMovie]=useState([]);
 useEffect(()=>{
  apitesting();
 },[])

 useEffect(()=>{
  console.log(popularMovie);
 },[popularMovie]);
 const apitesting=()=>{
  fetchdataapi("/movie/popular")
  .then((res)=>{
          setPopularMovie(res.results);
          console.log("popularmovie",popularMovie)    
        });
 }

  return (
   <>
   <div className='poster'>
    <Carousel
    showThumbs={false}
    autoPlay
    transitionTime={2000}
    infiniteLoop
    Status={false}
    interval={2000}
    swipeable

    >
{
  popularMovie?.map(movie=>{
    return(
      <>
      <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}> 
     
 <div className='posterImage'>
  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
</div> 
<div className='posterImage_overlay'>
  <div className='posterImage_title'>
    {movie ?movie.original_title:""}
  </div>
  <div className='posterImage_runtime'>
    {movie ?movie.release_date:""}
  </div>
  <span className='posterImage_rating'>
    {movie ?movie.vote_average:""}
    <i className='fas fa-star'/>{" "}
  </span>
  {/* </div> */}
  <div className='posterImage_description'>
  {movie ?movie.overview :" "}
</div>
</div>

</Link>
</>
    )
  })
}
    </Carousel>
    {/* <MovieList/> */}
    
   </div>
   <MovieList/>

   </>
  )
}

export default Home