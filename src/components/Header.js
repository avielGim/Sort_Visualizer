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


    const handleBubble = async () => {
        console.log("Bubble click");
        //var tempArr = bubbleSort(array);
        var animations = bubbleSort(array);
        await visualSwap(animations);
        console.log(array);
    }

    const handleMerge = async () => {
        console.log("Merge click");
        
        // fix algoritms
        var animations = mergeSort(array);
        await visualSwap(animations);
        console.log(array);
    }
  
    const handleQuick = () => {
        console.log("Quick click");
        var tempArr = quickSort(array);
        setArray([...tempArr]);
        console.log(array);
    }

    const generateNewArr = () => {
        var tempArr = [5, 12, 3, 7];
        // for(var i = 0 ; i < props.sizeOfArray ; i++){
        //   const r = Math.floor(Math.random() * props.maximum) + props.minimum;
        //   tempArr.push(r);
        // }
        setArray([...tempArr]);
    }

    const visualSwap = async (anim) => {  
        console.log("start sort...");  
        for(let i = 0 ; i < anim.length ; i++){
            const [index, newHeight] = anim[i];
            array[index] = newHeight;
            await sleep(50);
            setArray([...array]);
        }
        console.log("finish sort");
    }

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