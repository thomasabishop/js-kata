const input = [4, 3, 2, 1, 3, 6, 7]

function movingSum(arr) {
  const store = []
  let left = 0
  let right = 1
  for (left; left < arr.length - right; left++) {
    store.push([arr[left], arr[right + left]])
  }
  return store
}

console.log(movingSum(input))
