const players = require('./data/mockdata.json')
const fs = require('fs');



const toDelete = ["standings", "salaries", "schedule", "stats", "last5", "next5", "teamRatings"]

toDelete.forEach((key) => {
    delete players[key]
})



for (const entry of players.depthChart) {
    if (entry.players) {
        for (const player of entry.players) {
            if (player) {
                delete player.nationality
                delete player.team;
                delete player.unit
                delete player.pos
                delete player.min
                delete player.injury
                delete player.changeDate
                delete player.dxId
                delete player.ssId
                delete player.realgmId
                delete player.brefId
                delete player.cbrefId
                delete player.ebrefId
                delete player.birthDate
                delete player.draftYear
                delete player.fromYear
                delete player.toYear
                delete player.yearsPro
                delete player.height
                delete player.weight
                delete player.positionId
                delete player.highSchool
                delete player.highSchoolState
                delete player.dxCollegeI
                delete player.dxCollege
                delete player.homeTown
                delete player.homeState
                delete player.homeCountry
                delete player.nationality
                delete player.twitterHandle

            }
        }

    }
}

const cleanData = JSON.stringify(players, null, 2)
fs.writeFile('cleaner.json', cleanData, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('New JSON file saved successfully.');
});

// console.log(clean);