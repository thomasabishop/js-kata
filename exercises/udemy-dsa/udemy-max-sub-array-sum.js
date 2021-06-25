function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  console.log(tempSum)
  for (let i = num; i < arr.length; i++) {
    console.log(arr[num])
  }
}

maxSubarraySum([1, 2, 6], 2)
