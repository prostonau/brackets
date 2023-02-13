module.exports = function check(str, bracketsConfig) {
  // your solution
  // console.log("str = " + str)
  // console.log("bracketsConfig = ")
  // console.log(bracketsConfig)

  str = str.split('')
  let stack = []
  //console.log(stack)


  for (let i = 0; i < str.length; i++) {    
    let curSym = str[i] 
    //console.log("curSym = " + curSym)
    //console.log("bracketsConfig.filter(e => e[0] === curSym).length = " + bracketsConfig.filter(e => e[0] === curSym).length)

    if (stack.length > 0 &&  bracketsConfig.filter(e => e[0] == curSym && e[1] == curSym).length > 0){
      let topElement = stack[stack.length-1]
      // console.log("topElement with same open and close  = " + topElement)

      if ( topElement == curSym){
        stack.pop()
        // console.log("stack pop same open and close and continue")
        continue
      }
      //else return false  
    }  


    if (bracketsConfig.filter(e => e[0] === curSym).length > 0){
      // console.log("push and continue")
      stack.push(curSym)
      continue
    } else if (stack.length === 0) return false 


    if (stack.length > 0){
      let topElement = stack[stack.length-1]
      // console.log("topElement = " + topElement)

      if ( bracketsConfig.filter(e => e[0] == topElement && e[1] == curSym).length > 0){
        stack.pop()
        // console.log("stack pop and continue")
        continue
      }
      else return false  
    }  
    
  }

  return stack.length === 0;
}
