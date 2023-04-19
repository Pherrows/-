let tag = document.createElement('script'); // <script> 

tag.src = "https://www.youtube.com/iframe_api"; // <script src="https://www.youtube.com/iframe_api">
let firstScriptTag = document.getElementsByTagName('script')[0]; //태그명으로 찾은 <script> 태그중에 가장 첫번쨰요소
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // firstScriptTag 이전 위치에 tag 요소를 넣어라

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// let player;
function onYouTubeIframeAPIReady() { //라이브러리가 이함수의 이름을 찾아 실행하기에 임의로 바꾸면 안됨
  new YT.Player('player', { // div id=player 를 의미
    height: '360',
    width: '640',
    videoId: 'WkLBHV2Dxhk', //최초 재생할 유투브 영상 id
    playerVars: {  //더자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무(아래 플레이 리스트 옵션 필수)
      playlist: 'WkLBHV2Dxhk' // 반복 재생할 유튜브 id 목록
    },
    events: {
      // 영상이 준비 되었을떄 내가 작성한 함수를 실행해줌
      onReady: function (event) {
        // event.target : 재생되고 있는 영상 자체
        event.target.mute(); //음소거!
      }
      
    }
  });
}