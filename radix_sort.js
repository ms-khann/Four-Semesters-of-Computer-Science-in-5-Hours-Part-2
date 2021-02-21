function radixSort(array) {
    const longestNumber = findLongestNumber(array);
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = longestNumber - 1; i >= 0; i--) {
        while (array.length) {
            const current = array.shift();
            buckets[getDigit(current, i, longestNumber)].push(current);
        }
    }
    for (let j = 0; j < 10; j++) {
        while (buckets[j].length) {
            array.push(buckets[j].shift());
        }
    }
    return array;
}

function findLongestNumber(array){
    let longest=0;
    for(let i=0;i< array.length;i++){
        const currentLength = array[i].toString().length;
        longest = currentLength > longest ? currentLength : longest;
    }
    return longest;
}
function getDigit(number, place, longestNumber) {
    const string = number.toString();
    const size = string.length;
    const mod = longestNumber - size;
    return string[place - mod] || 0;
}

let arr = [10,3,5,66,7,19,34];
console.log(radixSort(arr));