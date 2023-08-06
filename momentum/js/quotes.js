const quotes=[
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.",
        author: "사무엘 존슨"
    },{
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author: "괴테"
    },{
        quote: "고개 숙이지 마라. 세상을 똑바로 정면으로 바라보아라",
        author: "헬렌 켈러"
    },{
        quote: "사막이 아름다운 것은 어딘가 샘이 숨겨져 있기 때문이다.",
        author: "생떽쥐베리"
    },{
        quote: "곧 위에 비교하면 족하지 못하나, 아래에 비교하면 남음이 있다",
        author: "명심보감"
    },{
        quote: "가난은 가난하다고 느끼는 곳에 존재한다.",
        author: "에머슨"
    },{
        quote: "문제점을 찾지 말고 해결책을 찾으라.",
        author: "헨리포드"
    },{
        quote: "길을 잃는다는 것은 곧 길을 알게 된다는 것이다.",
        author: "동아프리카 속담"
    },{
        quote: "기회는 일어나는 것이 아니라 만들어내는 것이다.",
        author: "크리스 그로서"
    },{
        quote: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
        author: "롤리 다스칼"
    }
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");


const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;