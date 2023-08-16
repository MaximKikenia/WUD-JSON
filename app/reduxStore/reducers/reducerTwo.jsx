const defaultState = {
    customers: ["Тайтл отсутствует"]
};

const ADD_CASH_MORE = "ADD_CASH_MORE";
const GET_CASH_LESS = "GET_CASH_LESS";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

//Reducer 2
const ReducerTwo = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_MANY_CUSTOMERS":
            return {...state, customers: [action.payload]}
        case ADD_CASH_MORE:
            return {...state, cash: state.cash + action.payload}
        case GET_CASH_LESS:
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    };
};

export {ReducerTwo};