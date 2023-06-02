import React, { useState } from 'react';
import PostDetail from './PostDetail';

function PostListItem(props) {

 // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?','자바스크립트 핵심 문법', '스타일링가이드']);
  
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [likeCount, setLikeCount] = useState([0, 0, 0]);
  const [newPost, setNewPost] = useState('');


  const handelNewPost = (e) => {
  setNewPost(e.target.value);
  if (setNewPost === '') {
    alert('문자를 입력하세요')
  }
  };


  return (
  <>
     {/* 헤더 */}
    <header className='header--dark'>
      <h4>Gonilog</h4>
      <nav>
        <ul>
        <li>트렌딩</li>
        <li>최신</li>
        </ul>
      </nav>
    </header>

    <div className='inner'>


       {/* Quiz: map() 을 이용하여 posts 반복 출력하기 */}

        {posts.map((post, index) => {
        return (
          <div key={index} className='list' onClick={() => {
            setShowPostDetail(true);
            setCurrentIndex(index);
          }}>
          <h4>{post}</h4>
          <p>2023년 1월 1일</p>
          <p>by goni kim</p>

          <hr />

          <div className='toolbar'>
           {/* 좋아요 기능 만들기 */}
            <span onClick={(e) => {
             // (버그 수정) 현재는 좋아요 버튼 누를떄 글 상세보기 까지 같이 클릭됨!!
             // 부모-자식 관계에 있을 떄 이벤트 버블링이 일어남
             e.stopPropagation(); // 상위 요소로 퍼지는 이벤트 버블링을 막음
             const copyLikeCount = [...likeCount] // 배열의 복사본 (새로운 배열)
              copyLikeCount[index]++;
              setLikeCount(copyLikeCount);
            }}
            >❤ {likeCount[index]}</span>

           {/* 포스트 삭제하기 */}
            <span style={{fontSize: 27}}
              onClick={(e) => {
               // div를 직접 제거하는 것 x
               // state에서 제거하면 알아서 자동으로 렌더링
                e.stopPropagation();
                const copyPost1 =[...posts];
                copyPost1.splice(index, 1);
                setPosts(copyPost1);
               //  또는 배열의 filter() 함수 사용
               // const filterPosts = posts.filter((value, idx) => {
               //   return idx !== index;
               // });
               // setPosts(filterPosts);
               // (버그 수정) 삭제시해당 포스트의 좋아요 카운트도 같이 삭제
                const copyLikeCount = [...likeCount];
                copyLikeCount.splice(index, 1);
                setLikeCount(copyLikeCount);
              }}
            >🗑</span>
          </div>
          </div>
          );
          })}

         {/* 포스트 등록하기 */}
         {/* Quiz: 제목 입력 후 등록 버튼 누르면 맨 앞에 새로운 포스트 추가 */}
          {/* 1.제어 컴포넌트로 만들어서 사용자가 입력한 값을 state로 저장해서 관리 
              2. 등록 버튼 클릭시 posts 상태에 맨앞에 새로운 데이터 추가
         */}

          <input type='text' 
            value={newPost}
            onChange={handelNewPost}
          />
          <button type='button' 
            onClick={() => {
            const copyPost = [newPost, ...posts]
            setPosts(copyPost);
            setNewPost('')

           // (버그 수정) 포스트 하나 추가 시 좋아요 카운트도 같이 추가
            const copyLikeCount =[0, ...likeCount]
            setLikeCount(copyLikeCount)
          }}>포스트 등록</button>



         {/* 포스트 상세보기 */}
         {/* <PostDetail /> */}
          {showPostDetail && <PostDetail posts={posts} currentIndex={currentIndex} setPosts={setPosts}/>
          }
      </div>
    </>
  );
}
export default PostListItem;