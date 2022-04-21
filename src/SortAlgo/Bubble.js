// visual is ok. need to visual comparison and swap color

export function bubbleSort(array) {
    const animations = [];
    if(array <= 1) return array;
    const tempArr = array.slice();
    bubbleAlgo(tempArr, animations);
    return animations;
}

function bubbleAlgo(array, animations){
    let x = array.length - 1;
    while (x > 0) {
        let swapped = false;
        for (let i = 0; i < x; ++i) {
            // animations.push([comparison1, i , i+1]);  // compare visual
            // animations.push([comparison2, i , i+1]);  // compare visual
            if (array[i] > array[i + 1]) {
                swapped = true;
                animations.push([i+1, array[i]]);
                animations.push([i, array[i+1]]);
                swap(array, i, i + 1);
             }
         }
        if (!swapped) break;
        x--;
     }
}

function swap(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp; 
}

// psuedo code
// const length = helperArray.length;
// let x = length - 1;
//     while (x > 0) {
//         let swapped = false;
//         for (let i = 0; i < x; ++i) {
//             animations.push(["comparison1", i, i + 1]);
//             animations.push(["comparison2", i, i + 1]);
//             if (helperArray[i] > helperArray[i + 1]) {
//                 swapped = true;
//                 animations.push(["swap", i, helperArray[i + 1]]);
//                 animations.push(["swap", i + 1, helperArray[i]]);
//                 swap(helperArray, i, i + 1);
//              }
//          }
//         if (!swapped) break;
//         x--;
//      }