/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // convert linked list to arr
    let arrList = [];
    let node = head;
    while (node != undefined) {
        arrList.push(node);
        node = node.next;
    }

    let start = 0;
    let end = k;
    let resultArr = [];
    while (start <= (arrList.length - k)) {
        // separate them into size k groups
        let tempArry = arrList.slice(start, end);
        start += k;
        end += k;
        // reverse them
        tempArry.reverse();
        // merge back together
        resultArr = resultArr.concat(tempArry);
    }
    // add remaining entries
    resultArr = resultArr.concat(arrList.slice(start, arrList.length));
    // update next references
    resultArr.forEach((node, i) => {
        node.next = resultArr[i+1];
        if (resultArr[i+1] === undefined) node.next = null;
    });

    return resultArr.length === 0 ? null : resultArr[0];
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

module.exports = { reverseKGroup, ListNode };