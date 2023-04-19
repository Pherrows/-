const coverEl = document.querySelector("body .cover");

window.addEventListener('scroll', function () {
  if (window.scrollY > 2000) {
    coverEl.style.display = 'flex';
  } else {
    coverEl.style.display = 'none';
  }
});


// new Swiper('.img .swiper', {
//   // direction: 'horizontal', // 수평 슬라이드 (기본값)
//   loop: true, // 반복 재생 여부
//   autoplay: {
//     delay: 5000 // 5초마다 슬라이드 바뀜 (기본값 :3000)
//   }, // 자동 재생 여부
//   slidesPerView: 4, // 한번에 보여줄 슬라이드 개수 (기본값1)
//   spacBetween: 10, // 슬라이드 사이여백 (간격) px
//   // centeredSlides: true,  // 1번 슬라이드가 가운데 보이기
//   // pagination: {  //페이지 번호 사용
//   //   el: ".promotion .swiper-pagination",  //페이지 번호 요소 선택자
//   //   clickable: true   //사용자의 페이지 번호 요소 제어가능 여부
//   // },
//   // navigation: {  //슬라이드 이전/다음 버튼 사용
//   //   nextEl: ".promotion .swiper-button-next",
//   //   prevEl: ".promotion .swiper-button-prev",
//   // }
// });