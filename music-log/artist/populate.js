console.log("Window Location:", window.location);

var myKeysValues = window.location.search;
console.log("Keys & Values:", myKeysValues);

var urlParams = new URLSearchParams(myKeysValues);

var param1 = urlParams.get('artist');

console.log("Artist: ", param1);

function populateEntries() {

    document.getElementById("list").innerHTML += `<div class="entry" id="key"><div class="entryid">#</div><div class="cover">Cover</div><div class="title">Title</div><div class="artist">Artist</div><div class="year">Year</div><div class="type">Type</div><div class="date">Heard On</div><div class="yt">YT</div></div>`

    for (let i = 0; i < database.entries.length; i++) {
        let count = i;

        if (param1 == database.entries[i].artist) {
            document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
                //document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
            console.log("Populating Log with Entry # " + database.entries[i].entry)

            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="entryid">${database.entries[i].entry}</div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="cover"><img src="${database.entries[i].cover}" /></div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="title">${database.entries[i].title}</div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="artist"><a href="../artist/index.html?artist=${database.entries[i].artist}">${database.entries[i].artist}</div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="year"><a href="../year/index.html?year=${database.entries[i].year}">${database.entries[i].year}</div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="type"><a href="../type/index.html?type=${database.entries[i].type}">${database.entries[i].type}</div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="date"><a href="../date/index.html?date=${database.entries[i].date}">${database.entries[i].date}</div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="yt"><a href="https://www.youtube.com/results?search_query=${database.entries[i].title}+${database.entries[i].year}+${database.entries[i].type}+${database.entries[i].artist}+topic" target="_blank">YT</a></div>`
        } else {}
    }
}

populateEntries();