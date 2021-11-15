export const ADD_NEW_TASK = 'ADD_NEW_TASK'

let initialState = {
    tasks: [
        // {
        //     id: 1,
        //     created: '11.12.2021',
        //     deadline: '15.11.2021',
        //     cardTitle: 'TEST',
        //     cardText: 'я же сказал тест',
        //     isComplete: false,
        // },
        // {
        //     id: 2,
        //     created: '11.12.2021',
        //     deadline: '15.11.2021',
        //     cardTitle: 'TEST',
        //     cardText: 'я же сказал тест',
        //     isComplete: false,
        // },
        // {
        //     id: 3,
        //     created: '11.12.2021',
        //     deadline: '15.11.2021',
        //     cardTitle: 'TEST',
        //     cardText: 'я же сказал тест',
        //     isComplete: false,
        // },
    ]
}

export default function taskManagerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_TASK:

            let newTask = {
                id: Date.now(),
                created: action.created,
                deadline: action.deadline,
                cardTitle: action.cardTitle,
                cardText: action.cardText,
                isComplete: false,
            }

            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }


        default:
            return state
    }
}

export const addNewTask = (deadline, title, text) => {
    return {
        type: ADD_NEW_TASK,
        created: Date.now(),
        deadline: deadline,
        cardTitle: title,
        cardText: text,
    }
}