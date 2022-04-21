import { useState } from 'react';
import { bubbleSort } from '../SortAlgo/Bubble';

import { mergeSort } from '../SortAlgo/Merge';
import { quickSort } from '../SortAlgo/Quick';
import '../css/Header.css'

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const Header = (props) => {
    const[array, setArray] = useState([]);

    // visual is ok. need to visual comparison and swap color
    const handleBubble = async () => {
        console.log("Bubble click");
        var animations = bubbleSort(array);
        console.log("array before animations bubble = " + array);
        await visualSwap(animations);
        console.log("array after animations bubble = " + array);
    }

    // visual is ok. need to visual comparison and swap color
    const handleMerge = async () => {
        console.log("Merge click");
        var animations = mergeSort(array);
        console.log("array before animations merge = " + array);
        await visualSwap(animations);
        console.log("array after animations merge = " + array);
    }

    // visual is ok. need to visual comparison and swap color
    const handleQuick = async () => {
        console.log("Quick click");
        var tempArr = quickSort(array);
        console.log("array before animations quick = " + array);
        await visualSwap(tempArr);
        console.log("array after animations quick = " + array);
    }

    const generateNewArr = () => {
        var tempArr = []; // [50, 20, 60, 10, 80, 40, 1, 90, 30, 70];
        for(var i = 0 ; i < props.sizeOfArray ; i++){
          const r = Math.floor(Math.random() * props.maximum) + props.minimum;
          tempArr.push(r);
        }
        setArray([...tempArr]);
    }

    const visualSwap = async (anim) => {  
        console.log("start sort...");  
        for(let i = 0 ; i < anim.length ; i++){
            const [index, newHeight] = anim[i];
            array[index] = newHeight;
            await sleep(10);
            setArray([...array]);
        }
        console.log("finish sort");
    }

    // const visualSwapBubble = async (anim) => {  
    //     
    // }

    // const visualSwapMerge = async (anim) => {  
    // 
    // }

    // const visualSwapQuick = async (anim) => {  
    // 
    // }

    return (
      <div>
          {/* <select>
              <option>
                  1
              </option>
              <option>
                  1
              </option>
          </select> */}
          <button onClick={handleBubble}>Bubble</button>
          <button onClick={handleMerge}>Merge</button>
          <button onClick={handleQuick}>Quick</button>
          <button onClick={generateNewArr}>new numbers</button>
          <div className='container'>
          {array.map((num, index) => 
            <div
                className='bar'
                key={index}
                style={{height: `${num}px`}}   
            ></div>)}
          </div>
      </div>
    );
}
 
export default Header;


// code for animation sort
    // const arrayBars = document.getElementsByClassName('bar');
    //// console.log(arrayBars);
    //// need to use async and await
    // for(let i = 0 ; i < animations.length ; i++){
    //   if(i%2 === 0){
  
    //   } else {
    //     setTimeout(() => {
    //       const [index, newHeight] = animations[i];
    //       const animStyle = arrayBars[index].style;
    //      // console.log("array[" + index + "] = " + newHeight);
    //       animStyle.height = `${newHeight}px`;
    //     }, 100);
    //   }
    // }
    // setArray([...animations]);