const parentContainer = document.querySelector('.parent')

// const childContainer = document.createElement('div')
// childContainer.classList.add('child')


// childContainer.innerText = 'I am a child'

// parentContainer.appendChild(childContainer)

// const innerChildContainer = document.createElement('div')
// innerChildContainer.classList.add('inner-child')

// innerChildContainer.innerText = 'I am an inner child'

// parentContainer.appendChild(innerChildContainer)
// childContainer.appendChild(innerChildContainer)



// console.log(childContainer)
// console.log(innerChildContainer)

parentContainer.innerHTML=`
<div class='child'>
<div class='inner-child'></div>
</div>
`