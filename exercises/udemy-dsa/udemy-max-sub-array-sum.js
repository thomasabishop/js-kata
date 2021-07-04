function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  // Sum elements in array in groups of length equal to `num`,
  //  This value will be held by `maxSum`
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  // Map temporary sum to maxSum
  tempSum = maxSum

  // Move through the array one element at a time (`i++`) via a window starting from the element that is equal to `num`
  // The first sum calculation is already taken care of in the earlier loop and stored in `maxSum`, so we don't have to worry about missing the elements in indices less than num
  for (let i = num; i < arr.length; i++) {
    // Temp sum becomes a moveable window value equal to the subtraction of the previous element and the addition of next element in line
    tempSum = tempSum - arr[i - num] + arr[i]
    // Max sum is redefined as the largest number between the previous highest and the current value of tempSum
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

//console.log(maxSubarraySum([100, 200, 300, 400], 2))
