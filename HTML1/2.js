function verify() {
    console.log("year")
    let year = parseInt(elementA.value);
    console.log(year)

    let vek, type
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) { type = "Високосный"  }
    else { type = "Не високосный"}
    check = true
    vek = Math.ceil(year / 100)
    result = type
    result0 = vek
    document.getElementById("result").value = result;
    document.getElementById("result0").value = result0;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let result;
let result0;
let check;

const elementA = document.getElementById("year");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
