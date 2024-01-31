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