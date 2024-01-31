/***
 * @DOM 
 * 
 */
//console.log(document.body.children.item(0).innerText)

//document.body.style.backgroundColor='red'

let heading = document.querySelector('.heading')
// heading.style.color='yellow'
// console.log(heading)

//heading.innerHTML='yellow'

// document.getElementById('heading')
// document.getElementsByClassName('heading')

/**
 * @DOM MANIPULATION 
 * @ACCESSING
 * Query Selectors
 * document.querySelector
 * 
 * ID Selectors
 * document.getElementById
 * 
 * Class Selectors
 * document.getElementByClassName  
 * */


/**
 * @EVENTLISTENERS
 */

// let clickMeButton = document.querySelector('.click-me-button')

// clickMeButton.addEventListener('click' , ()=>{
//     document.body.style.backgroundColor = 'black'
// })

// let input = document.querySelector('#input')
// input.addEventListener('change')

//CHALLENGE DAY1

//Create a simple web page with a button and a paragraph element. When the button is clicked, the text content of the paragraph element should be changed to "Hello, World!".
//You should use JavaScript to select the paragraph element and button element, and add an event listener to the button that triggers a function to change the text content of the paragraph.

//  let paragraphText = document.querySelector('.change-text')
//  let clickMeButton = document.querySelector('.click-me-button')
//  let initialText = paragraphText.innerText

//  clickMeButton.addEventListener('click' , ()=>{
// // if(paragraphText.innerText === initialText) {
// //     paragraphText.innerText = 'Hello World'
// // }else {
// //     paragraphText.innerText = initialText
// // }

//  });

//CHALLENGE DAY2
document.body.style.backgroundColor = 'aqua'
let initialBackGround= document.body.style.backgroundColor

 let firstButton = document.querySelector('.purple')
 let secondButton = document.querySelector('.red')

 firstButton.style.backgroundColor = 'purple'
 secondButton.style.backgroundColor = 'red'
 

 firstButton.addEventListener('click' , (e)=>{
    e.stopPropagation()
    document.body.style.backgroundColor = firstButton.style.backgroundColor

 })

 secondButton.addEventListener('click' ,(e)=>{
    e.stopPropagation()
     document.body.style.backgroundColor = secondButton.style.backgroundColor
 })

 document.body.addEventListener('click', ()=>{
    if (document.body.style.backgroundColor !== initialBackGround) {
        document.body.style.backgroundColor = initialBackGround
        
    }
 })