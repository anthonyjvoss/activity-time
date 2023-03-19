// TODO: replace with actual data in a database

const activityData = {
    'Independent': {
        msg: 'Activities that I can do by myself.',
        activities: [
            {
                id: 1,
                name: 'Read a book',
                tags: ['quiet', 'educational']
            },
            {
                id: 2,
                name: 'Sort Pokemon cards',
                tags: []
            },
            {
                id: 3,
                name: 'Draw a picture',
                tags: []
            },
            {
              id: 4,
              name: 'Play the piano',
              tags: ['loud', 'creative']
            },
            {
              id: 3,
              name: 'Play the keyboard',
              tags: ['quiet', 'creative']
            }

        ]
    },
    'Guided': {
        msg: 'Activites that I can do with someone.',
        activities: [
            {
                id: 1,
                name: 'Play a game',
                tags: []
            },
            {
                id: 2,
                name: 'Build a puzzle',
                tags: []
            },
            {
                id: 3,
                name: 'Swim in the pool',
                tags: []
            }
        ]
    },
    'Parent Night' : {
        msg: 'Activities that I can do on parent night.',
        activities: [
            {
                id: 1,
                name: 'Bowling',
                tags: []
            },
            {
                id: 2,
                name: 'Movie night',
                tags: []
            },
            {
                id: 3,
                name: 'Trampoline park',
                tags: []
            },
            {
                id: 4,
                name: 'Rollerblade at the park',
                tags: []
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
