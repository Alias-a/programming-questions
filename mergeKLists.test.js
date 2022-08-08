const {mergeKLists, ListNode} = require('./mergeKLists');

test('[[1,4,5],[1,3,4],[2,6]] is [1,1,2,3,4,4,5,6]', () => {
    let lists = [[1,4,5],[1,3,4],[2,6]];
    let linkedLists = [];
    let arr = [1,1,2,3,4,4,5,6];
    let expectedList = arrayToLinkedList(arr);
    lists.forEach((list) => {
        linkedLists.push(arrayToLinkedList(list));
    });
    expect(mergeKLists(linkedLists)).toEqual(expectedList);
});

test('[] is []', () => {
    let linkedLists = [];
    expect(mergeKLists(linkedLists)).toEqual(new ListNode());
});

test('[[]] is []', () => {
    let linkedLists = [new ListNode()];
    expect(mergeKLists(linkedLists)).toEqual(new ListNode());
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

