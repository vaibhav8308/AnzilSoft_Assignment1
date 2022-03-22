import React, { useState } from 'react'
import "./Home.css"

function Home() {
    const [number1, setNumber1] = useState([]);  // State to store value of Number1
    const [number2, setNumber2] = useState([]); // State to store value of Number2
    const [totalValue, setTotalValue] = useState([]);   // State to store value of Total 



    function handleNumber1(e) {
        setNumber1(+e.target.value)       // function to Handle Number1
    }
    function handleNumber2(e) {
        setNumber2(+e.target.value)       // function to Handle Number2
    }
    function addNumber() {
        setTotalValue(number1 + number2)  // function to Handle Addition
    }
    function subtractNumber() {
        setTotalValue(number1 - number2)   // function to Handle Substraction
    }
    function multiplyNumber() {
        setTotalValue(number1 * number2)   // function to Handle Multiplication
    }
    function divideNumer() {
        setTotalValue(number1 / number2)   // function to Handle Division
    }



    return (
        <div className='container'>
            <div className='Heading'>Basic Math Operations</div>
            <div className='calculator'>
                <div className='number'> Number 1 :
                    <input className='input' placeholder='Insert Numebr 1' type="text"
                        value={number1} onChange={handleNumber1} />
                </div>
                <div className='number'> Number 2 :
                    <input className='input' placeholder=' Insert Numebr 2' type="text"
                        value={number2} onChange={handleNumber2} />
                </div>
                <div className='button'>
                    <button className='add' onClick={addNumber}>Addition</button>
                    <button className='subtract' onClick={subtractNumber}>Subtraction</button>
                    <button className='Multiply' onClick={multiplyNumber}>Multiplication</button>
                    <button className='divide' onClick={divideNumer}>Division</button>
                </div>
            </div>
            <div className='Result'> Total : {totalValue}</div>
        </div>
    )
}

export default Home