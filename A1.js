function adjacentElementsProduct(inputArray) {
    let max = inputArray[0] * inputArray[1]
    for (let i=0; i<inputArray.length-1; i++){
        if(max < inputArray[i]*inputArray[i+1]){
            max = inputArray[i]*inputArray[i+1]
        }
    }
    return max
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]))