function calculate(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let pheptinh = document.getElementById('pheptinh').value;
    let result;

    if (pheptinh === "cong"){
        result = num1 + num2;
    } else if (pheptinh === "tru"){
        result = num1 - num2;
    } else if (pheptinh === "nhan"){
        result = num1 * num2;
    } else if (pheptinh === "chia") {
        if (pheptinh !== 0) {
            result = num1 / num2;
        } else {
            result = 'không thể chia cho 0';
        }
    }
    document.getElementById('result').innerText = 'Kết quả: ' + result;


}