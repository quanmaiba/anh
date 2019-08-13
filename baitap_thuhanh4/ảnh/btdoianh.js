let img1 = document.getElementById("cat11");
let img2 = document.getElementById("cat22");
let img3 = document.getElementById("cat33");
let img4 = document.getElementById("cat44");
let img5 = document.getElementById("cat55");

function changeImg1() {
    let anh = Math.floor((Math.random() * 3) + 1);
    img1.src = document.getElementById("cat11");
    switch (anh) {
        case 1:
            img1.src = 'cat-1.jpg';
            img1.alt = 'cat1';
            break;
        case 2:
            img1.src = 'panda-1.jpg';
            img1.alt = 'panda1';
            break;
        case 3:
            img1.src = 'monkey-1.jpg';
            img1.alt = 'monkey1';
            break;
    }
    if (checkWin()) alert('that right');
}



function changeImg2() {
    let anh = Math.floor((Math.random() * 3) + 1);
    img2.src = document.getElementById("cat22");
    switch (anh) {
        case 1:
            img2.src = 'cat-2.jpg';
            img2.alt = 'cat2';
            break;
        case 2:
            img2.src = 'panda-2.jpg';
            img2.alt = 'panda2';
            break;
        case 3:
            img2.src = 'monkey-2.jpg';
            img2.alt = 'monkey2';
            break;
    }
    if (checkWin()) alert('that right');
}



function changeImg3() {
    let anh = Math.floor((Math.random() * 3) + 1);
    img3.src = document.getElementById("cat33");
    switch (anh) {
        case 1:
            img3.src = 'cat-3.jpg';
            img3.alt = 'cat3';
            break;
        case 2:
            img3.src = 'panda-3.jpg';
            img3.alt = 'panda3';
            break;
        case 3:
            img3.src = 'monkey-3.jpg';
            img3.alt = 'monkey3';
            break;
    }
    if (checkWin()) alert('that right');

}


function changeImg4() {
    let anh = Math.floor((Math.random() * 3) + 1);
    img4.src = document.getElementById("cat44");
    switch (anh) {
        case 1:
            img4.src = 'cat-4.jpg';
            img4.alt = 'cat4';
            break;
        case 2:
            img4.src = 'panda-4.jpg';
            img4.alt = 'panda4';
            break;
        case 3:
            img4.src = 'monkey-4.jpg';
            img4.alt = 'monkey4';
            break;
    }
    if (checkWin()) alert('that right');

}


function changeImg5() {
    let anh = Math.floor((Math.random() * 3) + 1);
    img5.src = document.getElementById("cat55");
    switch (anh) {
        case 1:
            img5.src = 'cat-5.jpg';
            img5.alt = 'cat5';
            break;
        case 2:
            img5.src = 'panda-5.jpg';
            img5.alt = 'panda5';
            break;
        case 3:
            img5.src = 'monkey-5.jpg';
            img5.alt = 'monkey5';
            break;
    }
    if (checkWin()) alert('that right');
}

function checkWin() {
    return img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'cat1cat2cat3cat4cat5' ||
        img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'panda1panda2panda3panda4panda5' ||
        img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'monkey1monkey2monkey3monkey4monkey5'
}