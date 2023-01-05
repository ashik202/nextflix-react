import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'


export default function Banner() {

  let [movie, setmovie] = useState()
  useEffect(() => {

    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      let movieData = response.data.results[0]
      setmovie(movieData)


    })

  }, []
  )
  return (
    <div style={{backgroundImage:`url(${ movie ?imageUrl+ movie.backdrop_path : ""})`}} className="banner">

      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>

      </div>
      <div className="fade_bottom"></div>

    </div>


  )
}
