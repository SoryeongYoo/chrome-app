const images=["0.jpg","1.jpg","2.jpg"];

const travelImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${travelImage}`;

//html을 body에 추가
document.body.appendChild(bgImage);