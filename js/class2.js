window.onload = () => {
  console.log("class2.html :" + localStorage.username);
  // window.alert (localStorage); 

  // const btn = document.querySelector("button");
  // btn.onclick = () =>{
  //   print();
  // }

  const btns = document.querySelector("button"); //querySelector = 배열임.
  btns[0].onclick = () =>{
    print();
  }
  
  btns[1].onclick = () => {
    history.back();
  }

  print();

}