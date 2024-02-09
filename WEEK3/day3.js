
const API_KEY ='d7910ffdf1aa4a608b0160134240702' 
let base_url =  'http://api.weatherapi.com/v1'


const form = document.querySelector('.search-form')
const input = document.querySelector('.search-input')
const container = document.querySelector('.container')
let userInput = 'Nairobi'



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    userInput = input.value
    fetchWeather()
    
})

const fetchWeather = async ()=>{
    
    const response = await fetch (`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${userInput}`)
    const data = await response.json()
    console.log(data)

    const card = document.createElement('div')
card.classList.add('card')
card.innerHTML=`
<div>

<img src ="${data.current.condition.icon}"/>
<span>${data.current.condition.text}</span>
</div>
<h2>${data.location.country}</h2>
<p>${data.location.name}</p>
<p> ${data.location.localtime}</p>

`

container.appendChild(card)

    }


    fetchWeather()




