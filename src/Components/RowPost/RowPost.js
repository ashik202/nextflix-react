import React, { useEffect, useState } from 'react'
import './RowPost.css';
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constants';
import axios from '../../axios';

export default function RowPost(props) {
  const [movies,setmovies]=useState([])
  const[urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      
      setmovies(response.data.results)
    }).catch(err=>alert('erro'))

  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovi = (id)=>{
    console.log(id)
    
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!=+0){
        setUrlId(response.data.results[0])
      }
     else{
      console.log("Array empty")
     }
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovi(obj.id)} className={props.isSmall ?"smallPoster":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt='post'/>


          )}
            
            
        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

