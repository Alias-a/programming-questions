const {reverseKGroup, ListNode} = require('./reverseKGroup');

test('[1,2,3,4,5], k = 2 is [2,1,4,3,5]', () => {
    let list = [1,2,3,4,5];
    let linkedList = arrayToLinkedList(list);
    let expected = [2,1,4,3,5];
    let expectedList = arrayToLinkedList(expected);
    let result = reverseKGroup(linkedList, 2);
    expect(result).toEqual(expectedList);
});

function arrayToLinkedList(array){
    const firstListNode = new ListNode();
    let lastNode = null;
    let curNode = firstListNode;
    array.forEach((val, i) => {
        if (i === 0) {
            curNode.val = val;
            lastNode = curNode;
        } else if (i < array.length){
            curNode = new ListNode(val);
            lastNode.next = curNode;
            lastNode = curNode;
        }
    });

    return firstListNode;
}

