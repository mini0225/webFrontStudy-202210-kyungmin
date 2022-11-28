class user1{
  #username; //#을 붙임으로서 밖에서 못만지게 한다.
  #password;
  #name;
  #email;
  
  setUsername(username){
    this.#username.name=username;

  }

  getUserName(){
    return the.#username;
  }
}

class User{
  username;
  password;
  name;
  address;

  constructor(username, password, name, email) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.email = email;
  }

  printName() {
    console.log(this.name + "님의 정보");
  }
}



class UserMain{

  static #instance = null;
  static getInstance (){
    if(this.#instance == null) {
      this.#instance = new UserMain();
    }
    return this.#instance;
  }

  main(){

    let user = new User("junil", "1234", "김준일", "light-min@naver.com");

    // user.username = "junil";
    // user.password = "1234";
    // user.name = "김준일";
    // user.email  = "light-min@naver.com";
  
    console.log(user);

    localStorage.username = user.username; //페이지가 이동하더라도 정보가 살아있음.
    console.log("username :"+ localStorage.username);
   
    user.printName();
  }
}
    
window.onload = () =>{
      let userMain = UserMain.getInstance();


      userMain.main();

}






