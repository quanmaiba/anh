class Mobile {
    show() {
        this.type = type;
        this.batterry = 5;
        this.type = type;
        this.draftMsg = [];
        this.receiveMsg = [];
        this.sendedMsg = [];
        this.status = true;
    }
}

function senMes() {
    document.getElementById("senMesip").style.display = "block";

};

function deActive(type) {
    for (let i of type) {
        i.style.display = "none";
    }
};