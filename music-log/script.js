let database = {
    "entries": [{
            "entryid": 1,
            "date": "SUN 2022-07-17",
            "title": "It’s Not Up To Us",
            "artist": "Byard Lancaster",
            "year": 2005,
            "type": "album",
            "rating": null,
            "cover-art": null
        },
        {
            "entryid": 0,
            "date": "SUN 2022-07-17",
            "title": "Freesummer",
            "artist": "CADEJO",
            "year": 2019,
            "type": "album",
            "rating": null,
            "cover-art": null
        }
    ]
}

function populateEntries() {

    for (let i = 0; i < database.entries.length; i++) {
        let entrycount = i;
        document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries.[i].entryid}"></div>`
        document.getElementById(`${database.entries.[i]}`).innerHTML += `<div class="title">${database.entries.[i].title}</div>`
    }
}

populateEntries();