import React, { useRef ,useState } from "react";
import './style.css';

import BmiText from "./BmiText";

function BMICalculator() {
    const weightRef = useRef(null);
    const heightRef = useRef(null);
    const [result ,setResult] = useState(0.00)

    const calculateBMI = () => {
        const weight = parseFloat(weightRef.current.value);
        const height_ = parseFloat(heightRef.current.value);
        const height = height_ * 0.01;

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            setResult(0.00)
            return;
        }

        let bmi = weight / (height * height);
        setResult(bmi)
    };

    const onClickReset = () => {
        weightRef.current.value = "";
        heightRef.current.value = "";
        setResult(0.00)
    }


    return (

        <div className="BMI">
            <h1>BMI Calculator</h1>
            <div className="Box">
                <label>Weight (kg): </label>
                <input type="number" ref={weightRef} />
            </div>
            <div className="Box">
                <label>Height (cm): </label>
                <input type="number" ref={heightRef} />
            </div>
            <button className="Calculate" onClick={calculateBMI}>Calculate BMI</button>
            <button className="Reset" onClick={onClickReset}>Reset</button>
            <div className="Box_bmi">{`Your BMI is: ${result.toFixed(2)}`}</div>
            <BmiText bmi={result} />
        </div>

    );
}

export default BMICalculator;