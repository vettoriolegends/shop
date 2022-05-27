const calcbutton = document.getElementById("calcbutton")

console.log(calcbutton)

calcbutton.onclick = function () {
    const result = document.getElementById("result");

    result.innerText = "Здесь будет результат"
    
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");

    console.log(input1, input2);

   
    const a = parseFloat(input1.value)
    const b = parseFloat(input2.value)

    let resultText = `${a} + ${b} = ${a + b}`;
    
    resultText += `\n${a} - ${b} = ${a - b}`;
    
    resultText += `\n${a} * ${b} = ${a * b}`;
    
    resultText += `\n${a} / ${b} = ${a / b}`;

    result.innerText = resultText;

   



    

}