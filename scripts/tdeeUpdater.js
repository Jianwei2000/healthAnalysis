export function updateTDEE(bmr,tdee) {
    //數字動畫
    let obj = { val: 0 ,val2:0};

    const tdeeAction = gsap.timeline({
        onComplete: () => {
            gsap.to(["#tdeeData","#tdeeInfo"], {
                boxShadow:"0px 0px 0px #FFF",
                duration:2,
                delay:1
            });
         
        }
    });

    tdeeAction
    .set(["#tdeeData","#tdeeInfo"],{
        opacity:0
    })
    .to("#tdeeData",{
        opacity:1,
        boxShadow:"0px 0px 100px #FFF",
        duration:1,
        delay:2
    })
    .fromTo(obj,{
        val:0
        }
        , {
        val: bmr,
        duration: 3,
        onUpdate: () => {
            document.querySelector("#bmrValue").innerText = obj.val.toFixed(0);
        }
    },"<")
    .fromTo(obj,{
        val:0
        }
        , {
        val: tdee,
        duration: 3,
        onUpdate: () => {
            document.querySelector("#tdeeValue").innerText = obj.val.toFixed(0);
        }
    },"<")
    .fromTo(obj,{
        val:0
        }
        , {
        val: tdee-(tdee*0.15),
        duration: 3,
        onUpdate: () => {
            document.querySelector("#tdee15Value").innerText = obj.val.toFixed(0);
        }
    },"<")
    .fromTo(obj,{
        val:0,
        val2:0
        }
        , {
        val: tdee*0.25,
        val2: (tdee*0.25)/9,
        duration: 3,
        onUpdate: () => {
            document.querySelector("#fat").innerHTML = `${obj.val2.toFixed(0)}克<span>${obj.val.toFixed(0)} 卡</span>`;
        }
    })
    .fromTo(obj,{
        val:0,
        val2:0
        }
        , {
        val: tdee*0.45,
        val2: (tdee*0.45)/4,
        duration: 3,
        onUpdate: () => {
            document.querySelector("#carbohydrate").innerHTML = `${obj.val2.toFixed(0)}克<span>${obj.val.toFixed(0)} 卡</span>`;
        }
    },"<")
    .fromTo(obj,{
        val:0,
        val2:0
        }
        , {
        val: tdee*0.30,
        val2: (tdee*0.30)/4,
        duration: 3,
        onUpdate: () => {
            document.querySelector("#protein").innerHTML = `${obj.val2.toFixed(0)}克<span>${obj.val.toFixed(0)} 卡</span>`;
        }
    },"<")
  
    .to("#tdeeInfo",{
        opacity:1,
        boxShadow:"0px 0px 100px #FFF",
        duration:1,
    })
}