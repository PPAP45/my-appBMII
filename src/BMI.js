import React, { useRef } from "react";
import './style.css';

function BMICalculator() {
    const weightRef = useRef(null);
    const heightRef = useRef(null);
    const resultRef = useRef(null);
    const TextRef = useRef(null);

    const calculateBMI = () => {
        const weight = parseFloat(weightRef.current.value);
        const height_ = parseFloat(heightRef.current.value);
        const height = height_ * 0.01;

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultRef.current.innerText = "กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง.";
            return;
        }

        const bmi = weight / (height * height);
        resultRef.current.innerText = `Your BMI is: ${bmi.toFixed(2)}`;
        //console.log(bmi.toFixed(2));
        const bmiValue = bmi.toFixed(2);
        if (bmiValue < 18.50) {
            TextRef.current.innerText = `อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม`;
            console.log(bmiValue);
        } else if (bmiValue >= 18.50 && bmiValue <= 22.90) {
            TextRef.current.innerText = `อยู่ในเกณฑ์ปกติ`;
            console.log(bmiValue);
        } else if (bmiValue >= 23.00 && bmiValue <= 24.90) {
            TextRef.current.innerText = `น้ำหนักเกิน`;
            console.log(bmiValue);
        } else if (bmiValue >= 25.00 && bmiValue <= 29.90) {
            TextRef.current.innerText = `โรคอ้วนระดับที่ 1`;
            console.log(bmiValue);
        } else if (bmiValue >= 30) {
            TextRef.current.innerText = `โรคอ้วนระดับที่ 2`;
            console.log(bmiValue);
        } else {
            TextRef.current.innerText = `โปรใส่ค่าน้ำหนักในหน่วย Kg หรือค่าส่วนสูงในหน่วย cm`;
        }
    };

    const onClickReset = () => {
        weightRef.current.value = "";
        heightRef.current.value = "";
        resultRef.current.innerText = "";
        TextRef.current.innerText = "";
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
            <div className="Box_bmi" ref={resultRef}></div>
            <div className="Box_rank" ref={TextRef}></div>
        </div>

    );
}

export default BMICalculator;
