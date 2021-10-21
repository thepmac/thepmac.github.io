function generateAll() {
    let blockId1;
    let apiData1;
    let apiUrl1;

    function generateId1() {
        blockId1 = Math.floor(Math.random() * 13651038);
    }

    generateId1();
    console.log(blockId1)

    function getBlock1() {
        apiData1 = {
            url: 'https://api.are.na/v2/blocks',
            id: blockId1
        }
        console.log(apiData1)

        apiUrl1 = `${apiData1.url}/${apiData1.id}/`
        console.log(apiUrl1)

        fetch(apiUrl1)
            .then((data1) => data1.json())
            .then((bgimg1) => generate1(bgimg1))
    }
    getBlock1();

    const generate1 = (data1) => {
        if (data1.class == "Image") {
            console.log(data1)
            const img1 = `
            <a href="https://www.are.na/block/${data1.id}/" target="_blank"><img src="${data1.image.original.url}" alt="${data1.title}" /></a>
    `
            const div1 = document.querySelector('#left-img').innerHTML = img1
        } else {
            blockId1 = Math.floor(Math.random() * 13651038)
            getBlock1(blockId1)
        }
    }

    let blockId2;
    let apiData2;
    let apiUrl2;

    function generateId2() {
        blockId2 = Math.floor(Math.random() * 23644925);
    }

    generateId2();
    console.log(blockId2)

    function getBlock2() {
        apiData2 = {
            url: 'https://api.are.na/v2/blocks',
            id: blockId2
        }
        console.log(apiData2)

        apiUrl2 = `${apiData2.url}/${apiData2.id}/`
        console.log(apiUrl2)

        fetch(apiUrl2)
            .then((data2) => data2.json())
            .then((bgimg2) => generate2(bgimg2))
    }
    getBlock2();

    const generate2 = (data2) => {
        if (data2.class == "Image") {
            console.log(data2)
            const img2 = `
        <a href="https://www.are.na/block/${data2.id}/" target="_blank"><img src="${data2.image.original.url}" alt="${data2.title}" /></a>
    `
            const div2 = document.querySelector('#right-img').innerHTML = img2
        } else {
            blockId2 = Math.floor(Math.random() * 23644925)
            getBlock2(blockId2)
        }
    }
}
generateAll();