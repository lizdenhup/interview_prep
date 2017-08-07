var unsortedArray = [234, 243, 4, 77, 8, 9, 9, 10, 1232, 33, 45, 56, 22, 1]

function merge(leftArr, rightArr) {
    var sortedArr = [];
    if (leftArr && rightArr) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0])
        } else {
            sortedArr.push(rightArr[0])
        }
    } else if (rightArr && !leftArr) {
        sortedArr.push(...rightArr);
    } else {
        sortedArr.push(...leftArr);
    }
    return sortedArr; 
}

function mergesort(arr) {
    if (arr.length < 2) {
        console.log('The list was so small that it is already sorted!')
        return arr;
        var midpoint = parseInt(arr.length/2)
        var leftArr = arr.slice(0, midpoint)
        var rightArr = arr.slice(midpoint)
        return merge(mergesort(leftArr), mergesort(rightArr)
        )
    } 
}

console.log(mergesort(unsortedArray))