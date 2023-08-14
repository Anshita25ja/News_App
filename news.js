const container = document.querySelector(".container");
let con = document.getElementById('con');
// let input_search=document.querySelector(".news");
// let submit_input=document.getElementById("submit");
// let hide=document.getElementById("invalid");
//category

var topic = "sports";

//create card
let getData = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=9496f3676f9746ff84b5c7fc9cc16f37`
    ).then((response) => {
        response.json().then((res) => {
            
            let articles = res.articles;

            for (let Element of articles) {
                let card = document.createElement("div");
                card.classList.add("news_card");
                if (Element.urlToImage === null) {
                    card.innerHTML = `
         <div class="card-body">
          <div class="card-title">${Element.title}</div>
          <div class="card-text">${Element.description}</div>
          <a href=${Element.url} class="btn btn-primary">Go somewhere</a>
    </div>`;
                    container.appendChild(card);

                }
                else {

                    card.innerHTML = `<div class="cardimage">

<img src=${Element.urlToImage} class="card-img-top" alt="..." width="260;"></div>
    <div class="card-body">
      <div class="card-title">${Element.title}</div>
      <div class="card-text">${Element.description}</div>
      <a href=${Element.url} class="btn btn-primary">Go somewhere</a>
</div>`;
                    container.appendChild(card);
                }

            }
        })
    })
}
// getData();

window.onload=getData();


let heading_container = document.querySelector(".heading-container");
let category = document.createElement("div");
category.classList.add("category");

heading_container.appendChild(category);
category.innerHTML = `    
<button class="sports cate"  onclick="sports()">sports</button>
<button class="business cate" onclick="business()">business</button>
<button class="Entertainment cate" onclick="Entertainment()">Entertainment</button>
<input type="text" placeholder="Search news" name="news" id="news"/>
<input type="submit" value="search" id="submit" onclick="search_news()"/>

<div id="invalid">please enter related news</div>`


//input
let input_search=document.getElementById("news");
let submit_input=document.getElementById("submit");
let hide=document.getElementById("invalid");

function search_news(){
    let r=input_search.value;
  if(r=="sports"){
    console.log(r);
    input_search.value="";
    sports();
  }
   else if(r=="business"){

    console.log(r);
    input_search.value="";
    business();
  }
  else if(r=="Entertainment"){
   console.log(r);
   input_search.value="";
   Entertainment();
  }
  else if(r==""){
    setTimeout(() => {

        alert("please search the News");

    }, 2000);
  }
   else{

    setTimeout(() => {
        input_search.value="";

hide.style.display="block";

    }, 1000);
    setTimeout(() => {
        hide.style.display="none";
            }, 4000);
   }
  
}



//
let sports = () => {
    topic = 'sports';
    con.innerHTML = '';
    console.log(topic);
    getData();
}

let business = () => {
    topic = 'business';
    console.log(topic);
    con.innerHTML = '';
    getData();
}

let Entertainment = () => {
    topic = 'Entertainment';
    console.log(topic);
    con.innerHTML = '';
    getData();
}


