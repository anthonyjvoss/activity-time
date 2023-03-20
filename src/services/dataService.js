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
                tags: ['quiet']
            },
            {
                id: 3,
                name: 'Draw a picture',
                tags: ['quiet']
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
                tags: ['creative', 'educational']
            },
            {
                id: 2,
                name: 'Build a puzzle',
                tags: ['creative']
            },
            {
                id: 3,
                name: 'Swim in the pool',
                tags: ['motion']
            }
        ]
    },
    'Parent Night' : {
        msg: 'Activities that I can do on parent night.',
        activities: [
            {
                id: 1,
                name: 'Bowling',
                tags: ['motion']
            },
            {
                id: 2,
                name: 'Movie night',
                tags: ['relaxing']
            },
            {
                id: 3,
                name: 'Trampoline park',
                tags: ['motion']
            },
            {
                id: 4,
                name: 'Rollerblade at the park',
                tags: ['motion', 'outside']
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
