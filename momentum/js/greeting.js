const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    //폼 기본 동작 막기: 새로고침 현상
    event.preventDefault();
    const username = loginInput.value;
    //데이터베이스에 유저 이름 저장
    localStorage.setItem(USERNAME_KEY,username);
    //로그인 폼 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

//텍스트 추가 후 유저 정보 표시
function paintGreetings(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);

//저장된 유저 네임 가져오기
const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}