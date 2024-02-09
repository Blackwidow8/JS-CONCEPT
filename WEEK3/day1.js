 const fetchData = async ()=>{
     const response = await fetch ('https://rickandmortyapi.com/api/character')
     const data = await response.json() 


      data.results.forEach((character)=>{
         console.log(character.name)
         console.log(character.gender)
    })
 }

// fetchData()

// const fetchData = async () => {
//      const response = await fetch ('https://api.walobwa.xyz/store/products')
//     const data = await response.json() 
//  console.log(data)
//       //  data.products.forEach(()=>{

//       //  })
    
// }
// fetchData ()