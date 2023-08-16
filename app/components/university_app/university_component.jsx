const React = require("react");
import { Route, Routes, Link } from "react-router-dom";

import { UniversityMainApp } from "./universityMain.jsx";
import { Navigator } from "./navigation.jsx";
import { AboutApp } from "./aboutApp.jsx";


function UniversityComponent() {

    return (
        <div className="app">
            <img className="hightSchool" src={"./app/src/images/hight_school.jpg"} alt="hight_school_picture" />
            <h3 className="titleContainer">&#127963; World Universities Directory &#128521;</h3>
            <Navigator />
            <Routes>
                <Route path="*" element={<UniversityMainApp />} />
                <Route path="/about" element={<AboutApp />} />
            </Routes>
        </div>
    );
};

export { UniversityComponent };