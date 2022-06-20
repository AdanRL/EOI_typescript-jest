const addLastNumber = (arrayNumbers: number[], positions: number) => {
  let result: number = 0;
  for( let i = arrayNumbers.length - 1 ; i >= arrayNumbers.length - positions; i--) {
    result += arrayNumbers[i];
  }
  
  return result;
}

const assertLength = (fibLength: number, arrayNumber: number[]) => {

  if (fibLength <= 0 )
    return [];
  
  let result = [];
  for( let i = 0; i < fibLength; i++)
    result.push(arrayNumber[i]);
  
  return result;

}

export function tribonacci( arrayNumber: number[], n: number): number[] {
  const fibonacciLength = arrayNumber.length;
  n = Math.trunc(n);
  if( n < arrayNumber.length)
    return assertLength(n, arrayNumber)
  
  for(let i = 0; i < n; i++){
    if( i >= 3){
      let suma = addLastNumber(arrayNumber, fibonacciLength )
      arrayNumber.push(suma);
    }
  }
  return arrayNumber;
  
}
