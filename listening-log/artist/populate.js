console.log("Window Location:", window.location);

var myKeysValues = window.location.search;
console.log("Keys & Values:", myKeysValues);

var urlParams = new URLSearchParams(myKeysValues);

var param1 = urlParams.get('artist');

console.log("Artist: ", param1);

function populateEntries() {

    document.getElementById("list").innerHTML += `<div class="entry" id="key"><div class="entryid">#</div><div class="cover">Cover</div><div class="title">Title</div><div class="artist">Artist</div><div class="year">Year</div><div class="type">Type</div><div class="date">Heard On</div><div class="links">Links</div></div>`

    for (let i = 0; i < database.entries.length; i++) {
        let count = i;

        if (param1 == database.entries[i].artist) {
            document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
                //document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
            console.log("Populating Log with Entry # " + database.entries[i].entry)

            if (database.entries[i].page == false) {
                document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="entryid">${database.entries[i].entry}</div>`
            } else {
                document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="entryid"><a class="entryurl" href="../entry/${database.entries[i].entry}.html">${database.entries[i].entry}</a></div>`
            }
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="cover"><img src="${database.entries[i].cover}" /></div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="title">${database.entries[i].title}</div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="artist"><a href="../artist/index.html?artist=${database.entries[i].artist}"><em>${database.entries[i].artist}</em></a></div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="year"><a href="../year/index.html?year=${database.entries[i].year}">${database.entries[i].year}</a></div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="type"><a href="../type/index.html?type=${database.entries[i].type}">${database.entries[i].type}</a></div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="date"><a href="../date/index.html?year=${database.entries[i].date[0]}">${database.entries[i].date[0]}</a>-<a href="../date/index.html?year=${database.entries[i].date[0]}&month=${database.entries[i].date[1]}">${database.entries[i].date[1]}</a>-<a href="../date/index.html?year=${database.entries[i].date[0]}&month=${database.entries[i].date[1]}&day=${database.entries[i].date[2]}">${database.entries[i].date[2]}</a></div>`
            document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="links"><a href="https://www.youtube.com/results?search_query=${database.entries[i].title}+${database.entries[i].year}+${database.entries[i].type}+${database.entries[i].artist}+topic" target="_blank">YT</a>, <a href="https://www.discogs.com/search/?q=${database.entries[i].title}+${database.entries[i].year}+${database.entries[i].artist}&type=all" target="_blank">D</a></div>`
        } else {}
    }
}

populateEntries();