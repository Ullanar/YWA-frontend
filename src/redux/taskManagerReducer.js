let initialState = {
    tasks: [
        {
            id: '1',
            created: '11.12.2021',
            deadline: '15.11.2021',
            cardTitle: 'TEST',
            cardText: 'я же сказал тест',
            isComplete: false,
        },
        {
            id: '2',
            created: '11.12.2021',
            deadline: '15.11.2021',
            cardTitle: 'TEST',
            cardText: 'я же сказал тест',
            isComplete: false,
        },
        {
            id: '3',
            created: '11.12.2021',
            deadline: '15.11.2021',
            cardTitle: 'TEST',
            cardText: 'я же сказал тест',
            isComplete: false,
        },
    ]
}

export default function taskManagerReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}