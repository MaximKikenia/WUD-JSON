//Default State for reducerOne
const defaultState = {
    cash: 1,
};

const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

//Reducer 1
const ReducerOne = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}
        case GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    };
};

export {ReducerOne};