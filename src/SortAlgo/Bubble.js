// need to improve it

export function bubbleSort(array) {
    const animations = [];
    if(array <= 1) return array;
    bubbleAlgo(array, animations);
    // return array;
    return animations;
}

function bubbleAlgo(array, animations){
    let x = array.length - 1;
    while (x > 0) {
        // let swapped = false;
        for (let i = 0; i < x; ++i) {
            if (array[i] > array[i + 1]) {
                // swapped = true;
                animations.push([i, array[i]]);
                swap(array, i, i + 1);
             }
         }
        // if (!swapped) break;
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