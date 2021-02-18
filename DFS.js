let tree = {
    value: 40,
    left: {
        value: 30,
        left: { value: 20, left: null, right: null },
        right: { value: 35, left: null, right: null },
    },
    right: {
        value: 50,
        left: { value: 45, left: null, right: null },
        right: { value: 60, left: null, right: null },
    },
};
const preOrderReverse = (node, array) => {
    if (!node) return array;
    debugger;
    array.push(node.value);
    debugger;
    array = preOrderReverse(node.left, array);
    debugger;
    array = preOrderReverse(node.right, array);
    debugger;
    return array;
};

const inOrderReverse = (node, array) => {
    if (!node) return array;
    array = preOrderReverse(node.left, array);
    array.push(node.value);
    array = preOrderReverse(node.right, array);
    return array;
};

const postOrderReverse = (node, array) => {
    if (!node) return array;
    array = preOrderReverse(node.left, array);
    array = preOrderReverse(node.right, array);
    array.push(node.value);
    return array;
};

const preOrderLoop = function(node){
    let arr = [];
    while(node){
        arr.push(node.value);
        node= node.left;
    }
}
console.log(preOrderReverse(tree,[]));