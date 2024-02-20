const URL = 'https://raw.githubusercontent.com/PersevereCode/react-rubric/master/src/rubric.json'

const dogURL = 'https://dog.ceo/api/breeds/image/random'

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


//synchronous example

console.log('first')
console.log('second')
console.log('third')

//asynchronous example with callbacks

//run the given callback after one second 
function asyncWithCallback(callback){
    setTimeout(callback, 1000)
}

asyncWithCallback(()=>{
    console.log('first')
    asyncWithCallback(()=>{
        console.log('second')
        asyncWithCallback(()=>{
            console.log('third')
        })
    })
})


//asynchronous example with promises

//returns a promise that resolve after one second
function asyncWithPromise(){
    return new Promise(resolve =>{
setTimeout(resolve, 1000)
    })
}

asyncWithPromise()
.then(()=>{
    console.log('hello world')
    return asyncWithPromise()
}) .then(()=>{
    console.log('second request')
    return asyncWithPromise()
}) .then(()=>{
    console.log('third request')
})

//asynchronous example with fetch

const img = document.querySelector('img')

//get a dog image
fetch(dogURL)
.then((rawResponse)=>{
   return rawResponse.json()
}) .then((dogImageLink)=>{
    console.log(dogImageLink)
    img.src = dogImageLink.message
    return fetch(dogURL)
})
.then((rawResponse)=>{
    return rawResponse.json()
})
.then((dogImageLink)=>{
    console.log(dogImageLink)
    img.src = dogImageLink.message
})
