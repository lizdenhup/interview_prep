var unsortedArray = [234, 243, 4, 77, 8, 9, 9, 10, 1232, 33, 45, 56, 22, 1]

function merge(leftArr, rightArr) {
    if (leftArr && rightArr) {
        sortedArr = [];
        for (var i = 0; i < leftArr.length; i++) {
            if (leftArr[i] <= rightArr[i]) {
                sortedArr.push(leftArr[i])
            } else {
                sortedArr.push(rightArr[i])
            }
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
    } else {
        if (arr.length % 2 === 0) {
            var midpoint = arr.length/2
            var leftArr = arr.slice(arr[0], arr[midpoint])
            var rightArr = arr.slice(arr[midpoint])
            mergesort(leftArr)
            mergesort(rightArr)
            var output = merge(leftArr, rightArr)
    } else {
            var midpoint = (arr.length + 1)/2
            var leftArr = arr.slice(arr[0], arr[midpoint])
            var rightArr = arr.slice(arr[midpoint])
            mergesort(leftArr)
            mergesort(rightArr)
            var output = merge(leftArr, rightArr)
        }
        console.log(output)
        return output 
    }
}

function split(arr) {

}

