function MyButton() {

  const handleDeleteWrong = (id) => {
    console.log(id + '삭제됨');
  };

  const handleDelete = (id, e) => {
    // e: 이벤트 객체 (발생한 이벤트와 관련한 여러 기능이 담겨있음)
    // e.target 현재 발생한 이벤트의 대상
    console.log(id + '삭제됨');
    console.log(e.target);
  };

  return (
    <div>
      {/* 잘못된 방법 */}
      {/* 단순하게 마운트 시 함수가 바로 실행됨 */}
      {/* 이후 버튼을 눌러도 함수 실행이 안됨 */}
      <button type="button" onClick={handleDeleteWrong(1)}>
        삭제하기(잘못된 방법)
      </button>

      <br />
      {/* 매개변수 event로 돌아오는 값은 event 객체임 */}
      <button type="button" onClick={(e) => {handleDelete(1, e);}}>
        삭제하기
      </button>
    </div>
  );
}

export default MyButton