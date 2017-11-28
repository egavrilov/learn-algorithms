/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const list = new ListNode(0);
  let sumToNext = 0;
  let sum = 0;
  let result = list;
  while (l1 !== null || l2 !== null) {
    const num1 = l1 !== null ? l1.val : 0;
    const num2 = l2 !== null ? l2.val : 0;
    sum = sumToNext + num1 + num2;
    sumToNext = Math.floor(sum / 10);
    const next = sum % 10;
    result.next = new ListNode(next);
    result = result.next;
    if (l1 !== null) { l1 = l1.next; }
    if (l2 !== null) { l2 = l2.next; }
  }
  
  if(sumToNext) {
    result.next = new ListNode(sumToNext);
  }

  return list.next;
};
