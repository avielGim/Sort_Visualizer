// need to improve - two directions

export function quickSort(array) {
    quickSort1(array, 0, array.length - 1);
    return array;
}

function quickSort1(array, start, end) {
    if(start < end){
        let pivot = partition(array, start, end);

        quickSort1(array, start, pivot - 1);
        quickSort1(array, pivot + 1, end);
    }
}

function partition(array, start, end) {
    const pivot = array[end];
    let index = start;

    for(let i = start; i < end; i++){
        if(array[i] < pivot){
            [array[i], array[index]] = [array[index], array[i]]; 
            index++;
        }
    }
    [array[index], array[end]] = [pivot, array[index]]; 
    return index;
}