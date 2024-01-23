

/**
 * @VAR
 * you can redeclare a variable
 * var name='Dan'
 * var name='James'
  
 
 * you can reassign a variable
 * var name='Dan'
 * name= 'James'
 * is locally scoped
  */


/**
 * @LET
 * You can't redeclare a variable
 * let name = 'Dan'
 * let name = 'James'
 * 
 * You can reassign a variable
 *  
 * let name = 'Dan'
 * name='bob'
 */


/**
 * @CONST
 * You can't redeclare a variable
 * const='fred'
 * const='bob' 
 * 
 * You can't reassign a variable
 * const name= 'greg'
 * name='James'
 */


//DATA TYPES

/**
 * 
 * @STRINGS -character/numbers wrapped in quotes -> "dan", "123"
 * @NUMBERS - Decimal, whole numbers, negative numbers -> 1, 1.5, -1
 * @BOOLEANS - True or false
 * @UNDEFINED -No value assigned
 * @NULL - Nothing
 */

/**NON-PRIMITIVE DATA TYPES
 * @LISTS -Arrays -> [1,2,3,4,5], ['Dan', 'James', 'John']
 * @OBJECTS - Dictionaries(key/value pairs) -> {name:'Dan'}
 */

//OPERATORS

/**
 * @ADDITION -> +
 * @SUBTRACTION -> -
 * @MULTIPLICATION ->*
 * @DIVISION -> /
 * @MODULUS ->%
 */

//Revenue
//Expenses
//Cost of Goods Sold
//Profit
//const costOfsock = 50
//const costOfBag = 50
//const costOfbatch = (sock*3)
//const sellingPrice = 1000
//const revenue = (sellingPrice * 30) * 70/100

//const sockNumber=100

//const costOfSoldSocks = costOfsock * 90
//const CostOfSoldBags = costOfBag * 30

let length = prompt ('length of rectangle')
let width = prompt ('width of rectangle')


let finalLength = parseFloat(length)
let finalWidth = parseFloat(width)

let area = finalLength*finalWidth
let perimeter=(finalLength + finalWidth)*2

console.log('Area')
console.log(area)
console.log('Perimeter')
console.log(perimeter)





 

