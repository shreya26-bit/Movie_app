import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchdataapi } from '../../apis/movieapi';
import "./MovieDetails.css";

function MovieDetails() {
 const [currentMovie,setcurrentMovie]=useState(null);
 const {id}=useParams();



useEffect(()=>{
getdata();
},[]);


const getdata=()=>{
 fetchdataapi(`/movie/${id}`)
 .then((res)=>{
         setcurrentMovie(res);
         console.log("response",res);                            
       });
}
useEffect(()=>{
  console.log("currentMovie",currentMovie);
},[currentMovie]);

  return (
   <>
   <div className='poster'>
   <div className='poster_image'>
   <img src={`https://image.tmdb.org/t/p/original${currentMovie && currentMovie.backdrop_path}`}/>
   </div>
   <div className='poster_details'>
    {/* <div className='details_img'> */}
    <img src={`https://image.tmdb.org/t/p/original${currentMovie && currentMovie.poster_path
}`}/>
    {/* </div> */}
    <div className='poster_content'>
      <h1>{ currentMovie&& currentMovie.original_title
}</h1>
<div className='movie_tagline'>{currentMovie&& currentMovie.tagline}</div>
<div className='movie_genres'>
  {
    currentMovie&& currentMovie.genres.map(genre=>(
      <span className='movie_genre' id={genre.id}>{genre.name}</span>
    ))
  }

</div>
<div className='movie_rating'>
  {currentMovie&& currentMovie.vote_average}  <i className='fas fa-star'/>{" "}
</div>
<div className='movie_overview'>
  <h1 className='view'>overview</h1>
  {currentMovie&& currentMovie.overview}

</div>
<div className='movie_abouts'>
<div className='status'>
  {currentMovie&& "Status: "+currentMovie.status}
</div>
<div className='Released_date'>
  {currentMovie&& "Status: "+currentMovie.release_date
}
</div>
<div className='RunTime'>
  {currentMovie&& "Status: "+currentMovie.runtime +" mins"}
</div>
</div>
<div className='line'></div>
    </div>

    </div>
    </div>

   </>
  )
}

export default MovieDetails