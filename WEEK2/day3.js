// let  firstList = document.querySelector('.beverages')
// let secondList = document.querySelector('.food')
// let thirdList = document.querySelector('.fruits')

// firstList.style.backgroundColor = 'aqua'
// secondList.style.backgroundColor = 'pink'
// thirdList.style.backgroundColor = 'red'

//console.log(document.body.children.item(0))

// let firstChild = document.querySelector('.drinks')
// let secondChild = document.querySelector('local-food')
// let thirdChild = document.querySelector('.fresh')

// let mainContainer=document.querySelector('.menu')




// firstList.addEventListener('click' , ()=>{
//    firstChild.classList.remove('.drinks')
    
// })

// secondList.addEventListener('click' , ()=>{
//     console.log('clicked')
// })

// thirdList.addEventListener('click' , ()=>{
//     console.log('clicked')
// })

const parentContainer= document.querySelector('.parent-container')

parentContainer.addEventListener('click',(e)=>{
    console.log(e)
    if (e.target.tagName === 'SPAN'){
    let subContainer = e.target.nextElementSibling
    subContainer.classList.toggle('hidden')
//    if (e.target.tagName ==='SPAN'){
//     let subContainer = e.target.nextElementSibling
//     if(subContainer.classList.contains('hidden')){
//         (subContainer.classList.remove('hidden'))
//     }else{
//         subContainer.classList.add('hidden')
//     }
//    }
    }
})

/**
 * @NAMING RULES
 * Pascal Case
 * camelCase
 * 
 */