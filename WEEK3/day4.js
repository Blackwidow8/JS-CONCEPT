const container= document.querySelector('.container')

const API_KEY = 'd1e7dfc'

const base_url = 'https://www.omdbapi.com/?i=tt3896198&apikey=d1e7dfc'

const fetchMovie = async ()=>{
    const response = await fetch(base_url)
     
    const data = await response.json ()

    console.log(data)
    const card = document.createElement('div')
card.classList.add('card')
card.innerHTML=`
<div>

<div><img src ="${data.Poster}"/> </div>

<h1> ${data.Title}</h1>
<h2>Year:</h2>
<p>${data.Year}</p>
<h2>Rated:</h2>
<p>${data.Rated}</p>
<p>${data.Runtime}</p>
<p>${data.Genre}</p>
<p>${data.Director}</p>
<p>${data.Writer}</p>
<p>${data.Actors}</p>
<p>${data.Plot}</p>
<p>${data.Language}</p>
<p>${data.Country}</p>
<p>${data.Awards}</p>

</div>

`

container.appendChild(card)

}

fetchMovie()

