import axios from "axios"

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWE5MjE4ZDQxOGU1MDY2MjY4OTg4ZTIwZGM0ZGVhMyIsInN1YiI6IjY0ZGI5MWUxYTNiNWU2MDBhY2MxNmJlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oul0r1yArjuIoC72Ldwi-tyQIQGfib2ICjCT-c2981w";

const headers={
 Authorization:"bearer "+TMDB_TOKEN
};

export const fetchdataapi=async(url,params)=>{
try{
 const {data}=await axios.get(BASE_URL+url,{
  headers,
  params
 })
 return data;
}
catch(err){
 console.log(err);
 return err; 

}
}