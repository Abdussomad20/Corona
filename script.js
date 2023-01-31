const quoteText = document.querySelector("quote")
quoteBtn = document.querySelector("button")

// random quote function
function randomQuote() {

    //Fetching random quote from API and parsing it into Js Object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
        console.log(result);
        quoteText.innerText = result.content;
    }); 
    
}

quoteBtn.addEventListener("click", randomQuote);