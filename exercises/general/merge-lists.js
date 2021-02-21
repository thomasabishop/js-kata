/* 
 Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
*/

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

function mergeLists(firstList, secondList) {
  return [...firstList, ...secondList].sort();
}

console.log(mergeLists(list1, list2));
