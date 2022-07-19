var num = window.location.pathname.split('/');
console.log(num);
num = num[3].slice(0, -5);
console.log("This is the page for entry #:", num);

function populateEntries() {

    document.getElementById("list").innerHTML += `<div class="entry" id="key"><div class="entryid">#</div><div class="cover">Cover</div><div class="title">Title</div><div class="artist">Artist</div><div class="year">Year</div><div class="type">Type</div><div class="date">Heard On</div><div class="links">Links</div></div>`

    let i = num - 1;

    document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
        //document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
    console.log("Populating Log with Entry # " + database.entries[i].entry)

    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="entryid">${database.entries[i].entry}</div>`
    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="cover"><img src="${database.entries[i].cover}" /></div>`
    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="title">${database.entries[i].title}</div>`
    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="artist"><a href="../artist/index.html?artist=${database.entries[i].artist}">${database.entries[i].artist}</a></div>`
    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="year"><a href="../year/index.html?year=${database.entries[i].year}">${database.entries[i].year}</a></div>`
    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="type"><a href="../type/index.html?type=${database.entries[i].type}">${database.entries[i].type}</a></div>`
    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="date"><a href="../date/index.html?year=${database.entries[i].date[0]}">${database.entries[i].date[0]}</a>-<a href="../date/index.html?year=${database.entries[i].date[0]}&month=${database.entries[i].date[1]}">${database.entries[i].date[1]}</a>-<a href="../date/index.html?year=${database.entries[i].date[0]}&month=${database.entries[i].date[1]}&day=${database.entries[i].date[2]}">${database.entries[i].date[2]}</a></div>`
    document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="links"><a href="https://www.youtube.com/results?search_query=${database.entries[i].title}+${database.entries[i].year}+${database.entries[i].type}+${database.entries[i].artist}+topic" target="_blank">YT</a>, <a href="https://www.discogs.com/search/?q=${database.entries[i].title}+${database.entries[i].year}+${database.entries[i].artist}&type=all" target="_blank">D</a></div>`
}

populateEntries();