import React, { useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { allUniversities } from "./world_universities_and_domains.jsx";

function ResultComponent() {

    const dispatch = useDispatch();
    const selectedCountryFromList = useSelector(state => state.ReducerUniversityList.selectCountry);
    const updatedAlphaCode = useSelector(state => state.ReducerUniversityList.alphaCodeTwo);

    //Draw universities with websites functions

    const findUniversity = function () {
        if (!updatedAlphaCode) return false;

        const searchUni = allUniversities.filter((item, index) => item.alpha_two_code === updatedAlphaCode);
        const renderUni = searchUni.map((item, index) =>
            <ul key={index}>
                <li key={item.name}>{item.name}</li>
                <li key={item.alpha_two_code}><a target="_blank" href={"http://www." + item.domains[0]}>{item.domains[0]}</a></li>
            </ul>);
            
            return renderUni;
    };

    const uniResult = findUniversity();
    const showHideDesc = uniResult != 0 && uniResult != undefined;
    const uniTotal = () => {
        if (uniResult.length != 0) return "Total number of universities: " + uniResult.length;
        else return "Universities were not found in the database. Try another country."
    }

    return (
        <div className={uniResult ? "resultContainer" : ""}>
            {uniResult ? <h3>{uniTotal()}</h3> : false}
            <ul className={uniResult.length ? "allUniversitiesBox" : ""}>
                {updatedAlphaCode === null ? false : uniResult}
            </ul>
        </div>
    );
};

export { ResultComponent };