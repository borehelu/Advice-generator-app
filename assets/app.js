const quote_id = document.querySelector("h2 span");
const quote = document.querySelector("q");
const newQuote = document.querySelector(".new-quote");



newQuote.addEventListener("click",function(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        response.json()
        .then(data => {
            let {id,advice} = data.slip;
            quote.innerHTML = advice;
            quote_id.innerHTML = id;

        }).catch(err => console.log("Unable to fetch quote. Error ",err.message))
    })
});
  