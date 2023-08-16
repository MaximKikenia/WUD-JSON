import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function CountryShortSummery() {

    const selectedCountryFromList = useSelector(state => state.ReducerUniversityList.selectCountry);
    const alphaCode = useSelector(state => state.ReducerUniversityList.alphaCodeTwo);
    const infoAboutCountry = useSelector(state => state.ReducerUniversityList.infoAboutCountry);
    const dispatch = useDispatch();

    //Flag Link
    //API website: https://countryflagsapi.netlify.app/#how-to-use
    const flagCode = useSelector(state => state.ReducerUniversityList.alphaCodeTwo);
    let flagLink = "https://countryflagsapi.netlify.app/flag/" + flagCode + ".svg";


    //Load country details

    //API key: 3mnHEXlSKKwKbuARj8W3kg==EoDWEorplf8Vo31p
    //API website: https://api-ninjas.com/api/country

    const countryDetails = async function () {
        let link = "https://api.api-ninjas.com/v1/country?name=" + selectedCountryFromList;
        let headersDetails = {
            method: 'GET',
            headers: { 'X-Api-Key': '3mnHEXlSKKwKbuARj8W3kg==EoDWEorplf8Vo31p' },
            contentType: 'application/json'
        };

        let detailsOfCountry = await fetch(link, headersDetails);

        if (detailsOfCountry.ok === true) {
            const dataCountry = await detailsOfCountry.json();
            dispatch({ type: "INFO_ABOUT_COUNTRY", countryInfo: dataCountry[0] });
        }
    };

    infoAboutCountry === null ? countryDetails() : false;

    const loadFunc = function () {
        if (alphaCode && infoAboutCountry) return false
        else if (alphaCode || infoAboutCountry) return "Loading ..."
    }

    return (
        <div>
            <div className="shortSummeryContainer">
                {flagCode ? <img className="flagPic" src={flagLink} /> : null}
                <h3> {selectedCountryFromList}</h3>
                <p>{loadFunc()}</p>
                {infoAboutCountry ? <ul className="detailsOfCountry">
                    {infoAboutCountry ? <li><b>Capital:</b> {infoAboutCountry.capital}</li> : false}
                    {infoAboutCountry ? <li><b>Currency name and code:</b> {infoAboutCountry.currency.name} ({infoAboutCountry.currency.code})</li> : false}
                </ul> : false
                }
            </div>
        </div>
    );
}

export { CountryShortSummery };

