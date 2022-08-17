// function without parameter,  a function which make a number square
function square() {
    var num = 2
    var sq = num * num
    console.log(sq)
  }
  
  square() // 4
  
  // function without parameter
  function addTwoNumbers() {
    var numOne = 10
    var numTwo = 20
    var sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers() // a function has to be called by its name to be executed 

  function printFullName (){
    var firstName = 'Asabeneh'
    var lastName = 'Yetayeh'
    var space = ' '
    var fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())