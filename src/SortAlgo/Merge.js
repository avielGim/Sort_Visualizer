export function mergeSort(array) {
    const animations = [];
    if(array <= 1) return array;
    const tempArr = array.slice();
    mergeRecu(array, 0, array.length - 1, tempArr, animations);
    // return array;
    return animations;
}

function mergeRecu(array, start, end, tempArr, animations) {
    if(start === end) return;
    const mid = Math.floor((start + end) / 2);
    mergeRecu(tempArr, start, mid, array, animations);
    mergeRecu(tempArr, mid + 1, end, array, animations);
    mergeAlgo(array, start, mid, end, tempArr, animations);
}

function mergeAlgo(arr, start, mid, end, tempArr, animations){
    let k = start;
    let i = start;
    let j = mid + 1;
    while(i <= mid && j <= end){
        // animations.push([i, j]);
        if(tempArr[i] <= tempArr[j]){
            animations.push([k, tempArr[i]]);
            arr[k++] = tempArr[i++];
        } else {
            animations.push([k, tempArr[j]]);
            arr[k++] = tempArr[j++];
        }
    }

    while(i <= mid){
        animations.push([k, tempArr[i]]);
        arr[k++] = tempArr[i++];
    }

    while(j <= end){
        animations.push([k, tempArr[j]]);
        arr[k++] = tempArr[j++];
    }
}

// psuedo code

// let k = startIdx;
// let i = startIdx;
// let j = middleIdx + 1;
// while (i <= middleIdx && j <= endIdx) {
//     animations.push([i, j]);
//     animations.push([i, j]);
//     if (helperArray[i] <= helperArray[j]) {
//         animations.push([k, helperArray[i]]);
//         mainArray[k++] = helperArray[i++];
//     } else {
//         animations.push([k, helperArray[j]]);
//         mainArray[k++] = helperArray[j++];
//         }
//     }
//     while (i <= middleIdx) {
//         animations.push([i, i]);
//         animations.push([i, i]);
//         animations.push([k, helperArray[i]]);
//         mainArray[k++] = helperArray[i++];
//     }
//     while (j <= endIdx) {
//         animations.push([j, j])
//         animations.push([j, j]);
//         animations.push([k, helperArray[j]]);
//         mainArray[k++] = helperArray[j++];
//     }