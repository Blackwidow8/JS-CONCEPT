

const fetchData = require('./data.json')

const displayData = ()=>{
    fetchData.products.forEach((product) =>{
        console.log(product.title)
    })
}



    

   

