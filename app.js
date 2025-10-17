let result = document.getElementById("result")

function randomQuoteGenerator (){
    let randomGenerator = ["Believe in yourself and all that you are." , "Dream it. Wish it. Do it." , 
    "Success is not for the lazy" , "Push yourself, because no one else will." ,
    "Great things never come from comfort zones" , "Don’t stop until you’re proud." , 
    "Discipline is the bridge between goals and success." , "You are stronger than you think." , 
    "Work hard in silence, let success make the noise." , "Start where you are. Use what you have. Do what you can"
]
    let length = randomGenerator.length
    let randomNumber = Math.floor(Math.random() * length)
    result.innerText = randomGenerator[randomNumber]
}