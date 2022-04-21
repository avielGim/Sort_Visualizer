// visual is ok. need to visual comparison and swap color
// pivot need to choose by math.random

export function quickSort(array) {
    const animations = [];
    if(array <= 1) return array;
    const arr1 = array.slice();
    quickSort1(arr1, 0, array.length - 1, animations);
    return animations;
}

function quickSort1(arr1, start, end, animations) {
    if(start < end){
        let pivot = partition(arr1, start, end, animations);

        quickSort1(arr1, start, pivot - 1, animations);
        quickSort1(arr1, pivot + 1, end, animations);
    }
}

function partition(arr1, start, end, animations) {
    const pivot = arr1[end]; // need to do math.random
    let index = start;

    for(let i = start; i < end; i++){
         // compare visual
        if(arr1[i] < pivot){
            animations.push([i, arr1[index]]);
            animations.push([index, arr1[i]]);
            [arr1[i], arr1[index]] = [arr1[index], arr1[i]]; 
            index++;
        }
    }
    animations.push([end, arr1[index]]);
    animations.push([index, arr1[end]]);
    [arr1[index], arr1[end]] = [pivot, arr1[index]]; 
    return index;
}