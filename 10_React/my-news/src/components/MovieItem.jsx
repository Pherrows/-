import React from 'react';
import styled from 'styled-components';

const MovieItemBlock = styled.div`
  display: flex;
`;

function MovieItem(movies) {
  const {openDt, movieNm, movieCd, rank} = movies;

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