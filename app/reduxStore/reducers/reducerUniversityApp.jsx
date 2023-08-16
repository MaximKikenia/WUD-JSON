const defaultState = {
    uniStoreData: null,
    selectCountry: "Select a country from the list or use the search.",
    alphaCodeTwo: null,
    infoAboutCountry: null
};

//Reducer of University List
const ReducerUniversityList = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_UNI":
            return {...state, uniStoreData: action.uniList}
        case "SELECT_COUNTRY":
            return {...state, selectCountry: action.selectedCountry, alphaCodeTwo: action.alphaCode}
        case "INFO_ABOUT_COUNTRY":
            return {...state, infoAboutCountry: action.countryInfo}
        default:
            return state
    };
};

export {ReducerUniversityList};