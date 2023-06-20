import React from 'react';
import styled from 'styled-components';

const MovieItemBlock = styled.div`
  display: flex;
  border: 1px solid black;
  flex: 1;
  margin-right: 10px;
`;

function MovieItem(props) {
  const { movies: { rank, movieNm, openDt, movieCd } } = props;
  // console.log(movies);

  return (
    <MovieItemBlock>
      <div>
        <h2>{movieNm}</h2>
        <p>{openDt}</p>
        <p>{movieCd}</p>
        <p>{rank}</p>
      </div>
    </MovieItemBlock>
  );
}

export default MovieItem;