function verify() {
    console.log("year")
    let year = parseInt(elementA.value);
    console.log(year)

    let vek, type
    if ((year / 4) == 0) { type = "Високосный"  }
    else { type = "Не високосный"}
    check = true
    vek = year/100
    result = type,vek
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

let result;
let check;

const elementA = document.getElementById("year");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
