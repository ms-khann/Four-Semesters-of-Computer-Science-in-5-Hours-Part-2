const heapSort = (array) => {
    let heapSize = array.length;
    array = createMaxHeap(array);
    let temp;
    for (let i = array.length - 1; i > 0; i--) {
        temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        heapsize--;
        heapify(array, 0, heapSize);
    }
    return array;
};
const createMaxHeap = (array) => {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length);
    }
    return array;
};

const heapify = (array, index, heapSize) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largestValueIndex = index;

    if (heapSize > left && array[largestValueIndex] < array[left]) {
        largestValueIndex = left;
    }

    if (heapSize > right && array[largestValueIndex] < array[right]) {
        largestValueIndex = right;
    }

    if (largestValueIndex != index) {
        const temp = array[index];
        array[index] = array[largestValueIndex];
        array[largestValueIndex] = temp;
        heapify(array, largestValueIndex, heapSize);
    }
};
