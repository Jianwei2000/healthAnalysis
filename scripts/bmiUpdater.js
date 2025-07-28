//bmi畫面更新
export function updateBMI(bmi){
    //數字動畫
    let obj = { val: 0 };
    //更新進度條       
    // 設定 BMI 最低值與最高值範圍 從 10 到 35
    const minBMI = 10;
    const maxBMI = 35;

    // 將 BMI 正規化到 0~1 的範圍
    let normalized = (bmi - minBMI) / (maxBMI - minBMI);

    // 限制在 0~1 之間
    normalized = Math.min(Math.max(normalized, 0), 1);

    // 計算進度百分比（最低為 5%，最高為 100%）
    const bmiProgress = 5 + normalized * 95;
    const bmiStatus = document.querySelector("#bmiStatus");
    const bmiInfo = document.querySelector('#bmiInfo');

    const bmiAction = gsap.timeline({
        onComplete: () => {
            gsap.to(["#calculate", "#bmiData", "#bmiInfo"], {
                boxShadow:"0px 0px 0px #FFF",
               
                duration:2,
            });
            gsap.to(".circle p",{
                scale:1,
                duration:2
            })
        }
    });
    bmiAction
    .set(["#bmiData","#bmiReport","#bmiStatus","#bmiInfo"],{
        opacity:0
    })
    .set(".progress",{
        clipPath:"inset(0 0 0 0)"
    })
    .to( "#calculate",{
        boxShadow:"0px 0px 100px #FFF",
        duration:1.5,
        
    })
    .to("#bmiData",{
        opacity:1,
        boxShadow:"0px 0px 100px #FFF",
        duration:1,
        
    })
    .to(".circle p",{
        scale:1.2,
        duration:2
    })
    .to(".progress",{
        clipPath:`inset(0 0 0 ${bmiProgress}%)`,
        duration:2,
        ease: "power2.out"

    },"<")
    .fromTo(obj,{
        val:0
        }
        , {
        val: bmi,
        duration: 5,
        onUpdate: () => {
            document.querySelector("#bmiValue").innerHTML = `${obj.val.toFixed(1)}<span class="shine"></span>`;
        }
    },"<")
    .to("#bmiReport",{
        opacity:1,
        onUpdate:()=>{
            document.querySelector("#bmiReport").textContent = "BMI指數為 " + bmi;
        },
        duration:1,
    })
    .to("#bmiStatus",{
        opacity:1,
        duration:1,
        onUpdate: () => {
           
            if (bmi < 18.5) {
                bmiStatus.textContent = "過輕";
                bmiStatus.style.color = "lightblue";
            } else if (bmi < 24) {
                bmiStatus.textContent = "正常範圍";
                bmiStatus.style.color = "lightgreen";
            } else if (bmi < 27) {
                bmiStatus.textContent = "過重";
                bmiStatus.style.color = "orange";
            } else {
                bmiStatus.textContent = "肥胖";
                bmiStatus.style.color = "tomato";
            }
        }
    })
    .to("#bmiInfo",{
        opacity:1,
        boxShadow:"0px 0px 100px #FFF",
        duration:1,
        onUpdate: () => {
            if (bmi < 18.5) {
                bmiInfo.innerHTML = `
                    <h2 class="light-text">優化指南</h2>
                    <p>您的BMI指數位於 18.5 以下，屬於 <span style="color:#00b7ff;">體重過輕</span>。</p>
                    <p>以下供您參考:</p>
                    <ul>
                        <li>增加每日熱量攝取，尤其是優質的碳水化合物和蛋白質。</li>
                        <li>可以進行一些抗阻訓練，以增強肌肉量，美化體態。</li>
                        <li>確保攝取足夠的營養素，可考慮諮詢專業營養師制定個人化營養方案。</li>
                    </ul>
                    `
            }
            else if (bmi < 24) {
                bmiInfo.innerHTML = `
                    <h2 class="light-text">優化指南</h2>
                    <p>您的BMI指數位於 18.5 到 24 之間，屬於 <span style="color: lawngreen;">健康體重</span>。</p>
                    <p>以下供您參考:</p>
                    <ul>
                        <li>保持目前的良好習慣，維持健康的身體狀態。</li>
                        <li>可以進行一些抗阻訓練，以增強肌肉量，美化體態。</li>
                        <li>定期安排全身健康檢查，及早發現潛在風險。</li>
                    </ul>
                `
            }
            else if (bmi < 27) {
                bmiInfo.innerHTML = `
                    <h2 class="light-text">優化指南</h2>
                    <p>您的BMI指數位於 24 到 27 之間，屬於 <span style="color: orange;">體重過重</span>。</p>
                    <p>以下供您參考:</p>
                    <ul>
                        <li>減少高油、高糖、高鹽食物的攝取，增加蔬菜、水果、全穀類、低脂蛋白質的比例。</li>
                        <li>減少靜態活動時間，多走路、爬樓梯，增加日常活動量。</li>
                        <li>確保每晚有7-9小時的睡眠，睡眠不足容易影響食慾和代謝。</li>
                    </ul>
                `
            }
            else if (bmi < 30) {
                bmiInfo.innerHTML = `
                    <h2 class="light-text">優化指南</h2>
                    <p>您的BMI指數位於 27 到 30 之間，屬於 <span style="color: orangered;">輕度肥胖</span>。</p>
                    <p>以下供您參考:</p>
                    <ul>
                        <li>建議採取均衡飲食，減少高油、高糖、高鹽食物的攝取，控制熱量攝取。</li>
                        <li>每週至少進行150分鐘中等強度的有氧運動，如快走、游泳等。</li>
                        <li>輕度肥胖雖然不是最嚴重的肥胖程度，但仍需要重視，降低慢性疾病的風險，提升生活質量。 </li>
                    </ul>
                `
            }
            else if (bmi < 35) {
                bmiInfo.innerHTML = `
                    <h2 class="light-text">優化指南</h2>
                    <p>您的BMI指數位於 30 到 35 之間，屬於 <span style="color: tomato;">中度肥胖</span>。</p>
                    <p>以下供您參考:</p>
                    <ul>
                        <li>減少熱量攝取，增加蔬菜水果的比例，選擇低脂、低糖、高纖維的食物。 </li>
                        <li>選擇適合自己的運動方式，如快走、游泳、瑜珈等，每週至少運動150分鐘。 </li>
                        <li>定期測量體重，監測減重進度，必要時尋求專業醫師或營養師的協助。 </li>
                    </ul>
                `
            }
            else {
                bmiInfo.innerHTML = `
                    <h2 class="light-text">優化指南</h2>
                    <p>您的BMI指數位於 35 以上，屬於 <span style="color: red;">重度肥胖</span>。</p>
                    <p>以下供您參考:</p>
                    <ul>
                        <li>每天減少500大卡的熱量攝取，或減少300大卡熱量攝取並增加200大卡的運動量</li>
                        <li>每週至少兩天進行大肌肉群的肌力運動，有助於增加肌肉量，提高基礎代謝率。 </li>
                        <li>保持規律作息，充足睡眠有助於降低食慾。</li>
                        <li>隨時監測體重變化，提醒自己維持健康的體重。 </li>
                    </ul>
                `
            }
        }
  
    })
}