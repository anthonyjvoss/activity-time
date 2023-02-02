// TODO: replace with actual data in a database

const activityData = {
    'Independent': {
        msg: 'Activities that I can do by myself.',
        activities: [
            {
                id: 1,
                name: 'Read a book'
            },
            {
                id: 2,
                name: 'Sort Pokemon cards'
            },
            {
                id: 3,
                name: 'Draw a picture'
            }
        ]
    },
    'Guided': {
        msg: 'Activites that I can do with someone.',
        activities: [
            {
                id: 1,
                name: 'Play a game'
            },
            {
                id: 2,
                name: 'Build a puzzle'
            },
            {
                id: 3,
                name: 'Swim in the pool'
            }
        ]
    },
    'Parent Night' : {
        msg: 'Activities that I can do on parent night.',
        activities: [
            {
                id: 1,
                name: 'Bowling'
            },
            {
                id: 2,
                name: 'Movie night'
            },
            {
                id: 3,
                name: 'Trampoline park'
            },
            {
                id: 4,
                name: 'Rollerblade at the park'
            }
        ]
    }
}

function getActivityData (activityType) {
    console.log(`Get activity data for ${activityType}`)
    return activityData[activityType]
}

export default {
    getActivityData
}
