import { countriesList } from "./countriesList.jsx";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";


function Controller() {

    const ListCountries = countriesList.map((item, index) => <li key={item.code} id={item.code} onClick={(e) => selectCountryFunc(e)}>{item.name}</li>);
    const [countries, setCountries] = React.useState(ListCountries);

    const dispatch = useDispatch();

    const selectCountryFunc = function (e) {
        const countrySelected = e.target.innerHTML;
        const alphaTwoCode = e.target.id;

        let forStoreCountryAction = { type: "SELECT_COUNTRY", selectedCountry: countrySelected, alphaCode: alphaTwoCode };
        // let clearPrevStoreUni = { type: "ADD_UNI", uniList: null };
        let clearInfoDetailsCountry = { type: "INFO_ABOUT_COUNTRY", countryInfo: null };
        dispatch(forStoreCountryAction);
        // dispatch(clearPrevStoreUni);
        dispatch(clearInfoDetailsCountry);
    };

    //Search Country in List of Countries

    const countryListBlock = useRef(null);

    const searchCountry = function (event) {
        setCountries(ListCountries);
        const valueInput = event.target.value;

        if (!valueInput) return false;

        let resultWord = valueInput[0].toUpperCase() + valueInput.slice(1);
        let list = countriesList.filter((data) => data.name.includes(resultWord));
        let finalList = list.map((item, index) => <li key={index} id={item.code} onClick={(e) => selectCountryFunc(e)}>{item.name}</li>);
        setCountries(finalList);
    };

    return (
        <div>
            <div className="controllerContainer">
                <h3>Search: &#127758; </h3>
                <div className="inputWrapper">
                    <input placeholder="Enter country name" className="searchField" onChange={(event) => searchCountry(event)} type="text" />
                </div>
                <div className="countriesWrapper">
                    <h3>&#129488; List of countries: {countries.length}</h3>
                    <div className="countryListWrapper">
                        <ul className="countriesList" ref={countryListBlock}>{countries}</ul>
                    </div>
                </div>
                {name}
            </div>
        </div>
    );
};

export { Controller };