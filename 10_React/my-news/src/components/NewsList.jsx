import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios'
import Newsitem from './Newsitem';
import { useParams } from 'react-router-dom';
import {BounceLoader, FadeLoader} from 'react-spinners'

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
}

// API를 요청하고 뉴스 데이터가 들어 있는 배열을 리액트 컴포넌트 배열로 변환하여 렌더링해주는 컴포넌트
function NewsList() {
  const { category = 'all' } = useParams()
  console.log(category);

  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩을 상태로 관리하여 API 요청이 대기중인지 판별

  // 컴포넌트가 화면에 보이는 시점에 API를 요청
  // how? useEffect() 를 사용하여 컴포넌트가 처음 렌더링 됐을떄 요청
  useEffect(() => {
    // async 함수 선언
    const fetchNewsData = async () => {
      setLoading(true)
      try {
        // 카테고리가 all 일떄는 아무것도 들어가면 안되고, 그외엔 &category= 해당 카테고리 값 넣기
      const query = category === 'all' ? '': `&category=${category}`;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7f2a6fdc3923447f8526880a3d2f9cc3`
      );
      console.log(response.data);
      setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchNewsData();
  }, [category]);

  // 아직 articles 값이 없을떄
  // if (!articles) {
  //   return null;
  // }

  // 로딩 중일떄
  // 추천: react-spinners 또는 Lottie File 사용
  if (loading) {
    return <NewsListBlock>
      <FadeLoader color="#22b8cf" />
    </NewsListBlock>
  }


  return (
    <NewsListBlock>
      {/* <Newsitem article={sampleArticle}/>
      <Newsitem article={sampleArticle}/>
      <Newsitem article={sampleArticle}/>
      <Newsitem article={sampleArticle}/>
      <Newsitem article={sampleArticle}/>
      <Newsitem article={sampleArticle}/> */}

      {/* map() 함수로 반복 렌더링하기 */}

      {articles && articles.map((article) => 
        <Newsitem article={article} key={article.url} />
      )}
    </NewsListBlock>
  );
}

export default NewsList;