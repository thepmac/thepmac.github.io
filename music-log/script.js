let database = {
    "entries": [{
            "entry": 5,
            "date": "2022-07-17 SUN",
            "title": "In Vitro - Volume One",
            "artist": "Claro Intelecto",
            "year": 2019,
            "type": "album, anthology",
            "cover": "https://f4.bcbits.com/img/a2487780159_10.jpg"
        },
        {
            "entry": 4,
            "date": "2022-07-17 SUN",
            "title": "[Las Vegas]",
            "artist": "Burger / Ink",
            "year": 1998,
            "type": "album",
            "cover": "https://www.electro-space.de/wp-content/uploads/2022/03/Burger-Ink-Las-Vegas.jpg"
        },
        {
            "entry": 3,
            "date": "2022-07-17 SUN",
            "title": "Connecting The Dots",
            "artist": "Michael Mayer",
            "year": 2021,
            "type": "album",
            "cover": "https://f4.bcbits.com/img/a0608671658_10.jpg"
        },
        {
            "entry": 2,
            "date": "2022-07-17 SUN",
            "title": "Spiro World",
            "artist": "Time Wharp",
            "year": 2022,
            "type": "album",
            "cover": "https://f4.bcbits.com/img/a1971162551_10.jpg"
        },
        {
            "entry": 1,
            "date": "2022-07-17 SUN",
            "title": "It’s Not Up To Us",
            "artist": "Byard Lancaster",
            "year": 2005,
            "type": "album",
            "cover": "https://i.scdn.co/image/ab67616d0000b27369adcd4ecbbc8251de04b93a"
        },
        {
            "entry": 0,
            "date": "2022-07-17 SUN",
            "title": "Freesummer",
            "artist": "CADEJO",
            "year": 2019,
            "type": "album",
            "cover": "https://i.scdn.co/image/ab67616d0000b2733908c01b7fba38c88d84bf51"
        }
    ]
}





function populateEntries() {

    document.getElementById("list").innerHTML += `<div class="entry" id="key"><div class="entryid">#</div><div class="cover">Cover</div><div class="title">Title</div><div class="artist">Artist</div><div class="year">Year</div><div class="type">Type</div><div class="date">Heard On</div></div>`

    for (let i = 0; i < database.entries.length; i++) {
        let count = i;

        document.getElementById("list").innerHTML += `<a href="https://www.youtube.com/results?search_query=${database.entries[i].title}+${database.entries[i].year}+${database.entries[i].type}+${database.entries[i].artist}+topic" target="_blank"><div class="entry" id="${database.entries[i].entry}"></div></a>`
            //document.getElementById("list").innerHTML += `<div class="entry" id="${database.entries[i].entry}"></div>`
        console.log("Populating Log with Entry # " + database.entries[i].entry)

        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="entryid">${database.entries[i].entry}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="cover"><img src="${database.entries[i].cover}" /></div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="title">${database.entries[i].title}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="artist">${database.entries[i].artist}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="year">${database.entries[i].year}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="type">${database.entries[i].type}</div>`
        document.getElementById(`${database.entries[i].entry}`).innerHTML += `<div class="date">${database.entries[i].date}</div>`
    }
}

populateEntries();