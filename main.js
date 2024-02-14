const URL = 'https://raw.githubusercontent.com/PersevereCode/react-rubric/master/src/rubric.json'

const dogURL = 'https://dog.ceo/api/breeds/image/randohttps://dog.ceo/api/breeds/image/random'

const button = document.querySelector('button')

button.addEventListener('click', ()=>{

console.log('button clicked')

fetch(dogURL) //request the url
.then(function(rawResponse){ //waits for response
    console.log('response success')
    //console.log(rawResponse.json())
    return rawResponse.json() // takes longer so it is in a promise
})

.then(function(){
    console.log('response object acquired')
    console.log(object)
})
})
