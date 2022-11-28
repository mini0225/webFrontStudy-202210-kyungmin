window.onload = () => {
  const btns = document.querySelectorAll("button");

  btns[0].onclick = () => {
    location.href = "http://www.naver.com"; //뒤로가기 가능 href는 변수임(대입방식)
  }

  btns[1].onclick = () => {
    const urlInput = document.querySelector("input");
    urlInput.value = location.pathname;
  }

  btns[2].onclick = () => {
    location.reload(); //새로고침
  }

  btns[3].onclick = () => {
    location.replace("http://www.google.com"); //뒤로가기가 없음. 매개변수
  }
//href 랑 replace 비교




}