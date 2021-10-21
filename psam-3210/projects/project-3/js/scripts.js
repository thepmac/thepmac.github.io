// As of 12:16:38 AM on Thursday, Oct 21, 2021, the count of total blocks creaetd is "13652740".
// I have set the random number cap at 14000000 to allow for any new blocks in the near future.

var log = document.getElementById("console-log")
console.log = (function (method, log) {
    return function (text) {
        method(text);
        let msg = document.createElement('div');
        msg.textContent = text;
        log.appendChild(msg);
    };
})(console.log.bind(console), log);

function timeout() {
    document.querySelector('#button1').style.opacity = ".2";
    document.querySelector('#button1').setAttribute("onclick", "");
    document.querySelector('#button1').setAttribute("onmouseover", "this.style.cursor='auto'");
    document.querySelector('#button2').style.opacity = ".2"
    document.querySelector('#button2').setAttribute("onclick", "");
    document.querySelector('#button2').setAttribute("onmouseover", "this.style.cursor='auto'");
    document.querySelector('#button3').style.opacity = ".2";
    document.querySelector('#button3').setAttribute("onclick", "");
    document.querySelector('#button3').setAttribute("onmouseover", "this.style.cursor='auto'");

    setTimeout(function () { document.querySelector('#button1').style.opacity = "1" }, 8000);
    setTimeout(function () { document.querySelector('#button1').setAttribute("onclick", "generateAll(); timeout();")}, 8000);
    setTimeout(function () { document.querySelector('#button1').setAttribute("onmouseover", "this.style.cursor='pointer'")}, 8000);
    setTimeout(function () { document.querySelector('#button2').style.opacity = "1" }, 8000);
    setTimeout(function () { document.querySelector('#button2').setAttribute("onclick", "generate1(); timeout();")}, 8000);
    setTimeout(function () { document.querySelector('#button2').setAttribute("onmouseover", "this.style.cursor='pointer'")}, 8000);
    setTimeout(function () { document.querySelector('#button3').style.opacity = "1" }, 8000);
    setTimeout(function () { document.querySelector('#button3').setAttribute("onclick", "generate2(); timeout();")}, 8000);
    setTimeout(function () { document.querySelector('#button3').setAttribute("onmouseover", "this.style.cursor='pointer'")}, 8000);
}


function generate1() {
    let blockId1;
    let apiData1;
    let apiUrl1;

    function generateId1() {
        blockId1 = Math.floor(Math.random() * 14000000);
    }

    generateId1();

    function getBlock1() {
        apiData1 = {
            url: 'https://api.are.na/v2/blocks',
            id: blockId1
        }
        console.log(blockId1)

        apiUrl1 = `${apiData1.url}/${apiData1.id}/`
        console.log(apiUrl1)

        fetch(apiUrl1)
            .then((data1) => data1.json())
            .then((bgimg1) => generate1(bgimg1))
    }
    getBlock1();

    const generate1 = (data1) => {
        if (data1.class == "Image") {
            console.log(JSON.stringify(data1))
            const img1 = `
            <a href="https://www.are.na/block/${data1.id}/" target="_blank"><img src="${data1.image.original.url}" alt="${data1.title}" /></a>
    `
            const div1 = document.querySelector('#left-img').innerHTML = img1
        } else {
            blockId1 = Math.floor(Math.random() * 14000000)
            getBlock1(blockId1)
        }
    }
    console.log(generate1)
}
generate1();

function generate2() {
    let blockId2;
    let apiData2;
    let apiUrl2;

    function generateId2() {
        blockId2 = Math.floor(Math.random() * 14000000);
    }

    generateId2()

    function getBlock2() {
        apiData2 = {
            url: 'https://api.are.na/v2/blocks',
            id: blockId2
        }
        console.log(blockId2)

        apiUrl2 = `${apiData2.url}/${apiData2.id}/`
        console.log(apiUrl2)

        fetch(apiUrl2)
            .then((data2) => data2.json())
            .then((bgimg2) => generate2(bgimg2))
            
    }
    getBlock2();

    const generate2 = (data2) => {
        if (data2.class == "Image") {
            console.log(JSON.stringify(data2))
            const img2 = `
        <a href="https://www.are.na/block/${data2.id}/" target="_blank"><img src="${data2.image.original.url}" alt="${data2.title}" /></a>
    `
            const div2 = document.querySelector('#right-img').innerHTML = img2
        } else {
            blockId2 = Math.floor(Math.random() * 14000000)
            getBlock2(blockId2)
        }
    }
    console.log(generate2)
}
generate2();

function generateAll() {
    generate1();
    generate2();
}