import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';

const MovieListBlock = styled.div`
  display: flex;
`;

function MovieList(props) {
  
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      try {
        const response = await axios.get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`)
        setMovie(response.data.boxOfficeResult.dailyBoxOfficeList)
        console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
      } catch (error) {
        console.error(error);
      }
    }
    movieData();
  },[])

  return (
    <MovieListBlock>
      {movie.map((movies) => {
        return(
          <MovieItem movies={movies} />
        )
      })}
    </MovieListBlock>
  );
}



export default MovieList;