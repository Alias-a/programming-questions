// TODO this is a hot mess, failed solution multiple times. Come back to this problem after a while to
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    // convert to arr
    let mergedListArr = [];
    lists.forEach((listNode, i) => {
        while (listNode != null) {
            mergedListArr.push(listNode);
            listNode = listNode.next;
        }
    });

    let emptyListNode = new ListNode(null, null);
    if (mergedListArr.length === 0) return emptyListNode;
    // sort
    mergedListArr.sort((a,b) =>  (a.val-b.val));
    // fix next references
    mergedListArr.forEach((node, i) => {
        if (i < (mergedListArr.length - 1)) {
            node.next = mergedListArr[i+1];
        } else {
            node.next = null
        }
    });

    return mergedListArr[0];
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

module.exports = { mergeKLists, ListNode };