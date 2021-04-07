function congf() {
    let a = +document.getElementById("input1").value;
    let b = +document.getElementById("input2").value;
    result1 = a + b
    document.getElementById("result").innerHTML= ("Kết quả là: " + result1)
}

function truf() {
    let a = +document.getElementById("input1").value;
    let b = +document.getElementById("input2").value;
    result1 = a - b
    document.getElementById("result").innerHTML= ("Kết quả là: " + result1)
}

function chiaf() {
    let a = +document.getElementById("input1").value;
    let b = +document.getElementById("input2").value;
    result1 = a / b
    document.getElementById("result").innerHTML= ("Kết quả là: " + result1)
}

function nhanf() {
    let a = +document.getElementById("input1").value;
    let b = +document.getElementById("input2").value;
    result1 = a * b
    document.getElementById("result").innerHTML= ("Kết quả là: " + result1)
}