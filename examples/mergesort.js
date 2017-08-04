function merge(leftArr, rightArr) {
    if (leftArr && rightArr) {
        sortedArr = [];
        for (var i = 0; i < leftArr.length; i++) {
            for (var j = 0; j < rightArr.length; j++) {

            }
        }
    }
}

function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
        console.log('The list was so small that it is already sorted!')
    } else {
        //split the list repeatedly until it is single elements
        //merge the elements
        //continue doing this until you get the whole list back, but sorted 
    }
}

var unsortedArray = [234, 243, 4, 77, 8, 9, 9, 10, 1232, 33, 45, 56, 22, 1]

function split(arr) {
    if (arr.length % 2 === 0) {
        var midpoint = arr.length/2
        leftArr = arr.slice(arr[0], arr[midpoint])
        rightArr = arr.slice(arr[midpoint])
    } else {
        var midpoint = (arr.length + 1)/2
        leftArr = arr.slice(arr[0], arr[midpoint])
        rightArr = arr.slice(arr[midpoint])
    }
}

