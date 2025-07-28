import { updateBMI } from "bmiUpdater.js";
import { updateTDEE } from "tdeeUpdater.js";
import {updateResult} from "exerciseCal.js";

const age = document.querySelector('#age'); //年齡
const height = document.querySelector('#height');  //身高
const weight = document.querySelector('#weight');   //體重
const gender = document.querySelector('input[name="sex"]:checked'); //性別
const exercise = document.querySelector('#exercise'); //活動量
const analyze = document.querySelector('#analyze'); //分析按鈕

analyze.addEventListener('click', (e) => {
    e.preventDefault(); //阻止表單提交

    // BMI計算
    const bmi = weight.value / ((height.value / 100) ** 2);

    //基礎代謝率(BMR) 計算:
    let bmr;
    if (gender && gender.value === 'male') {
        bmr = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
    } else {
        bmr = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161;
    }

    //每日所需總熱量(TDEE)計算
    let tdee;
    switch (exercise.value) {
        case '0':
            tdee = bmr * 1.2; //久坐
            break;
        case '1':
            tdee = bmr * 1.375; //輕度活動
            break;
        case '2':
            tdee = bmr * 1.55; //中度活動
            break;
        case '3':
            tdee = bmr * 1.725; //高度活動
            break;
        case '4':
            tdee = bmr * 1.9; //極高強度
            break;
    }

    console.log(`BMI: ${bmi.toFixed(1)}, BMR: ${bmr.toFixed(0)}, TDEE: ${tdee.toFixed(0)}`);

    // 更新BMI顯示
    updateBMI(bmi.toFixed(1));

    // 更新TDEE顯示
    updateTDEE(bmr.toFixed(0),tdee.toFixed(0));

    //更新耗能顯示
    updateResult(weight.value);

});





