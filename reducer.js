const initialState = []

function reducer(state, action){
    if (action.type === 'ADD_NAME') {
        return [...state, action.payload]
    }
    if (action.type === 'DELETE_NAME') {
        return state.filter(name => name !== action.payload)
    }
    if (action.type === 'RESET') {
        return []
    }
    return state
}

let newState = reducer(initialState, {type: 'ADD_NAME', payload: 'Hi das funktioniert'})

console.log(newState)

newState = reducer(newState, {type: 'ADD_NAME', payload: 'Hi Dima'})
console.log(newState)

newState = reducer(newState, {type: 'DELETE_NAME', payload: 'Test'})
console.log(newState)

newState = reducer(newState, {type: 'RESET'})
console.log(newState)

newState = reducer(initialState, {type: 'ADD_NAME', payload: 'Ahaaa'})
console.log(newState)