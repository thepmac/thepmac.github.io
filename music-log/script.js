let database = {
    "entries": [{
            "entry": 2,
            "date": "SUN 2022-07-17",
            "title": "Freesummer",
            "artist": "CADEJO",
            "year": 2019,
            "type": "album",
            "rating": null,
            "cover": null
        },
        {
            "entry": 1,
            "date": "SUN 2022-07-17",
            "title": "It’s Not Up To Us",
            "artist": "Byard Lancaster",
            "year": 2005,
            "type": "album",
            "rating": null,
            "cover": null
        },
        {
            "entry": 0,
            "date": "SUN 2022-07-17",
            "title": "Freesummer",
            "artist": "CADEJO",
            "year": 2019,
            "type": "album",
            "rating": null,
            "cover": null
        }
    ]
}

function populateEntries() {

    for (let i = 0; i < database.entries.length; i++) {
        let count = i;
        console.log("Count: " + count)

        document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
        console.log("Creating DIV for Entry # " + database.entries[i].entry)

        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="entryid">${database.entries[i].entry}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="cover">${database.entries[i].cover}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="title">${database.entries[i].title}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="artist">${database.entries[i].artist}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="year">${database.entries[i].year}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="type">${database.entries[i].type}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="rating">${database.entries[i].rating}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="date">${database.entries[i].date}</div>`
    }
}

populateEntries();



/*
function createEntry() {
    document.getElementById("list").innerHTML += `<a href="#">Link to This Page</a><br>`
}

createEntry();
*/