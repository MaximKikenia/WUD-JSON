import React from "react";

//Import Components
import { Controller } from "./controller.jsx";
import { ResultComponent } from "./result.jsx";
import { CountryShortSummery } from "./countrySummery.jsx";



function UniversityMainApp() {
    return (
        <div>
            <Controller />
            <CountryShortSummery />
            <ResultComponent />
            <div className="clearFloat"></div>
        </div>
    );
};

export {UniversityMainApp};





