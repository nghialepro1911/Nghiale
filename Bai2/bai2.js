const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $star = document.getElementById("star");
const $triangle = document.getElementById("triangle");


$triangle.onsubmit = function numberOneTriangle(event){
    event.preventDefault(); 
    let a = $input.value;
     for (let i = 0; i < a; i++){
        let triangle = "";
        for(let j = 0; j <= i; j++){
            triangle = triangle + "*";
        }
        $star.innerHTML = "in ra console log"
        console.log(triangle);
    }
}

