// Code your solutions in this file

function writeCards (namesarray, event){
    let thankyouCards = []
    for(let i = 0; i < namesarray.length; i++){
        thankyouCards.push(`thank you, ${namesarray[1]}, for the wonderful ${event} gift!`)

    }
    return thankyouCards
}

function countDown( startingNumber){
    while(startingNumber > 0){
        console.log(startingNumber)
        startingNumber = 1
    }
    console.log(startingNumber)
}