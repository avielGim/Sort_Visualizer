// visual is ok. need to visual comparison and swap color

export function mergeSort(array) {
    const animations = [];
    if(array <= 1) return array;
    const arr1 = array.slice();
    const arr2 = array.slice();
    mergeRecu(arr1, 0, array.length - 1, arr2, animations);
    return animations;
}

function mergeRecu(arr1, start, end, arr2, animations) {
    if(start === end) return;
    const mid = Math.floor((start + end) / 2);
    mergeRecu(arr2, start, mid, arr1, animations);
    mergeRecu(arr2, mid + 1, end, arr1, animations);
    mergeAlgo(arr1, start, mid, end, arr2, animations);
}

function mergeAlgo(arr1, start, mid, end, arr2, animations){
    let k = start;
    let i = start;
    let j = mid + 1;
    while(i <= mid && j <= end){
        // animations.push([i, j]); // compare visual
        if(arr2[i] <= arr2[j]){
            animations.push([k, arr2[i]]);
            arr1[k++] = arr2[i++];
        } else {
            animations.push([k, arr2[j]]);
            arr1[k++] = arr2[j++];
        }
    }

    while(i <= mid){
        animations.push([k, arr2[i]]);
        arr1[k++] = arr2[i++];
    }

    while(j <= end){
        animations.push([k, arr2[j]]);
        arr1[k++] = arr2[j++];
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