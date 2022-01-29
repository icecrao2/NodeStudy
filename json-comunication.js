const fetch = require("node-fetch");

fetch("http://localhost:3000/comments")
.then((response) => response.json())
.then((json) => console.log(json));


fetch("http://localhost:3000/comments", {
  method: "POST",
  body: JSON.stringify({
    title:"The Great",
    author: "Jeremy"
  }),
  headers:{
    "content-type": "application/json; charset=UTF-8",
  },
})
.then((response) => response.json())
.then((json) => console.log(json));

//comments 의 id가 2인 데이터를 수정하겠다.
fetch("http://localhost:3000/comments/2",{
  method:"PUT",
  body: JSON.stringify({
    id:2,
    title:"The Great Jeremy",
    author:"Jeremy"
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
})
.then((response) => response.json())
.then((data) => console.log(data));