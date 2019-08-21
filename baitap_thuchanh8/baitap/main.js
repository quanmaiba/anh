class Mobile {
    constructor(type) {
        this.batterry = 5;
        this.type = type;
        this.draftMsg = [];
        this.receiveMsg = [];
        this.sendedMsg = [];
        this.status = true;
    }

    draftMess(msg) {
        this.draftMsg.push(msg);
    }

    sendedMess(msg) {
        this.sendedMsg.push(msg);
    }

    receiveMess(msg) {
        this.receiveMsg.push(msg);
    }

    checkStatus() {
        if (this.status == true) {
            alert(this.type + " is now On, Battery is : " + this.batterry);
        } else {
            alert(this.type + " is now Off, Battery is : " + this.batterry);
        }
    }

    changeStatus() {
        if (this.status == true) {
            this.status = false;
            return "turn off";
        } else if (this.status == false) {
            this.status = true;
            return "turn on";
        } else {
            return "sumthing errors";
        }
    }
    charge() {
        alert(this.type + " is charging");
        this.batterry = 100;
        setTimeout(function() {
            alert("batterry full");
        }, 5000);
    }

    decreaseBattery() {
        return (this.batterry -= 1);
    }
}

var iphone = new Mobile("iphone");
var nokia = new Mobile("nokia");
console.log(nokia.type);

function active(type) {
    for (let i of type) {
        i.style.display = "initial";
    }
}

function deActive(type) {
    for (let i of type) {
        i.style.display = "none";
    }
}

var btnIP = document.getElementsByClassName("content-btnIP");
var btnNK = document.getElementsByClassName("content-btnNK");

function charging(string) {
    if (string == "iphone") {
        iphone.charge();
    }
    if (string == "nokia") {
        nokia.charge();
    }
}

function changeStatut(string) {
    if (string == "iphone") {
        iphone.changeStatus();
        if (iphone.status == false) {
            deActive(btnIP);
            iphone.checkStatus();
        } else {
            active(btnIP);
        }
    }

    if (string == "nokia") {
        nokia.changeStatus();
        if (nokia.status == false) {
            deActive(btnNK);
            nokia.checkStatus();
        } else {
            active(btnNK);
        }
    }
}

function checkStatut(string) {
    //done
    if (string == "iphone") {
        iphone.checkStatus();
        checkBatterry(string);
    }
    if (string == "nokia") {
        nokia.checkStatus();
        checkBatterry(string);
    }
}

function sendMsg(string) {
    // done
    if (string == "iphone") {
        deActive(btnIP);
        document.getElementById("prepareSendMsgIP").style.display = "block";
        document.getElementById("typingMsgonIP").value = "";
    }
    if (string == "nokia") {
        deActive(btnNK);
        document.getElementById("prepareSendMsgNK").style.display = "block";
        document.getElementById("typingMsgonNK").value = "";
    }
}

var textareaOfIP;
var textareaOfNK;

function getValueofTextarea(string) {
    //done
    if (string == "iphone") {
        textareaOfIP = document.getElementById("typingMsgonIP").value;
    }
    if (string == "nokia") {
        textareaOfNK = document.getElementById("typingMsgonNK").value;
    }
}

function saveIntoDraft(string) {
    //done
    if (string == "iphone") {
        iphone.draftMess(textareaOfIP);
        active(btnIP);
        document.getElementById("prepareSendMsgIP").style.display = "none";
        checkBatterry(string);
    }
    if (string == "nokia") {
        nokia.draftMess(textareaOfNK);
        active(btnNK);
        document.getElementById("prepareSendMsgNK").style.display = "none";
        checkBatterry(string);
    }
}

function sendMess(string) {
    //done
    if (string == "iphone") {
        nokia.receiveMess(textareaOfIP);
        iphone.sendedMess(textareaOfIP);
        document.getElementById("prepareSendMsgIP").style.display = "none";
        alert("sending success");
        active(btnIP);
        checkBatterry(string);
    }

    if (string == "nokia") {
        iphone.receiveMess(textareaOfNK);
        nokia.sendedMess(textareaOfNK);
        document.getElementById("prepareSendMsgNK").style.display = "none";
        alert("sending success");
        active(btnNK);
        checkBatterry(string);
    }
}
var data = "";

function showReceiveMsg(string) {
    //done
    if (string == "iphone") {
        deActive(btnIP);
        document.getElementById("tableIP").style.display = "block";
        for (let i of iphone.receiveMsg) {
            data += `<tr><td>${i}</td></tr>`;
        }
        data += `<button onclick="hideTable('iphone')">back</button>`;
        document.getElementById("tableIP").innerHTML = data;
        data = "";
    }

    if (string == "nokia") {
        checkBatterry(string);
        deActive(btnNK);
        document.getElementById("tableNK").style.display = "block";
        for (let i of nokia.receiveMsg) {
            data += `<tr><td>${i}</td></tr>`;
        }
        data += `<button onclick="hideTable('nokia')">back</button>`;
        document.getElementById("tableNK").innerHTML = data;
        data = "";
    }
}

function hideTable(string) {
    //done
    if (string == "iphone") {
        document.getElementById("tableIP").style.display = "none";
        active(btnIP);
        checkBatterry(string);
    }
    if (string == "nokia") {
        document.getElementById("tableNK").style.display = "none";
        active(btnNK);
        checkBatterry(string);
    }
}

function checkSended(string) {
    if (string == "iphone") {
        checkBatterry(string);
        deActive(btnIP);
        document.getElementById("tableIP").style.display = "block";
        for (let i of iphone.sendedMsg) {
            data += `<tr><td>${i}</td></tr>`;
        }
        data += `<button onclick="hideTable('iphone')">back</button>`;
        document.getElementById("tableIP").innerHTML = data;
        data = "";
    }

    if (string == "nokia") {
        checkBatterry(string);
        deActive(btnNK);
        document.getElementById("tableNK").style.display = "block";
        for (let i of nokia.sendedMsg) {
            data += `<tr><td>${i}</td></tr>`;
        }
        data += `<button onclick="hideTable('nokia')">back</button>`;
        document.getElementById("tableNK").innerHTML = data;
        data = "";
    }
}
var btry = null;

function checkBatterry(string) {
    if (string == "iphone") {
        btry = iphone.decreaseBattery();
        console.log(btry);
        if (btry <= 0) {
            deActive(btnIP);
            alert("battery is Dead");
        }
    }

    if (string == "nokia") {
        btry = nokia.decreaseBattery();
        console.log(btry);
        if (btry <= 0) {
            deActive(btnNK);
            alert("battery is Dead");
        }
    }
}