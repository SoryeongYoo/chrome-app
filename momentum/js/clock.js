const clock= document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

//시간 바로 보여주기
getClock();
//(실행할 함수, 함수가 시작될 시간) 반복
setInterval(getClock,1000);
