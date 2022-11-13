
// 1
let getA = document.getElementById('input-a');
let getB = document.getElementById('input-b');
let getRes = document.getElementById('res');
let getBtn = document.getElementById('btn');
let getSum = document.getElementById('sum');

function SNT(event){
    event.preventDefault();
    let check = true;
    let arr = [];
    let tmp = 0;
    let sumSNT = 0;
    let a = getA.value;
    let b = getB.value;
    if(a > b){
        tmp = a;
        a = b;
        b = tmp;
    }
    for(let i = a; i<=b; i++){
        if(i>=2){
            check = true;
            for(let j = 2; j<i; j++){
                if(i%j == 0){
                    check = false;
                    break;
                }
            }
            if(check == true){
                arr.push(i);
            }
        }
    }
    console.log(arr);
    if(arr.length>0){
        for(let i of arr){
            getRes.innerHTML += `${i}; `;
            sumSNT = sumSNT + i;
            getSum.innerHTML = sumSNT;
            
        }
    }
    else{
        getRes.innerHTML = "Không có số nguyên tố trong khoảng này";
        $
    }
}
getBtn.addEventListener('click', SNT)