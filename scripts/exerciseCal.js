const exerciseSelect = document.querySelectorAll("#exerciseData ul li");
const result = document.querySelector("#exerciseInfo .result-wrap");
const carBar = document.querySelector("#consumption");
const weight = document.querySelector("#weight");

let currentActivity = null; 

exerciseSelect.forEach((i)=>{
    i.addEventListener("click",()=>{
        //先清除所有active
        exerciseSelect.forEach((item) => item.classList.remove("active"));
        //被點選的加上active
        i.classList.add("active");


        // 記住目前選擇的活動
        currentActivity = i.getAttribute("data-select");

        // 更新畫面
        updateResult();

    })
});

// 綁定 carBar（滑桿）變動事件
carBar.addEventListener("input", () => {
    updateResult(); // 每次滑桿改變都重新更新畫面
});

// 共用的更新畫面函式
export function updateResult(kg=weight.value) {

    if (!currentActivity) return; // 若尚未選擇活動則不更新
    
    if (currentActivity === "run") {
        let needtime = (carBar.value/(11*kg))*60;
        let fat = carBar.value/7.7;
        result.innerHTML = `
             <div class="title-wrap">
                <div class="title">
                    <span class="shine"></span>
                    <i class="fa-solid fa-person-running"></i>
                </div>
                <p>MET ≈ 10.0</p>
                </div>
                <ul >
                <li >
                    <h3 style="color:chocolate;">體重</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="kgValue">${kg}<span>公斤</span></h4>
                </li>
                <li >
                    <h3 style="color: orange;">目標消耗</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="calValue">${carBar.value} <span>卡路里</span></h4>
                </li>
                <li >
                    <h3 style="color:skyblue;">所需時間</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="minValue">${needtime.toFixed(0)}<span>分鐘</span></h4>
                </li>
                
                </ul>
                <div class="result-info">
                <h3>跑步 ${needtime.toFixed(0)} 分鐘可消耗 ${carBar.value} 卡路里，相當於約 ${fat.toFixed(1)} 克脂肪</h3>
                <p>計算公式: 熱量（kcal）＝ 代謝當量(MET) × 體重（kg）× 時間（hr）</p>
            </div>
        `;
    } else if (currentActivity === "jump") {
        let needtime = (carBar.value/(11.8*kg))*60;
        let fat = carBar.value/7.7;
        result.innerHTML = `
             <div class="title-wrap">
                <div class="title">
                    <span class="shine"></span>
                    <i class="fa-solid fa-person-arrow-up-from-line"></i>
                </div>
                <p>MET ≈ 11.8</p>
                </div>
                <ul >
                <li >
                    <h3 style="color:chocolate;">體重</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="kgValue">${kg}<span>公斤</span></h4>
                </li>
                <li >
                    <h3 style="color: orange;">目標消耗</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="calValue">${carBar.value} <span>卡路里</span></h4>
                </li>
                <li >
                    <h3 style="color:skyblue;">所需時間</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="minValue">${needtime.toFixed(0)}<span>分鐘</span></h4>
                </li>
                
                </ul>
                <div class="result-info">
                <h3>跳繩 ${needtime.toFixed(0)} 分鐘可消耗 ${carBar.value} 卡路里，相當於約 ${fat.toFixed(1)} 克脂肪</h3>
                <p>計算公式: 熱量（kcal）＝ 代謝當量(MET) × 體重（kg）× 時間（hr）</p>
            </div>
        `;
    } else {
        let needtime = (carBar.value/(8.3*kg))*60;
        let fat = carBar.value/7.7;
        result.innerHTML = `
             <div class="title-wrap">
                <div class="title">
                    <span class="shine"></span>
                   <i class="fa-solid fa-person-swimming"></i>
                </div>
                <p>MET ≈ 8.3</p>
                </div>
                <ul >
                <li >
                    <h3 style="color:chocolate;">體重</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="kgValue">${kg}<span>公斤</span></h4>
                </li>
                <li >
                    <h3 style="color: orange;">目標消耗</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="calValue">${carBar.value} <span>卡路里</span></h4>
                </li>
                <li >
                    <h3 style="color:skyblue;">所需時間</h3>
                    <span class="shine"></span>
                    <h4 class="light-text" id="minValue">${needtime.toFixed(0)}<span>分鐘</span></h4>
                </li>
                
                </ul>
                <div class="result-info">
                <h3>游泳 ${needtime.toFixed(0)} 分鐘可消耗 ${carBar.value} 卡路里，相當於約 ${fat.toFixed(1)} 克脂肪</h3>
                <p>計算公式: 熱量（kcal）＝ 代謝當量(MET) × 體重（kg）× 時間（hr）</p>
            </div>
        `;
    }
}

//所需時間 = (熱量 ÷ (MET × 體重)) × 60
//脂肪重量（克）＝ 熱量 ÷ 7.7
//跳繩MET 11.8
//游泳MET 8.3