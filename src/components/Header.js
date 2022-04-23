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
    const[colors, setColor] = useState([])

    // visual is ok. need to visual comparison and swap colors
    const handleBubble = async () => {
        console.log("Bubble click");
        var animations = bubbleSort(array);
        console.log("array before animations bubble = " + array);
        await visualSwap_Bubble_Quick(animations);
        drawAllPosition(0, array.length, 'position');
        console.log("array after animations bubble = " + array);
    }

    // visual is ok. need to visual comparison and swap colors
    const handleMerge = async () => {
        console.log("Merge click");
        var animations = mergeSort(array);
        console.log("array before animations merge = " + array);
        await visualSwapMerge(animations);
        drawAllPosition(0, array.length, 'position');
        console.log("array after animations merge = " + array);
    }

    // visual is ok. need to visual comparison and swap colors
    const handleQuick = async () => {
        console.log("Quick click");
        var animations = quickSort(array);
        // setArray([...animations]);
        console.log("array before animations quick = " + array);
        await visualSwap_Bubble_Quick(animations);
        drawAllPosition(0, array.length, 'position');
        console.log("array after animations quick = " + array);
    }

    const generateNewArr = () => {
        var tempArr = []; // [props.speed, 20, 60, 10, 80, 40, 1, 90, 30, 70];
        var tempColor = [];
        for(var i = 0 ; i < props.sizeOfArray ; i++){
            const r = Math.floor(Math.random() * props.maximum) + props.minimum;
            tempArr.push(r);
            tempColor.push('bar');
        }
        setArray([...tempArr]);
        setColor([...tempColor]);
    }

    // const visualSwap = async (anim) => {  
    //     console.log("start sort...");  
    //     for(let i = 0 ; i < anim.length ; i++){
    //         const [index, newHeight] = anim[i];
    //         array[index] = newHeight;
    //         await sleep(10);
    //         setArray([...array]);
    //     }
    //     console.log("finish sort");
    // }

    const visualSwap_Bubble_Quick = async (anim) => {  
        console.log("start sort...");  
        for(let i = 0 ; i < anim.length ; i++){
            const [status, value1, value2] = anim[i];
            if(status === 'compare' || status === 'ready'){
                // colors[value1] = status;
                // colors[value2] = status;
                changeColor(value1, status);
                changeColor(value2, status);
                await sleep(props.speed);
                // setColor([...colors]);
            }
            else if(status === 'swap'){
                changeValue(value1, value2);
                await sleep(props.speed);
            }
            else if(status === 'position'){
                changeColor(value1, status);
                // colors[value1] = status;
                await sleep(props.speed);
            } 
        }
        console.log("finish sort");   
    }

    const visualSwapMerge = async (anim) => {  
        console.log("start sort...");  
        for(let i = 0 ; i < anim.length ; i++){
            const [status, value1, value2] = anim[i];
            if(status === 'compare' || status === 'ready'){
                drawAllPosition(value1, value2, status);
                await sleep(props.speed);
            }
            else if(status === 'swap'){
                changeValue(value1, value2);
                // array[value1] = value2;
                await sleep(props.speed);
            }       
        }
        console.log("finish sort"); 
    }

    const changeColor = (pos, status) => {
        colors[pos] = status;
        setColor([...colors]);
    }

    const changeValue = (value1, value2) => {
        array[value1] = value2;
        setArray([...array]);
    }

    const drawAllPosition = (start, end, status) => {
        for(let i = start ; i <= end ; i++){
            colors[i] = status
        }
        setColor([...colors]);
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
                className={colors[index]}
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